import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { PhotoBreak } from "@/components/PhotoBreak";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Experience />

      <PhotoBreak
        src="/photos/09-fall-foliage-aerial.webp"
        alt="Aerial of a golf hole framed by woods in full orange and red autumn foliage."
      />

      <Section id="work" eyebrow="02" title="Selected Work">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Case studies in valuation and strategy: a General Mills–framed
          acquisition of Country Archer, a Sprouts Farmers Market stock pitch, a
          lifetime-sports TAM study, and cross-border M&amp;A analysis.
        </p>
      </Section>

      <PhotoBreak
        src="/photos/02-land-and-sea.webp"
        alt="Aerial view of a rocky, scrub-covered headland dropping into clear turquoise shallows."
      />

      <Section id="about" eyebrow="03" title="About">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Washington &amp; Lee, Class of 2027 — Business Administration and
          Finance/Accounting, with a Philosophy minor.
        </p>
      </Section>

      <Section id="contact" eyebrow="04" title="Contact">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Email, LinkedIn, and X.
        </p>
      </Section>
    </>
  );
}
