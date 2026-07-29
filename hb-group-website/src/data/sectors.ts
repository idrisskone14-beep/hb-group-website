export type Sector = {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  heroDescription: string;
  intro: string[];
  prestations: string[];
  whyUs: string[];
  gallery: { caption: string }[];
};

export const SECTORS: Sector[] = [
  {
    slug: "import-export",
    name: "Import-Export",
    icon: "Ship",
    shortDescription:
      "Approvisionnement international et exportation de marchandises avec un accompagnement douanier complet.",
    heroDescription:
      "HB GROUP SARL facilite vos opérations commerciales internationales, de la sélection des fournisseurs jusqu'à la livraison finale en Côte d'Ivoire.",
    intro: [
      "Fort de plusieurs années d'expérience dans le commerce international, HB GROUP SARL accompagne les entreprises, administrations et particuliers dans leurs opérations d'import-export.",
      "Notre réseau de partenaires internationaux et notre maîtrise des procédures douanières nous permettent de sécuriser vos flux de marchandises, de réduire les délais et d'optimiser les coûts logistiques.",
    ],
    prestations: [
      "Sourcing et négociation avec des fournisseurs internationaux",
      "Gestion des formalités douanières et documentaires",
      "Transit et transport international (maritime, aérien, routier)",
      "Dédouanement et mise en conformité réglementaire",
      "Suivi logistique de bout en bout",
      "Conseil en stratégie d'approvisionnement",
    ],
    whyUs: [
      "Réseau international de fournisseurs et transitaires fiables",
      "Maîtrise des procédures douanières ivoiriennes et régionales",
      "Suivi transparent de chaque opération",
      "Réduction des délais et des coûts",
    ],
    gallery: [
      { caption: "Chargement conteneur au port d'Abidjan" },
      { caption: "Contrôle qualité marchandises" },
      { caption: "Suivi documentaire import-export" },
    ],
  },
  {
    slug: "fourniture-de-bureau",
    name: "Fourniture de bureau",
    icon: "Briefcase",
    shortDescription:
      "Équipements et consommables de bureau pour entreprises et administrations.",
    heroDescription:
      "Une offre complète de fournitures de bureau pour équiper durablement vos espaces de travail avec qualité et réactivité.",
    intro: [
      "HB GROUP SARL fournit aux entreprises, administrations et institutions un large catalogue de matériel et consommables de bureau, avec un service de livraison rapide sur l'ensemble du territoire.",
      "Nous accompagnons nos clients dans la définition de leurs besoins récurrents afin de proposer des contrats de fourniture adaptés à leur consommation réelle.",
    ],
    prestations: [
      "Papeterie et consommables d'impression",
      "Matériel informatique et accessoires de bureau",
      "Contrats de fourniture récurrente pour entreprises",
      "Livraison rapide sur site",
      "Conseil en équipement de bureau",
      "Gestion des commandes en gros volume",
    ],
    whyUs: [
      "Catalogue étendu et approvisionnement fiable",
      "Tarifs adaptés aux commandes en volume",
      "Livraison rapide à Abidjan et à l'intérieur du pays",
      "Interlocuteur unique pour tous vos besoins",
    ],
    gallery: [
      { caption: "Stock de fournitures de bureau" },
      { caption: "Préparation de commande entreprise" },
      { caption: "Livraison de matériel de bureau" },
    ],
  },
  {
    slug: "mobilier-professionnel",
    name: "Mobilier professionnel",
    icon: "Armchair",
    shortDescription:
      "Aménagement et équipement mobilier pour bureaux, administrations et espaces recevant du public.",
    heroDescription:
      "HB GROUP SARL conçoit et fournit du mobilier professionnel durable et élégant pour aménager vos espaces de travail.",
    intro: [
      "De la conception à l'installation, notre équipe accompagne les entreprises et administrations dans l'aménagement de leurs bureaux, salles de réunion et espaces d'accueil.",
      "Nous sélectionnons du mobilier robuste, ergonomique et esthétique, adapté aux contraintes budgétaires et fonctionnelles de chaque client.",
    ],
    prestations: [
      "Bureaux, sièges et mobilier de direction",
      "Aménagement de salles de réunion",
      "Mobilier pour espaces d'accueil et open-space",
      "Conseil en agencement d'espaces",
      "Livraison et installation sur site",
      "Mobilier sur mesure pour projets spécifiques",
    ],
    whyUs: [
      "Sélection de mobilier durable et ergonomique",
      "Accompagnement de la conception à l'installation",
      "Solutions adaptées à tous les budgets",
      "Réactivité sur les projets d'aménagement",
    ],
    gallery: [
      { caption: "Aménagement de bureau de direction" },
      { caption: "Salle de réunion équipée" },
      { caption: "Installation de mobilier professionnel" },
    ],
  },
  {
    slug: "imprimerie",
    name: "Imprimerie",
    icon: "Printer",
    shortDescription:
      "Solutions d'impression professionnelle : documents d'entreprise, supports commerciaux et signalétique.",
    heroDescription:
      "Un service d'imprimerie professionnelle pour donner une image cohérente et soignée à votre communication.",
    intro: [
      "HB GROUP SARL propose des services d'impression pour les entreprises, administrations et organisations souhaitant produire des supports de communication de qualité.",
      "Cartes de visite, brochures, documents administratifs, supports événementiels : notre équipe s'adapte à chaque besoin avec exigence et rapidité.",
    ],
    prestations: [
      "Impression de documents administratifs et commerciaux",
      "Cartes de visite, flyers et brochures",
      "Supports de communication événementielle",
      "Signalétique et supports grand format",
      "Conseil en identité visuelle imprimée",
      "Impression de gros volumes pour entreprises",
    ],
    whyUs: [
      "Qualité d'impression professionnelle",
      "Délais de production maîtrisés",
      "Accompagnement sur la conception graphique",
      "Tarifs compétitifs pour les gros volumes",
    ],
    gallery: [
      { caption: "Production de supports imprimés" },
      { caption: "Contrôle qualité impression" },
      { caption: "Supports de communication finalisés" },
    ],
  },
  {
    slug: "transport",
    name: "Transport",
    icon: "Truck",
    shortDescription:
      "Solutions de transport de marchandises et de personnel adaptées à vos exigences opérationnelles.",
    heroDescription:
      "HB GROUP SARL met à votre disposition une flotte fiable pour vos besoins de transport de marchandises et de personnes.",
    intro: [
      "Notre pôle transport accompagne les entreprises, chantiers et administrations dans l'acheminement sécurisé de marchandises et le transport de personnel sur l'ensemble du territoire ivoirien.",
      "Nous mettons un point d'honneur au respect des délais et à la sécurité des biens et des personnes transportés.",
    ],
    prestations: [
      "Transport de marchandises sur tout le territoire",
      "Transport de personnel pour entreprises",
      "Location de véhicules avec chauffeur",
      "Transport de matériel et équipements lourds",
      "Suivi en temps réel des livraisons",
      "Solutions de transport sur mesure pour chantiers",
    ],
    whyUs: [
      "Flotte entretenue et conducteurs expérimentés",
      "Respect strict des délais convenus",
      "Couverture nationale",
      "Sécurité des marchandises et des personnes",
    ],
    gallery: [
      { caption: "Flotte de transport HB Group" },
      { caption: "Transport de marchandises" },
      { caption: "Transport de personnel d'entreprise" },
    ],
  },
  {
    slug: "logistique",
    name: "Logistique",
    icon: "Warehouse",
    shortDescription:
      "Gestion logistique intégrée : entreposage, gestion de stock et distribution.",
    heroDescription:
      "Une chaîne logistique optimisée pour garantir la disponibilité et la traçabilité de vos marchandises.",
    intro: [
      "HB GROUP SARL propose des solutions logistiques complètes pour les entreprises souhaitant externaliser tout ou partie de leur chaîne d'approvisionnement.",
      "De l'entreposage à la distribution finale, nous assurons une gestion rigoureuse et traçable de vos flux de marchandises.",
    ],
    prestations: [
      "Entreposage et gestion de stock",
      "Préparation et distribution de commandes",
      "Gestion de la chaîne d'approvisionnement",
      "Traçabilité et reporting logistique",
      "Optimisation des flux de marchandises",
      "Logistique événementielle et de chantier",
    ],
    whyUs: [
      "Maîtrise de la chaîne logistique de bout en bout",
      "Traçabilité rigoureuse des marchandises",
      "Réduction des délais de distribution",
      "Solutions adaptées à chaque secteur d'activité",
    ],
    gallery: [
      { caption: "Espace d'entreposage" },
      { caption: "Préparation de commandes" },
      { caption: "Distribution de marchandises" },
    ],
  },
  {
    slug: "telecommunication",
    name: "Télécommunication",
    icon: "Signal",
    shortDescription:
      "Solutions et équipements de télécommunication pour entreprises et particuliers.",
    heroDescription:
      "HB GROUP SARL accompagne ses clients dans le déploiement de solutions de télécommunication fiables et modernes.",
    intro: [
      "Notre pôle télécommunication propose des solutions adaptées aux besoins de connectivité des entreprises, administrations et particuliers.",
      "Nous accompagnons nos clients dans le choix, la fourniture et l'installation d'équipements de télécommunication performants.",
    ],
    prestations: [
      "Fourniture d'équipements de télécommunication",
      "Installation de solutions réseau pour entreprises",
      "Conseil en infrastructure de connectivité",
      "Maintenance d'équipements de télécommunication",
      "Solutions de téléphonie pour entreprises",
      "Accompagnement de projets de déploiement réseau",
    ],
    whyUs: [
      "Expertise technique en télécommunication",
      "Équipements fiables et performants",
      "Accompagnement personnalisé de chaque projet",
      "Service après-vente réactif",
    ],
    gallery: [
      { caption: "Installation d'équipement télécom" },
      { caption: "Infrastructure réseau entreprise" },
      { caption: "Maintenance télécommunication" },
    ],
  },
  {
    slug: "forage",
    name: "Forage",
    icon: "Drill",
    shortDescription:
      "Forage de puits et solutions d'accès à l'eau pour particuliers, entreprises et collectivités.",
    heroDescription:
      "HB GROUP SARL réalise des travaux de forage pour garantir un accès fiable à l'eau, où que se trouve votre projet.",
    intro: [
      "Nous réalisons des études, forages et équipements de puits pour répondre aux besoins en eau des particuliers, entreprises agricoles, industries et collectivités.",
      "Chaque projet de forage est précédé d'une étude technique rigoureuse afin de garantir la fiabilité et la durabilité de l'ouvrage.",
    ],
    prestations: [
      "Étude de faisabilité et prospection hydrogéologique",
      "Forage de puits pour particuliers et entreprises",
      "Équipement de pompage et château d'eau",
      "Forage pour projets agricoles et industriels",
      "Maintenance et réhabilitation de forages existants",
      "Accompagnement administratif des projets de forage",
    ],
    whyUs: [
      "Études techniques rigoureuses avant travaux",
      "Matériel de forage adapté à chaque terrain",
      "Respect des normes de qualité de l'eau",
      "Accompagnement jusqu'à la mise en service",
    ],
    gallery: [
      { caption: "Chantier de forage en cours" },
      { caption: "Équipement de pompage installé" },
      { caption: "Étude hydrogéologique sur site" },
    ],
  },
  {
    slug: "mines",
    name: "Mines",
    icon: "Mountain",
    shortDescription:
      "Accompagnement de projets miniers et intermédiation dans le secteur des ressources naturelles.",
    heroDescription:
      "HB GROUP SARL accompagne les acteurs du secteur minier avec rigueur, conformité et professionnalisme.",
    intro: [
      "Notre pôle mines accompagne les investisseurs et opérateurs dans la structuration et le suivi de projets liés aux ressources minières en Côte d'Ivoire.",
      "Nous veillons au respect des cadres réglementaires en vigueur et à la sécurisation des opérations sur le terrain.",
    ],
    prestations: [
      "Accompagnement de projets miniers",
      "Intermédiation entre opérateurs et partenaires",
      "Conseil en conformité réglementaire du secteur minier",
      "Coordination logistique de sites miniers",
      "Mise en relation avec des experts techniques",
      "Suivi administratif de dossiers miniers",
    ],
    whyUs: [
      "Connaissance approfondie du secteur minier local",
      "Réseau de partenaires et experts qualifiés",
      "Respect strict des cadres réglementaires",
      "Accompagnement discret et professionnel",
    ],
    gallery: [
      { caption: "Coordination de projet minier" },
      { caption: "Suivi de site d'exploitation" },
      { caption: "Réunion technique sectorielle" },
    ],
  },
  {
    slug: "intermediation",
    name: "Intermédiation",
    icon: "Handshake",
    shortDescription:
      "Mise en relation et intermédiation commerciale entre porteurs de projets et partenaires stratégiques.",
    heroDescription:
      "HB GROUP SARL facilite vos opérations d'affaires en mettant en relation les bons partenaires au bon moment.",
    intro: [
      "Grâce à notre réseau d'entreprises, d'investisseurs et d'institutions, nous accompagnons nos clients dans la recherche de partenaires fiables pour leurs projets.",
      "Notre rôle d'intermédiaire s'appuie sur la confidentialité, la rigueur et une parfaite connaissance du tissu économique ivoirien.",
    ],
    prestations: [
      "Mise en relation avec des partenaires d'affaires",
      "Négociation et structuration d'accords commerciaux",
      "Accompagnement d'investisseurs et de porteurs de projets",
      "Facilitation de démarches administratives",
      "Conseil stratégique en développement d'affaires",
      "Représentation commerciale",
    ],
    whyUs: [
      "Réseau étendu d'affaires en Côte d'Ivoire",
      "Confidentialité et intégrité de chaque mise en relation",
      "Accompagnement personnalisé selon chaque projet",
      "Connaissance fine du contexte économique local",
    ],
    gallery: [
      { caption: "Réunion de mise en relation d'affaires" },
      { caption: "Signature d'accord de partenariat" },
      { caption: "Accompagnement d'investisseurs" },
    ],
  },
  {
    slug: "elevage",
    name: "Élevage",
    icon: "Beef",
    shortDescription:
      "Production et accompagnement de projets d'élevage pour un approvisionnement local durable.",
    heroDescription:
      "HB GROUP SARL développe des activités d'élevage pour contribuer à la souveraineté alimentaire et à un approvisionnement de qualité.",
    intro: [
      "Notre pôle élevage participe au développement de filières animales durables, dans le respect des normes sanitaires et environnementales.",
      "Nous accompagnons également des projets d'élevage pour des tiers, de la conception à la mise en exploitation.",
    ],
    prestations: [
      "Production animale et gestion d'élevage",
      "Conseil en montage de projets d'élevage",
      "Approvisionnement en produits d'élevage",
      "Suivi sanitaire et vétérinaire des cheptels",
      "Accompagnement de coopératives et particuliers",
      "Commercialisation de produits d'élevage",
    ],
    whyUs: [
      "Respect des normes sanitaires en vigueur",
      "Accompagnement technique de bout en bout",
      "Approche durable et responsable",
      "Qualité constante des produits fournis",
    ],
    gallery: [
      { caption: "Exploitation d'élevage HB Group" },
      { caption: "Suivi sanitaire du cheptel" },
      { caption: "Production d'élevage durable" },
    ],
  },
  {
    slug: "vente-de-vehicules",
    name: "Vente de véhicules",
    icon: "Car",
    shortDescription:
      "Vente de véhicules neufs et d'occasion pour particuliers, entreprises et administrations.",
    heroDescription:
      "HB GROUP SARL propose une gamme de véhicules fiables adaptés aux besoins professionnels et personnels de ses clients.",
    intro: [
      "Nous accompagnons nos clients dans l'acquisition de véhicules adaptés à leurs usages : véhicules de service, utilitaires, véhicules de tourisme ou flottes d'entreprise.",
      "Notre équipe conseille chaque client sur le choix du véhicule le plus adapté à son budget et à ses besoins opérationnels.",
    ],
    prestations: [
      "Vente de véhicules neufs et d'occasion",
      "Constitution de flottes pour entreprises et administrations",
      "Conseil en acquisition de véhicules professionnels",
      "Accompagnement dans les démarches administratives",
      "Mise en relation avec des partenaires de financement",
      "Service après-vente et suivi client",
    ],
    whyUs: [
      "Sélection rigoureuse de véhicules fiables",
      "Accompagnement personnalisé selon l'usage",
      "Transparence sur l'état et l'historique des véhicules",
      "Suivi après-vente de qualité",
    ],
    gallery: [
      { caption: "Gamme de véhicules disponibles" },
      { caption: "Remise de véhicule à un client entreprise" },
      { caption: "Contrôle qualité avant livraison" },
    ],
  },
  {
    slug: "hotellerie",
    name: "Hôtellerie",
    icon: "BedDouble",
    shortDescription:
      "Prestations hôtelières et d'accueil pour une expérience client raffinée.",
    heroDescription:
      "HB GROUP SARL développe des activités hôtelières alliant confort, qualité de service et sens de l'accueil.",
    intro: [
      "Notre pôle hôtellerie propose des prestations d'hébergement et d'accueil pensées pour répondre aux exigences des voyageurs d'affaires comme de loisirs.",
      "Nous accompagnons également des porteurs de projets hôteliers dans le développement et l'exploitation de leurs établissements.",
    ],
    prestations: [
      "Prestations d'hébergement et d'accueil",
      "Organisation de séjours professionnels",
      "Conseil en développement de projets hôteliers",
      "Gestion d'établissements d'accueil",
      "Services de restauration et événementiel",
      "Accompagnement de la clientèle d'affaires",
    ],
    whyUs: [
      "Sens du service et de l'accueil",
      "Standards de qualité constants",
      "Accompagnement de projets hôteliers clé en main",
      "Expérience client personnalisée",
    ],
    gallery: [
      { caption: "Espace d'accueil hôtelier" },
      { caption: "Service client hôtellerie" },
      { caption: "Prestation événementielle" },
    ],
  },
  {
    slug: "prestations-diverses",
    name: "Prestations diverses",
    icon: "Sparkles",
    shortDescription:
      "Des solutions sur mesure pour tous les projets qui ne rentrent pas dans un cadre classique.",
    heroDescription:
      "HB GROUP SARL met son expertise multisectorielle au service de projets spécifiques nécessitant une approche sur mesure.",
    intro: [
      "Certains projets ne correspondent à aucune catégorie standard : HB GROUP SARL propose alors des prestations sur mesure, adaptées aux besoins précis de chaque client.",
      "Notre expertise transversale nous permet de mobiliser rapidement les ressources humaines et matérielles nécessaires à la réussite de votre projet.",
    ],
    prestations: [
      "Études et conseils sur mesure",
      "Gestion de projets multisectoriels",
      "Prestations ponctuelles pour entreprises et particuliers",
      "Coordination de prestataires spécialisés",
      "Accompagnement administratif divers",
      "Solutions adaptées à des besoins spécifiques",
    ],
    whyUs: [
      "Flexibilité et réactivité sur des projets atypiques",
      "Expertise transversale multisectorielle",
      "Écoute attentive de chaque besoin client",
      "Solutions sur mesure et personnalisées",
    ],
    gallery: [
      { caption: "Accompagnement de projet sur mesure" },
      { caption: "Coordination multisectorielle" },
      { caption: "Prestation ponctuelle client" },
    ],
  },
];

export function getSectorBySlug(slug: string) {
  return SECTORS.find((sector) => sector.slug === slug);
}
