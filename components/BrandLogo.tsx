import Image from "next/image";
import type { Brand } from "@/content/brands";

// Renders the brand's SVG logo when one exists in /public/logos;
// otherwise falls back to a clean text wordmark.
export default function BrandLogo({ brand }: { brand: Brand }) {
  if (brand.logo) {
    return (
      <span className="relative inline-flex h-8 w-32 items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={128}
          height={32}
          className="h-8 w-auto max-w-36 object-contain"
          unoptimized
        />
      </span>
    );
  }

  return (
    <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white/80">
      {brand.name}
    </span>
  );
}
