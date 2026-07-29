import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import { SITE } from "@/data/site";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Reveal } from "@/components/ui/reveal";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${SITE.url}/actualites/${article.slug}` },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        breadcrumb={[
          { label: "Actualités", href: "/actualites" },
          { label: article.title },
        ]}
      />

      <section className="py-20">
        <div className="container-xl max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-5 text-sm text-ink-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft-lg)]">
              <PlaceholderArt seed={article.slug} icon="Newspaper" className="h-full w-full" />
            </div>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-600">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href="/actualites"
              className="focus-ring mt-12 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux actualités
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
