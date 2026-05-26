type LogoProps = {
  /** "dark" for light backgrounds (header), "light" for the green footer. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Text logo standing in for the brand mark.
 * Replace the square icon slot with the "banana lady" logo asset:
 *   /public/images/logo-icon.svg  (or .png)
 */
export default function Logo({ tone = "dark", className = "" }: LogoProps) {
  const main = tone === "dark" ? "text-brand" : "text-cream";
  const sub = tone === "dark" ? "text-brand/70" : "text-cream/70";
  const iconBorder = tone === "dark" ? "border-brand/30" : "border-cream/40";

  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      {/* Logo icon slot — drop the banana-lady mark here */}
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${iconBorder} ${sub} text-[0.55rem] uppercase tracking-tight`}
        aria-hidden
      >
        logo
      </span>
      <span className="leading-none">
        <span
          className={`block font-script text-xl ${main} -mb-1 leading-none`}
        >
          that&apos;s
        </span>
        <span
          className={`block font-display text-2xl font-bold uppercase tracking-tight ${main} leading-none`}
        >
          Bananas
        </span>
        <span
          className={`mt-1 block text-[0.5rem] font-semibold uppercase tracking-[0.2em] ${sub}`}
        >
          A Brazilian State of Mind
        </span>
      </span>
    </a>
  );
}
