import ImagePlaceholder from "./ui/ImagePlaceholder";
import CircularBadge from "./ui/CircularBadge";
import Reveal from "./ui/Reveal";
import { LeafBranch, Blob, Wave, Dots } from "./ui/Decorations";
import { PinIcon } from "./ui/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* Decorative accents */}
      <LeafBranch className="pointer-events-none absolute bottom-6 left-2 z-10 h-28 w-24 text-brand/15 sm:left-6" />

      <div className="grid items-center lg:grid-cols-2">
        {/* Left — copy (aligned to the site container) */}
        <div className="relative z-10 px-5 pt-28 pb-10 sm:px-8 lg:py-32 lg:pr-12 lg:pl-[max(2rem,calc((100vw-1200px)/2))]">
          <div className="relative max-w-xl">
            <Dots className="pointer-events-none absolute -right-2 -top-10 h-16 w-16 text-gold/60 sm:right-10 lg:-right-4" />

            <Reveal immediate>
              <h1 className="font-display text-5xl font-bold leading-[1.05] text-brand sm:text-6xl">
                Good vibes,
                <br />
                great food,
                <br />
                <span className="font-script text-6xl font-bold text-gold sm:text-7xl">
                  no passport
                  <br />
                  required.
                </span>
              </h1>
            </Reveal>

            <Reveal immediate delay={0.15} className="mt-6">
              <span className="block h-1 w-12 rounded-full bg-gold" />
            </Reveal>

            <Reveal immediate delay={0.25} className="mt-5">
              <p className="max-w-sm text-base leading-relaxed text-muted">
                A cozy corner in Ottawa to slow down, recharge and enjoy life.
              </p>
            </Reveal>

            <Reveal immediate delay={0.35} className="mt-7">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                <PinIcon className="h-4 w-4 text-orange" />
                Ottawa, Canada
              </span>
            </Reveal>
          </div>
        </div>

        {/* Right — hero image bleeding to the right edge */}
        <div className="relative px-5 pb-16 sm:px-8 lg:self-stretch lg:px-0 lg:pb-0">
          <Reveal immediate variant="fadeIn" className="lg:h-full">
            <div className="relative lg:h-full lg:min-h-[38rem]">
              <ImagePlaceholder
                label="Hero photo"
                priority
                className="aspect-[4/3] w-full rounded-[2rem] shadow-xl lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:rounded-none lg:rounded-tl-[3rem] lg:rounded-bl-[7rem] lg:shadow-none"
                rounded="rounded-[2rem]"
              />
            </div>
          </Reveal>

          {/* Overlapping accents */}
          <Wave className="pointer-events-none absolute -left-6 top-1/2 z-20 hidden h-40 w-40 -translate-y-1/2 text-brand-600 lg:block" />
          <CircularBadge className="absolute -left-2 bottom-4 z-20 h-28 w-28 drop-shadow-lg sm:left-2 sm:h-32 sm:w-32 lg:-left-14 lg:bottom-16" />
          <Blob className="pointer-events-none absolute -bottom-6 left-1/3 z-0 h-36 w-36 text-gold/40 lg:left-10" />
        </div>
      </div>
    </section>
  );
}
