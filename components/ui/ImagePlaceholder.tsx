"use client";

import { useState } from "react";
import Image from "next/image";

type ImagePlaceholderProps = {
  /** Short note shown while the slot is empty (e.g. "Hero photo"). */
  label?: string;
  /** When you drop the real asset, pass its /public path here to render it. */
  src?: string;
  alt?: string;
  /** Extra classes — control size, aspect-ratio and rounding from the parent. */
  className?: string;
  rounded?: string;
  priority?: boolean;
  objectPosition?: string;
};

/**
 * Image slot. If `src` is provided AND the file loads, renders the photo;
 * otherwise falls back to a soft labelled placeholder. This means you can
 * reference image paths in code before the files exist on disk — the slot
 * stays clean until you drop the assets in /public, and switches to the
 * real photo automatically on next load.
 */
export default function ImagePlaceholder({
  label = "Image",
  src,
  alt = "",
  className = "",
  rounded = "rounded-2xl",
  priority = false,
  objectPosition = "center",
}: ImagePlaceholderProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div
      className={`relative overflow-hidden bg-cream-deep ${rounded} ${className}`}
    >
      {showImage && src ? (
        <Image
          src={src}
          alt={alt || label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition }}
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand/35">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.6" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          {label}
        </span>
      )}
    </div>
  );
}
