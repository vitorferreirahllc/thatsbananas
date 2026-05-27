// One-off script: derives light + dark favicons from public/images/logo.png.
// Crops just the "banana lady" illustration (drops the wordmark/tagline so it
// stays legible at 16-32px), then composites it onto a brand-coloured
// rounded square so the favicon "tile" is fully visible in the browser tab.
//
// Output:
//   - public/favicon-light.png  → cream tile + green mark (for light tabs)
//   - public/favicon-dark.png   → brand-green tile + white mark (for dark tabs)
//
// Run with:  node scripts/generate-favicons.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "public/images/logo.png");
const OUT_LIGHT = path.join(ROOT, "public/favicon-light.png");
const OUT_DARK = path.join(ROOT, "public/favicon-dark.png");

const SIZE = 512; // output canvas size (square)
const INNER = 460; // illustration target height inside the tile (~10% padding)
const RADIUS = 96; // rounded-corner radius of the brand tile

// Brand palette
const CREAM = { r: 253, g: 243, b: 228 }; // #fdf3e4
const BRAND = { r: 28, g: 59, b: 41 }; // #1c3b29

/** Rounded-square mask used to turn the bg into a soft-cornered tile. */
function roundedMaskSvg(size, radius) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/>
     </svg>`,
  );
}

/** Convert any non-white pixel into opaque white (preserving anti-aliasing). */
async function toWhiteSilhouette(rgbaBuffer) {
  const { data, info } = await sharp(rgbaBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0) continue; // already transparent
    const lightness = (data[i] + data[i + 1] + data[i + 2]) / (3 * 255);
    const newAlpha = Math.round((1 - lightness) * (a / 255) * 255);
    out[i] = 255;
    out[i + 1] = 255;
    out[i + 2] = 255;
    out[i + 3] = newAlpha;
  }

  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

/** Composite illustration onto a coloured rounded tile. */
async function buildTile({ tileColor, illustration, outPath }) {
  const tile = await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { ...tileColor, alpha: 1 },
    },
  })
    .composite([
      // Rounded-corner mask (keeps the tile a rounded square)
      { input: roundedMaskSvg(SIZE, RADIUS), blend: "dest-in" },
      // Centered illustration, sized to fill ~90% of canvas height
      {
        input: await sharp(illustration).resize({ height: INNER }).toBuffer(),
        gravity: "center",
      },
    ])
    .png()
    .toFile(outPath);
  return tile;
}

(async () => {
  // 1. Extract just the "banana lady" illustration (left ~30% of source) and
  //    trim the surrounding white so the mark fills the favicon tile.
  const trimmed = await sharp(SRC)
    .extract({ left: 0, top: 0, width: 600, height: 1414 })
    .trim({ background: "#ffffff", threshold: 12 })
    .png()
    .toBuffer();

  // 2. LIGHT tile: cream background + original-colour illustration.
  await buildTile({
    tileColor: CREAM,
    illustration: trimmed,
    outPath: OUT_LIGHT,
  });

  // 3. DARK tile: brand-green background + white silhouette illustration.
  const whiteMark = await toWhiteSilhouette(trimmed);
  await buildTile({
    tileColor: BRAND,
    illustration: whiteMark,
    outPath: OUT_DARK,
  });

  console.log(`Generated:\n  ${OUT_LIGHT}\n  ${OUT_DARK}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
