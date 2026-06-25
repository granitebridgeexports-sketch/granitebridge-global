/**
 * Removes the white background from logo.png using sharp's threshold-based
 * alpha channel technique, then trims transparent edges.
 * Saves result to src/assets/logo-transparent.png
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

// Use the high-resolution source as the canonical input. This preserves the
// original hires file while the script produces a trimmed transparent PNG
// and a small favicon for the public folder.
const inputPath = path.join(projectRoot, "src", "assets", "logo-source-hires.png");
const outputPath = path.join(projectRoot, "src", "assets", "logo-transparent.png");
const faviconOut = path.join(projectRoot, "public", "favicon.png");

async function removeWhiteBackground(input, output) {
  // Read original image
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8ClampedArray(data.buffer);

  // Walk every pixel — if it's "near white" (all channels > 240), make transparent
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Near-white threshold: R,G,B all above 230
    if (r > 230 && g > 230 && b > 230) {
      pixels[i + 3] = 0; // fully transparent
    }
    // Anti-aliasing: semi-transparent for near-white (220-230)
    else if (r > 220 && g > 220 && b > 220) {
      const whiteness = Math.min(r, g, b);
      pixels[i + 3] = Math.round((255 - whiteness) * 3); // reduce opacity
    }
  }

  await sharp(Buffer.from(pixels.buffer), {
    raw: { width, height, channels },
  })
    .png({ compressionLevel: 9 })
    .trim({ threshold: 10 }) // crop transparent edges
    .toFile(output);

  console.log(`✅ Saved transparent logo: ${output}`);
}

async function makeSmallFavicon(input, output) {
  // Crop to center and produce a square favicon focused on the emblem
  await sharp(input)
    .resize(256, 256, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log(`✅ Saved favicon: ${output}`);
}

(async () => {
  console.log("🔄 Removing white background from logo...");
  await removeWhiteBackground(inputPath, outputPath);
  await makeSmallFavicon(outputPath, faviconOut);

  const { stat } = await import("fs/promises");
  const s = await stat(outputPath);
  console.log(`   Size: ${Math.round(s.size / 1024)}KB`);
})();
