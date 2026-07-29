import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/data/site";
import { WHY_TRUST_US } from "@/data/company";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Button } from "@/components/ui/button";

export function QuickIntro() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-xl grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[var(--shadow-soft-lg)]">
            <PlaceholderArt seed="quick-intro" icon="Compass" className="h-full w-full" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
            Qui sommes-nous
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Un groupe ivoirien au service de vos projets, sur onze secteurs d&apos;activité
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">
            {SITE.description}
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY_TRUST_US.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/a-propos" variant="outline">
              En savoir plus sur HB Group
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
