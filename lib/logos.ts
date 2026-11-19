import fs from "fs";
import path from "path";
import { brands } from "@/content/brands";
import type { Brand } from "@/content/brands";

// Server-only: resolves which brands have a real SVG in /public/logos.
// Add a file named {slug}.svg and it is picked up automatically.
export function brandsWithLogos(): (Brand & { logo?: string })[] {
  const dir = path.join(process.cwd(), "public", "logos");
  return brands.map((b) => {
    const file = path.join(dir, `${b.slug}.svg`);
    return { ...b, logo: fs.existsSync(file) ? `/logos/${b.slug}.svg` : undefined };
  });
}
