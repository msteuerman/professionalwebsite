# Personal Professional Website — Build Spec

## Owner
Matthew Steuerman — Washington & Lee '27, Business Administration + Finance/Accounting, Philosophy minor.
Incoming investment banking analyst, Deutsche Bank NYC (Consumer, Retail & Business Services).
Also a working photographer (drone + stills).

## Goal
A professional-grade personal site good enough to send to an investor, MD, or recruiter.
Finance-first in content hierarchy; photography-forward in visual design.
Built for a Global Strategy / AI course assignment — must be genuinely impressive, not a template.

## Stack
- Next.js (App Router) with static export
- Tailwind CSS
- Deployed on Vercel, custom domain `matthewsteuerman.com`
- No CMS, no database. Content lives in typed TS/JSON data files.
- Images served from `/public/photos` and `/public/img`, pre-compressed to WebP

## Non-negotiables
- Lighthouse performance >= 90 on mobile
- Fully responsive; test at 375px, 768px, 1440px
- No images over 400KB
- Accessible: real alt text on every photo, semantic headings, visible focus states
- ✅ Open Graph image + favicon configured (Sep 2026 — see Launch checklist)
- No lorem ipsum anywhere at deploy time

## Design direction
Resume-first, not portfolio-first. (Revised Aug 2026 — see below.) The site is a single
professional identity, in the vein of nav.al, lew.vc, and migna.no: name + one-line
positioning, career told in flowing prose rather than bulleted LinkedIn copy, a plain
list of outbound links, no gloating, no empty sections, restraint as the whole point.
Photography is the one thing those sites don't have — it's used as *texture* (hero,
full-bleed breaks between sections) to make the resume-style site look better, not as a
second competing identity next to the resume.

- Typography: one serif for headings (e.g. Instrument Serif, Fraunces, or Newsreader),
  one clean sans for body (Inter, Geist). Large type scale. Tight tracking on headings.
- Palette: near-black background OR warm off-white — pick one and commit. One accent color
  only, pulled from a hero photograph.
- Photography as structure on the homepage: full-bleed hero, 1–2 full-width image breaks
  between sections, no caption/link. The full gallery is its own page — see Structure §4
  — and (Sep 2026) is back in primary nav; it's a credibility/craft page now, not a
  homepage section competing with Experience.
- Generous whitespace. Long scroll. Restraint over animation.
- Subtle scroll-reveal at most. No parallax, no particle effects, no gradient mesh blobs.

### Reference sites (Matthew's picks, Aug 2026)
- **nav.al** — Naval Ravikant. No photos at all; pure text, links to podcast/X/Instagram.
- **lew.vc** — Jeremy Liew. Sleek but minimal; a starting point, not a portfolio.
- **migna.no** — Michael Mignano. Name + tagline → flowing bio paragraph → interests →
  "Writing" list → "Elsewhere" (social links) list. No imagery, neutral palette. This is
  the closest structural model for Matthew's Experience/About sections.

Common thread: senior finance/VC people let accomplishments speak for themselves and
treat the personal site as a link hub, not a showcase.

## Structure

Nav (`data/site.ts` → `navLinks`) is exactly, left to right: **About · Experience ·
Photography · Contact.** (Photography rejoined primary nav Sep 2026 — see §4 for why it
left and came back.) Homepage section order matches the anchor items: About, Experience,
Contact. "Selected Work" was cut entirely (Aug 2026, Matthew: "redundant and dumb") — it
doubled up with Experience without adding anything a resume-first site needs.

