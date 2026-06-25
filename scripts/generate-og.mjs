import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import { stat } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const logoPath = path.join(projectRoot, "public", "logo.svg");
const heroPath = path.join(projectRoot, "public", "hero-showroom.jpg");
const outPath = path.join(projectRoot, "public", "og-image.jpg");

async function generate() {
  console.log("🔧 Generating OG image...");
  try {
    // If a hero image exists in public, use it as background; otherwise use a neutral dark background
    let base = null;
    try {
      await stat(heroPath);
      base = sharp(heroPath).resize(1200, 630, { fit: "cover" });
    } catch {
      base = sharp({ create: { width: 1200, height: 630, channels: 3, background: "#0b0b0b" } });
    }

    // Prepare logo overlay
    let logoBuffer;
    try {
      logoBuffer = await sharp(logoPath)
        .resize({ width: 560, withoutEnlargement: true })
        .png()
        .toBuffer();
    } catch (e) {
      console.log("  ⚠️ logo.svg not found, skipping overlay");
      logoBuffer = null;
    }

    let composed = base.png();
    if (logoBuffer) {
      composed = composed.composite([
        {
          input: logoBuffer,
          gravity: "centre",
        },
      ]);
    }

    await composed.jpeg({ quality: 88 }).toFile(outPath);
    const s = await stat(outPath);
    console.log(`✅ Wrote OG image: ${outPath} (${Math.round(s.size / 1024)}KB)`);
  } catch (e) {
    console.error("Error generating OG image:", e.message);
    process.exitCode = 1;
  }
}

generate();
