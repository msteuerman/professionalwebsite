import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { site } from "@/data/site";

export function Photography() {
  return (
    <section id="photography" className="scroll-mt-16 border-t border-rule">
      <Container className="py-20 md:py-28">
        <p className="text-eyebrow font-sans uppercase text-muted">03</p>
        <h2 className="mt-4 font-serif text-h2">Photography</h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-foreground/80">
          Mostly shot from a drone — coastlines, and the golf courses I grew up
          on. A working edit; the fuller archive is on the site below.
        </p>

        <Gallery />

        <p className="mt-12 font-sans text-sm text-muted">
          More at{" "}
          <a
            href={site.links.photoArchive}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
          >
            the archive
          </a>{" "}
          and on{" "}
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
          >
            Instagram
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
