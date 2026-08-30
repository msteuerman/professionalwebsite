import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Photography } from "@/components/Photography";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Experience />

      <Section id="work" eyebrow="02" title="Selected Work">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Case studies in valuation and strategy: a General Mills–framed
          acquisition of Country Archer, a Sprouts Farmers Market stock pitch, a
          lifetime-sports TAM study, and cross-border M&amp;A analysis.
        </p>
      </Section>

      <Photography />

      <Section id="about" eyebrow="04" title="About">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Washington &amp; Lee, Class of 2027 — Business Administration and
          Finance/Accounting, with a Philosophy minor.
        </p>
      </Section>

      <Section id="contact" eyebrow="05" title="Contact">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Email, LinkedIn, Instagram, and a résumé download.
        </p>
      </Section>
    </>
  );
}
