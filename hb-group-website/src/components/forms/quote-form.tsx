"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { buildMailtoLink } from "@/lib/mailto";
import { Button } from "@/components/ui/button";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const deadline = String(form.get("deadline") ?? "");
    const description = String(form.get("description") ?? "");

    const link = buildMailtoLink({
      subject: `Demande de devis — ${service || "Projet"} — ${name || "Client"}`,
      lines: [
        ["Nom complet", name],
        ["Entreprise / Organisation", company],
        ["E-mail", email],
        ["Téléphone", phone],
        ["Secteur concerné", service],
        ["Échéance souhaitée", deadline],
        ["Description du projet", description],
      ],
    });

    window.location.href = link;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 className="h-12 w-12 text-accent-500" />
        <p className="mt-4 font-display text-lg font-bold text-ink-800">
          Votre client de messagerie s&apos;est ouvert
        </p>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Validez l&apos;envoi de l&apos;e-mail pré-rempli pour transmettre votre demande de devis
          à notre équipe commerciale.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="focus-ring mt-6 text-sm font-semibold text-brand-600"
        >
          Faire une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-ink-100 bg-white p-8 shadow-[var(--shadow-soft)] sm:grid-cols-2"
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">Nom complet</label>
        <input
          required
          name="name"
          type="text"
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">
          Entreprise / Organisation
        </label>
        <input
          name="company"
          type="text"
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="Nom de votre structure"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">E-mail</label>
        <input
          required
          name="email"
          type="email"
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="vous@exemple.com"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">Téléphone</label>
        <input
          required
          name="phone"
          type="tel"
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="+225 XX XX XX XX XX"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">Secteur concerné</label>
        <select
          name="service"
          defaultValue={defaultService ?? ""}
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800"
        >
          <option value="" disabled>
            Choisissez un secteur
          </option>
          {SECTORS.map((sector) => (
            <option key={sector.slug} value={sector.name}>
              {sector.name}
            </option>
          ))}
          <option value="Plusieurs secteurs / Autre">Plusieurs secteurs / Autre</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700">
          Échéance souhaitée
        </label>
        <input
          name="deadline"
          type="text"
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="Ex : sous 1 mois"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-ink-700">
          Description de votre projet
        </label>
        <textarea
          required
          name="description"
          rows={5}
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="Décrivez votre besoin, le contexte et vos attentes"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" className="w-full" icon={<Send className="h-4 w-4" />}>
          Envoyer ma demande de devis
        </Button>
      </div>
    </form>
  );
}
