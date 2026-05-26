import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import FavoritesCarousel from "./ui/FavoritesCarousel";
import { LeafBranch } from "./ui/Decorations";
import { favorites } from "@/lib/data";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c.4 3.8 2.2 5.6 6 6-3.8.4-5.6 2.2-6 6-.4-3.8-2.2-5.6-6-6 3.8-.4 5.6-2.2 6-6Z" />
    </svg>
  );
}

export default function Favorites() {
  return (
    <section id="menu" className="relative overflow-hidden bg-white py-20">
      <LeafBranch className="pointer-events-none absolute right-2 top-24 h-28 w-24 text-brand/10" />

      <div className="container-site relative">
        <Reveal className="flex items-center justify-center gap-3 text-gold">
          <Sparkle className="h-4 w-4" />
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-brand">
            Our Favorites
          </h2>
          <Sparkle className="h-4 w-4" />
        </Reveal>

        <div className="mt-14">
          <FavoritesCarousel items={favorites} />
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button href="#menu" variant="primary" className="px-8 py-3.5 text-sm">
            View Full Menu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
