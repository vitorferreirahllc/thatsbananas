// One-off script: derives light + dark favicons from public/images/logo.png.
// Crops just the "banana lady" illustration (drops the wordmark/tagline so it
// stays legible at 16-32px), then produces:
//   - public/favicon-light.png  → green/colored mark on transparent bg
//   - public/favicon-dark.png   → white silhouette on transparent bg (dark mode)
//
// Run with:  node scripts/generate-favicons.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "public/images/logo.png");
const OUT_LIGHT = path.join(ROOT, "public/favicon-light.png");
const OUT_DARK = path.join(ROOT, "public/favicon-dark.png");
const SIZE = 512;

(async () => {
  // 1. Extract just the "banana lady" illustration (left ~30% of source) and
  //    trim the surrounding white so we don't waste favicon real estate.
  const trimmed = await sharp(SRC)
    .extract({ left: 0, top: 0, width: 600, height: 1414 })
    .trim({ background: "#ffffff", threshold: 12 })
    .toBuffer();

  // 2. LIGHT version: original colors on transparent background, padded to
  //    a square so the icon stays centred at every favicon size.
  await sharp(trimmed)
    .resize(SIZE, SIZE, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .ensureAlpha()
    .png()
    .toFile(OUT_LIGHT);

  // 3. DARK version: pixel-level transform — keep the shape, force every
  //    coloured pixel to opaque white, white pixels become transparent.
  const { data, info } = await sharp(trimmed)
    .resize(SIZE, SIZE, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a === 0) {
      // Already transparent
      out[i + 3] = 0;
      continue;
    }
    // Darkness in [0, 1]. White → 0, fully coloured → ~1.
    const lightness = (r + g + b) / (3 * 255);
    const newAlpha = Math.round((1 - lightness) * (a / 255) * 255);
    out[i] = 255;
    out[i + 1] = 255;
    out[i + 2] = 255;
    out[i + 3] = newAlpha;
  }

  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(OUT_DARK);

  console.log(`Generated:\n  ${OUT_LIGHT}\n  ${OUT_DARK}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
