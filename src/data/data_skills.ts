import { SkillList } from "_pages/CuriculumVitae/components/Content/components/SkillsList/SkillsList.types";

export const DATA_SKILLS: SkillList = [
  {
    catégorie: "UX/UI",
    masterList: [
      {
        name: "Figma",
        duration: "3 ans",
      },
      {
        name: "Adobe XD",
        duration: "2 ans",
      },
    ],
    juniorList: [],
  },
  {
    catégorie: "Développement Web",
    masterList: [
      {
        name: "ReactJS",
        duration: "3 ans",
      },
      {
        name: "NextJS",
        duration: "1 ans",
      },
      {
        name: "Strapi",
        duration: "1 ans",
      },
      {
        name: "PostCSS",
        duration: "1 ans",
      },
      {
        name: "SCSS",
        duration: "2 ans",
      },
      {
        name: "Redux Toolkit",
      },
    ],
    juniorList: [],
  },
  {
    catégorie: "Développement autre",
    masterList: [
      {
        name: "ReactNative",
        duration: "2 ans",
        note: "Utilisé également pour l'application Warstat (voir Portefolio)",
      },
      {
        name: "Git",
        duration: "6 ans",
      },
      {
        name: "C/C++",
        duration: "2 ans",
      },
    ],
    juniorList: [
      {
        name: "Python",
        note: "Utilisation pour un projet de pilotage de drones en école (1 ans)",
      },
      {
        name: "Unity/C#",
      },
    ],
  },
  {
    catégorie: "OS",
    masterList: [
      {
        name: "MAC",
        duration: "3 ans",
      },
      {
        name: "OS Linux",
        duration: "2 ans",
      },
    ],
    juniorList: [
      {
        name: "Windows",
      },
    ],
  },

  {
    catégorie: "Outils Graphiques",
    masterList: [
      {
        name: "Illustrator",
        duration: "2 ans",
      },
      {
        name: "Photoshop",
        duration: "2 ans",
      },
    ],
    juniorList: [],
  },
  {
    catégorie: "Méthodologie",
    masterList: [
      {
        name: "Agile",
        duration: "2 ans",
      },
      {
        name: "Cycle en V",
        duration: "2 ans",
      },
      {
        name: "Autonomie",
        duration: "1 ans",
      },
    ],
    juniorList: [],
  },
  {
    catégorie: "Encadrement",
    masterList: [
      {
        name: "SCRUM Master",
        duration: "1 ans",
        note: "",
      },
      {
        name: "Equipe de 2 ingénieurs",
        duration: "3 mois",
        note: "Menant le choix de refonte complète du projet, j'ai pu coordonner deux jeunes ingénieurs de manière décomposer le programme en module pour en assurrer la maintenabilité.",
      },
      {
        name: "Président d’association",
        duration: "1 ans",
        note: "En 2015, direction d'un club de musique composé de 12 membres du bureau, 70 adhérents\nOrguanisation de diverses concerts\nCréation de l'ESIGELEC à un Incroyable talent",
      },
    ],
    juniorList: [],
  },
  {
    catégorie: "Langues",
    masterList: [
      {
        name: "Français",
        duration: "",
        note: "Langue maternelle",
      },
      {
        name: "Anglais",
        duration: "",
        note: "Courant",
      },
    ],
    juniorList: [
      {
        name: "Espagnol",
        note: "Notion",
      },
    ],
  },
];

export default DATA_SKILLS;
