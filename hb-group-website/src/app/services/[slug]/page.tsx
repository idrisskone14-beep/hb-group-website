import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SECTORS, getSectorBySlug } from "@/data/sectors";
import { SITE } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  return {
    title: sector.name,
    description: sector.shortDescription,
    alternates: { canonical: `${SITE.url}/services/${sector.slug}` },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: sector.name,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "Côte d'Ivoire",
    description: sector.shortDescription,
  };

  return (
    <>
      <Script
        id={`service-jsonld-${sector.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        eyebrow="Nos services"
        title={sector.name}
        subtitle={sector.heroDescription}
        breadcrumb={[
          { label: "Nos Services", href: "/services" },
          { label: sector.name },
        ]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[var(--shadow-soft-lg)]">
              <PlaceholderArt seed={sector.slug} icon={sector.icon} className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <DynamicIcon name={sector.icon} className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-800">
              Présentation
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-500">
              {sector.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={`/devis?service=${encodeURIComponent(sector.name)}`} icon={<ArrowRight className="h-4 w-4" />}>
                Demander un devis
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            align="left"
            eyebrow="Nos prestations"
            title={`Ce que nous proposons en ${sector.name.toLowerCase()}`}
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sector.prestations.map((item) => (
              <RevealItem
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-5 text-sm font-medium text-ink-700 shadow-[var(--shadow-soft)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {item}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading align="left" eyebrow="Galerie" title="Aperçu de nos interventions" />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {sector.gallery.map((item, index) => (
              <RevealItem key={item.caption} className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <PlaceholderArt
                    seed={`${sector.slug}-gallery-${index}`}
                    icon={sector.icon}
                    className="h-full w-full"
                  />
                </div>
                <p className="mt-3 text-sm text-ink-500">{item.caption}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            light
            eyebrow="Pourquoi choisir HB Group"
            title={`Notre engagement sur le secteur ${sector.name.toLowerCase()}`}
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sector.whyUs.map((item) => (
              <RevealItem
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-white/85"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                {item}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-20">
        <div className="container-xl flex flex-col items-center gap-5 rounded-2xl bg-brand-50 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-ink-800">
            Prêt à démarrer votre projet {sector.name.toLowerCase()} ?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-500">
            Notre équipe vous répond sous 24 à 48 heures ouvrées avec une proposition adaptée à
            votre besoin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`/devis?service=${encodeURIComponent(sector.name)}`} size="lg">
              Demander un devis
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
