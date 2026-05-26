"use client";

import { motion } from "framer-motion";
import Logo from "./ui/Logo";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "./ui/Icons";
import { footerColumns, socials } from "@/lib/data";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
};

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-auto bg-brand text-cream">
      {/* Wavy torn top edge */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute -top-px left-0 h-6 w-full text-cream-soft"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 48V20c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v28H0Z" />
      </svg>

      <div className="container-site relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {/* Logo */}
        <div className="lg:col-span-1">
          <Logo tone="light" />
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <nav key={col.title} className="flex flex-col gap-3">
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.12em] text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ))}

        {/* Social */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
            Follow Us
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-brand"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-display text-base font-bold uppercase tracking-wide text-gold">
            Stay in the loop!
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            Sign up for news, specials and good vibes.
          </p>
          <form
            className="mt-4 flex overflow-hidden rounded-full bg-cream"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-brand placeholder:text-brand/50 focus:outline-none"
            />
            <motion.button
              type="submit"
              aria-label="Subscribe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex w-11 shrink-0 items-center justify-center bg-gold text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </footer>
  );
}
