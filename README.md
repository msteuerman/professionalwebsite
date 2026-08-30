# matthewsteuerman.com

Personal professional website — Matthew Steuerman (Washington &amp; Lee &rsquo;27).
Finance-first content, photography-forward design. Built with Next.js + Tailwind,
static-exported, deployed on Vercel.

See [CLAUDE.md](CLAUDE.md) for the full build spec.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

`output: "export"` in `next.config.ts` writes a fully static site to `out/`.
Vercel runs `npm run build` automatically and serves that folder — no server.

## Stack

- Next.js (App Router, static export)
- Tailwind CSS v4
- Fonts: Fraunces (serif headings) + Inter (body), via `next/font`
- No CMS / database — content lives in typed files under `data/`

## Structure (as it gets built)

- `app/` — routes and layout
- `data/` — `experience.ts`, `work.ts`, `photos.json`
- `public/photos/` — pre-compressed WebP images
- `scripts/optimize-photos.mjs` — image pipeline
