import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { stat } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const inputPath = path.join(projectRoot, 'src', 'assets', 'logo-source-hires.png');
const outputPath = path.join(projectRoot, 'src', 'assets', 'logo-transparent.png');
const faviconOut = path.join(projectRoot, 'public', 'favicon.png');

function dist3(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function kmeans(pixels, k = 4, iters = 20) {
  // pixels: array of [r,g,b]
  const n = pixels.length;
  // init centroids by sampling
  const cents = [];
  for (let i = 0; i < k; i++) {
    cents.push(pixels[Math.floor(Math.random() * n)].slice());
  }

  const assign = new Array(n).fill(0);
  for (let iter = 0; iter < iters; iter++) {
    const sums = Array.from({ length: k }, () => [0, 0, 0, 0]);
    let changed = false;
    for (let i = 0; i < n; i++) {
      let best = 0;
      let bestd = Infinity;
      for (let c = 0; c < k; c++) {
        const d = dist3(pixels[i], cents[c]);
        if (d < bestd) { bestd = d; best = c; }
      }
      if (assign[i] !== best) { changed = true; assign[i] = best; }
      sums[best][0] += pixels[i][0];
      sums[best][1] += pixels[i][1];
      sums[best][2] += pixels[i][2];
      sums[best][3] += 1;
    }
    for (let c = 0; c < k; c++) {
      if (sums[c][3] > 0) {
        cents[c][0] = sums[c][0] / sums[c][3];
        cents[c][1] = sums[c][1] / sums[c][3];
        cents[c][2] = sums[c][2] / sums[c][3];
      }
    }
    if (!changed) break;
  }
  return { cents, assign };
}

async function convertCheckerboard() {
  console.log('🔍 Detecting checkerboard background...');

  // Small preview for clustering
  const preview = await sharp(inputPath)
    .resize({ width: 300, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pw = preview.info.width;
  const ph = preview.info.height;
  const pchan = preview.info.channels; // expect 4
  const pbytes = preview.data;

  const pixels = [];
  for (let y = 0; y < ph; y++) {
    for (let x = 0; x < pw; x++) {
      const idx = (y * pw + x) * pchan;
      const r = pbytes[idx];
      const g = pbytes[idx + 1];
      const b = pbytes[idx + 2];
      pixels.push([r, g, b]);
    }
  }

  const { cents, assign } = kmeans(pixels, 4, 25);

  // Determine clusters that appear on borders
  const borderW = Math.max(4, Math.floor(Math.min(pw, ph) * 0.08));
  const counts = Array(4).fill(0);
  const borderCounts = Array(4).fill(0);
  for (let y = 0; y < ph; y++) {
    for (let x = 0; x < pw; x++) {
      const i = y * pw + x;
      const c = assign[i];
      counts[c]++;
      if (x < borderW || x >= pw - borderW || y < borderW || y >= ph - borderW) borderCounts[c]++;
    }
  }

  const borderFrac = counts.map((_, i) => borderCounts[i] / Math.max(1, counts[i]));
  const candidates = [];
  for (let i = 0; i < cents.length; i++) {
    candidates.push({ idx: i, centroid: cents[i], borderFrac, frac: borderFrac[i] });
  }
  candidates.sort((a, b) => b.frac - a.frac);

  // Pick top clusters that have significant border presence
  const backgroundClusters = candidates.filter(c => c.frac > 0.35).slice(0, 2).map(c => c.idx);

  if (backgroundClusters.length === 0) {
    console.log('  ⛔ No clear checkerboard/background clusters found — falling back to remove-bg technique.');
    // fallback: call original remove-bg.mjs via child process
    const { spawn } = await import('child_process');
    const cp = spawn(process.execPath, [new URL('./remove-bg.mjs', import.meta.url).pathname], { stdio: 'inherit' });
    return new Promise((res, rej) => cp.on('close', code => code === 0 ? res() : rej(new Error('remove-bg fallback failed'))));
  }

  console.log(`  Identified background clusters: ${backgroundClusters.join(', ')}`);

  // Now process full-res image and apply mask
  const full = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const fw = full.info.width;
  const fh = full.info.height;
  const fchan = full.info.channels;
  const fbytes = full.data;

  // For performance, map centroids to full-res by using same centroids
  const out = Buffer.from(fbytes); // copy

  // Threshold for matching a background centroid (distance)
  const threshold = 45; // conservative

  for (let y = 0; y < fh; y++) {
    for (let x = 0; x < fw; x++) {
      const idx = (y * fw + x) * fchan;
      const rgb = [out[idx], out[idx + 1], out[idx + 2]];
      // find nearest centroid
      let best = 0; let bd = Infinity;
      for (const ci of backgroundClusters) {
        const d = dist3(rgb, cents[ci]);
        if (d < bd) { bd = d; best = ci; }
      }
      if (bd <= threshold) {
        // mark transparent
        out[idx + 3] = 0;
      }
    }
  }

  // Write out PNG and trim
  await sharp(out, { raw: { width: fw, height: fh, channels: fchan } })
    .png({ compressionLevel: 9 })
    .trim({ threshold: 10 })
    .toFile(outputPath);

  console.log(`✅ Converted checkerboard → transparency: ${outputPath}`);

  // favicon
  await sharp(outputPath).resize(256, 256, { fit: 'cover', position: 'centre' }).png({ compressionLevel: 9 }).toFile(faviconOut);
  const s = await stat(outputPath);
  console.log(`   Size: ${Math.round(s.size / 1024)}KB`);
}

(async () => {
  try {
    await convertCheckerboard();
    console.log('\n✅ Done.');
  } catch (e) {
    console.error('Error:', e.message);
    process.exitCode = 1;
  }
})();
