import ImagePlaceholder from "./ui/ImagePlaceholder";
import Reveal from "./ui/Reveal";
import { LeafBranch, Blob } from "./ui/Decorations";

export default function OurStory() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <LeafBranch className="pointer-events-none absolute left-3 top-10 z-10 h-28 w-24 text-brand/10" />
      <Blob className="pointer-events-none absolute -left-10 bottom-4 h-44 w-44 text-orange/30" />

      <div className="grid items-center lg:grid-cols-2">
        {/* Copy — aligned to the site container */}
        <div className="relative z-10 px-5 py-16 sm:px-8 lg:py-24 lg:pr-12 lg:pl-[max(2rem,calc((100vw-1200px)/2))]">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-brand">
                Our Story
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="currentColor" aria-hidden>
                  <path d="M12 21s-7.5-4.6-10-9.3C.6 8.7 2.2 5.5 5.4 5.1c1.9-.2 3.6.8 4.6 2.3 1-1.5 2.7-2.5 4.6-2.3 3.2.4 4.8 3.6 3.4 6.6C19.5 16.4 12 21 12 21Z" />
                </svg>
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand sm:text-4xl">
                Founded by{" "}
                <span className="font-script text-4xl font-bold text-gold sm:text-5xl">
                  sisters
                </span>{" "}
                Beatriz and Patricia,
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                along with their mother Flávia,{" "}
                <span className="font-semibold text-brand">That&apos;s Bananas</span>{" "}
                was born from a desire to create a little piece of Brazil in
                Ottawa.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What began as Patty&apos;s long-held dream and Bia&apos;s passion
                for cooking became a reality in{" "}
                <span className="font-semibold text-brand">January</span>.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Family photo — bleeds to the right edge */}
        <div className="px-5 pb-16 sm:px-8 lg:px-0 lg:py-16">
          <Reveal variant="fadeIn">
            <ImagePlaceholder
              label="Family photo"
              className="aspect-[5/4] w-full rounded-[2rem] shadow-xl lg:aspect-[16/11] lg:rounded-l-[5rem] lg:rounded-r-none lg:shadow-none"
              rounded="rounded-[2rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
