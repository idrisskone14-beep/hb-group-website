export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Konan A.",
    role: "Directeur Général",
    company: "Entreprise industrielle, Abidjan",
    quote:
      "HB GROUP SARL a su gérer l'ensemble de nos importations avec un professionnalisme remarquable. Les délais annoncés ont toujours été respectés.",
    rating: 5,
  },
  {
    name: "Fatou D.",
    role: "Responsable Administrative",
    company: "Administration publique",
    quote:
      "Un partenaire fiable pour l'équipement de nos bureaux. La réactivité et le sérieux de l'équipe font toute la différence.",
    rating: 5,
  },
  {
    name: "Yves K.",
    role: "Directeur des Opérations",
    company: "Groupe de distribution",
    quote:
      "La gestion logistique confiée à HB GROUP SARL nous a permis de gagner en efficacité sur l'ensemble de notre chaîne de distribution.",
    rating: 5,
  },
  {
    name: "Aminata T.",
    role: "Promotrice",
    company: "Exploitation agricole, Bouaké",
    quote:
      "L'accompagnement pour notre projet d'élevage a été précieux, de l'étude de faisabilité jusqu'au suivi technique.",
    rating: 4,
  },
  {
    name: "Serge B.",
    role: "Chef de projet",
    company: "Opérateur du BTP",
    quote:
      "Le forage réalisé pour notre chantier a été mené avec sérieux et rigueur technique. Résultat à la hauteur de nos attentes.",
    rating: 5,
  },
  {
    name: "Mariam C.",
    role: "Directrice Générale",
    company: "PME de services, Abidjan",
    quote:
      "Grâce à l'intermédiation de HB GROUP SARL, nous avons pu concrétiser un partenariat stratégique en un temps record.",
    rating: 5,
  },
];
