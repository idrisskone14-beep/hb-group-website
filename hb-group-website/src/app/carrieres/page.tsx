import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { JOBS } from "@/data/jobs";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ApplicationForm } from "@/components/forms/application-form";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez HB GROUP SARL : découvrez nos offres d'emploi ou déposez une candidature spontanée.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Construisez votre carrière avec HB Group"
        subtitle="Rejoignez une entreprise multisectorielle en croissance, où professionnalisme et esprit d'équipe font la différence."
        breadcrumb={[{ label: "Carrières" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading align="left" eyebrow="Postes ouverts" title="Nos offres d'emploi" />

          <RevealGroup className="mt-10 space-y-4">
            {JOBS.map((job) => (
              <RevealItem key={job.slug}>
                <Link
                  href={`/carrieres/${job.slug}`}
                  className="focus-ring group flex flex-col justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-soft)] transition hover:border-brand-200 hover:shadow-[var(--shadow-soft-lg)] sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-800">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-500">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="rounded-full bg-accent-50 px-3 py-0.5 text-xs font-semibold text-accent-700">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Voir l&apos;offre
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Candidature spontanée"
            title="Aucune offre ne correspond à votre profil ?"
            subtitle="Envoyez-nous votre candidature spontanée : nous étudions chaque profil avec attention pour de futures opportunités."
          />
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
