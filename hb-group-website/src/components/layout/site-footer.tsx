import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, buildTelLink } from "@/data/site";
import { SECTORS } from "@/data/sectors";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";

const QUICK_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Nos Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="container-xl grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-3">
            <Image
              src="/logo-hb-group.jpeg"
              alt="HB GROUP SARL"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="font-display text-lg font-bold text-white">
              HB GROUP <span className="text-brand-500">Sarl</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-ink-400">
            Votre partenaire multisectoriel en Côte d&apos;Ivoire. Plus de 7 ans d&apos;expérience
            au service des entreprises, administrations et particuliers.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.facebook}
              aria-label="HB GROUP SARL sur Facebook"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition hover:border-brand-500 hover:text-brand-500"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={SITE.social.linkedin}
              aria-label="HB GROUP SARL sur LinkedIn"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition hover:border-brand-500 hover:text-brand-500"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={SITE.social.instagram}
              aria-label="HB GROUP SARL sur Instagram"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition hover:border-brand-500 hover:text-brand-500"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Navigation rapide
          </h3>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-400 transition hover:text-brand-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Nos secteurs
          </h3>
          <ul className="space-y-2.5 text-sm">
            {SECTORS.slice(0, 7).map((sector) => (
              <li key={sector.slug}>
                <Link
                  href={`/services/${sector.slug}`}
                  className="text-ink-400 transition hover:text-brand-400"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
              <a href={buildTelLink()} className="text-ink-300 hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
              <a href={`mailto:${SITE.email}`} className="text-ink-300 hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" />
              <span className="text-ink-300">{SITE.address.street}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-xl flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {SITE.name} — Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-brand-400">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-brand-400">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
