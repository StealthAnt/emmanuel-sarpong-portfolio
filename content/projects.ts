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

// Placeholder projects — client will replace with real case studies.
// `cover`/`gallery` accept a gradient key (see lib/gradients.ts) or an image
// path under /public/images. Swap in real images later without code changes.
export const projects: Project[] = [
  {
    slug: "dbghana-brand-campaign",
    brand: "Development Bank Ghana",
    title: "Brand Campaign Platform",
    year: "2024",
    role: "Art Direction, Campaign Design",
    industry: "Banking",
    summary:
      "An integrated campaign platform repositioning DBG as Ghana's bank for builders — from ATL spots to social toolkits.",
    cover: "ember",
    gallery: ["ember", "midnight", "sunset"],
    challenge:
      "DBG needed to move beyond product-led advertising and build an emotional brand platform that resonated with Ghanaian entrepreneurs and young professionals.",
    idea:
      "We built the 'Build With Us' platform around the idea that progress is built, not given — translating it into ATL films, OOH, social content and in-branch experiences.",
    outcome:
      "The campaign rolled out nationally across TV, radio, OOH and digital, becoming DBG's lead brand platform for the year. [Metrics to be added by client.]",
  },
  {
    slug: "telecel-data-push",
    brand: "Telecel Ghana",
    title: "Data Push Brand Refresh",
    year: "2024",
    role: "Creative Design, ATL Concepting",
    industry: "Telecom",
    summary:
      "A youth-focused data campaign with a kinetic identity system built for always-on social and OOH.",
    cover: "violet",
    gallery: ["violet", "neon", "midnight"],
    challenge:
      "Telecel needed to make data bundles feel exciting to a younger audience in a crowded telecom market.",
    idea:
      "A bold, high-contrast visual system with kinetic type and vibrant gradients that made connectivity feel fast, loud and unmistakably Telecel.",
    outcome:
      "Campaign assets shipped across social, OOH and retail touchpoints. [Metrics to be added by client.]",
  },
  {
    slug: "nivea-summer-film",
    brand: "Nivea",
    title: "Summer Film & Digital Series",
    year: "2023",
    role: "Art Direction, Content Design",
    industry: "FMCG",
    summary:
      "A seasonal film and digital content series designed around Ghanaian summer culture and outdoor living.",
    cover: "sunset",
    gallery: ["sunset", "ember", "ocean"],
    challenge:
      "Nivea wanted culturally relevant summer content that connected skin-care benefits to real Ghanaian lifestyle moments.",
    idea:
      "We directed a content system pairing sun-soaked visuals with product storytelling — films, stills and social cut-downs shot around beach and city settings.",
    outcome:
      "The series ran across Nivea's Ghanaian social channels and retail screens through the summer season. [Metrics to be added by client.]",
  },
  {
    slug: "cocacola-festive",
    brand: "Coca-Cola",
    title: "Festive ATL Campaign",
    year: "2023",
    role: "Campaign Design, OOH",
    industry: "Beverages",
    summary:
      "Festive-season ATL and OOH creative bringing shared moments of joy to cities across Ghana.",
    cover: "crimson",
    gallery: ["crimson", "ember", "midnight"],
    challenge:
      "Create festive work that felt unmistakably Coca-Cola while staying fresh for a Ghanaian audience.",
    idea:
      "A warm, human-centred creative direction pairing iconic red with candid moments of celebration — designed across billboards, transit and social.",
    outcome:
      "OOH and social assets deployed nationwide for the festive period. [Metrics to be added by client.]",
  },
  {
    slug: "acacia-health-awareness",
    brand: "Acacia Health",
    title: "Health Awareness Campaign",
    year: "2024",
    role: "Brand & Campaign Design",
    industry: "Healthcare",
    summary:
      "A public-health awareness campaign translating clinical messaging into warm, human creative.",
    cover: "mint",
    gallery: ["mint", "ocean", "midnight"],
    challenge:
      "Acacia Health needed accessible health information that people would actually engage with — without losing clinical credibility.",
    idea:
      "A friendly illustration-led system with clear typography and calm colour that made health topics feel approachable across radio, print and social.",
    outcome:
      "Campaign materials distributed across clinics, community channels and digital platforms. [Metrics to be added by client.]",
  },
  {
    slug: "chicken-delight-menu",
    brand: "Chicken Delight",
    title: "Menu & Promo Refresh",
    year: "2024",
    role: "Campaign Design, Social",
    industry: "Food",
    summary:
      "A menu and promotional refresh making Chicken Delight feel like Ghana's go-to for every occasion.",
    cover: "gold",
    gallery: ["gold", "ember", "sunset"],
    challenge:
      "Keep a heritage QSR brand feeling current and crave-worthy across an increasingly digital customer journey.",
    idea:
      "Appetite-first food photography art direction with bold promo graphics and a flexible system covering menu boards, app and social.",
    outcome:
      "New menu and promo assets rolled out across all Chicken Delight touchpoints. [Metrics to be added by client.]",
  },
];

export const industries = [
  "All",
  "Banking",
  "Telecom",
  "FMCG",
  "Beverages",
  "Healthcare",
  "Food",
];
