import { Container } from "@/components/Container";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-rule">
      <Container className="py-20 md:py-28">
        <p className="text-eyebrow font-sans uppercase text-muted">02</p>
        <h2 className="mt-4 font-serif text-h2">Experience</h2>

        <div className="mt-12 md:mt-16">
          {experience.map((entry) => (
            <article
              key={entry.company}
              className="grid gap-x-10 gap-y-4 border-t border-rule py-10 first:border-t-0 md:grid-cols-[1fr_2fr] md:py-14"
            >
              <div>
                <h3 className="font-serif text-2xl tracking-tight">
                  {entry.company}
                </h3>
                {entry.detail ? (
                  <p className="mt-1 font-sans text-sm leading-snug text-muted">
                    {entry.detail}
                  </p>
                ) : null}
                <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                  {entry.location} · {entry.dates}
                </p>
              </div>

              <div>
                <p className="font-sans text-sm font-medium">{entry.role}</p>
                <p className="mt-3 font-sans text-base leading-relaxed text-foreground/80">
                  {entry.body}
                </p>
                {entry.outcome ? (
                  <p className="mt-4 font-sans text-sm">
                    <span className="text-accent">→</span>{" "}
                    <span className="text-foreground/80">{entry.outcome}</span>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
