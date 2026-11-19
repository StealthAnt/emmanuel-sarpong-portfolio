import fs from "fs";
import path from "path";
import { brands } from "@/content/brands";
import type { Brand } from "@/content/brands";

// Server-only: resolves which brands have a real logo file in /public/logos.
// Checks .svg first, then .png. Add a file named {slug}.svg or {slug}.png
// and it is picked up automatically.
export function brandsWithLogos(): (Brand & { logo?: string })[] {
  const dir = path.join(process.cwd(), "public", "logos");
  return brands.map((b) => {
    for (const ext of ["svg", "png"] as const) {
      const file = path.join(dir, `${b.slug}.${ext}`);
      if (fs.existsSync(file)) return { ...b, logo: `/logos/${b.slug}.${ext}` };
    }
    return { ...b };
  });
}
