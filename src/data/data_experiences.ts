import { ImgOpenEra, ImgAusy, ImgIMIPrecision, ImgSafran } from "_assets/index";
import { Experience } from "_pages/CuriculumVitae/components/Content/components/ExperienceList/ExperienceList.types";

export const DATA_EXPERIENCES: Experience[] = [
  {
    id: "6",
    work: "Développeur Front Créatif",
    entreprise: "Open Studio",
    imgRef: undefined,
    location: "Lyon",
    locationRef:
      "https://www.google.com/maps/place/OpenStudio+Lyon/@45.7589456,4.828387,17z/data=!3m2!4b1!5s0x47f4ea537bbc0faf:0xe695c12cb2f62278!4m6!3m5!1s0x47f4ebef884b839b:0xdf1d15b93eedbd66!8m2!3d45.7589419!4d4.8309619!16s%2Fg%2F11nxrqsgj8?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
    date: "Mars 2021 à Mars 2022",
    duration: "2 ans",
    missions: [
      {
        title: "Design d'un outil de travail pour les chercheurs.",
        description:
          "Cette plateforme est à destination des chercheurs IA d'OpenStudio. Elle a pour but d'observer, comprendre et simuler les écosystèmes industriels.\nJ'ai été choisi pour apporter de la structure et des idées à ce projet en lancement notamment sur le design des interfaces.",
        skills: [
          "Figma",
          "ReactJS",
          "SCSS",
          "Git",
          "Docker",
          "VsCode",
          "Agile",
        ],
      },
      {
        title: "Animation d'équipe & développement dans le projet NextGen",
        description:
          "J'ai été chargé de prendre des tâches de Scrum Master : organisation des réunions, suivis,  animation des rituels et amélioration continue.\n\nJe suis intervenu dans le développement de sites de primes à l'énergie comme primes-energie.primagaz.fr, prime-energie-reno.fr, prime-eco-travaux.carrefour.fr, et également plusieurs solutions de back office.",
        skills: [
          "ReactJS",
          "NextJS",
          "PostCSS",
          "Strapi",
          "Git",
          "Docker",
          "VsCode",
          "Agile",
          "SCRUM Master",
        ],
      },
    ],
  },
  {
    id: "5",
    work: "Développeur Front",
    entreprise: "Alten",
    imgRef: undefined,
    location: "Lyon",
    locationRef:
      "https://www.google.com/maps/place/CISCO+LYON/@45.7791303,4.8599008,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4c01c11c5f37b:0xdfb4b50588feb309!8m2!3d45.7791303!4d4.8599008!16s%2Fg%2F11cn96f_m9?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    date: "Mars 2021 à Mars 2022",
    duration: "1 ans",
    missions: [
      {
        title: "Mission chez CISCO",
        description:
          "Ma mission est de concevoir les nouvelles interfaces de l'outil de cybersécurité Cybervision de CISCO dans une équipe de six personnes.\n\nJe me distingue pour mes propositions de mockup pour l'aspect UX de la plateforme, en mutualisant les idées et besoins utilisateurs pour construire plusieurs propositions et également en accompagnant mes collègues sur l'outil FIGMA.\nDéveloppement en React JS avec le concept des Hooks et implémentation du style en SCSS. \n\nJ'en écris un mode d'emploi pour normer les tests d'interfaces pour faire face à un manque de bonnes pratiques. Il sera utilisé par plusieurs équipes.\n\nLa mission s'arrête prématurément, une pénurie de matières premières incite Cisco à se séparer de ses consultants.",
        skills: [
          "ReactJS",
          "SCSS",
          "Git",
          "VsCode",
          "Figma",
          "Agile",
          "Documentation",
        ],
      },
    ],
  },
  {
    id: "4",
    work: "Associé / Product Designer",
    entreprise: "OpenEra",
    imgRef: ImgOpenEra,
    location: "Lyon",
    locationRef:
      "https://www.google.com/maps/place/Lyon/@45.7579341,4.7650812,12z/data=!3m1!4b1!4m5!3m4!1s0x47f4ea516ae88797:0x408ab2ae4bb21f0!8m2!3d45.764043!4d4.835659",
    date: "Décembre 2018 à Août 2020",
    duration: "2 ans",
    missions: [
      {
        title: "Création d’une Start-Up d'applications numériques",
        description:
          "Lancement avec 3 autres associés ingénieurs\n\nÉtude de l’utilisateur type et des solutions actuelles du marché.\nDéfinition du parcours utilisateur, réalisation de Wireframes, et prototype cliquable avec Adobe XD en accord avec les contraintes techniques.\n\nDéveloppement d’un démonstrateur de l’application, réalisation de la partie Front-End en React Native.\nCréation d’assets graphiques avec Illustrator, et Photoshop, et création d’une licence de jeu de rôle de démonstration pour des tests utilisateurs.\nOrganisation de sessions de tests utilisateurs.\n\nRédaction d’un business plan, écriture de spécifications fonctionnelles, organisation en jalons et chiffrage des activités.",
        skills: [
          "ReactNative",
          "Git",
          "Adobe XD",
          "Illustrator",
          "Photoshop",
          "Agile",
          "Documentation",
        ],
      },
    ],
  },
  {
    id: "3",
    work: "Développeur R&D",
    entreprise: "Ausy",
    imgRef: ImgAusy,
    location: "Sèvres",
    locationRef:
      "https://www.google.com/maps/place/Groupe+AUSY/@48.826711,2.2225863,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67a844cde1a93:0x630d1d27b4ff147e!8m2!3d48.826711!4d2.224775",
    date: "Septembre à Novembre 2018",
    duration: "3 mois",
    missions: [
      {
        title: "Outil de réunion en réalité augmentée",
        description:
          "Initiation de la refonte du projet et création de la nouvelle architecture.\nCoordination de deux jeunes ingénieur.\nUtilisation de la technologie Hololens couplée avec Unity/C#.\nRéflexion de développement UX.",
        skills: ["Unity/C#", "Equipe de 2 ingénieurs"],
      },
    ],
  },
  {
    id: "2",
    work: "Développeur Intégrateur",
    entreprise: "Safran",
    imgRef: ImgSafran,
    location: "Massy",
    locationRef:
      "https://www.google.com/maps/place/Safran+Electronics+%26+Defense/@48.7245298,2.2644159,17z/data=!4m8!1m2!2m1!1ssafran+electronics+%26+defense!3m4!1s0x0:0x98565794f8dd3bda!8m2!3d48.7245263!4d2.2666099",
    date: "Mars à Août 2018",
    duration: "6 mois",
    missions: [
      {
        title: "Logiciel de suivi de cible",
        description:
          "Développement en C/C++ sous linux.\nRéglage de l’algorithme suite aux tests. \nRéponse à des problématiques de traitement d’images.\nTravail en autonomie et tests en condition réelle.",
        skills: ["C/C++", "OS Linux", "Autonomie"],
      },
    ],
  },
  {
    id: "1",
    work: "Développeur",
    entreprise: "Safran",
    imgRef: ImgSafran,
    location: "Massy",
    locationRef:
      "https://www.google.com/maps/place/Safran+Electronics+%26+Defense/@48.7245298,2.2644159,17z/data=!4m8!1m2!2m1!1ssafran+electronics+%26+defense!3m4!1s0x0:0x98565794f8dd3bda!8m2!3d48.7245263!4d2.2666099",
    date: "Mars 2017 à Fevrier 2018",
    duration: "1 ans",
    missions: [
      {
        title: "Logiciel de pilotage d’un module de vision de drone ",
        description:
          "En équipe de 14 personnes, développement C/C++ sous linux, rédaction et application de cas de test, de procédure de tests.\nTâches de traçabilité d’exigences.",
        skills: ["C/C++", "Git", "OS Linux", "Cycle en V"],
      },
    ],
  },
  {
    id: "0",
    work: "Ingénieur Qualité",
    entreprise: "IMI Precision Engineering",
    imgRef: ImgIMIPrecision,
    location: "Poole, Angleterre",
    locationRef:
      "https://www.google.com/maps/place/IMI+Precision+Engineering/@50.7443638,-1.9991816,15z/data=!4m2!3m1!1s0x0:0xd30f237e990da81d?sa=X&ved=2ahUKEwjcl7WT7-rrAhUaCWMBHZSwBgsQ_BIwCnoECBgQCA",
    date: "Mai 2016 à Décembre 2016",
    duration: "7 mois",
    missions: [
      {
        title: "Qualification du processus de production de la valves IC03",
        description:
          "Stage de 4 mois puis embauche.\nAnalyse de données de mesure de pièces.\n Qualification de la répétabilité et reproductibilité des pièces critiques.\nProposition et conception d'un outil de mesure pour une pièce complexe.\nPréparation de rapports, et exposition des résultats devant un client (Snecma)",
        skills: ["Anglais", "Documentation", "Autonomie"],
      },
    ],
  },
];
