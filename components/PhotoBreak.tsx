/**
 * A full-bleed photograph between sections — texture, not a destination.
 * No caption, no link: the resume does the talking, this is just a breath.
 */
export function PhotoBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[42vh] w-full overflow-hidden border-t border-rule sm:h-[56vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
