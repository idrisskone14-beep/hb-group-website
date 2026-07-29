import { DynamicIcon } from "@/components/ui/dynamic-icon";

const PALETTES = [
  ["#5c070b", "#f5171f"],
  ["#073f48", "#16a9ca"],
  ["#2d3138", "#565f69"],
  ["#8a0a10", "#f34d4b"],
  ["#0c6f86", "#5cc8dd"],
];

function hashSeed(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function PlaceholderArt({
  seed,
  icon,
  className = "",
}: {
  seed: string;
  icon?: string;
  className?: string;
}) {
  const hash = hashSeed(seed);
  const [from, to] = PALETTES[hash % PALETTES.length];
  const angle = (hash % 6) * 30 + 15;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <circle cx={(hash % 100) + 40} cy={(hash % 60) + 20} r="70" fill="white" fillOpacity="0.15" />
        <circle cx={160 - (hash % 50)} cy={150} r="90" fill="white" fillOpacity="0.08" />
        <path
          d="M0 160 Q 50 120 100 150 T 200 130 V200 H0 Z"
          fill="white"
          fillOpacity="0.08"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <DynamicIcon name={icon ?? "Sparkles"} className="h-10 w-10 text-white/70" strokeWidth={1.5} />
      </div>
    </div>
  );
}
