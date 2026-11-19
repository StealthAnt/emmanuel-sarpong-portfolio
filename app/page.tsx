import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import BehindSection from "@/components/home/BehindSection";
import CarouselSection from "@/components/home/CarouselSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Emmanuel Mensah Sarpong — Creative Designer & Art Director at Ogilvy Africa. Ideas that move brands and people.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientsMarquee />
      <BehindSection />
      <CarouselSection />
    </>
  );
}
