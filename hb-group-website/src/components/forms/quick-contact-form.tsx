"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { buildMailtoLink } from "@/lib/mailto";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function QuickContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const sector = String(form.get("sector") ?? "");
    const message = String(form.get("message") ?? "");

    const link = buildMailtoLink({
      subject: `Demande de contact rapide — ${name || "Site web"}`,
      lines: [
        ["Nom", name],
        ["Téléphone", phone],
        ["Secteur concerné", sector],
        ["Message", message],
      ],
    });

    window.location.href = link;
    setSent(true);
  }

  return (
    <section className="py-24 sm:py-28">
      <div className="container-xl grid grid-cols-1 gap-16 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="Contact rapide"
          title="Un projet en tête ? Parlons-en."
          subtitle="Laissez-nous vos coordonnées, notre équipe vous recontacte sous 24 à 48 heures ouvrées pour échanger sur votre besoin."
        />

        <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-[var(--shadow-soft)]">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent-500" />
              <p className="mt-4 font-display text-lg font-bold text-ink-800">
                Votre client de messagerie s&apos;est ouvert
              </p>
              <p className="mt-2 max-w-sm text-sm text-ink-500">
                Il ne vous reste plus qu&apos;à valider l&apos;envoi de l&apos;e-mail pré-rempli
                pour que notre équipe reçoive votre demande.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="focus-ring mt-6 text-sm font-semibold text-brand-600"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">Nom complet</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
                  placeholder="Votre nom"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">Téléphone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Secteur concerné
                </label>
                <select
                  name="sector"
                  className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisissez un secteur
                  </option>
                  {SECTORS.map((sector) => (
                    <option key={sector.slug} value={sector.name}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Votre message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
                  placeholder="Décrivez brièvement votre besoin"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full" icon={<Send className="h-4 w-4" />}>
                  Envoyer ma demande
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
