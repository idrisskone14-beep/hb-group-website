import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de HB GROUP SARL.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero title="Mentions légales" breadcrumb={[{ label: "Mentions légales" }]} />
      <section className="py-20">
        <div className="container-xl max-w-3xl space-y-6 text-sm leading-relaxed text-ink-600">
          <p>
            Le présent site est édité par {SITE.legalName}, société immatriculée en Côte
            d&apos;Ivoire. Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter à l&apos;adresse {SITE.email} ou au {SITE.phoneDisplay}.
          </p>
          <p>
            L&apos;ensemble des contenus (textes, images, logos) présents sur ce site sont la
            propriété de {SITE.legalName}, sauf mention contraire, et ne peuvent être reproduits
            sans autorisation préalable.
          </p>
          <p className="text-xs text-ink-400">
            Cette page sera complétée avec les informations légales complètes de l&apos;entreprise
            (numéro RCCM, siège social exact, directeur de publication, hébergeur).
          </p>
        </div>
      </section>
    </>
  );
}
