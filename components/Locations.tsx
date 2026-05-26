import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import MapEmbed from "./ui/MapEmbed";
import Reveal from "./ui/Reveal";
import { location, externalLinks } from "@/lib/data";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  location.mapsQuery,
)}`;

export default function Locations() {
  return (
    <section id="locations" className="bg-white py-20">
      <div className="container-site">
        {/* Heading */}
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Visit Us
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold text-brand sm:text-5xl">
            Our Locations
          </h2>
          <svg
            viewBox="0 0 120 12"
            className="mx-auto mt-2 h-3 w-28 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M3 8c20-7 94-7 114 0" />
          </svg>
        </Reveal>

        {/* Content row */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-3">
          {/* Storefront */}
          <Reveal variant="fadeIn">
            <ImagePlaceholder
              label="Storefront photo"
              src="/images/storefront.jpg"
              alt="That's Bananas storefront"
              className="aspect-[4/3] w-full rounded-2xl shadow-md"
              rounded="rounded-2xl"
            />
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1} className="text-center lg:px-2">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-brand">
              {location.city}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {location.address}
              <br />
              {location.region}
            </p>

            <ul className="mt-4 space-y-1 text-sm text-muted">
              {location.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-brand">{h.days}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                href={directionsUrl}
                variant="gold"
                className="px-6 py-2.5 text-xs uppercase tracking-wide"
              >
                Directions
              </Button>
              <Button
                href={externalLinks.orderNow}
                variant="primary"
                className="px-6 py-2.5 text-xs uppercase tracking-wide"
              >
                Order Now
              </Button>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal
            variant="fadeIn"
            delay={0.15}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <MapEmbed
              query={location.mapsQuery}
              title={`Map showing ${location.city} location`}
              label={location.region}
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
