import Image from "next/image";

type LogoProps = {
  /** "dark" for light backgrounds (header), "light" for the green footer. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Brand logo (the "banana lady" mark + wordmark + tagline) rendered from
 * /public/images/logo.png. The PNG is full color; on dark backgrounds we
 * filter it to pure cream/white so it reads on the green footer.
 */
export default function Logo({ tone = "dark", className = "" }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="That's Bananas — A Brazilian State of Mind"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="That's Bananas"
        width={400}
        height={283}
        priority
        className={`h-20 w-auto sm:h-28 lg:h-32 ${
          tone === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </a>
  );
}
