"use client";

import { motion } from "framer-motion";

type Variant = "primary" | "gold" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand/40";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-cream hover:bg-brand-600",
  gold: "bg-gold text-brand hover:bg-gold-600",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-cream",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
