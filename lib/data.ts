export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "https://thatsbananas.my.canva.site/catering" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export type MenuItem = {
  name: string;
  price: string;
  /** Drop the dish photo here: /public/images/favorites/<file> */
  image: string;
};

export const favorites: MenuItem[] = [
  {
    name: "Churrasco",
    price: "$35",
    image: "/images/favorites/churrasco.jpg",
  },
  { name: "Feijoada", price: "$25", image: "/images/favorites/feijoada.jpg" },
  {
    name: "Pão de Queijo",
    price: "$6.99",
    image: "/images/favorites/pao-de-queijo.jpg",
  },
  { name: "Coxinha", price: "$6.99", image: "/images/favorites/coxinha.jpg" },
  {
    name: "Pulled Pork",
    price: "$14.99",
    image: "/images/favorites/pulled-pork.png",
  },
];

export const location = {
  city: "Ottawa",
  address: "2932 Baseline Rd",
  region: "Ottawa, ON K2H 1B3",
  hours: [
    { days: "Mon – Tue", time: "7:30 am – 2 pm" },
    { days: "Wed – Fri", time: "7:30 am – 7 pm" },
    { days: "Sat", time: "8 am – 3 pm" },
    { days: "Sun", time: "8 am – 1 pm" },
  ],
  // Used by the Google Maps embed + Directions button
  mapsQuery: "2932 Baseline Rd, Ottawa, ON K2H 1B3",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "facebook";
};

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thatsbananas_ott/",
    icon: "instagram",
  },
  { label: "Facebook", href: "#", icon: "facebook" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Menu", href: "#menu" },
    ],
  },
  {
    title: "More",
    links: [
      {
        label: "Catering",
        href: "https://thatsbananas.my.canva.site/catering",
      },
      { label: "Locations", href: "#locations" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

/** External links. */
export const externalLinks = {
  orderNow: "https://beacons.ai/thatsbananas",
  menu: "https://beacons.ai/thatsbananas",
  catering: "https://thatsbananas.my.canva.site/catering",
};
