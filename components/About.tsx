import { Container } from "@/components/Container";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-rule">
      <Container className="py-20 md:py-28">
        <p className="text-eyebrow font-sans uppercase text-muted">01</p>
        <h2 className="mt-4 font-serif text-h2">About</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:gap-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/headshot.webp"
            alt="Portrait of Matthew Steuerman"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full max-w-[260px] object-cover"
          />

          <div className="max-w-2xl space-y-5 font-sans text-base leading-relaxed text-foreground/85">
            <p>
              I&rsquo;m a senior at Washington &amp; Lee University, studying
              Business Administration and Finance/Accounting with a minor in
              Philosophy. I graduate in May 2027 with a 3.85 GPA.
            </p>
            <p>
              On campus, I&rsquo;m on the Executive Board and Finance &amp;
              Fundraising Committee for Campus Kitchen. I&rsquo;m interested in
              private markets and entrepreneurship.
            </p>
            <p>
              Outside of school: golf, photography, the gym, mountain biking,
              and music.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
