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
                {entry.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={entry.logo}
                    alt={`${entry.company} logo`}
                    className="mt-5 h-6 w-auto max-w-[140px] object-contain object-left opacity-80"
                  />
                ) : null}
              </div>

              <div>
                <p className="font-sans text-sm font-medium">{entry.role}</p>
                <p className="mt-3 font-serif text-[19px] leading-relaxed text-foreground/85">
                  {entry.body}
                </p>
                {entry.outcome ? (
                  <p className="mt-4 font-serif text-base text-foreground/85">
                    <span className="text-accent">→</span>{" "}
                    {entry.outcome}
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
