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

// Generate a web-optimized `logo.png` from the high-resolution source if available
console.log("\n📦 Generating web-friendly logo from hires source...\n");
try {
  const srcHires = path.join(assetsDir, "logo-source-hires.png");
  const outLogo = path.join(assetsDir, "logo.png");
  const tmpLogo = outLogo + ".tmp.png";

  // If the hires master exists, make a 400px PNG for web use while preserving the master
  try {
    // Prefer a pre-created transparent PNG so the web logo keeps transparency.
    const transparentSrc = path.join(assetsDir, "logo-transparent.png");
    let usedSrc = srcHires;
    try {
      await stat(transparentSrc);
      usedSrc = transparentSrc;
    } catch {}

    const before = (await stat(usedSrc)).size;
    await sharp(usedSrc)
      .resize({ width: 400, withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(tmpLogo);
    const after = (await stat(tmpLogo)).size;
    // Replace any existing web logo.png with the generated one
    try {
      await unlink(outLogo);
    } catch {}
    const { rename } = await import("fs/promises");
    await rename(tmpLogo, outLogo);
    console.log(
      `  ✅ logo.png (from hires ${kb(before)}) → (${kb(after)}) | saved ${kb(before - after)}`,
    );
  } catch (e) {
    // Fallback: if no hires source, try compressing an existing logo.png in-place
    const existing = path.join(assetsDir, "logo.png");
    const tmp = existing + ".tmp.png";
    const before = (await stat(existing)).size;
    await sharp(existing)
      .resize({ width: 400, withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(tmp);
    const after = (await stat(tmp)).size;
    await unlink(existing);
    const { rename } = await import("fs/promises");
    await rename(tmp, existing);
    console.log(`  ✅ logo.png (${kb(before)}) → (${kb(after)}) | saved ${kb(before - after)}`);
  }
} catch (e) {
  console.log(`  ❌ logo.png: ${e.message}`);
}

// Compress public/favicon.png — shrink to 256px
console.log("\n📦 Compressing favicon...\n");
try {
  const faviconPath = path.join(publicDir, "favicon.png");
  const tmpFavicon = faviconPath + ".tmp.png";
  const before = (await stat(faviconPath)).size;
  await sharp(faviconPath)
    .resize({ width: 256, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(tmpFavicon);
  const after = (await stat(tmpFavicon)).size;
  await unlink(faviconPath);
  const { rename } = await import("fs/promises");
  await rename(tmpFavicon, faviconPath);
  console.log(`  ✅ favicon.png (${kb(before)}) → (${kb(after)}) | saved ${kb(before - after)}`);
} catch (e) {
  console.log(`  ❌ favicon.png: ${e.message}`);
}

console.log("\n✅ All done!\n");
