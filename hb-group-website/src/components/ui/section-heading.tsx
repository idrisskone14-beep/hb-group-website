import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <span
          className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest ${
            light
              ? "border-white/25 text-white/90"
              : "border-brand-200 text-brand-600 bg-brand-50"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-800"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-ink-500"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
