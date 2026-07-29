import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function TestimonialsSection() {
  return (
    <section className="bg-ink-50 py-24 sm:py-28">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Avis clients"
          title="La confiance de nos clients, notre meilleure référence"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <RevealItem
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <Quote className="h-7 w-7 text-brand-200" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                &laquo; {testimonial.quote} &raquo;
              </p>
              <div className="mt-6 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "fill-brand-500 text-brand-500" : "text-ink-200"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-ink-100 pt-4">
                <p className="text-sm font-bold text-ink-800">{testimonial.name}</p>
                <p className="text-xs text-ink-400">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
