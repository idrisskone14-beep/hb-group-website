import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Calendar, Layers } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { REALISATIONS, getRealisationBySlug } from "@/data/realisations";
import { getSectorBySlug } from "@/data/sectors";
import { SITE } from "@/data/site";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return REALISATIONS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getRealisationBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `${SITE.url}/realisations/${item.slug}` },
  };
}

export default async function RealisationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getRealisationBySlug(slug);
  if (!item) notFound();

  const sector = getSectorBySlug(item.sectorSlug);

  return (
    <>
      <PageHero
        eyebrow={sector?.name ?? "Réalisation"}
        title={item.title}
        breadcrumb={[
          { label: "Réalisations", href: "/realisations" },
          { label: item.title },
        ]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft-lg)]">
              <PlaceholderArt seed={item.slug} icon={sector?.icon} className="h-full w-full" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-ink-100 pb-6">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  <Layers className="h-4 w-4" /> Secteur
                </p>
                <p className="mt-1 text-sm font-bold text-ink-800">{sector?.name}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  <MapPin className="h-4 w-4" /> Localisation
                </p>
                <p className="mt-1 text-sm font-bold text-ink-800">{item.location}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  <Calendar className="h-4 w-4" /> Année
                </p>
                <p className="mt-1 text-sm font-bold text-ink-800">{item.year}</p>
              </div>
            </div>

            <h2 className="font-display mt-6 text-2xl font-bold text-ink-800">Description</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-500">{item.description}</p>

            <h3 className="font-display mt-8 text-lg font-bold text-ink-800">
              Points clés du projet
            </h3>
            <RevealGroup className="mt-4 space-y-3">
              {item.details.map((detail) => (
                <RevealItem
                  key={detail}
                  className="flex items-start gap-3 text-sm text-ink-600"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {detail}
                </RevealItem>
              ))}
            </RevealGroup>

            {sector ? (
              <div className="mt-9">
                <Button href={`/services/${sector.slug}`} variant="outline">
                  Voir le service {sector.name}
                </Button>
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-xl flex flex-col items-center gap-5 rounded-2xl bg-brand-50 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-ink-800">
            Un projet similaire en tête ?
          </h2>
          <Button href="/devis" size="lg">
            Demander un devis
          </Button>
        </div>
      </section>
    </>
  );
}
