import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { getIcon } from "@/lib/icon-map";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function SectorsGrid() {
  return (
    <section className="bg-ink-50 py-24 sm:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Nos domaines d'intervention"
          title="Onze secteurs, une seule exigence de qualité"
          subtitle="HB GROUP SARL met son expertise multisectorielle au service de vos projets, quel que soit votre domaine d'activité."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => {
            const Icon = getIcon(sector.icon);
            return (
              <RevealItem key={sector.slug}>
                <Link
                  href={`/services/${sector.slug}`}
                  className="focus-ring group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-soft-lg)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-800">
                    {sector.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {sector.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Découvrir
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outline" size="lg">
            Voir tous nos services
          </Button>
        </div>
      </div>
    </section>
  );
}
