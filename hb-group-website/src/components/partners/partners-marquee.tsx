import { PARTNERS } from "@/data/partners";
import { SectionHeading } from "@/components/ui/section-heading";

export function PartnersMarquee({ withHeading = true }: { withHeading?: boolean }) {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-xl">
        {withHeading ? (
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="Nos partenaires"
            subtitle="HB GROUP SARL collabore avec un réseau de partenaires solides à travers ses différents secteurs d'activité."
          />
        ) : null}
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[var(--animate-marquee)] gap-6">
          {loop.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-24 w-56 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border border-ink-100 bg-ink-50 px-6 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-[var(--shadow-soft)]"
            >
              <span className="font-display text-sm font-bold text-ink-700">{partner.name}</span>
              <span className="text-xs text-ink-400">{partner.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
