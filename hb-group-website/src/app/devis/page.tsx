import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { QuoteForm } from "@/components/forms/quote-form";
import { Reveal } from "@/components/ui/reveal";
import { SITE, buildTelLink, buildWhatsAppLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit à HB GROUP SARL pour votre projet, quel que soit votre secteur d'activité. Réponse sous 24 à 48 heures ouvrées.",
};

const STEPS = [
  "Vous décrivez votre besoin via le formulaire",
  "Notre équipe étudie votre demande sous 24 à 48 heures",
  "Nous vous proposons une solution et un devis adapté",
  "Nous démarrons votre projet dans les délais convenus",
];

export default async function DevisPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Devis gratuit"
        title="Demandez votre devis personnalisé"
        subtitle="Décrivez-nous votre projet : notre équipe vous recontacte rapidement avec une proposition adaptée à votre besoin et à votre budget."
        breadcrumb={[{ label: "Demander un devis" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-800">Comment ça marche ?</h2>
            <ol className="mt-6 space-y-5">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-ink-600">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-9 rounded-2xl bg-ink-50 p-6">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-800">
                <CheckCircle2 className="h-5 w-5 text-accent-500" />
                Besoin d&apos;une réponse plus rapide ?
              </p>
              <p className="mt-2 text-sm text-ink-500">
                Contactez-nous directement par téléphone ou WhatsApp.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                <a href={buildTelLink()} className="text-brand-600 hover:underline">
                  {SITE.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppLink("Bonjour HB GROUP SARL, je souhaite demander un devis.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:underline"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm defaultService={service} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
