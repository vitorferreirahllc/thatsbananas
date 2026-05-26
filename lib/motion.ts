import type { Variants } from "framer-motion";

/** Viewport config for the Reveal wrapper (uses the useInView hook). */
export const inView = { once: true, amount: 0.2 } as const;

const ease = [0.22, 1, 0.36, 1] as const;

/** Variants accept an optional `custom` delay (seconds) for staggering. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease, delay },
  }),
};
