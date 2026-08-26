const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const siteRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(siteRoot, "FOTOS PARA PAGINA FINAL-20260826T032356Z-1-001", "FOTOS PARA PAGINA FINAL");
const outputRoot = path.join(siteRoot, "imagenes-optimizadas");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".jfif"]);

function listImages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return listImages(absolute);
    return imageExtensions.has(path.extname(entry.name).toLowerCase()) ? [absolute] : [];
  });
}

async function optimize(source) {
  const relative = path.relative(sourceRoot, source);
  const flatName = relative.split(path.sep).join("--").replace(/\.[^.]+$/, ".webp");
  const destination = path.join(outputRoot, flatName);
  fs.mkdirSync(outputRoot, { recursive: true });
  await sharp(source)
    .rotate()
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 4, smartSubsample: true })
    .toFile(destination);
  return { source: fs.statSync(source).size, output: fs.statSync(destination).size };
}

async function main() {
  const files = listImages(sourceRoot);
  let cursor = 0;
  let originalBytes = 0;
  let optimizedBytes = 0;

  async function worker() {
    while (cursor < files.length) {
      const file = files[cursor++];
      const result = await optimize(file);
      originalBytes += result.source;
      optimizedBytes += result.output;
    }
  }

  await Promise.all(Array.from({ length: 4 }, worker));
  const percent = originalBytes ? Math.round((1 - optimizedBytes / originalBytes) * 100) : 0;
  console.log(JSON.stringify({
    files: files.length,
    originalMB: Number((originalBytes / 1024 / 1024).toFixed(2)),
    optimizedMB: Number((optimizedBytes / 1024 / 1024).toFixed(2)),
    reductionPercent: percent
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
