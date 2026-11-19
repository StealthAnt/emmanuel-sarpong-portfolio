import Marquee from "@/components/Marquee";
import BrandLogo from "@/components/BrandLogo";
import { brandsWithLogos } from "@/lib/logos";
import { FadeIn } from "@/components/Reveal";
import type { Brand } from "@/content/brands";

function Row({ items }: { items: (Brand & { logo?: string })[] }) {
  return (
    <div className="flex items-center gap-14 pr-14">
      {items.map((b) => (
        <span key={b.slug} className="flex h-10 items-center">
          <BrandLogo brand={b} />
        </span>
      ))}
    </div>
  );
}

export default function ClientsMarquee() {
  const all = brandsWithLogos();
  const half = Math.ceil(all.length / 2);
  const rowA = all.slice(0, half);
  const rowB = all.slice(half);

  return (
    <section className="py-24 md:py-32" aria-label="Clients">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted">
            Trusted by brands I’ve helped shape
          </p>
        </FadeIn>
        <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee>
            <Row items={rowA} />
          </Marquee>
          <Marquee reverse>
            <Row items={rowB} />
          </Marquee>
        </div>
      </div>
    </section>
  );
}
