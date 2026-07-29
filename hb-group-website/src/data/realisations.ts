export type Realisation = {
  slug: string;
  title: string;
  sectorSlug: string;
  location: string;
  year: number;
  description: string;
  details: string[];
};

export const REALISATIONS: Realisation[] = [
  {
    slug: "approvisionnement-materiel-industriel-abidjan",
    title: "Approvisionnement en matériel industriel pour une unité de production",
    sectorSlug: "import-export",
    location: "Abidjan, Côte d'Ivoire",
    year: 2024,
    description:
      "Organisation complète de l'importation de matériel industriel : sourcing, transit international et dédouanement.",
    details: [
      "Sélection de fournisseurs internationaux qualifiés",
      "Gestion du transport maritime et du dédouanement",
      "Livraison sur site dans les délais impartis",
    ],
  },
  {
    slug: "equipement-bureaux-administration",
    title: "Équipement complet des bureaux d'une administration régionale",
    sectorSlug: "fourniture-de-bureau",
    location: "Yamoussoukro, Côte d'Ivoire",
    year: 2023,
    description:
      "Fourniture et livraison de matériel et consommables de bureau pour plusieurs services administratifs.",
    details: [
      "Audit des besoins par service",
      "Contrat de fourniture récurrente",
      "Livraison échelonnée sur plusieurs sites",
    ],
  },
  {
    slug: "amenagement-siege-entreprise",
    title: "Aménagement du siège social d'une entreprise du secteur privé",
    sectorSlug: "mobilier-professionnel",
    location: "Abidjan, Côte d'Ivoire",
    year: 2024,
    description:
      "Conception et installation du mobilier de bureaux de direction, open-space et salles de réunion.",
    details: [
      "Étude d'agencement des espaces",
      "Sélection de mobilier ergonomique",
      "Installation complète en moins de trois semaines",
    ],
  },
  {
    slug: "campagne-supports-communication",
    title: "Production de supports de communication pour une campagne institutionnelle",
    sectorSlug: "imprimerie",
    location: "Abidjan, Côte d'Ivoire",
    year: 2023,
    description:
      "Impression de grands volumes d'affiches, brochures et supports événementiels dans des délais courts.",
    details: [
      "Conception graphique en collaboration avec le client",
      "Production en gros volume",
      "Livraison sur plusieurs sites simultanément",
    ],
  },
  {
    slug: "transport-materiel-chantier-btp",
    title: "Transport de matériel lourd pour un chantier de BTP",
    sectorSlug: "transport",
    location: "San-Pédro, Côte d'Ivoire",
    year: 2024,
    description:
      "Acheminement sécurisé d'engins et de matériaux vers un chantier de grande envergure.",
    details: [
      "Planification logistique du transport",
      "Convoi sécurisé de matériel lourd",
      "Livraison dans les délais du chantier",
    ],
  },
  {
    slug: "entreposage-distribution-fmcg",
    title: "Gestion logistique pour un distributeur de produits de grande consommation",
    sectorSlug: "logistique",
    location: "Abidjan, Côte d'Ivoire",
    year: 2023,
    description:
      "Mise en place d'une solution d'entreposage et de distribution pour un réseau de points de vente.",
    details: [
      "Gestion de l'entreposage et des stocks",
      "Organisation de la distribution vers les points de vente",
      "Reporting logistique mensuel",
    ],
  },
  {
    slug: "deploiement-reseau-entreprise",
    title: "Déploiement d'une infrastructure de télécommunication pour une entreprise",
    sectorSlug: "telecommunication",
    location: "Abidjan, Côte d'Ivoire",
    year: 2022,
    description:
      "Fourniture et installation d'équipements réseau pour un site multi-étages.",
    details: [
      "Étude technique du site",
      "Installation des équipements réseau",
      "Tests et mise en service",
    ],
  },
  {
    slug: "forage-puits-communaute-rurale",
    title: "Réalisation d'un forage pour l'approvisionnement en eau d'une communauté rurale",
    sectorSlug: "forage",
    location: "Région du Gbêkê, Côte d'Ivoire",
    year: 2023,
    description:
      "Étude hydrogéologique, forage et équipement de pompage pour sécuriser l'accès à l'eau potable.",
    details: [
      "Prospection hydrogéologique sur site",
      "Réalisation du forage et équipement de pompage",
      "Formation des bénéficiaires à l'entretien",
    ],
  },
  {
    slug: "accompagnement-projet-minier",
    title: "Accompagnement d'un projet minier régional",
    sectorSlug: "mines",
    location: "Région du Zanzan, Côte d'Ivoire",
    year: 2022,
    description:
      "Coordination logistique et administrative pour un opérateur minier en phase d'exploration.",
    details: [
      "Mise en conformité réglementaire",
      "Coordination logistique du site",
      "Mise en relation avec des partenaires techniques",
    ],
  },
  {
    slug: "projet-elevage-avicole",
    title: "Mise en place d'une unité d'élevage avicole",
    sectorSlug: "elevage",
    location: "Bouaké, Côte d'Ivoire",
    year: 2024,
    description:
      "Accompagnement technique et logistique pour le développement d'une exploitation avicole.",
    details: [
      "Étude de faisabilité du projet",
      "Mise en place de l'exploitation",
      "Suivi sanitaire et technique",
    ],
  },
  {
    slug: "constitution-flotte-entreprise",
    title: "Constitution d'une flotte de véhicules pour une entreprise de services",
    sectorSlug: "vente-de-vehicules",
    location: "Abidjan, Côte d'Ivoire",
    year: 2023,
    description:
      "Sélection et livraison d'une flotte de véhicules utilitaires adaptée aux besoins opérationnels du client.",
    details: [
      "Analyse des besoins opérationnels",
      "Sélection et acquisition des véhicules",
      "Livraison et suivi après-vente",
    ],
  },
  {
    slug: "accueil-clientele-affaires",
    title: "Organisation de séjours pour une clientèle d'affaires internationale",
    sectorSlug: "hotellerie",
    location: "Abidjan, Côte d'Ivoire",
    year: 2024,
    description:
      "Coordination de l'hébergement et de l'accueil pour des délégations professionnelles en mission.",
    details: [
      "Réservation et coordination de l'hébergement",
      "Organisation de l'accueil et des transferts",
      "Suivi personnalisé de chaque délégation",
    ],
  },
];

export function getRealisationBySlug(slug: string) {
  return REALISATIONS.find((item) => item.slug === slug);
}
