import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SECTORS } from "@/data/sectors";
import { getIcon } from "@/lib/icon-map";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez les 15 domaines d'expertise de HB GROUP SARL : construction/BTP, forage, mines, import-export, transport, logistique, imprimerie, mobilier et bien plus.",
};

export default function ServicesPage() {
  const [featured, ...otherSectors] = SECTORS;

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Une expertise multisectorielle au service de vos projets"
        subtitle="HB GROUP SARL intervient sur 15 domaines d'activité complémentaires, avec la même exigence de qualité et de professionnalisme."
        breadcrumb={[{ label: "Nos Services" }]}
      />

      <section className="pt-24 sm:pt-28">
        <div className="container-xl">
          <Reveal>
            <Link
              href={`/services/${featured.slug}`}
              className="focus-ring group grid grid-cols-1 overflow-hidden rounded-2xl bg-ink-900 shadow-[var(--shadow-soft-lg)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <PlaceholderArt
                  seed={featured.slug}
                  icon={featured.icon}
                  className="h-full w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-400">
                  Notre service phare
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white">
                  <DynamicIcon name={featured.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {featured.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {featured.heroDescription}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {featured.prestations.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-brand-700">
                  Découvrir le service
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            align="left"
            eyebrow="Et bien plus encore"
            title="Nos autres domaines d'expertise"
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherSectors.map((sector) => {
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
                    <h2 className="font-display text-lg font-bold text-ink-800">{sector.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                      {sector.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Découvrir le service
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-ink-50 p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-ink-800">
              Un besoin qui touche plusieurs secteurs ?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-ink-500">
              Notre approche multisectorielle nous permet de coordonner plusieurs expertises pour
              un seul et même projet.
            </p>
            <Button href="/devis" size="lg">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
