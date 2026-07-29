import type { Metadata } from "next";
import { Eye, Target, CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Button } from "@/components/ui/button";
import { HISTORY, MISSION, VISION, VALUES, CEO_MESSAGE, WHY_TRUST_US } from "@/data/company";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission, la vision et les valeurs de HB GROUP SARL, groupe multisectoriel ivoirien avec plus de 7 ans d'expérience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos de nous"
        title="Une entreprise ivoirienne, un engagement multisectoriel"
        subtitle={`Depuis ${SITE.foundedYear}, HB GROUP SARL construit, projet après projet, une réputation de rigueur et de professionnalisme.`}
        breadcrumb={[{ label: "À propos" }]}
      />

      <section className="py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[var(--shadow-soft-lg)]">
              <PlaceholderArt seed="notre-histoire" icon="Building2" className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
              {HISTORY.title}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Une croissance construite sur la confiance
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-500">
              {HISTORY.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <RevealGroup className="container-xl grid grid-cols-1 gap-6 md:grid-cols-2">
          <RevealItem className="rounded-2xl bg-white p-9 shadow-[var(--shadow-soft)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink-800">Notre mission</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-500">{MISSION}</p>
          </RevealItem>
          <RevealItem className="rounded-2xl bg-white p-9 shadow-[var(--shadow-soft)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink-800">Notre vision</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-500">{VISION}</p>
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Les principes qui guident chacune de nos actions"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <RevealItem
                key={value.title}
                className="rounded-2xl border border-ink-100 p-7 transition hover:border-brand-200 hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-lg font-bold text-ink-800">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="text-center lg:text-left">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-3xl font-bold text-white lg:mx-0">
              DG
            </div>
            <p className="mt-5 font-display text-lg font-bold text-white">{CEO_MESSAGE.name}</p>
            <p className="text-sm text-white/60">{CEO_MESSAGE.role}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="h-10 w-10 text-brand-500" />
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-white/80">
              {CEO_MESSAGE.message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Pourquoi nous faire confiance"
            title="Des raisons concrètes de choisir HB Group"
          />
          <RevealGroup className="mt-12 mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_TRUST_US.map((item) => (
              <RevealItem
                key={item}
                className="flex items-start gap-3 rounded-xl bg-ink-50 p-5 text-sm font-medium text-ink-700"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                {item}
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" size="lg">
              Discutons de votre projet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
