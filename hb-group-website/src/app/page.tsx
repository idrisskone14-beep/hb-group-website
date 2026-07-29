import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { QuickIntro } from "@/components/home/quick-intro";
import { SectorsGrid } from "@/components/home/sectors-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { RealisationsPreview } from "@/components/home/realisations-preview";
import { PartnersMarquee } from "@/components/partners/partners-marquee";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { QuickContactForm } from "@/components/forms/quick-contact-form";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "HB GROUP SARL, groupe multisectoriel ivoirien : import-export, logistique, transport, forage, mines, mobilier, imprimerie et plus. Plus de 7 ans d'expérience.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <QuickIntro />
      <SectorsGrid />
      <WhyChooseUs />
      <RealisationsPreview />
      <PartnersMarquee />
      <TestimonialsSection />
      <QuickContactForm />
    </>
  );
}
