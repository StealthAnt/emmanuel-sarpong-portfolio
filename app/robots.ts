import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://emmanuel-sarpong.vercel.app"; // TODO: update to real domain
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
