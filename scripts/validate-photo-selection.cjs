#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const SOURCE_ROOT_ID = "1Nb_yXEAJm5vIs5vBG4rN3nZa8STMJ3mE";
const LIMIT = 10;
const LEGACY_PROJECT_IDS = new Set(["puerta-del-sol", "lote-19", "comisaria"]);

// Read the source array before site.js can normalize, truncate or replace it.
// Parsing JSON, rather than evaluating JavaScript, also avoids any DOM execution.
function extractDefaultProjects(source) {
  const declaration = /\bconst\s+defaultProjects\s*=\s*/g.exec(source);
  if (!declaration) throw new Error("No se encontró const defaultProjects en site.js.");
  const start = declaration.index + declaration[0].length;
  if (source[start] !== "[") throw new Error("defaultProjects debe ser un arreglo JSON literal.");
  let depth = 0;
  let quoted = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') quoted = false;
      continue;
    }
    if (char === '"') quoted = true;
    else if (char === "[") depth += 1;
    else if (char === "]" && --depth === 0) {
      return JSON.parse(source.slice(start, index + 1));
    }
  }
  throw new Error("El arreglo defaultProjects está incompleto.");
}

function normalizedName(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
}

function sourceSegments(value) {
  if (typeof value !== "string" || !value.trim() || /[\0:]/.test(value)) return null;
  const cleaned = value.replace(/\\/g, "/");
  if (cleaned.startsWith("/")) return null;
  const segments = cleaned.split("/");
  if (segments.some(segment => !segment.trim() || segment === "." || segment === "..")) return null;
  return segments.map(segment => segment.normalize("NFC"));
}

function isPhotoFolder(segments) {
  return segments && segments.length >= 2 && /^fotos pagina(?: (?:ap|ila))?$/.test(normalizedName(segments.at(-1)));
}

function isWithin(root, target) {
  const relative = path.relative(root, target);
  return relative !== "" && !relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative);
}

