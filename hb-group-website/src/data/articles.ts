export type Article = {
  slug: string;
  title: string;
  category: "Blog" | "Communiqué" | "Article" | "Événement";
  excerpt: string;
  content: string[];
  date: string;
  author: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "hb-group-renforce-pole-logistique",
    title: "HB GROUP SARL renforce son pôle logistique pour mieux servir ses clients",
    category: "Communiqué",
    excerpt:
      "Dans une dynamique de croissance continue, HB GROUP SARL annonce le renforcement de ses capacités logistiques.",
    content: [
      "HB GROUP SARL poursuit son développement en renforçant ses capacités opérationnelles dans le domaine de la logistique et du transport.",
      "Cette évolution s'inscrit dans notre volonté constante d'offrir à nos clients des délais toujours plus courts et une traçabilité optimale de leurs marchandises.",
      "Nous remercions nos clients et partenaires pour leur confiance renouvelée.",
    ],
    date: "2026-03-12",
    author: "Direction Générale",
  },
  {
    slug: "importance-etude-hydrogeologique-forage",
    title: "Pourquoi une étude hydrogéologique est indispensable avant tout forage",
    category: "Article",
    excerpt:
      "Un forage réussi repose avant tout sur une étude technique rigoureuse. Voici pourquoi cette étape ne doit jamais être négligée.",
    content: [
      "Avant tout projet de forage, une étude hydrogéologique permet d'identifier les zones les plus favorables à la présence d'une nappe exploitable.",
      "Cette étape réduit considérablement les risques d'échec et garantit la durabilité de l'ouvrage réalisé.",
      "Chez HB GROUP SARL, chaque projet de forage débute systématiquement par cette phase d'étude, gage de qualité et de fiabilité pour nos clients.",
    ],
    date: "2026-02-18",
    author: "Pôle Forage",
  },
  {
    slug: "participation-salon-professionnel-abidjan",
    title: "HB GROUP SARL participe au Salon des Professionnels de l'Import-Export",
    category: "Événement",
    excerpt:
      "Notre équipe a représenté HB GROUP SARL lors d'un salon professionnel dédié au commerce international.",
    content: [
      "HB GROUP SARL a pris part à un salon professionnel réunissant les acteurs du commerce international à Abidjan.",
      "Cet événement a été l'occasion d'échanger avec de nombreux partenaires potentiels et de présenter notre offre multisectorielle.",
      "Nous remercions les organisateurs pour la qualité de cet événement.",
    ],
    date: "2026-01-22",
    author: "Direction Commerciale",
  },
  {
    slug: "conseils-choisir-mobilier-bureau",
    title: "5 conseils pour bien choisir le mobilier de vos bureaux professionnels",
    category: "Blog",
    excerpt:
      "Ergonomie, durabilité, esthétique : nos conseils pour aménager des espaces de travail à la fois fonctionnels et élégants.",
    content: [
      "Le choix du mobilier de bureau impacte directement le confort et la productivité des équipes.",
      "Privilégier l'ergonomie, la durabilité des matériaux et la cohérence avec l'image de l'entreprise sont des critères essentiels.",
      "Notre équipe accompagne chaque client dans cette réflexion, du conseil à l'installation.",
    ],
    date: "2025-12-05",
    author: "Pôle Mobilier Professionnel",
  },
  {
    slug: "hb-group-sept-ans-experience",
    title: "HB GROUP SARL célèbre plus de 7 ans d'accompagnement multisectoriel",
    category: "Communiqué",
    excerpt:
      "Retour sur sept années d'engagement au service des entreprises, administrations et particuliers ivoiriens.",
    content: [
      "Depuis sa création, HB GROUP SARL a accompagné des dizaines de clients à travers onze secteurs d'activité.",
      "Cette croissance repose sur une exigence constante de qualité, de rigueur et de proximité avec nos clients.",
      "Nous nous engageons à poursuivre cette dynamique dans les années à venir.",
    ],
    date: "2025-11-10",
    author: "Direction Générale",
  },
  {
    slug: "role-intermediation-developpement-affaires",
    title: "Le rôle clé de l'intermédiation dans le développement des affaires en Côte d'Ivoire",
    category: "Article",
    excerpt:
      "Comment un intermédiaire de confiance peut accélérer la concrétisation de vos projets d'affaires.",
    content: [
      "Dans un environnement économique en constante évolution, la mise en relation avec les bons partenaires est souvent déterminante.",
      "HB GROUP SARL met à profit son réseau et sa connaissance du tissu économique local pour faciliter ces rapprochements.",
      "Confidentialité, rigueur et professionnalisme sont les piliers de notre démarche d'intermédiation.",
    ],
    date: "2025-10-02",
    author: "Pôle Intermédiation",
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((item) => item.slug === slug);
}
