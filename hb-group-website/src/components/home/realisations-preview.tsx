import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { REALISATIONS } from "@/data/realisations";
import { getSectorBySlug } from "@/data/sectors";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Button } from "@/components/ui/button";

export function RealisationsPreview() {
  const featured = REALISATIONS.slice(0, 3);

  return (
    <section className="py-24 sm:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Nos réalisations"
          title="Des projets concrets, sur le terrain"
          subtitle="Un aperçu de nos interventions récentes à travers plusieurs secteurs d'activité et régions de Côte d'Ivoire."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((item) => {
            const sector = getSectorBySlug(item.sectorSlug);
            return (
              <RevealItem key={item.slug}>
                <Link
                  href={`/realisations/${item.slug}`}
                  className="focus-ring group block overflow-hidden rounded-2xl border border-ink-100 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-soft-lg)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <PlaceholderArt
                      seed={item.slug}
                      icon={sector?.icon}
                      className="h-full w-full transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {sector?.name} · {item.year}
                    </span>
                    <h3 className="font-display mt-2 text-base font-bold text-ink-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Voir le projet
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/realisations" variant="outline" size="lg">
            Toutes nos réalisations
          </Button>
        </div>
      </div>
    </section>
  );
}
