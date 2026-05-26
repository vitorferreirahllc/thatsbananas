"use client";

import { motion } from "framer-motion";

type CircularBadgeProps = {
  text?: string;
  className?: string;
};

/** Orange spinning "GOOD MOOD • SERVED DAILY" stamp with a heart in the middle. */
export default function CircularBadge({
  text = "GOOD MOOD • SERVED DAILY • ",
  className = "",
}: CircularBadgeProps) {
  return (
    <div className={className} style={{ position: className?.includes("absolute") ? undefined : "relative" }}>
      <motion.svg
        viewBox="0 0 120 120"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <path
            id="badge-circle"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#f2871f" />
        <circle cx="60" cy="60" r="49" fill="none" stroke="#fff" strokeWidth="1.5" />
        <text
          fill="#fff"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2.4"
          fontFamily="var(--font-poppins), sans-serif"
        >
          <textPath href="#badge-circle" startOffset="0">
            {text}
          </textPath>
        </text>
      </motion.svg>
      <svg
        viewBox="0 0 24 24"
        fill="#fff"
        className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <path d="M12 21s-7.5-4.6-10-9.3C.6 8.7 2.2 5.5 5.4 5.1c1.9-.2 3.6.8 4.6 2.3 1-1.5 2.7-2.5 4.6-2.3 3.2.4 4.8 3.6 3.4 6.6C19.5 16.4 12 21 12 21Z" />
      </svg>
    </div>
  );
}
