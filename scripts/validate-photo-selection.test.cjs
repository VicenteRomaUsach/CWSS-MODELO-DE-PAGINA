"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");
const test = require("node:test");
const { extractDefaultProjects, validatePhotoSelection } = require("./validate-photo-selection.cjs");

function fixture(t) {
  const siteRoot = fs.mkdtempSync(path.join(os.tmpdir(), "cwss-photo-validation-"));
  t.after(() => fs.rmSync(siteRoot, { recursive: true, force: true }));
  fs.mkdirSync(path.join(siteRoot, "imagenes-drive"));
  const manifest = {
    schemaVersion: 1,
    reviewedAt: "2026-11-03",
    sourceRoot: { id: "1Nb_yXEAJm5vIs5vBG4rN3nZa8STMJ3mE", name: "FOTOS PARA PAGINA FINAL" },
    maxImagesPerProject: 10,
    projects: Array.from({ length: 45 }, (_, i) => ({ id: `obra-${i}`, name: `Obra ${i}`, status: "awaiting-approved-source", approvedFolders: [], selectionReason: "Sin carpeta aprobada", images: [] }))
  };
  const siteProjects = manifest.projects.map(project => ({ id: project.id, images: [] }));
  function addPhoto(projectIndex, photoIndex, suffix = "") {
    const project = manifest.projects[projectIndex];
    project.status = "approved";
    project.approvedFolders = [{ id: `folder-${projectIndex}`, path: `Obra ${projectIndex}/Fótos Página${suffix}` }];
    const asset = `imagenes-drive/obra-${projectIndex}-${photoIndex}.webp`;
    fs.writeFileSync(path.join(siteRoot, asset), "fixture");
    const serial = projectIndex * 100 + photoIndex + 1;
    project.images.push({ asset, sourcePath: `${project.approvedFolders[0].path}/foto-${photoIndex}.jpg`, driveFileId: `file-${serial}`, driveFolderId: `folder-${projectIndex}`, sha256: serial.toString(16).padStart(64, "0"), pixelSha256: (serial + 10000).toString(16).padStart(64, "0") });
    siteProjects[projectIndex].images.push(asset);
  }
  function run() {
    return validatePhotoSelection({ siteRoot, manifest, siteSource: `(function(){ if(document.body) throw new Error('DOM must not run'); const defaultProjects = ${JSON.stringify(siteProjects)}; defaultProjects.forEach(p => p.images = p.images.slice(0,10)); })();` });
  }
  return { manifest, siteProjects, addPhoto, run };
}

test("reads raw galleries without executing the DOM and accepts accented AP/ila folders", t => {
  const f = fixture(t);
  f.addPhoto(0, 0, " AP");
  f.addPhoto(1, 0, " ila");
  assert.deepEqual(f.run().errors, []);
  assert.deepEqual(extractDefaultProjects('const defaultProjects = [{"id":"bracket ] in string","images":[]}]; document.crash();')[0].images, []);
});

test("rejects eleven raw photos even when the site normalizer would truncate them", t => {
  const f = fixture(t);
  for (let i = 0; i < 11; i += 1) f.addPhoto(0, i);
  assert.ok(f.run().errors.some(error => error.includes("más de 10 fotos antes del normalizador")));
});

test("rejects work-root fallback and pending projects with images", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  const project = f.manifest.projects[0];
  project.approvedFolders[0].path = "Obra 0";
  project.images[0].sourcePath = "Obra 0/foto-0.jpg";
  project.status = "awaiting-approved-source";
  const errors = f.run().errors;
  assert.ok(errors.some(error => error.includes("debe terminar en Fotos Página")));
  assert.ok(errors.some(error => error.includes("pendiente de fuente aprobada")));
});

test("rejects repeated files and original/pixel hashes across different projects", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  f.addPhoto(1, 0);
  const first = f.manifest.projects[0].images[0];
  Object.assign(f.manifest.projects[1].images[0], { asset: first.asset, sha256: first.sha256, pixelSha256: first.pixelSha256 });
  f.siteProjects[1].images[0] = first.asset;
  const errors = f.run().errors;
  for (const label of ["archivo de imagen", "sha256", "pixelSha256"]) assert.ok(errors.some(error => error.includes(`${label} repetido globalmente`)));
});

test("rejects changed image order and paths escaping the local site", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  f.addPhoto(0, 1);
  f.siteProjects[0].images.reverse();
  f.manifest.projects[0].images[0].asset = "../fuera.webp";
  const errors = f.run().errors;
  assert.ok(errors.some(error => error.includes("orden en site.js")));
  assert.ok(errors.some(error => error.includes("ruta de imagen local insegura")));
});

test("accepts explicitly authorized work folders, including subfolders, but rejects another work", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  const project = f.manifest.projects[0];
  project.status = "work-folder-selection";
  project.userApprovedFallback = true;
  project.approvedFolders = [];
  project.sourceWorkFolders = [{ id: "work-0", path: "Obra 0" }];
  assert.deepEqual(f.run().errors, []);
  delete project.userApprovedFallback;
  assert.ok(f.run().errors.some(error => error.includes("userApprovedFallback explícito")));
  project.userApprovedFallback = true;
  project.images[0].sourcePath = "Obra 1/Fotos Página/foto-0.jpg";
  assert.ok(f.run().errors.some(error => error.includes("sourceWorkFolders")));
});

test("allows documented legacy photos only for the three absent works and verifies the local hash", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  const project = f.manifest.projects[0];
  project.id = f.siteProjects[0].id = "puerta-del-sol";
  project.status = "legacy-selection";
  project.userApprovedFallback = true;
  project.rootSourceUnavailable = true;
  project.approvedFolders = [];
  project.sourceWorkFolders = [{ id: "legacy-site", path: "legacy-site" }];
  const image = project.images[0];
  image.sourcePath = `legacy-site/${image.asset}`;
  image.driveFolderId = "legacy-site";
  image.driveFileId = `legacy-${image.pixelSha256.slice(0, 20)}`;
  image.sha256 = crypto.createHash("sha256").update("fixture").digest("hex");
  assert.deepEqual(f.run().errors, []);
  image.sha256 = "0".repeat(64);
  assert.ok(f.run().errors.some(error => error.includes("no coincide con el archivo local")));
  project.id = f.siteProjects[0].id = "otra-obra";
  assert.ok(f.run().errors.some(error => error.includes("solo está autorizada")));
});

test("compares the full catalog without fixing its future size at 45", t => {
  const f = fixture(t);
  f.addPhoto(0, 0);
  f.manifest.projects.splice(2);
  f.siteProjects.splice(2);
  assert.deepEqual(f.run().errors, []);
  f.manifest.projects.pop();
  assert.ok(f.run().errors.some(error => error.includes("todas las obras")));
  assert.ok(f.run().errors.some(error => error.includes("falta en el manifiesto")));
});
