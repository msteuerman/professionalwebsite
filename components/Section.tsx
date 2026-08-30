import type { ReactNode } from "react";
import { Container } from "@/components/Container";

/**
 * A titled home-page section with a scroll anchor and a top hairline rule.
 * `scroll-mt` offsets the sticky header when navigating to the anchor.
 */
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-rule">
      <Container className="py-20 md:py-28">
        <p className="text-eyebrow font-sans uppercase text-muted">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-h2">{title}</h2>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
