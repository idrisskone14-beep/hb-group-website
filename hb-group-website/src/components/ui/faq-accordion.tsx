"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-soft)]">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-sm font-bold text-ink-800 sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
