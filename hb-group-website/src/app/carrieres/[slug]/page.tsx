import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { JOBS, getJobBySlug } from "@/data/jobs";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { ApplicationForm } from "@/components/forms/application-form";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.description,
    alternates: { canonical: `${SITE.url}/carrieres/${job.slug}` },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        eyebrow={job.type}
        title={job.title}
        breadcrumb={[{ label: "Carrières", href: "/carrieres" }, { label: job.title }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-ink-100 pb-6 text-sm text-ink-500">
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-brand-600" /> {job.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-600" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand-600" /> Publié le {formatDate(job.postedDate)}
              </span>
            </div>

            <h2 className="font-display mt-6 text-xl font-bold text-ink-800">
              Description du poste
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-500">{job.description}</p>

            <h3 className="font-display mt-8 text-lg font-bold text-ink-800">Missions</h3>
            <ul className="mt-4 space-y-3">
              {job.missions.map((mission) => (
                <li key={mission} className="flex items-start gap-3 text-sm text-ink-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {mission}
                </li>
              ))}
            </ul>

            <h3 className="font-display mt-8 text-lg font-bold text-ink-800">Profil recherché</h3>
            <ul className="mt-4 space-y-3">
              {job.profile.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display mb-4 text-lg font-bold text-ink-800">
              Postuler à cette offre
            </h3>
            <ApplicationForm jobTitle={job.title} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
