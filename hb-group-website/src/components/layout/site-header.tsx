"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { SITE, buildTelLink } from "@/data/site";
import { SECTORS } from "@/data/sectors";
import { getIcon } from "@/lib/icon-map";
import { Button } from "@/components/ui/button";
import { SearchOverlay } from "@/components/layout/search-overlay";

const NAV_LINKS = [
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Nos Services", hasMenu: true },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      <div className="container-xl flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-hb-group.jpeg"
            alt="HB GROUP SARL"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <span className="font-display hidden text-lg font-bold text-ink-800 sm:block">
            HB GROUP <span className="text-brand-600">Sarl</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
              pathname === "/" ? "text-brand-600" : "text-ink-600 hover:text-brand-600"
            }`}
          >
            Accueil
          </Link>
          {NAV_LINKS.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname.startsWith(link.href)
                      ? "text-brand-600"
                      : "text-ink-600 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen ? (
                  <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink-100 bg-white p-4 shadow-[var(--shadow-soft-lg)]">
                      {SECTORS.map((sector) => {
                        const Icon = getIcon(sector.icon);
                        return (
                          <Link
                            key={sector.slug}
                            href={`/services/${sector.slug}`}
                            className="focus-ring flex items-start gap-3 rounded-xl p-3 transition hover:bg-brand-50"
                          >
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-brand-600">
                              <Icon className="h-4.5 w-4.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink-800">
                                {sector.name}
                              </span>
                              <span className="line-clamp-1 block text-xs text-ink-400">
                                {sector.shortDescription}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname.startsWith(link.href)
                    ? "text-brand-600"
                    : "text-ink-600 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <SearchOverlay />
          <a
            href={buildTelLink()}
            className="focus-ring hidden items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-600 md:flex"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {SITE.phoneDisplay}
          </a>
          <Button href="/devis" size="md" className="hidden md:inline-flex">
            Demander un devis
          </Button>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink-700 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[110] flex flex-col bg-white lg:hidden">
          <div className="container-xl flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo-hb-group.jpeg"
                alt="HB GROUP SARL"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-lg font-bold text-ink-800">HB GROUP</span>
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink-700"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-xl flex flex-1 flex-col gap-1 overflow-y-auto py-4">
            <Link
              href="/"
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-700"
              onClick={() => setMobileOpen(false)}
            >
              Accueil
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-4">
              <a
                href={buildTelLink()}
                className="flex items-center gap-2 text-base font-semibold text-ink-800"
              >
                <Phone className="h-5 w-5 text-brand-600" />
                {SITE.phoneDisplay}
              </a>
              <Button href="/devis" onClick={() => setMobileOpen(false)}>
                Demander un devis
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
