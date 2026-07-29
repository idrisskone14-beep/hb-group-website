export const SITE = {
  name: "HB GROUP SARL",
  legalName: "HB GROUP SARL",
  tagline: "Votre partenaire multisectoriel pour construire l'avenir",
  description:
    "Depuis plus de 7 ans, HB GROUP SARL accompagne les entreprises, les administrations, les investisseurs et les particuliers en Côte d'Ivoire dans la réalisation de leurs projets grâce à des solutions professionnelles multisectorielles.",
  url: "https://www.hbgroup-ci.com",
  foundedYear: 2017,
  yearsOfExperience: 7,
  phoneDisplay: "+225 07 08 43 10 14",
  phoneIntl: "+2250708431014",
  whatsappNumber: "2250708431014",
  email: "contact@hbgroup-ci.com",
  address: {
    street: "Abidjan, Côte d'Ivoire",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    mapsQuery: "Abidjan, Côte d'Ivoire",
  },
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;

export const KEY_STATS = [
  { value: 7, suffix: "+", label: "Ans d'expérience" },
  { value: 11, suffix: "", label: "Secteurs d'activités" },
  { value: 40, suffix: "+", label: "Projets réalisés" },
  { value: 20, suffix: "+", label: "Partenaires de confiance" },
] as const;

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildTelLink() {
  return `tel:${SITE.phoneIntl}`;
}
