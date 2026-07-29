import { WHY_CHOOSE_US } from "@/data/company";
import { getIcon } from "@/lib/icon-map";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Pourquoi choisir HB Group"
          title="Un partenaire fiable pour chaque étape de votre projet"
          subtitle="Notre approche repose sur des principes simples, appliqués avec la même rigueur sur chacun de nos onze secteurs d'activité."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <RevealItem
                key={item.title}
                className="rounded-2xl border border-ink-100 p-7 transition hover:border-accent-200 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-ink-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
