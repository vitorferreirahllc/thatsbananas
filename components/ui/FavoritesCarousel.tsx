"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import type { MenuItem } from "@/lib/data";

const AUTOPLAY_MS = 3200;

type Dims = { card: number; gap: number };

function dimsFor(width: number): Dims {
  if (width < 480) return { card: 184, gap: 116 };
  if (width < 768) return { card: 220, gap: 168 };
  return { card: 264, gap: 236 };
}

export default function FavoritesCarousel({ items }: { items: MenuItem[] }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dims, setDims] = useState<Dims>({ card: 264, gap: 236 });

  // Responsive card / spacing sizing
  useEffect(() => {
    const update = () => setDims(dimsFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-rotate (pauses on hover/focus)
  useEffect(() => {
    if (paused || n <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  // Shortest circular distance from the active card
  const offsetOf = (i: number) => {
    let off = i - active;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    return off;
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="relative mx-auto"
        style={{ perspective: 1200, height: dims.card + 92 }}
      >
        {items.map((item, i) => {
          const off = offsetOf(i);
          const abs = Math.abs(off);
          const visible = abs <= 2;
          const isCenter = off === 0;

          return (
            <motion.button
              key={item.name}
              type="button"
              aria-label={`Show ${item.name}`}
              aria-current={isCenter}
              onClick={() => setActive(i)}
              initial={false}
              animate={{
                x: off * dims.gap - dims.card / 2,
                scale: isCenter ? 1 : abs === 1 ? 0.82 : 0.64,
                rotateY: isCenter ? 0 : off < 0 ? 30 : -30,
                opacity: visible ? (isCenter ? 1 : abs === 1 ? 0.7 : 0.32) : 0,
                filter: abs <= 1 ? "blur(0px)" : "blur(2.5px)",
                zIndex: 30 - abs,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              className="absolute left-1/2 top-0 origin-center text-center"
              style={{
                width: dims.card,
                pointerEvents: visible ? "auto" : "none",
                cursor: isCenter ? "default" : "pointer",
              }}
            >
              <div
                className={`overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow ${
                  isCenter ? "shadow-2xl" : "shadow-md"
                }`}
              >
                <ImagePlaceholder
                  label={item.name}
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full"
                  rounded="rounded-2xl"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand">
                {item.name}
              </h3>
              <p className="mt-1 font-semibold text-gold">{item.price}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2.5">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Go to ${item.name}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-7 bg-gold"
                : "w-2.5 bg-brand/20 hover:bg-brand/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
