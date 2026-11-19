import SectionHeader from "@/components/SectionHeader";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import MagneticButton from "@/components/MagneticButton";
import { FadeIn } from "@/components/Reveal";

export default function CarouselSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32" aria-labelledby="carousel-title">
      <SectionHeader
        eyebrow="Selected Work"
        title={<span id="carousel-title">Curious what else I’ve created?</span>}
        description="A few campaigns from banking, telecom, FMCG and beyond — drag to explore."
      />
      <ProjectsCarousel />
      <FadeIn className="mt-12 text-center">
        <MagneticButton href="/projects" variant="dark">
          See more projects
          <span aria-hidden="true">→</span>
        </MagneticButton>
      </FadeIn>
    </section>
  );
}
