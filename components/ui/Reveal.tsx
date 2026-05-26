"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, inView } from "@/lib/motion";

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
} as const;

type RevealProps = {
  children: React.ReactNode;
  /** Which entrance animation to use. */
  variant?: keyof typeof variantMap;
  /** Stagger delay in seconds (passed to the variant via `custom`). */
  delay?: number;
  className?: string;
  amount?: number;
  /**
   * Trigger on mount instead of on scroll-into-view. Use for above-the-fold
   * content (e.g. the hero): the IntersectionObserver's initial callback is
   * unreliable for already-visible elements in some environments, so we flip
   * the animation via an effect on mount instead.
   */
  immediate?: boolean;
};

/**
 * Scroll-reveal wrapper. Drives the `animate` prop (not the `whileInView`
 * gesture, which races on mount under React 19 / Next 16 and can leave
 * content stuck hidden). Takes a string `variant` so it can be used from
 * Server Components.
 */
export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  amount = inView.amount,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const show = immediate ? mounted : isInView;

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={variantMap[variant]}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
