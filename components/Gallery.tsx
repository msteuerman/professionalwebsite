"use client";

import { useRef, useState } from "react";
import { photos } from "@/data/photos";
import { Lightbox } from "@/components/Lightbox";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <>
      <div className="mt-12 columns-1 gap-3 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            ref={(el) => {
              triggersRef.current[i] = el;
            }}
            onClick={() => setOpen(i)}
            aria-label={`View “${photo.title}” — ${photo.location}, ${photo.year}`}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.thumb}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              className="w-full bg-rule/40 transition duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundImage: `url("${photo.blurDataURL}")`,
                backgroundSize: "cover",
              }}
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-[#0d0d0c]/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-sans text-xs text-white/90">
                {photo.title}
                <span className="mx-1.5 text-white/40">·</span>
                {photo.location}
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox
          photos={photos}
          index={open}
          onClose={() => {
            const returnTo = triggersRef.current[open];
            setOpen(null);
            returnTo?.focus();
          }}
          onNavigate={setOpen}
        />
      )}
    </>
  );
}
