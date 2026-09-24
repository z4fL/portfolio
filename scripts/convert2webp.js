import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { extname, basename, join } from "path";

const [, , inputArg, outputArg, qualityArg] = process.argv;

if (!inputArg) {
  console.error("Usage: node scripts/convert2webp.js <inputDir> [outputDir] [quality]");
  console.error("Example: node scripts/convert2webp.js ./public/assets ./public/assets-webp 90");
  process.exit(1);
}

const inputDir = inputArg;
const outputDir = outputArg || join(inputDir, "webp");
const quality = qualityArg ? Number(qualityArg) : 90;

if (!existsSync(inputDir)) {
  console.error(`Input folder not found: ${inputDir}`);
  process.exit(1);
}

if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter((file) =>
  [".png", ".jpg", ".jpeg"].includes(extname(file).toLowerCase())
);

if (files.length === 0) {
  console.log("No PNG/JPG files were found in this folder.");
  process.exit(0);
}

console.log(`Found ${files.length} files, starting conversion to WebP (quality: ${quality})...\n`);

let success = 0;
let failed = 0;

const tasks = files.map((file) => {
  const ext = extname(file);
  const name = basename(file, ext);
  const outputPath = join(outputDir, `${name}.webp`);

  return sharp(join(inputDir, file))
    .webp({ quality })
    .toFile(outputPath)
    .then(() => {
      console.log(`✓ Converted: ${file}`);
      success++;
    })
    .catch((err) => {
      console.error(`✗ Failed to convert: ${file} — ${err.message}`);
      failed++;
    });
});

await Promise.all(tasks);

console.log(`\nCompleted. Success: ${success}, Failed: ${failed}`);
console.log(`Output saved in: ${outputDir}`);
