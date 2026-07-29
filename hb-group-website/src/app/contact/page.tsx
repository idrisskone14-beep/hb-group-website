import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SITE, buildTelLink, buildWhatsAppLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez HB GROUP SARL par téléphone, WhatsApp, e-mail ou via notre formulaire en ligne. Nous vous répondons sous 24 à 48 heures ouvrées.",
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Téléphone",
    value: SITE.phoneDisplay,
    href: buildTelLink(),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: buildWhatsAppLink("Bonjour HB GROUP SARL, je souhaite vous contacter."),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: SITE.address.street,
    href: `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapsQuery)}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions et étudier vos besoins, quel que soit votre secteur d'activité."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => (
              <Reveal key={card.label}>
                <a
                  href={card.href}
                  target={card.label === "Adresse" ? "_blank" : undefined}
                  rel={card.label === "Adresse" ? "noopener noreferrer" : undefined}
                  className="focus-ring flex h-full flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-soft-lg)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {card.label}
                  </span>
                  <span className="font-display text-sm font-bold text-ink-800">
                    {card.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display mb-6 text-2xl font-bold text-ink-800">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mb-6 text-2xl font-bold text-ink-800">
                Notre localisation
              </h2>
              <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-ink-100 shadow-[var(--shadow-soft)]">
                <iframe
                  title="Localisation HB GROUP SARL"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    SITE.address.mapsQuery
                  )}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <div className="container-xl max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
