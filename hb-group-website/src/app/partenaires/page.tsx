import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PARTNERS } from "@/data/partners";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Découvrez le réseau de partenaires qui accompagne HB GROUP SARL dans ses différents secteurs d'activité.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Un réseau de partenaires solides et diversifiés"
        subtitle="HB GROUP SARL s'appuie sur des partenariats de confiance pour offrir à ses clients des solutions toujours plus complètes."
        breadcrumb={[{ label: "Partenaires" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Ils nous accompagnent"
            title="Nos partenaires par secteur"
          />

          <RevealGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {PARTNERS.map((partner) => (
              <RevealItem
                key={partner.name}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-soft-lg)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-50 font-display text-sm font-bold text-ink-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  {partner.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span className="text-xs font-semibold text-ink-700">{partner.name}</span>
                <span className="text-[11px] text-ink-400">{partner.sector}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-ink-50 p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-ink-800">
              Vous souhaitez devenir partenaire de HB Group ?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-ink-500">
              Nous sommes toujours ouverts à de nouvelles collaborations stratégiques. Contactez
              notre équipe pour explorer les opportunités de partenariat.
            </p>
            <Button href="/contact" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
