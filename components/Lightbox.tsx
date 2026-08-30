"use client";

import { useCallback, useEffect, useRef } from "react";
import type { Photo } from "@/data/photos";

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function Lightbox({ photos, index, onClose, onNavigate }: Props) {
  const photo = photos[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      onNavigate((index + delta + photos.length) % photos.length);
    },
    [index, photos.length, onNavigate],
  );

  // Keyboard: arrows navigate, Esc closes.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Lock body scroll while open; move focus into the dialog.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Preload the neighbouring full images.
  useEffect(() => {
    for (const d of [-1, 1]) {
      const n = photos[(index + d + photos.length) % photos.length];
      const img = new Image();
      img.src = n.src;
    }
  }, [index, photos]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} — enlarged`}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0d0d0c]"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-3 text-background/70">
        <span className="font-sans text-xs tabular-nums">
          {index + 1} / {photos.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-background/80 hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-background"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <figure
        className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchStartX.current = null;
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-full max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center font-sans text-sm text-background/70">
          <span className="text-background/90">{photo.title}</span>
          <span className="mx-2 text-background/30">·</span>
          {photo.location}
          <span className="mx-2 text-background/30">·</span>
          {photo.year}
        </figcaption>
      </figure>

      {/* Prev / next — large hit areas, quiet chevrons. */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Previous photo"
        className="absolute left-0 top-1/2 flex h-24 w-16 -translate-y-1/2 items-center justify-center text-background/60 hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-background"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Next photo"
        className="absolute right-0 top-1/2 flex h-24 w-16 -translate-y-1/2 items-center justify-center text-background/60 hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-background"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
