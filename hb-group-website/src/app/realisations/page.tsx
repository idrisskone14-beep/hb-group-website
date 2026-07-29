import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { RealisationsGallery } from "@/components/realisations/realisations-gallery";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les réalisations de HB GROUP SARL à travers ses différents secteurs d'activité en Côte d'Ivoire.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos réalisations"
        title="Des projets concrets, portés avec exigence"
        subtitle="Filtrez nos réalisations par secteur d'activité pour découvrir la diversité de nos interventions à travers la Côte d'Ivoire."
        breadcrumb={[{ label: "Réalisations" }]}
      />
      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <RealisationsGallery />
        </div>
      </section>
    </>
  );
}
