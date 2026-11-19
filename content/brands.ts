export type Brand = {
  name: string;
  slug: string;
  logo?: string; // path under /public/logos — falls back to text wordmark if missing
};

// Rendered in this exact order. To use a real logo, drop an SVG at
// /public/logos/{slug}.svg — the BrandLogo component picks it up automatically.
export const brands: Brand[] = [
  { name: "Development Bank Ghana", slug: "development-bank-ghana" },
  { name: "Standard Chartered Bank", slug: "standard-chartered" },
  { name: "Telecel Ghana", slug: "telecel" },
  { name: "NALA", slug: "nala" },
  { name: "Vaseline", slug: "vaseline" },
  { name: "Comfort", slug: "comfort" },
  { name: "Coca-Cola", slug: "coca-cola" },
  { name: "Baileys", slug: "baileys" },
  { name: "Nivea", slug: "nivea" },
  { name: "Acacia Health", slug: "acacia-health" },
  { name: "Star", slug: "star" },
  { name: "Guinness", slug: "guinness" },
  { name: "Orijin", slug: "orijin" },
  { name: "Gordon's Pink Gin", slug: "gordons-pink-gin" },
  { name: "Fanta", slug: "fanta" },
  { name: "Chicken Delight", slug: "chicken-delight" },
];
