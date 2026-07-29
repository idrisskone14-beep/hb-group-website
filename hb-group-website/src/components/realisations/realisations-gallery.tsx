"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { REALISATIONS } from "@/data/realisations";
import { SECTORS, getSectorBySlug } from "@/data/sectors";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function RealisationsGallery() {
  const [activeSector, setActiveSector] = useState<string>("all");

  const usedSectorSlugs = useMemo(
    () => new Set(REALISATIONS.map((item) => item.sectorSlug)),
    []
  );
  const filterSectors = SECTORS.filter((sector) => usedSectorSlugs.has(sector.slug));

  const filtered =
    activeSector === "all"
      ? REALISATIONS
      : REALISATIONS.filter((item) => item.sectorSlug === activeSector);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setActiveSector("all")}
          className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeSector === "all"
              ? "bg-brand-600 text-white"
              : "bg-ink-50 text-ink-600 hover:bg-ink-100"
          }`}
        >
          Tous les secteurs
        </button>
        {filterSectors.map((sector) => (
          <button
            key={sector.slug}
            type="button"
            onClick={() => setActiveSector(sector.slug)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeSector === sector.slug
                ? "bg-brand-600 text-white"
                : "bg-ink-50 text-ink-600 hover:bg-ink-100"
            }`}
          >
            {sector.name}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => {
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
                    {sector?.name}
                  </span>
                  <h3 className="font-display mt-2 text-base font-bold text-ink-800">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.year}
                    </span>
                  </div>
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

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink-400">
          Aucune réalisation pour ce secteur pour le moment.
        </p>
      ) : null}
    </div>
  );
}
