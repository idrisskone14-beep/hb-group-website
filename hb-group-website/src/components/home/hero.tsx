"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { SITE, buildTelLink } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px circle at 15% 20%, rgba(245,23,31,0.35), transparent 55%), radial-gradient(900px circle at 85% 75%, rgba(22,169,202,0.32), transparent 55%), linear-gradient(160deg, #14161a 0%, #1f2227 55%, #14161a 100%)",
        }}
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-xl relative flex min-h-[88vh] flex-col justify-center py-28 sm:py-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm"
        >
          {`Plus de ${SITE.yearsOfExperience} ans d'expérience en Côte d'Ivoire`}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Votre partenaire multisectoriel pour{" "}
          <span className="text-gradient-brand">construire l&apos;avenir</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/devis" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Demander un devis
          </Button>
          <Button href="/services" size="lg" variant="secondary">
            Découvrir nos services
          </Button>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          href={buildTelLink()}
          className="focus-ring mt-10 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-400 hover:bg-white/10"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600">
            <Phone className="h-4 w-4 text-white" />
          </span>
          {SITE.phoneDisplay}
        </motion.a>
      </div>
    </section>
  );
}
