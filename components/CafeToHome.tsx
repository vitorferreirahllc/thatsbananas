import ImagePlaceholder from "./ui/ImagePlaceholder";
import Reveal from "./ui/Reveal";
import { StarIcon, QuoteIcon } from "./ui/Icons";

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M14 28h52l-4 56H18L14 28Z" />
      <path d="M28 28v-6a12 12 0 0 1 24 0v6" />
      <circle cx="40" cy="52" r="9" />
      <path d="M40 47v10M35 52h10" opacity="0.6" />
      <path d="M6 22c3-3 7-4 10-2M74 22c-3-3-7-4-10-2" opacity="0.7" />
    </svg>
  );
}

export default function CafeToHome() {
  return (
    <section
      id="catering"
      className="relative overflow-hidden bg-cream-soft py-16 lg:py-20"
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Left block — green CTA + testimonial (aligned to container) */}
        <div className="px-5 sm:px-8 lg:col-span-9 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Green organic CTA */}
            <Reveal variant="scaleIn">
              <div className="flex items-center justify-between gap-4 rounded-[2.5rem] rounded-tl-[5rem] rounded-br-[5rem] bg-brand p-8 sm:p-9">
                <div>
                  <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
                    From our café
                  </h2>
                  <p className="font-script text-4xl font-bold text-gold sm:text-5xl">
                    to your home!
                  </p>
                  <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-cream/80">
                    Order your favorites for pickup or delivery.
                  </p>
                </div>
                <ShoppingBag className="h-24 w-24 shrink-0 text-cream/90 sm:h-28 sm:w-28" />
              </div>
            </Reveal>

            {/* Testimonial */}
            <div className="lg:px-2">
              <Reveal>
                <QuoteIcon className="h-9 w-9 text-gold" />
              </Reveal>
              <Reveal delay={0.1}>
                <blockquote className="mt-3 text-lg leading-relaxed text-brand">
                  The food, the people, the energy—everything about{" "}
                  <span className="font-semibold">That&apos;s Bananas</span> feels
                  like home.
                </blockquote>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <figcaption className="mt-3 text-sm font-semibold text-muted">
                  – Maria S.
                </figcaption>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Interior photo — bleeds to the right edge */}
        <div className="px-5 sm:px-8 lg:col-span-3 lg:px-0">
          <Reveal variant="fadeIn">
            <ImagePlaceholder
              label="Café interior"
              src="/images/interior.jpg"
              alt="That's Bananas café interior"
              className="aspect-[4/3] w-full rounded-[2rem] shadow-lg lg:aspect-[3/4] lg:rounded-l-[3rem] lg:rounded-r-none lg:shadow-none"
              rounded="rounded-[2rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
