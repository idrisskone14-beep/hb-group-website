import { KEY_STATS } from "@/data/site";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="relative bg-ink-900 py-16">
      <div className="container-xl">
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {KEY_STATS.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
