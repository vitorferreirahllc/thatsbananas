"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PinIcon } from "./Icons";

type MapEmbedProps = {
  query: string;
  title: string;
  label: string;
  className?: string;
};

/**
 * Lightweight click-to-load Google Maps embed.
 * Shows a styled map facade (matching the design's pin card) and only
 * mounts the heavy Google Maps iframe once the user opts in.
 */
export default function MapEmbed({
  query,
  title,
  label,
  className = "",
}: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query,
  )}&output=embed`;

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`border-0 ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Load interactive map"
      className={`group relative block w-full overflow-hidden bg-[#e7efe6] ${className}`}
    >
      {/* Faux map streets */}
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-brand/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        aria-hidden
      >
        <path d="M-20 80h440M-20 180h440M60 -20v340M220 -20v340M320 -20v340" />
        <path d="M-20 130l200 120M260 -20l180 140" strokeWidth="10" className="text-[#cfe0cd]" />
      </svg>

      {/* Pin card */}
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl bg-white px-3 py-2 text-left shadow-md">
        <PinIcon className="h-6 w-6 shrink-0 text-brand" />
        <span className="leading-tight">
          <span className="block text-sm font-bold text-brand">
            That&apos;s Bananas
          </span>
          <span className="block text-[0.7rem] text-muted">{label}</span>
        </span>
      </span>

      <motion.span
        initial={false}
        whileHover={{ opacity: 1 }}
        className="absolute inset-x-0 bottom-0 bg-brand/85 py-2 text-center text-xs font-semibold uppercase tracking-wide text-cream opacity-0 transition-opacity group-hover:opacity-100"
      >
        Click to load map
      </motion.span>
    </button>
  );
}
