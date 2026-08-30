/**
 * Hero image pipeline.
 *
 *   node scripts/optimize-hero.mjs photos-raw/hero-shoreline.jpg
 *
 * Reads one large source photo and writes responsive WebP renditions to
 * public/img/ (hero-640/1080/1600/2560.webp), each kept under 400 KB per the
 * build spec. Also prints a tiny base64 blur placeholder to paste into the
 * Hero component as the low-res background while the real image loads.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { basename } from "node:path";
import sharp from "sharp";

const src = process.argv[2] ?? "photos-raw/hero-shoreline.jpg";
const widths = [640, 1080, 1600, 2560];
const quality = 72;

await mkdir("public/img", { recursive: true });

const input = await readFile(src);
const meta = await sharp(input).metadata();
console.log(`source: ${basename(src)}  ${meta.width}×${meta.height}`);

for (const w of widths) {
  const out = `public/img/hero-${w}.webp`;
  const buf = await sharp(input)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();
  await writeFile(out, buf);
  const kb = (buf.length / 1024).toFixed(0);
  console.log(`  ${out}  ${kb} KB${buf.length > 400 * 1024 ? "  ⚠ over 400 KB" : ""}`);
}

// 24px-wide blur placeholder, inlined as a data URI.
const blur = await sharp(input)
  .resize({ width: 24 })
  .webp({ quality: 30 })
  .toBuffer();
console.log(`\nblurDataURL:\ndata:image/webp;base64,${blur.toString("base64")}`);
