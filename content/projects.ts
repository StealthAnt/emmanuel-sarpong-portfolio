export type Project = {
  slug: string;
  brand: string;
  title: string;
  year: string;
  role: string;
  industry: string;
  summary: string;
  cover: string; // gradient key or image path — see lib/gradients.ts
  gallery: string[];
  challenge: string;
  idea: string;
  outcome: string;
};

// Project covers/gallery accept a gradient key (see lib/gradients.ts) or an
// image path under /public/images.
// TODO: several works include video deliverables (MP4s in the client's Works
// folder) — video support in the gallery is not yet implemented.
export const projects: Project[] = [
  {
    slug: "telecel-unlock-x",
    brand: "Telecel Ghana",
    title: "Unlock X — Connecting Energies",
    year: "2025",
    role: "Art Direction, ATL & Digital Design",
    industry: "Telecom",
    summary:
      "A teaser-to-launch ATL and digital campaign for Telecel's biggest product reveal — built around the 'Unlock X' mystery and 'Connecting Energies' platform.",
    cover: "/images/projects/telecel-unlock-x.jpg",
    gallery: [
      "/images/projects/telecel-fbb-plans.jpg",
      "/images/projects/telecel-fbb-unlimited.jpg",
      "/images/projects/telecel-cash-millionaire.jpg",
      "/images/projects/telecel-cash-move-money.jpg",
      "/images/projects/telecel-cash-low-charges.jpg",
    ],
    challenge:
      "Telecel needed a launch campaign that could sustain intrigue across teaser, reveal and rollout phases while flexing across TV, OOH, social and retail.",
    idea:
      "We built a scalable 'Unlock X' identity system — kinetic type, high-voltage gradients and a countdown mechanic — that extended into FBB Unlimited plan assets and Telecel Cash promo creatives.",
    outcome:
      "Campaign assets deployed across ATL, OOH, social and the MyTelecel app through the launch window. [Metrics to be added by client.]",
  },
  {
    slug: "sc-mental-health",
    brand: "Standard Chartered",
    title: "Voice What You Feel — Mental Health",
    year: "2025",
    role: "Campaign Design, OOH & Social",
    industry: "Banking",
    summary:
      "World Mental Health Day work inviting Ghanaians to 'unmask and heal' — breaking the stigma around hiding pain behind work.",
    cover: "/images/projects/sc-mental-health-unmask.jpg",
    gallery: [
      "/images/projects/sc-mental-health-workcoat.jpg",
      "/images/projects/sc-let-mum-decide.jpg",
    ],
    challenge:
      "Standard Chartered wanted brand work that moved beyond banking products into genuine human territory — starting with mental-health awareness for World Mental Health Day.",
    idea:
      "The 'Voice What You Feel' platform paired empathetic illustration with direct, unflinching copy — 'Unmask and heal', 'Don't Work-Coat It' — designed for OOH and social cut-downs.",
    outcome:
      " creatives ran across SC Ghana's social channels and OOH placements for World Mental Health Day. [Metrics to be added by client.]",
  },
  {
    slug: "sc-inclusion-suite",
    brand: "Standard Chartered",
    title: "Inclusion Campaign Suite",
    year: "2025",
    role: "Campaign Design, OOH & Social",
    industry: "Banking",
    summary:
      "A suite of purpose-led creatives for Breast Cancer Awareness Month and International Down Syndrome Day.",
    cover: "/images/projects/sc-breast-cancer.jpg",
    gallery: ["/images/projects/sc-down-syndrome.jpg"],
    challenge:
      "Mark meaningful awareness days with creative that felt human and credible — not corporate checkbox work.",
    idea:
      "Warm, people-first art direction with clear typographic hierarchy: 'Dinner wouldn't be the same without her' for breast cancer screening, and 'Inclusion starts with understanding' for Down Syndrome Day.",
    outcome:
      "Assets deployed across SC Ghana's digital and OOH channels on the respective awareness days. [Metrics to be added by client.]",
  },
  {
    slug: "sc-mobile-promos",
    brand: "Standard Chartered",
    title: "SC Mobile & Card Promo Suite",
    year: "2024",
    role: "Campaign Design, ATL & Digital",
    industry: "Banking",
    summary:
      "A year-round suite of product-led promos — Caritas 'Send Money to Win Big', the overseas debit-card flight draw and 'Let Mum Decide'.",
    cover: "/images/projects/sc-mobile-send-money.jpg",
    gallery: [
      "/images/projects/sc-card-flight-promo.jpg",
      "/images/projects/sc-let-mum-decide.jpg",
    ],
    challenge:
      "Keep SC's app and card products top-of-mind with Ghanaian customers through always-on promotional activity.",
    idea:
      "A bold, promo-first design system with clear mechanic callouts — prize amounts, T&Cs, USPs — flexing across ATL, OOH, social and in-app placements.",
    outcome:
      "Promo assets shipped across ATL, digital and branch touchpoints through the campaign calendar. [Metrics to be added by client.]",
  },
  {
    slug: "dbg-impact-report",
    brand: "Development Bank Ghana",
    title: "Empowering Growth — Impact Report",
    year: "2025",
    role: "Art Direction, Report & ATL Design",
    industry: "Banking",
    summary:
      "Visual identity and campaign work for DBG's 'Empowering Growth: Rooted in Impact. Ready to Scale.' impact narrative.",
    cover: "/images/projects/dbg-impact-cover.jpg",
    gallery: [
      "/images/projects/dbg-impact-stats.jpg",
      "/images/projects/dbg-impact-invest.jpg",
    ],
    challenge:
      "Translate DBG's development-finance impact — GHS 2.13B in loans, 757+ institutions, agribusiness and tech investment — into a narrative people actually want to read.",
    idea:
      "A confident editorial system pairing bold DBG gold identity with infographic-led layouts that turn lending statistics into a compelling growth story.",
    outcome:
      "Report and ATL assets produced for DBG's impact communications. [Metrics to be added by client.]",
  },
  {
    slug: "vaseline-cocoa-glow",
    brand: "Vaseline",
    title: "Cocoa Glow & Intensive Care Africa",
    year: "2025",
    role: "Art Direction, Key Visual & Range Design",
    industry: "FMCG",
    summary:
      "Africa-first key visuals and range creatives for Vaseline Intensive Care — Cocoa Glow Radiant, Nourished Skin and Even Tone.",
    cover: "/images/projects/vaseline-cocoa-glow.jpg",
    gallery: [
      "/images/projects/vaseline-intense-care.jpg",
      "/images/projects/vaseline-even-tone.jpg",
    ],
    challenge:
      "Give Vaseline's Intensive Care range culturally resonant, shelf-ready creatives for the African market — not recycled global assets.",
    idea:
      "Warm, ingredient-led art direction — cocoa, argan oil, shea — with bold product typography and benefit callouts (48h/72h moisturisation, SPF 10) built for retail and social.",
    outcome:
      "Key visuals and range creatives produced for Vaseline Africa's Intensive Care portfolio. [Metrics to be added by client.]",
  },
  {
    slug: "comfort-wardrobe",
    brand: "Comfort",
    title: "'The Reason Your Wardrobe Is Your Happy Place'",
    year: "2025",
    role: "Campaign Design, OOH & Digital",
    industry: "FMCG",
    summary:
      "ATL and digital campaign for Comfort Blue Ultra fabric conditioner, positioning laundry care as an act of self-care.",
    cover: "/images/projects/comfort-wardrobe.jpg",
    gallery: ["/images/projects/comfort-humanized.jpg"],
    challenge:
      "Make fabric conditioner emotionally resonant — moving Comfort from a functional product to a daily ritual of care.",
    idea:
      "The 'Humanized' platform paired warm, tactile visuals with the insight that your wardrobe is your happy place — extended across OOH, TV and digital.",
    outcome:
      "Campaign creatives approved and deployed across ATL and digital channels. [Metrics to be added by client.]",
  },
  {
    slug: "lifebuoy-protection",
    brand: "Lifebuoy",
    title: "10x Germ Protection Campaign",
    year: "2024",
    role: "Campaign Design, OOH & Digital",
    industry: "FMCG",
    summary:
      "ATL creatives for Lifebuoy's improved formula — '10 times the protection for your family' with multivitamins.",
    cover: "/images/projects/lifebuoy-joys.jpg",
    gallery: ["/images/projects/lifebuoy-worry-free.jpg"],
    challenge:
      "Communicate a clinical germ-protection upgrade in a way families would feel, not just understand.",
    idea:
      "Benefit-first creative pairing the '100% stronger germ protection' claim with warm family moments — 'Experience life's joys, worry-free'.",
    outcome:
      "ATL and digital assets produced for Lifebuoy's improved-formula launch. [Metrics to be added by client.]",
  },
  {
    slug: "cocacola-fifa-2026",
    brand: "Coca-Cola",
    title: "FIFA World Cup 2026 Partnership",
    year: "2026",
    role: "Campaign Design, ATL & Digital",
    industry: "Beverages",
    summary:
      "Creative for Coca-Cola's FIFA World Cup 2026 official partnership — 'Get a FIFA' activation creative.",
    cover: "/images/projects/cocacola-fifa.jpg",
    gallery: ["crimson", "ember"],
    challenge:
      "Activate Coca-Cola's World Cup 2026 partnership with Ghanaian audiences in the lead-up to the tournament.",
    idea:
      "High-energy matchday creative built around the official-partner badging and the 'Get a FIFA' mechanic, designed for ATL and social cut-downs.",
    outcome:
      "Activation creative produced for the World Cup 2026 partnership window. [Metrics to be added by client.]",
  },
  {
    slug: "pelican-hotel",
    brand: "The Pelican Hotel",
    title: "Brand Campaign — Cantonments, Accra",
    year: "2025",
    role: "Campaign Design, ATL & Digital",
    industry: "Hospitality",
    summary:
      "ATL and digital campaign bringing The Pelican Hotel's Cantonments property to life for guests and the local market.",
    cover: "/images/projects/pelican-hotel-1.jpg",
    gallery: ["/images/projects/pelican-hotel-2.jpg"],
    challenge:
      "Position a heritage Accra hotel as the city's premium address through creative that felt warm, established and unmistakably local.",
    idea:
      "Editorial ATL and digital layouts pairing property photography with a refined 'Discover...' brand line and direct booking information.",
    outcome:
      "Campaign assets produced for The Pelican Hotel's marketing channels. [Metrics to be added by client.]",
  },
];

export const industries = [
  "All",
  "Banking",
  "Telecom",
  "FMCG",
  "Beverages",
  "Hospitality",
];
