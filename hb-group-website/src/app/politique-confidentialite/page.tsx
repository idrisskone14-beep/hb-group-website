import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de HB GROUP SARL.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        breadcrumb={[{ label: "Politique de confidentialité" }]}
      />
      <section className="py-20">
        <div className="container-xl max-w-3xl space-y-6 text-sm leading-relaxed text-ink-600">
          <p>
            {SITE.legalName} attache une grande importance à la protection des données
            personnelles de ses visiteurs et clients. Les informations transmises via les
            formulaires de ce site (contact, devis, candidature) sont utilisées exclusivement
            pour répondre à votre demande et ne sont jamais cédées à des tiers sans votre
            consentement.
          </p>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des
            données vous concernant. Pour exercer ce droit, contactez-nous à l&apos;adresse{" "}
            {SITE.email}.
          </p>
          <p className="text-xs text-ink-400">
            Cette page sera complétée avec une politique de confidentialité détaillée conforme à
            la réglementation en vigueur en Côte d&apos;Ivoire.
          </p>
        </div>
      </section>
    </>
  );
}
