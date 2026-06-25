import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import path from "path";

const assetsDir = new URL("../src/assets", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const publicDir = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const kb = (bytes) => Math.round(bytes / 1024) + "KB";

// Slab PNGs → JPG @ 82% quality, max 1600px wide (no transparency needed)
const slabPngs = [
  "red_multicolor_slab.png",
  "tan_brown_slab.png",
  "steel_grey_slab.png",
  "viscount_white_slab.png",
  "absolute_black_slab.png",
  "black_galaxy_slab.png",
  "kashmir_white_slab.png",
  "colonial_white_slab.png",
  "hero-slabs.png",
  "hero-bg.png",
];

console.log("\n📦 Compressing slab PNGs → JPG...\n");
for (const name of slabPngs) {
  const inPath = path.join(assetsDir, name);
  const outName = name.replace(/\.png$/, ".jpg");
  const outPath = path.join(assetsDir, outName);
  try {
    const before = (await stat(inPath)).size;
    await sharp(inPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);
    const after = (await stat(outPath)).size;
    console.log(
      `  ✅ ${name} (${kb(before)}) → ${outName} (${kb(after)}) | saved ${kb(before - after)}`,
    );
    await unlink(inPath);
  } catch (e) {
    console.log(`  ❌ SKIP ${name}: ${e.message}`);
  }
}

// Compress existing JPGs
console.log("\n📦 Re-compressing JPGs...\n");
const jpgFiles = [
  "factory.jpg",
  "shipping.jpg",
  "hero-quarry.jpg",
  "project-hotel.jpg",
  "project-villa.jpg",
  "project-tower.jpg",
  "project-monument.jpg",
  "texture-brown.jpg",
  "texture-grey.jpg",
  "texture-red.jpg",
  "texture-white.jpg",
  "texture-black.jpg",
];

for (const name of jpgFiles) {
  const inPath = path.join(assetsDir, name);
  const tmpPath = inPath + ".tmp.jpg";
  try {
    const before = (await stat(inPath)).size;
    await sharp(inPath)
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(tmpPath);
    const after = (await stat(tmpPath)).size;
    if (after < before) {
      await unlink(inPath);
      const { rename } = await import("fs/promises");
      await rename(tmpPath, inPath);
      console.log(`  ✅ ${name} (${kb(before)}) → (${kb(after)}) | saved ${kb(before - after)}`);
    } else {
      await unlink(tmpPath);
      console.log(`  ⏭️  ${name} already optimal (${kb(before)})`);
    }
  } catch (e) {
    console.log(`  ❌ SKIP ${name}: ${e.message}`);
  }
}

// Note: SVG files (logo.svg, favicon.svg) do not require raster image compression.

console.log("\n✅ All done!\n");