function validatePhotoSelection({ siteRoot, siteSource, manifest }) {
  const errors = [];
  const fail = message => errors.push(message);
  let projects;
  try {
    projects = extractDefaultProjects(siteSource);
  } catch (error) {
    return { errors: [error.message] };
  }
  if (!manifest || typeof manifest !== "object") return { errors: ["El manifiesto no es un objeto."] };
  if (manifest.schemaVersion !== 1) fail("schemaVersion debe ser 1.");
  if (manifest.maxImagesPerProject !== LIMIT) fail("El manifiesto debe conservar el máximo de 10 fotos por obra.");
  if (manifest.sourceRoot?.id !== SOURCE_ROOT_ID || normalizedName(String(manifest.sourceRoot?.name || "")) !== "fotos para pagina final") {
    fail("La raíz de origen debe ser FOTOS PARA PAGINA FINAL y conservar su ID de Drive aprobado.");
  }
  if (!Array.isArray(projects) || !projects.length) fail("site.js debe declarar un catálogo de obras no vacío.");
  if (!Array.isArray(manifest.projects)) return { errors: errors.concat("Falta projects[] en el manifiesto.") };
  if (manifest.projects.length !== projects.length) fail("El manifiesto debe incluir todas las obras declaradas en site.js.");

  const siteProjects = new Map();
  for (const project of projects) {
    if (!project || typeof project.id !== "string" || !project.id) { fail("Hay una obra sin ID en site.js."); continue; }
    if (siteProjects.has(project.id)) fail(`ID repetido en site.js: ${project.id}.`);
    siteProjects.set(project.id, project);
    if (!Array.isArray(project.images)) fail(`${project.id}: images de site.js debe ser un arreglo.`);
    else if (project.images.length > LIMIT) fail(`${project.id}: site.js contiene más de 10 fotos antes del normalizador.`);
  }

  const manifestIds = new Set();
  const seenAssets = new Map();
  const seenHashes = { sha256: new Map(), pixelSha256: new Map(), driveFileId: new Map() };
  let imageCount = 0;
  let approvedCount = 0;
  let workFolderCount = 0;
  let legacyCount = 0;
  let awaitingCount = 0;
  const root = path.resolve(siteRoot);
  const realRoot = fs.realpathSync(root);
  const remember = (map, value, label, owner) => {
    if (map.has(value)) fail(`${owner}: ${label} repetido globalmente con ${map.get(value)}.`);
    else map.set(value, owner);
  };

  for (const project of manifest.projects) {
    if (!project || typeof project.id !== "string" || !project.id) { fail("Hay una obra sin ID en el manifiesto."); continue; }
    const id = project.id;
    if (manifestIds.has(id)) fail(`ID repetido en el manifiesto: ${id}.`);
    manifestIds.add(id);
    if (!siteProjects.has(id)) fail(`${id}: no existe en site.js.`);
    const images = Array.isArray(project.images) ? project.images : [];
    if (!Array.isArray(project.images)) fail(`${id}: falta images[] en el manifiesto.`);
    if (images.length > LIMIT) fail(`${id}: el manifiesto contiene más de 10 fotos.`);
    const approved = project.status === "approved";
    const workFallback = project.status === "work-folder-selection";
    const legacy = project.status === "legacy-selection";
    if (approved) {
      approvedCount += 1;
      if (!images.length) fail(`${id}: una obra aprobada debe tener al menos una foto.`);
    } else if (workFallback) {
      workFolderCount += 1;
      if (project.userApprovedFallback !== true) fail(`${id}: seleccionar desde la carpeta general de la obra requiere userApprovedFallback explícito.`);
      if (!images.length) fail(`${id}: la selección de carpeta de obra debe tener al menos una foto.`);
    } else if (legacy) {
      legacyCount += 1;
      if (!LEGACY_PROJECT_IDS.has(id) || project.userApprovedFallback !== true || project.rootSourceUnavailable !== true) {
        fail(`${id}: la excepción del catálogo anterior solo está autorizada para Puerta del Sol, Lote 19 y Comisaría con fuente actual ausente y aprobación explícita.`);
      }
      if (!images.length) fail(`${id}: la selección del catálogo anterior debe tener al menos una foto.`);
    } else if (project.status === "awaiting-approved-source") {
      awaitingCount += 1;
      if (images.length) fail(`${id}: una obra pendiente de fuente aprobada debe tener images vacío, sin fotos de respaldo.`);
    } else fail(`${id}: status de selección desconocido.`);
    if (typeof project.selectionReason !== "string" || !project.selectionReason.trim()) fail(`${id}: falta el motivo de selección.`);

    const folderList = Array.isArray(project.approvedFolders) ? project.approvedFolders : [];
    if (approved && !Array.isArray(project.approvedFolders)) fail(`${id}: falta approvedFolders[].`);
    if (approved && images.length && !folderList.length) fail(`${id}: hay fotos sin carpeta Fotos Página aprobada.`);
    const folders = new Map();
    for (const folder of folderList) {
      const segments = sourceSegments(folder?.path);
      if (!folder || typeof folder.id !== "string" || !folder.id || folder.id === SOURCE_ROOT_ID) {
        fail(`${id}: ID de carpeta Fotos Página inválido o igual a la raíz general.`);
        continue;
      }
      if (!isPhotoFolder(segments)) fail(`${id}: la carpeta aprobada debe terminar en Fotos Página, Fotos Página AP o Fotos Página ila y pertenecer a una obra: ${folder.path}.`);
      if (folders.has(folder.id)) fail(`${id}: carpeta aprobada repetida: ${folder.id}.`);
      folders.set(folder.id, segments);
    }
    const workFolders = Array.isArray(project.sourceWorkFolders) ? project.sourceWorkFolders : [];
    if ((workFallback || legacy) && !workFolders.length) fail(`${id}: falta sourceWorkFolders[] para la selección autorizada.`);
    const workSources = [];
    for (const folder of workFolders) {
      const segments = sourceSegments(folder?.path);
      if (!folder || typeof folder.id !== "string" || !folder.id || folder.id === SOURCE_ROOT_ID || !segments || normalizedName(folder.path) === "fotos para pagina final") {
        fail(`${id}: carpeta de obra de origen inválida o igual a la raíz general.`);
      } else workSources.push({ id: folder.id, segments });
    }
    if (legacy && (workSources.length !== 1 || workSources[0].id !== "legacy-site" || workSources[0].segments.join("/") !== "legacy-site")) {
      fail(`${id}: la fuente de catálogo anterior debe declararse como legacy-site.`);
    }

    const assets = images.map(image => image?.asset);
    const siteImages = siteProjects.get(id)?.images;
    if (Array.isArray(siteImages) && JSON.stringify(siteImages) !== JSON.stringify(assets)) {
      fail(`${id}: las fotos y su orden en site.js no coinciden con el manifiesto.`);
    }
    for (let index = 0; index < images.length; index += 1) {
      const image = images[index];
      const owner = `${id} foto ${index + 1}`;
      imageCount += 1;
      if (!image || typeof image !== "object") { fail(`${owner}: registro de foto inválido.`); continue; }
      const asset = image.asset;
      const safeAsset = typeof asset === "string" && asset.length > 0 &&
        !/[\\\0:?#]/.test(asset) && !path.isAbsolute(asset) && !path.win32.isAbsolute(asset) &&
        !asset.split("/").some(segment => !segment || segment === "." || segment === "..") &&
        /\.(?:webp|avif|png|jpe?g)$/i.test(asset);
      if (!safeAsset) fail(`${owner}: ruta de imagen local insegura o inválida: ${String(asset)}.`);
      else {
        const absolute = path.resolve(root, asset);
        if (!isWithin(root, absolute)) fail(`${owner}: la imagen sale del sitio local.`);
        else if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) fail(`${owner}: no existe el archivo ${asset}.`);
        else {
          const realAsset = fs.realpathSync(absolute);
          if (!isWithin(realRoot, realAsset)) fail(`${owner}: el enlace de imagen sale del sitio local.`);
          remember(seenAssets, realAsset.toLowerCase(), "archivo de imagen", owner);
          if (legacy && crypto.createHash("sha256").update(fs.readFileSync(realAsset)).digest("hex") !== image.sha256) {
            fail(`${owner}: el sha256 del catálogo anterior no coincide con el archivo local.`);
          }
        }
      }
      for (const hashName of ["sha256", "pixelSha256"]) {
        if (typeof image[hashName] !== "string" || !/^[a-f\d]{64}$/i.test(image[hashName])) fail(`${owner}: ${hashName} inválido.`);
        else remember(seenHashes[hashName], image[hashName].toLowerCase(), hashName, owner);
      }
      if (typeof image.driveFileId !== "string" || !image.driveFileId) fail(`${owner}: falta driveFileId.`);
      else remember(seenHashes.driveFileId, image.driveFileId, "archivo de Drive", owner);
      const folder = folders.get(image.driveFolderId);
      const source = sourceSegments(image.sourcePath);
      if (legacy) {
        if (image.sourcePath !== `legacy-site/${asset}` || image.driveFolderId !== "legacy-site" || image.driveFileId !== `legacy-${String(image.pixelSha256).slice(0, 20)}`) {
          fail(`${owner}: la procedencia legacy-site no coincide con el archivo conservado.`);
        }
      } else if (workFallback) {
        const matchingWorkFolder = source && workSources.some(work => source.length > work.segments.length && work.segments.every((segment, position) => segment === source[position]));
        if (!matchingWorkFolder || typeof image.driveFolderId !== "string" || !image.driveFolderId || image.driveFolderId === SOURCE_ROOT_ID || image.driveFolderId === "legacy-site") {
          fail(`${owner}: la foto debe provenir de una carpeta de obra declarada en sourceWorkFolders.`);
        }
      } else if (!folder || !isPhotoFolder(folder) || image.driveFolderId === SOURCE_ROOT_ID) {
        fail(`${owner}: la fuente no pertenece a una carpeta Fotos Página aprobada de esta obra.`);
      } else if (!source || source.length !== folder.length + 1 || folder.some((segment, position) => segment !== source[position])) {
        fail(`${owner}: sourcePath debe ser un archivo directamente dentro de su carpeta Fotos Página aprobada.`);
      }
    }
  }
  for (const id of siteProjects.keys()) if (!manifestIds.has(id)) fail(`${id}: falta en el manifiesto.`);
  return { errors, projectCount: projects.length, imageCount, approvedCount, workFolderCount, legacyCount, awaitingCount };
}

function main() {
  const siteRoot = path.resolve(__dirname, "..");
  try {
    const result = validatePhotoSelection({
      siteRoot,
      siteSource: fs.readFileSync(path.join(siteRoot, "site.js"), "utf8"),
      manifest: JSON.parse(fs.readFileSync(path.join(siteRoot, "content", "photo-selection.json"), "utf8").replace(/^\uFEFF/, ""))
    });
    if (result.errors.length) {
      console.error(`Selección de fotos inválida (${result.errors.length}):\n${result.errors.map(error => `- ${error}`).join("\n")}`);
      process.exitCode = 1;
    } else {
      console.log(`Selección verificada: ${result.projectCount} obras, ${result.imageCount} fotos; ${result.approvedCount} desde Fotos Página, ${result.workFolderCount} desde carpetas de obra autorizadas, ${result.legacyCount} del catálogo anterior y ${result.awaitingCount} pendientes. Máximo 10, sin archivos ni hashes repetidos.`);
    }
  } catch (error) {
    console.error(`No se pudo validar la selección: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { extractDefaultProjects, validatePhotoSelection };
if (require.main === module) main();
