"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { ARTICLES } from "@/data/articles";
import { REALISATIONS } from "@/data/realisations";

type Result = {
  title: string;
  category: string;
  href: string;
};

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const results: Result[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const sectorResults: Result[] = SECTORS.filter((s) =>
      s.name.toLowerCase().includes(q)
    ).map((s) => ({ title: s.name, category: "Service", href: `/services/${s.slug}` }));

    const articleResults: Result[] = ARTICLES.filter((a) =>
      a.title.toLowerCase().includes(q)
    ).map((a) => ({ title: a.title, category: "Actualité", href: `/actualites/${a.slug}` }));

    const realisationResults: Result[] = REALISATIONS.filter((r) =>
      r.title.toLowerCase().includes(q)
    ).map((r) => ({ title: r.title, category: "Réalisation", href: `/realisations/${r.slug}` }));

    return [...sectorResults, ...articleResults, ...realisationResults].slice(0, 8);
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Rechercher sur le site"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink-500 transition hover:bg-ink-50 hover:text-brand-600"
      >
        <Search className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-ink-900/60 px-4 pt-24 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl bg-white p-2 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-ink-100 px-4 py-3">
              <Search className="h-5 w-5 text-ink-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un service, une réalisation, un article..."
                className="w-full bg-transparent text-sm text-ink-800 outline-none placeholder:text-ink-400"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer la recherche"
                className="focus-ring rounded-full p-1 text-ink-400 hover:text-brand-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {query.trim() && results.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-ink-400">
                  Aucun résultat pour « {query} ».
                </p>
              ) : null}
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-ink-50"
                >
                  <span className="font-medium text-ink-800">{result.title}</span>
                  <span className="text-xs uppercase tracking-wide text-accent-600">
                    {result.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
