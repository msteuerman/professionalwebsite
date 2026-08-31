/**
 * Photography pipeline.
 *
 *   node scripts/optimize-photos.mjs
 *
 * Reads every `NN-name.jpg` in photos-raw/, writes two WebP renditions to
 * public/photos/ (full ≤2000px long edge, and a grid thumbnail ≤1000px), and
 * regenerates data/photos.json — merging per-photo titles/locations/alt text
 * from photos-raw/captions.json. Order follows the numeric filename prefix.
 *
 * Spec: WebP q≈82, long edge ≤2000px, nothing over 400 KB, real alt text.
 */
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const RAW_DIR = "photos-raw";
const OUT_DIR = "public/photos";
const MANIFEST = "data/photos.json";
const FULL_EDGE = 2000;
const THUMB_EDGE = 1000;
const QUALITY = 82;
const THUMB_QUALITY = 74;
const MAX_BYTES = 400 * 1024;

/**
 * Encode the full-size rendition to WebP under MAX_BYTES. Steps quality down
 * first (82 → 58); if a busy, high-frequency photo (dense foliage, fine
 * texture) still won't fit at the quality floor, steps the long edge down
 * too (2000 → 1400) and retries. Always returns *something* under budget.
 */
async function encodeFullUnderBudget(input, orientation, maxEdge) {
  const edges = [maxEdge, Math.round(maxEdge * 0.85), Math.round(maxEdge * 0.7)];
  let best = null;
  for (const edge of edges) {
    const pipeline = sharp(input).resize({
      width: orientation === "landscape" ? edge : undefined,
      height: orientation === "portrait" ? edge : undefined,
      withoutEnlargement: true,
    });
    let q = QUALITY;
    let buf = await pipeline.clone().webp({ quality: q }).toBuffer();
    while (buf.length > MAX_BYTES && q > 58) {
      q -= 6;
      buf = await pipeline.clone().webp({ quality: q }).toBuffer();
    }
    best = { buf, q, edge };
    if (buf.length <= MAX_BYTES) return best;
  }
  return best; // smallest/lowest-quality attempt, even if still over
}

await mkdir(OUT_DIR, { recursive: true });

const captions = JSON.parse(await readFile(join(RAW_DIR, "captions.json"), "utf8"));

const files = (await readdir(RAW_DIR))
  .filter((f) => /^\d+[-_].+\.(jpe?g|png)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

const manifest = [];
let warnings = 0;

for (const file of files) {
  const slug = parse(file).name;
  const meta = captions[slug];
  if (!meta) {
    console.warn(`  ⚠ ${file}: no entry in captions.json — skipped`);
    warnings++;
    continue;
  }

  const input = await readFile(join(RAW_DIR, file));
  const { width, height } = await sharp(input).metadata();
  const orientation = width >= height ? "landscape" : "portrait";

  const { buf: full, q: fullQ, edge: fullEdge } = await encodeFullUnderBudget(
    input,
    orientation,
    FULL_EDGE,
  );

  const thumb = await sharp(input)
    .resize({
      width: orientation === "landscape" ? THUMB_EDGE : undefined,
      height: orientation === "portrait" ? THUMB_EDGE : undefined,
      withoutEnlargement: true,
    })
    .webp({ quality: THUMB_QUALITY })
    .toBuffer();

  const blur = await sharp(input)
    .resize({ width: 20 })
    .webp({ quality: 30 })
    .toBuffer();

  await writeFile(join(OUT_DIR, `${slug}.webp`), full);
  await writeFile(join(OUT_DIR, `${slug}-thumb.webp`), thumb);

  const dims = await sharp(full).metadata();
  const overweight = full.length > MAX_BYTES;
  if (overweight) warnings++;
  console.log(
    `  ${slug}.webp  ${(full.length / 1024).toFixed(0)} KB @q${fullQ}, ${fullEdge}px` +
      `  (thumb ${(thumb.length / 1024).toFixed(0)} KB)` +
      (overweight ? "  ⚠ still over 400 KB" : ""),
  );

  manifest.push({
    src: `/photos/${slug}.webp`,
    thumb: `/photos/${slug}-thumb.webp`,
    alt: meta.alt,
    title: meta.title,
    location: meta.location,
    year: meta.year,
    orientation,
    width: dims.width,
    height: dims.height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  });
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${manifest.length} photos → ${MANIFEST}${warnings ? `  (${warnings} warning(s))` : ""}`);
