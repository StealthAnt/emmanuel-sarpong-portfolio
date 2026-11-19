import type { Metadata } from "next";
import HeroCard from "@/components/HeroCard";
import SectionHeader from "@/components/SectionHeader";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Emmanuel Mensah Sarpong — campaigns and creative for banking, telecom, FMCG, beverages, healthcare and food brands.",
};

export default function ProjectsPage() {
  return (
    <>
      <HeroCard
        eyebrow="Portfolio"
        title="Projects"
        rightText="Real brands, real results"
        gradient="gold"
      />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="Archive"
          title="Selected Work"
          description="Filter by industry. Click any project for the full case study."
        />
        <ProjectsGrid />
      </section>
    </>
  );
}
