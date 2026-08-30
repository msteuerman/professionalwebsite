import type { ReactNode } from "react";

/**
 * Standard content column: centered, max ~1024px, consistent gutters.
 * Full-bleed elements (hero photo, image breaks) render outside this.
 */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: "div" | "section" | "header" | "footer" | "main";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-5xl px-6 md:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
