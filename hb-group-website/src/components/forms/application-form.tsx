"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Paperclip, Send, AlertCircle } from "lucide-react";
import { buildMailtoLink } from "@/lib/mailto";
import { Button } from "@/components/ui/button";

const MAX_FILE_SIZE_MB = 5;

export function ApplicationForm({ jobTitle }: { jobTitle?: string }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setFileName(null);
      return;
    }
    if (file.type !== "application/pdf") {
      setFileError("Le CV doit être au format PDF.");
      setFileName(null);
      event.target.value = "";
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError(`Le fichier ne doit pas dépasser ${MAX_FILE_SIZE_MB} Mo.`);
      setFileName(null);
      event.target.value = "";
      return;
    }
    setFileError(null);
    setFileName(file.name);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const position = String(form.get("position") ?? jobTitle ?? "Candidature spontanée");
    const message = String(form.get("message") ?? "");

    const link = buildMailtoLink({
      subject: `Candidature — ${position} — ${name || "Candidat"}`,
      lines: [
        ["Nom complet", name],
        ["E-mail", email],
        ["Téléphone", phone],
        ["Poste visé", position],
        ["CV joint", fileName ?? "Non joint — à ajouter manuellement"],
        ["Message", message],
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
          Merci de joindre votre CV (
          {fileName ? <span className="font-semibold">{fileName}</span> : "format PDF"}) en pièce
          jointe avant d&apos;envoyer l&apos;e-mail pré-rempli à notre équipe recrutement.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="focus-ring mt-6 text-sm font-semibold text-brand-600"
        >
          Envoyer une autre candidature
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
        <label className="mb-1.5 block text-sm font-medium text-ink-700">Poste visé</label>
        <input
          type="text"
          defaultValue={jobTitle ?? ""}
          readOnly={Boolean(jobTitle)}
          name="position"
          className={`focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 ${
            jobTitle ? "bg-ink-50" : ""
          }`}
          placeholder="Candidature spontanée"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-ink-700">
          CV (format PDF, {MAX_FILE_SIZE_MB} Mo max)
        </label>
        <label className="focus-ring flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-ink-300 px-4 py-3 text-sm text-ink-500 transition hover:border-brand-400 hover:bg-brand-50">
          <Paperclip className="h-4.5 w-4.5 text-brand-600" />
          {fileName ?? "Choisir un fichier PDF"}
          <input
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
        {fileError ? (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-brand-600">
            <AlertCircle className="h-4 w-4" /> {fileError}
          </p>
        ) : (
          <p className="mt-2 text-xs text-ink-400">
            Votre client de messagerie s&apos;ouvrira à l&apos;envoi : pensez à joindre ce fichier
            avant de valider l&apos;e-mail.
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-ink-700">
          Message (optionnel)
        </label>
        <textarea
          name="message"
          rows={4}
          className="focus-ring w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300"
          placeholder="Parlez-nous de votre parcours et de vos motivations"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="w-full" icon={<Send className="h-4 w-4" />}>
          Envoyer ma candidature
        </Button>
      </div>
    </form>
  );
}