### 1. Hero
- Full-bleed photograph (Matthew's own work)
- Name, then one positioning line:
  "Senior at Washington & Lee University, Class of 2027 · Incoming Investment Banking
  Analyst at Deutsche Bank · Photographer"
- Quiet scroll cue. No CTA button stack.

### 2. About
First section after the hero (moved up from last, Aug 2026, to lead with who Matthew is
before the resume detail). Includes his LinkedIn headshot (`public/img/headshot.webp`,
cropped 4:5 from the original) alongside flowing first-person prose — kept plain, not
flowery (Matthew's note: an earlier draft was "corny"). Facts: W&L, majors, GPA 3.85,
philosophy minor, expected May 2027; on campus, Executive Board + Finance & Fundraising
Committee for Campus Kitchen (current, as of Aug 2026); interested in private markets
and entrepreneurship; hobbies stated plainly — golf, photography, the gym, mountain
biking, music.

Matthew is a senior and has dropped some commitments. Two now appear on the page, but
explicitly in the past tense — never re-promote either to present tense as "current":
**Connolly Entrepreneurship Society (CES)** — was a member.
**W&L Hillel** — was Executive Vice President.

Academic honors (Phi Sigma Tau induction, President's List) are in paragraph 1 with the
GPA. Sep 2026 — Matthew offered a larger pool of material via his LinkedIn education
section and pre-college jobs; deliberately **not** added, to keep About from creeping
back toward "corny"/CV-dump:
- Pre-college jobs (Scarsdale Inquirer sports journalism, Fenway Golf Club caddie,
  Scarsdale Little League umpire) — high-school-era, and don't fit next to the
  college-internship Experience section either.
- Further W&L activities beyond Campus Kitchen/Connolly/Hillel (THaC Lab research
  assistant, MockCon NY delegate, Outing Club) and all high-school activities/honors
  (SIGNIFER Honor Society, Business Club President, Yearbook Head Photographer, Peer
  Leadership, Varsity Golfer) — reasonable material, but the site's whole point (see
  Design direction) is restraint over a full activities list. Revisit only if Matthew
  explicitly asks for more, not by default.

### 3. Experience
Rendered from `data/experience.ts`. Each entry: company, role, location, dates,
2–3 sentences of prose (NOT bulleted LinkedIn copy), and outcome where one exists.

- Deutsche Bank — 2026 Summer Analyst, Consumer/Retail/Business Services, NYC. Return offer received.
- Harri — HCM SaaS; corporate finance and capital-raising work (Summer 2025)
- Davis Polk & Wardwell — corporate finance department (Summer 2024)
- Data Intensity — sales enablement (Summers 2021–22)

Rule: nothing confidential from Deutsche Bank or Harri. Describe scope and skills, not deal specifics.

Body copy was tightened ~20% (Sep 2026, Matthew's launch-checklist note) — cut filler
("Day to day meant...") and merged clauses rather than dropping technical nouns; every
skill/deliverable that was named before is still named. If editing further, keep that
ratio: substance and specificity survive, connective tissue doesn't.

Each entry's left column also carries the company's wordmark below location/dates
(`entry.logo` in `data/experience.ts` → `public/img/logos/`). Sourced from each
company's own site, then recolored to the site's muted tone (`#6b6862`, matching
`--muted`) via alpha-channel masking (raster) or fill swap (Davis Polk's SVG) — one flat
tone across all four so they read as a quiet row, not four competing brand colors.
Rendered at a fixed height (`h-6`), `opacity-80`, natural width. To add a fifth: pull the
mark from the company's official site, recolor to `#6b6862`, drop it in
`public/img/logos/`, reference it from the entry.

Deutsche Bank's is a composite (Matthew wanted the full box-mark + wordmark lockup, not
just the wordmark): the box-and-slash mark from Wikimedia Commons
(`Deutsche_Bank_logo_without_wordmark.svg`, public domain vector) placed left of the
"Deutsche Bank" wordmark cropped from db.com's own asset, matched to the mark's
cap-height, both recolored together.

### Selected Work — cut (Aug 2026)
Was going to be its own page-per-case-study section (Country Archer, Sprouts, lifetime-
sports TAM, BUS 394 Qatar Airways/General Mills). Matthew killed it as redundant next to
Experience. Case-study writeups may resurface later as plain linked PDFs rather than a
dedicated site section, if at all — no `/work/[slug]` routes exist.

### 4. Photography — its own page, in primary nav
Lives at `/photography`. Cut from primary nav Aug 2026 (demoted to a quiet footer link,
to keep the homepage resume-first); put back in primary nav Sep 2026 on Matthew's
launch-checklist note — treat it as a craft/credibility page, not a competing homepage
section. Homepage still only gets 1–2 full-bleed `PhotoBreak` images between sections (no
caption, no link — texture; the footer's blanket photo credit covers them) — the full
gallery lives only on `/photography`.

The `/photography` page itself:
- Grid gallery (masonry via CSS columns, 1/2/3-col responsive)
- Source: `data/photos.json` (generated) + `data/photos.ts` (typed re-export) — array of
  `{ src, thumb, alt, title, location, year, orientation, width, height, blurDataURL }`
- Lightbox on click: keyboard nav (arrows, Esc), swipe on touch, preloaded neighbors,
  focus moves in on open / returns to the trigger thumb on close. Already gives portrait
  shots a substantially larger view than the grid thumb (constrained by viewport height,
  not a fixed width) — this satisfied Matthew's Sep 2026 ask for "a proper viewer" without
  changes.
- **15 images, deliberately ordered water → landscape → golf → W&L** (Sep 2026 re-curate,
  Matthew's note). Order is the numeric filename prefix in `photos-raw/` — renumber the
  raw files to reorder, `captions.json` keys must match. Cut from 17 to 15 by dropping
  the weakest/most redundant golf shots (club-aerial, low-angle-bunker) — golf was 8/17,
  now 5/15. Curate hard on any future add: the edit is the portfolio.
- Intro line reads "a curated selection" — was "a working edit" until Matthew flagged it
  (Sep 2026) as sounding unfinished/tentative; don't reintroduce that phrasing.
- Link out to the Wix archive and Instagram at the bottom, not at the top.

### 5. Contact
On-page: email + LinkedIn + X as plain underlined links (real `mailto:`/`https:` hrefs,
not styled buttons). Footer additionally carries Instagram and Linktree (one-stop link
hub). No résumé PDF (Matthew's LIVE résumé has a home address and personal cell in the
header — decided Aug 2026 not to host it; revisit if he sends a redacted copy). No
contact form (spam, and it needs a backend).

## Social links (`data/site.ts` → `site.links`)
- LinkedIn: https://www.linkedin.com/in/matthew-steuerman-05bb99217/
- X: https://x.com/mattsteuerman
- Instagram: https://www.instagram.com/matthewsteuerman/
- Linktree: https://linktr.ee/matthewsteuerman
- Photo archive (full Wix site): https://matthewsteuerman.wixsite.com/matthewsteuerman

## Data files to create
- `data/experience.ts`
- `data/photos.json` (generated by `scripts/optimize-photos.mjs`)

(`data/work.ts` is no longer needed — Selected Work was cut. `public/img/headshot.webp`
is Matthew's LinkedIn headshot, cropped 4:5 for the About section.)

## Build order
1. ✅ Scaffold + Tailwind + fonts + deploy an empty site to Vercel. Verify the pipeline first.
2. ✅ Layout shell, nav, footer, type scale
3. ✅ Hero + Experience
4. ✅ Photo pipeline (compress to WebP, generate manifest, gallery + lightbox) — then
   revised (Aug 2026) to move off the main nav/scroll onto `/photography`; homepage
   keeps full-bleed `PhotoBreak` images instead. See Design direction above.
5. ~~Case study template + pages~~ — cut (Aug 2026). See "Selected Work — cut" above.
6. ✅ About + Contact — About moved to lead position with headshot (Aug 2026); Contact
   is real email/LinkedIn/X links, verified working.
7. ✅ Performance pass, meta tags, mobile QA — see Launch checklist below. Custom domain
   is the one open item, blocked on Matthew (needs his Vercel/registrar login).
8. Final content proofread — no placeholder text, no broken links

## Launch checklist (Sep 2026)
- ✅ Favicon: `app/icon.png` + `app/favicon.ico` + `app/apple-icon.png` — teal square,
  cream serif "M", generated from an SVG (not a designer asset — regenerate the same way
  if the palette ever changes: script is not checked in, redo via sharp if needed).
- ✅ OG/Twitter image: `public/og.jpg` (1200×630, ~70 KB) — hero photo + scrim + name +
  positioning, mirrors the on-site hero. One image reused for `/` and `/photography`.
- ✅ `app/sitemap.ts`, `app/robots.ts` — both need `export const dynamic = "force-static"`
  to build under `output: "export"`; omit it and the build fails outright.
- ✅ Canonical URLs — `alternates.canonical` on root layout and `/photography`.
- ✅ Keyboard nav — lightbox (arrows/Esc/focus trap, already existed), mobile nav panel
  (added Esc-to-close + focus-return to the toggle, Sep 2026).
- ✅ Image loading / CLS — hero, headshot, gallery thumbs, and lightbox all carry explicit
  width/height; `PhotoBreak` sits in a viewport-height-locked container so it can't shift
  layout regardless of load timing.
- ✅ Mobile gallery — verified at 375px: no horizontal overflow, single-column masonry,
  lightbox opens correctly, portrait images get a large uncluttered view.
- ⏳ Lighthouse mobile performance — not run against the live Vercel deploy from inside
  this environment (no browser automation with real network conditions here). Should be
  effectively fine given static export + optimized images + `next/font`, but confirm via
  PageSpeed Insights or Chrome DevTools once the custom domain is live.
- ⏳ Custom domain (`matthewsteuerman.com`) — blocked on Matthew. Needs his Vercel project
  settings (Domains → add domain) and his registrar's DNS (A/CNAME per Vercel's
  instructions). Not something an agent without his logins can do.

## Image pipeline
Compress before committing. Target: max 2000px on the long edge, WebP, quality ~82.
Use `sharp` in a small `scripts/optimize-photos.mjs` that reads `photos-raw/` and writes
`public/photos/`, generating the manifest as it goes.
