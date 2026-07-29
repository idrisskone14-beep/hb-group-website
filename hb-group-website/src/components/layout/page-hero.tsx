import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      ...breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `${SITE.url}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <Script
        id={`breadcrumb-jsonld-${title.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px circle at 10% 10%, rgba(245,23,31,0.28), transparent 55%), radial-gradient(700px circle at 90% 90%, rgba(22,169,202,0.28), transparent 55%), linear-gradient(160deg, #14161a 0%, #1f2227 60%, #14161a 100%)",
        }}
        aria-hidden="true"
      />
      <div className="container-xl relative py-20 sm:py-24">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="hover:text-white">
            Accueil
          </Link>
          {breadcrumb.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/80">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow ? (
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
