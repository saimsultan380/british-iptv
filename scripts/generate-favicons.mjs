import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const SRC = path.join(root, "public", "logo.PNG");

const outputs = [
  { file: "app/icon.png", size: 512 },
  { file: "app/apple-icon.png", size: 180 },
  { file: "public/favicon.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

async function makeSquareIcon(size, outPath) {
  const padding = Math.round(size * 0.08);
  const inner = size - padding * 2;

  const resized = await sharp(SRC)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toFile(outPath);
}

for (const { file, size } of outputs) {
  const outPath = path.join(root, file);
  await makeSquareIcon(size, outPath);
  console.log(`Wrote ${file} (${size}x${size})`);
}

// favicon.ico for legacy browsers
await sharp(path.join(root, "public/favicon.png"))
  .resize(32, 32)
  .toFile(path.join(root, "public/favicon.ico"));

console.log("Wrote public/favicon.ico");
