export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">
        In development
      </p>
      <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight sm:text-7xl">
        Matthew Steuerman
      </h1>
      <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
        Incoming Investment Banking Analyst at Deutsche Bank
        <span className="mx-2 text-rule">·</span>
        Photographer
        <span className="mx-2 text-rule">·</span>
        Washington &amp; Lee &rsquo;27
      </p>
      <div className="mt-10 h-px w-16 bg-accent" />
    </main>
  );
}
