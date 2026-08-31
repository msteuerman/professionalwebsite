import { Container } from "@/components/Container";
import { site } from "@/data/site";

// 24px blur placeholder from scripts/optimize-hero.mjs — shown while the photo loads.
const BLUR =
  "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAwCdASoYAA0APxF2sVCsJySisAgBgCIJZACsACHes4tJb+farhAA/sMBuonaQw4KebgV2pj6dU7sjIB0DWTDon+i7AAA";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] w-full items-start overflow-hidden">
      {/* Full-bleed photograph — Matthew's own aerial work. */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url("${BLUR}")` }}
      >
        {/* Plain <img>: static export runs no image server, and we ship our own
            pre-built WebP srcset from scripts/optimize-hero.mjs. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/hero-1600.webp"
          srcSet="/img/hero-640.webp 640w, /img/hero-1080.webp 1080w, /img/hero-1600.webp 1600w, /img/hero-2560.webp 2560w"
          sizes="100vw"
          width={2560}
          height={1440}
          fetchPriority="high"
          decoding="async"
          alt="Aerial view looking straight down at a coastline — pale sand meeting a line of white surf and deep emerald water."
          className="h-full w-full object-cover"
        />
      </div>

      {/* Scrim: heaviest at the top where the type sits, clearing toward the
          water so the photograph still reads. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/55 to-background/5" />

      <Container className="pt-[14vh] pb-24 md:pt-[18vh]">
        <h1 className="max-w-4xl font-serif text-display">{site.name}</h1>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-foreground/80">
          {site.positioningLine1}
          <br />
          {site.positioningLine2}
        </p>
        <div className="mt-12 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-foreground/60">
          <span>Scroll</span>
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
        </div>
      </Container>
    </section>
  );
}
