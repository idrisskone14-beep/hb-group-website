"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { buildTelLink, buildWhatsAppLink } from "@/data/site";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="flex flex-col gap-2 rounded-2xl border border-ink-100 bg-white p-3 shadow-[var(--shadow-soft-lg)]">
          <a
            href={buildWhatsAppLink(
              "Bonjour HB GROUP SARL, je souhaite obtenir des informations sur vos services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-3 rounded-xl bg-[#25D366]/10 px-4 py-3 text-sm font-semibold text-[#128C4A] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle className="h-5 w-5" />
            Discuter sur WhatsApp
          </a>
          <a
            href={buildTelLink()}
            className="focus-ring flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            <Phone className="h-5 w-5" />
            Appeler maintenant
          </a>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu de contact" : "Ouvrir le menu de contact rapide"}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-soft-lg)] transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
