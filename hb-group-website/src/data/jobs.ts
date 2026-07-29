export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "CDI" | "CDD" | "Stage";
  postedDate: string;
  description: string;
  missions: string[];
  profile: string[];
};

export const JOBS: Job[] = [
  {
    slug: "responsable-logistique",
    title: "Responsable Logistique",
    department: "Logistique",
    location: "Abidjan",
    type: "CDI",
    postedDate: "2026-07-01",
    description:
      "Piloter les opérations d'entreposage, de distribution et de suivi de la chaîne logistique de l'entreprise.",
    missions: [
      "Superviser la gestion des stocks et des entrepôts",
      "Coordonner les livraisons et la distribution",
      "Optimiser les processus logistiques",
      "Encadrer une équipe opérationnelle",
    ],
    profile: [
      "Bac+3 minimum en logistique, transport ou équivalent",
      "3 ans d'expérience minimum sur un poste similaire",
      "Rigueur, sens de l'organisation et leadership",
    ],
  },
  {
    slug: "commercial-import-export",
    title: "Commercial(e) Import-Export",
    department: "Import-Export",
    location: "Abidjan",
    type: "CDI",
    postedDate: "2026-06-18",
    description:
      "Développer le portefeuille clients et gérer les opérations commerciales liées à l'import-export.",
    missions: [
      "Prospecter et fidéliser une clientèle d'entreprises",
      "Négocier avec les fournisseurs internationaux",
      "Assurer le suivi des dossiers d'importation",
      "Participer à la stratégie commerciale du pôle",
    ],
    profile: [
      "Bac+3/4 en commerce international ou équivalent",
      "Expérience en négociation commerciale",
      "Bon niveau d'anglais apprécié",
    ],
  },
  {
    slug: "technicien-forage",
    title: "Technicien(ne) de Forage",
    department: "Forage",
    location: "Mobilité nationale",
    type: "CDI",
    postedDate: "2026-06-05",
    description:
      "Participer à la réalisation technique des chantiers de forage sur l'ensemble du territoire.",
    missions: [
      "Réaliser les opérations de forage sur site",
      "Assurer l'installation des équipements de pompage",
      "Veiller au respect des normes de sécurité",
      "Rendre compte de l'avancement des chantiers",
    ],
    profile: [
      "Formation technique en hydraulique ou forage",
      "Expérience de terrain appréciée",
      "Disponibilité pour déplacements",
    ],
  },
  {
    slug: "assistant-administratif",
    title: "Assistant(e) Administratif(ve) et Commercial(e)",
    department: "Administration",
    location: "Abidjan",
    type: "CDD",
    postedDate: "2026-05-20",
    description:
      "Assurer le support administratif et commercial des différents pôles d'activité de l'entreprise.",
    missions: [
      "Gérer les dossiers administratifs courants",
      "Assurer le suivi des devis et commandes clients",
      "Participer à l'organisation interne",
      "Accueillir et orienter les visiteurs et partenaires",
    ],
    profile: [
      "Bac+2 minimum en gestion ou administration",
      "Bonne maîtrise des outils bureautiques",
      "Sens de l'organisation et discrétion",
    ],
  },
  {
    slug: "stagiaire-communication",
    title: "Stagiaire Communication & Marketing",
    department: "Communication",
    location: "Abidjan",
    type: "Stage",
    postedDate: "2026-05-02",
    description:
      "Accompagner l'équipe communication dans la valorisation des activités et réalisations du groupe.",
    missions: [
      "Participer à la production de contenus pour le site et les réseaux",
      "Contribuer à la couverture des événements de l'entreprise",
      "Assister à la mise à jour des supports de communication",
    ],
    profile: [
      "Étudiant(e) en communication, marketing ou équivalent",
      "Bonne capacité rédactionnelle",
      "Créativité et esprit d'initiative",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return JOBS.find((item) => item.slug === slug);
}
