"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { navLinks, externalLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="container-site flex items-center justify-between py-5">
        <Logo />

        {/* Desktop nav — white pill (Google-style) for contrast over the hero photo */}
        <nav className="hidden items-center gap-1 rounded-full bg-white px-2 py-2 shadow-md ring-1 ring-black/5 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                i === 0
                  ? "bg-cream text-orange"
                  : "text-brand hover:bg-cream hover:text-orange"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button
              href={externalLinks.orderNow}
              variant="primary"
              className="px-6 py-3 text-sm shadow-md"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-cream lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream shadow-lg lg:hidden"
          >
            <div className="container-site flex flex-col gap-1 pb-5 pt-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] ${
                    i === 0 ? "bg-cream-deep text-orange" : "text-brand"
                  } hover:bg-cream-deep`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={externalLinks.orderNow}
                variant="primary"
                className="mt-2 px-6 py-3 text-sm"
              >
                Order Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
