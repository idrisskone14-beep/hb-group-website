import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ARTICLES } from "@/data/articles";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Blog, communiqués, articles et événements de HB GROUP SARL : suivez l'actualité de notre groupe multisectoriel.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function ActualitesPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Blog, communiqués et actualités du groupe"
        subtitle="Retrouvez les dernières nouvelles, publications et événements de HB GROUP SARL."
        breadcrumb={[{ label: "Actualités" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((article) => (
              <RevealItem key={article.slug}>
                <Link
                  href={`/actualites/${article.slug}`}
                  className="focus-ring group block h-full overflow-hidden rounded-2xl border border-ink-100 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-soft-lg)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <PlaceholderArt
                      seed={article.slug}
                      icon="Newspaper"
                      className="h-full w-full transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-600 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="flex items-center gap-1.5 text-xs text-ink-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(article.date)}
                    </p>
                    <h2 className="font-display mt-2 line-clamp-2 text-base font-bold text-ink-800">
                      {article.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-500">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Lire l&apos;article
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
