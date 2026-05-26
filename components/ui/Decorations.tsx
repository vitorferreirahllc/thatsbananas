type DecoProps = { className?: string };

/** Light line-art leaf branch used as a scattered background accent. */
export function LeafBranch({ className }: DecoProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M60 134V36" />
      <path d="M60 120c-22 0-34-14-34-32 22 0 34 14 34 32Z" />
      <path d="M60 96c22 0 34-14 34-32-22 0-34 14-34 32Z" />
      <path d="M60 78c-20 0-31-13-31-29 20 0 31 13 31 29Z" />
      <path d="M60 58c20 0 31-13 31-29-20 0-31 13-31 29Z" />
      <path d="M60 40c-15 0-23-10-23-22 15 0 23 10 23 22Z" />
    </svg>
  );
}

/** Soft organic blob — used for the yellow/orange splashes. */
export function Blob({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M44.7 -58.2C57.3 -49.1 66.1 -34.6 69.9 -18.9C73.7 -3.2 72.5 13.7 65.3 27.4C58.1 41.1 44.9 51.6 30.3 58.9C15.7 66.2 -0.3 70.3 -16.5 67.7C-32.7 65.1 -49.1 55.8 -59.4 42.1C-69.7 28.4 -73.9 10.3 -71.4 -6.6C-68.9 -23.5 -59.7 -39.2 -46.8 -48.5C-33.9 -57.8 -17 -60.7 -0.2 -60.4C16.5 -60.1 33.1 -67.3 44.7 -58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Small scattered dot cluster accent (near the hero heading). */
export function Dots({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="currentColor" aria-hidden>
      <circle cx="8" cy="40" r="3.2" />
      <circle cx="24" cy="50" r="2.4" />
      <circle cx="20" cy="28" r="2.8" />
      <circle cx="38" cy="40" r="2.2" />
      <circle cx="34" cy="18" r="3" />
      <circle cx="50" cy="26" r="2.4" />
      <circle cx="48" cy="48" r="2" />
    </svg>
  );
}

/** The teal/green organic blob accent (left boundary of the hero photo). */
export function Wave({ className }: DecoProps) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M104 6c44 2 76 33 82 80 5 40-3 86-41 112-33 23-83 24-114-3C2 169-3 119 14 79 31 39 60 4 104 6Z"
      />
      <g
        stroke="#0c2417"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      >
        <path d="M50 110c28-17 66-17 98 0" />
        <path d="M46 134c32-19 74-19 106 0" />
        <path d="M50 158c28-17 66-17 98 0" />
      </g>
    </svg>
  );
}
