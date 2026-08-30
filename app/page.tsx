import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed photograph goes here in step 3. */}
      <section className="flex min-h-[calc(100svh-4rem)] items-center">
        <Container className="py-24">
          <p className="text-eyebrow font-sans uppercase text-muted">
            In development
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-display">{site.name}</h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {site.positioning}
          </p>
          <div className="mt-12 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-muted">
            <span>Scroll</span>
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
          </div>
        </Container>
      </section>

      <Section
        id="experience"
        eyebrow="01"
        title="Experience"
      >
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Four roles across investment banking, corporate finance, and SaaS
          finance — Deutsche Bank, Harri, Davis Polk &amp; Wardwell, and Data
          Intensity.
        </p>
      </Section>

      <Section id="work" eyebrow="02" title="Selected Work">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          Case studies in valuation and strategy: a General Mills–framed
          acquisition of Country Archer, a Sprouts Farmers Market stock pitch, a
          lifetime-sports TAM study, and cross-border M&amp;A analysis.
        </p>
      </Section>

      <Section id="photography" eyebrow="03" title="Photography">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          A curated edit of drone and still work.
        </p>
      </Section>

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
