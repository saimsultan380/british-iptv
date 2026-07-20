import sharp from "sharp";
import path from "path";

const SRC =
  "C:/Users/saims/.cursor/projects/d-british-iptv/assets/d__british-iptv_public_logo.png";
const OUT = path.join("public", "logo.PNG");

// Remove the solid black background and make it transparent so the logo
// looks clean on the white header/footer as well as in favicons.
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const LOW = 28; // below this brightness => fully transparent (background)
const HIGH = 70; // above this brightness => fully opaque (logo)

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const m = Math.max(r, g, b);

  let alpha;
  if (m <= LOW) alpha = 0;
  else if (m >= HIGH) alpha = 255;
  else alpha = Math.round(((m - LOW) / (HIGH - LOW)) * 255);

  data[i + 3] = alpha;
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim()
  .toFile(OUT);

console.log(`Wrote transparent logo to ${OUT}`);
