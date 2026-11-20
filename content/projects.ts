export type ProjectVideo = {
  src: string; // path under /public, e.g. "/videos/foo.mp4"
  poster: string; // image path used as video thumbnail
  caption?: string;
};

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
  videos?: ProjectVideo[];
  challenge: string;
  idea: string;
  outcome: string;
};

import adminOverrides from "./projects.admin.json";

// Project covers/gallery accept a gradient key (see lib/gradients.ts) or an
// image path under /public/images.
// Projects may include `videos` (MP4s under /public/videos) shown in the
// Films section of each case study.
const baseProjects: Project[] = [
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
    videos: [
      {
        src: "/videos/telecel-cash.mp4",
        poster: "/images/projects/telecel-cash-poster.jpg",
        caption: "Telecel Cash — move money, seamlessly",
      },
    ],
    challenge:
      "Telecel needed a launch campaign that could sustain intrigue across teaser, reveal and rollout phases while flexing across TV, OOH, social and retail.",
    idea:
      "We built a scalable 'Unlock X' identity system — kinetic type, high-voltage gradients and a countdown mechanic — that extended into FBB Unlimited plan assets and Telecel Cash promo creatives.",
    outcome:
      "Campaign assets deployed across ATL, OOH, social and the MyTelecel app through the launch window.",
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
      " creatives ran across SC Ghana's social channels and OOH placements for World Mental Health Day.",
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
      "Assets deployed across SC Ghana's digital and OOH channels on the respective awareness days.",
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
      "Promo assets shipped across ATL, digital and branch touchpoints through the campaign calendar.",
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
    videos: [
      {
        src: "/videos/dbg-women-led.mp4",
        poster: "/images/projects/dbg-women-led-poster.jpg",
        caption: "DBG — investing in women-led enterprise",
      },
    ],
    challenge:
      "Translate DBG's development-finance impact — GHS 2.13B in loans, 757+ institutions, agribusiness and tech investment — into a narrative people actually want to read.",
    idea:
      "A confident editorial system pairing bold DBG gold identity with infographic-led layouts that turn lending statistics into a compelling growth story.",
    outcome:
      "Report and ATL assets produced for DBG's impact communications.",
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
    videos: [
      {
        src: "/videos/vaseline-bundle.mp4",
        poster: "/images/projects/vaseline-bundle-poster.jpg",
        caption: "Vaseline bundle promotion",
      },
    ],
    challenge:
      "Give Vaseline's Intensive Care range culturally resonant, shelf-ready creatives for the African market — not recycled global assets.",
    idea:
      "Warm, ingredient-led art direction — cocoa, argan oil, shea — with bold product typography and benefit callouts (48h/72h moisturisation, SPF 10) built for retail and social.",
    outcome:
      "Key visuals and range creatives produced for Vaseline Africa's Intensive Care portfolio.",
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
      "Campaign creatives approved and deployed across ATL and digital channels.",
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
      "ATL and digital assets produced for Lifebuoy's improved-formula launch.",
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
      "Activation creative produced for the World Cup 2026 partnership window.",
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
    videos: [
      {
        src: "/videos/pelican-hotel.mp4",
        poster: "/images/projects/pelican-hotel-poster.jpg",
        caption: "The Pelican Hotel — brand film",
      },
    ],
    challenge:
      "Position a heritage Accra hotel as the city's premium address through creative that felt warm, established and unmistakably local.",
    idea:
      "Editorial ATL and digital layouts pairing property photography with a refined 'Discover...' brand line and direct booking information.",
    outcome:
      "Campaign assets produced for The Pelican Hotel's marketing channels.",
  },
  {
    slug: "unicef-hpv",
    brand: "UNICEF",
    title: "Cervical Cancer Prevention Campaign",
    year: "2025",
    role: "Campaign Design, Film",
    industry: "Healthcare",
    summary:
      "A public-health film campaign protecting girls aged 9–14 from cervical cancer through HPV vaccination awareness in Ghana.",
    cover: "/images/projects/unicef-hpv-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/unicef-hpv.mp4",
        poster: "/images/projects/unicef-hpv-poster.jpg",
        caption: "UNICEF HPV campaign film",
      },
    ],
    challenge:
      "Nearly 3,000 women in Ghana are affected by cervical cancer each year — UNICEF needed a campaign that would move parents to vaccinate their daughters.",
    idea:
      "An emotive health film speaking directly to parents — 'Protect your 9–14 year old daughter against cervical cancer to keep her dreams alive' — built for broadcast and social.",
    outcome:
      "Campaign film produced for the HPV vaccination awareness drive.",
  },
  {
    slug: "bee-the-reason",
    brand: "bee:wild",
    title: "'Be The Reason' — Bring the Buzz Back",
    year: "2025",
    role: "Campaign Design, Film",
    industry: "Social Impact",
    summary:
      "A conservation film rallying Gen Z to protect wild bees — 'real change doesn't always start big'.",
    cover: "/images/projects/bee-the-reason-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/bee-the-reason.mp4",
        poster: "/images/projects/bee-the-reason-poster.jpg",
        caption: "Be The Reason — wild bee conservation film",
      },
    ],
    challenge:
      "Wild bee populations are collapsing, but conservation messaging rarely reaches the generation that will actually act.",
    idea:
      "The 'Be The Reason' platform reframed conservation as personal agency — a punchy, youth-coded film showing how small actions bring the buzz back.",
    outcome:
      "Campaign film produced for the bee:wild conservation initiative.",
  },
  {
    slug: "agra-cocoa",
    brand: "AGRA",
    title: "Sustainably Growing Africa's Food Systems",
    year: "2025",
    role: "Campaign Design, Film",
    industry: "Social Impact",
    summary:
      "A brand film on sustainable agriculture — 'the future of cocoa farming is promising' — for Africa's food systems.",
    cover: "/images/projects/agra-cocoa-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/agra-cocoa.mp4",
        poster: "/images/projects/agra-cocoa-poster.jpg",
        caption: "AGRA — sustainably growing Africa's food systems",
      },
    ],
    challenge:
      "Make sustainable agriculture feel optimistic and investable rather than preachy — especially in the cocoa sector.",
    idea:
      "A hopeful, landscape-led film positioning African farmers as the future of food systems, built around the 'promising future' narrative.",
    outcome:
      "Brand film produced for AGRA's agriculture programmes.",
  },
  {
    slug: "ayra-starr-mobo",
    brand: "Ayra Starr",
    title: "MOBO Awards 2025 — Winner Announcement",
    year: "2025",
    role: "Motion Design, Announcement Creative",
    industry: "Entertainment",
    summary:
      "Winner announcement creative for Ayra Starr's Best African & Best International Act win at the 2025 MOBO Awards.",
    cover: "/images/projects/ayra-starr-mobo-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/ayra-starr-mobo.mp4",
        poster: "/images/projects/ayra-starr-mobo-poster.jpg",
        caption: "Ayra Starr — MOBO Awards 2025 winner announcement",
      },
    ],
    challenge:
      "Announce a landmark MOBO win with creative that matched the scale of the moment.",
    idea:
      "A high-energy announcement piece built around the official winner badge — designed to cut through the awards-night noise.",
    outcome:
      "Announcement creative delivered for the MOBO Awards 2025 moment.",
  },
  {
    slug: "the-other-side",
    brand: "Basit",
    title: "'The Other Side' — Music Video",
    year: "2025",
    role: "Art Direction, Music Video",
    industry: "Entertainment",
    summary:
      "Music video and teaser for Basit's 'The Other Side' — a cinematic short film exploring identity and hidden lives.",
    cover: "/images/projects/the-other-side-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/the-other-side.mp4",
        poster: "/images/projects/the-other-side-poster.jpg",
        caption: "'The Other Side' — full music video",
      },
      {
        src: "/videos/the-other-side-teaser.mp4",
        poster: "/images/projects/the-other-side-teaser-poster.jpg",
        caption: "'The Other Side' — teaser",
      },
    ],
    challenge:
      "Create a music video with cinematic weight — a story-driven piece, not just performance coverage.",
    idea:
      "A moody, narrative-led treatment built around the 'other side' concept — teased first, then released as a full short film.",
    outcome:
      "Teaser and full music video produced for Basit's release.",
  },
  {
    slug: "ogilvy-eid",
    brand: "Ogilvy Africa",
    title: "Eid Celebration Film",
    year: "2025",
    role: "Art Direction, Film",
    industry: "Branding",
    summary:
      "An Eid Mubarak celebration film for Ogilvy Africa — agency culture, community and the festive season.",
    cover: "/images/projects/ogilvy-eid-poster.jpg",
    gallery: [],
    videos: [
      {
        src: "/videos/ogilvy-eid.mp4",
        poster: "/images/projects/ogilvy-eid-poster.jpg",
        caption: "Ogilvy Africa — Eid film",
      },
    ],
    challenge:
      "Mark Eid with a film that celebrated the people of the agency — warm, human and unmistakably Ogilvy.",
    idea:
      "A short celebratory film capturing Eid moments across the Ogilvy Africa community, wrapped in clean agency branding.",
    outcome:
      "Eid film produced and shared across Ogilvy Africa's channels.",
  },
];

// Admin-saved overrides (written by /admin via /api/admin/projects) replace
// base entries by slug; entries with new slugs are appended.
const overrides = adminOverrides as unknown as Project[];
export const projects: Project[] = overrides.length
  ? [
      ...baseProjects.map((p) => overrides.find((o) => o.slug === p.slug) ?? p),
      ...overrides.filter((o) => !baseProjects.some((p) => p.slug === o.slug)),
    ]
  : baseProjects;

export const industries = [
  "All",
  "Banking",
  "Telecom",
  "FMCG",
  "Beverages",
  "Healthcare",
  "Hospitality",
  "Entertainment",
  "Social Impact",
  "Branding",
];
