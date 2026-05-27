"use client";

import { motion } from "framer-motion";
import Logo from "./ui/Logo";
import { InstagramIcon, FacebookIcon } from "./ui/Icons";
import { footerColumns, socials } from "@/lib/data";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-auto bg-brand text-cream">
      {/* Wavy torn top edge (flipped so the cream "tongues" hang down) */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute -top-px left-0 h-6 w-full text-cream-soft"
        style={{ transform: "scaleY(-1)" }}
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 48V20c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v28H0Z" />
      </svg>

      <div className="container-site relative grid items-start gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Logo */}
        <div className="lg:col-span-1">
          <Logo tone="light" />
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <nav key={col.title} className="flex flex-col gap-3">
            {col.links.map((link) => {
              const external = /^https?:\/\//i.test(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium uppercase tracking-[0.12em] text-cream/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              );
            })}
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
              if (!Icon) return null;
              const isExternal = /^https?:\/\//i.test(s.href);
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
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
      </div>
    </footer>
  );
}
