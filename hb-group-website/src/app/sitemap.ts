import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SECTORS } from "@/data/sectors";
import { REALISATIONS } from "@/data/realisations";
import { ARTICLES } from "@/data/articles";
import { JOBS } from "@/data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/a-propos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/realisations`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/actualites`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/partenaires`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/carrieres`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/devis`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const sectorRoutes: MetadataRoute.Sitemap = SECTORS.map((sector) => ({
    url: `${SITE.url}/services/${sector.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const realisationRoutes: MetadataRoute.Sitemap = REALISATIONS.map((item) => ({
    url: `${SITE.url}/realisations/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE.url}/actualites/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const jobRoutes: MetadataRoute.Sitemap = JOBS.map((job) => ({
    url: `${SITE.url}/carrieres/${job.slug}`,
    lastModified: new Date(job.postedDate),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...sectorRoutes, ...realisationRoutes, ...articleRoutes, ...jobRoutes];
}
