import {
  ImgBackgroudSpiritOfAdventure,
  ImgBackgroundGoolidays,
  ImgDefiDesBarmans,
  ImgEvolution,
  ImgLogoGoolidays,
  ImglogoSpiritOfAdventure,
  ImgLogoWarstat,
  ImgPageAccueil,
  ImgTract,
  ImgTable1,
  ImgFondWarstat,
  ImgApp1,
  ImgApp2,
  ImgFin,
  ImgKickstarter,
  ImgPrototype,
  ImgIllustration,
} from "_assets/index";
import { Project } from "_pages/Portefolio/components/Project/Project.types";

export const DATA_PORTEFOLIO: Project[] = [
  {
    slug: "Warstat",
    name: "Warstat",
    date: "2024",
    subtitle:
      "L’application de calcul de probabilités pour le jeu de plateau Warhammer 40k",
    logo: ImgLogoWarstat,
    background: ImgFondWarstat,
    backgroundColor: "#191715E3",
    primarycolor: "#262626",
    secondaryColor: "#303030",
    hightlightColor: "#DE8215",
    hightlightColorHover: "#BD261F",
    introduction:
      "Étant amateur du jeu de plateau Warhammer 40 000 et intéressé par les calculs de probabilités, je me suis lancé le défi de développer une application mobile de calcul de probabilités dédiée à ce jeu de plateau.",
    paragraphs: [
      {
        title: "Contexte",
        content:
          " Une action sur sur le jeu Warhammer 40 000 peut impliquer une succession de jets de dés et il n’est pas toujours évident d’en évaluer l’issue.\n\nCette application aide le joueur à évaluer la pertinence d’un choix impliquant un jet de dés.\n\nElle est destinée à un public averti jouant à ce jeu de plateau. En conséquence de quoi, je pars du principe que les utilisateurs de cette application sont uniquement des personnes ayant connaissance des règles du jeu.",
        imgs: [ImgTable1],
      },
      {
        title: "Le cas d’utilisation",
        content:
          "Il existe déjà sur le marché déjà des calculateurs pour ce jeu, mais leur prisme est une analyse statistique très poussée. Ceux-ci, en plus de leurs interfaces sommaires, ne permettent pas une accessibilité au plus grand nombre des joueurs.\n\nCette application a vocation d’éveiller la curiosité des joueurs aux calculs de probabilités. En effet, on peut voir une dissection du calcul permettant de comprendre comment chaque paramètre a une incidence sur le calcul.",
        imgs: [ImgApp1],
      },
      {
        title: "La conception",
        content:
          "La probabilité calculée est la chance d’une attaque réussisse.\n\nPour cela on suit le séquencement d’une attaque selon les règles du jeu :\n- jet de dé de touche \n- jet de dé de blessure\n- jet de dé de sauvegarde\n\nOn retrouvera de cette même manière ce séquencement de haut en bas.\n\nÀ chaque étape, il peut y avoir des règles spéciales qui peuvent être ajoutées. Le défi a été de devoir synthétiser ces cas particuliers pour être exhaustif sans pour autant surcharger l’interface.",
        imgs: [ImgApp2],
      },
      {
        title: "La réception du public",
        content:
          "Les personnes ayant téléchargé l’application ont été très enthousiaste de par son interface et sa fluidité. Ils y trouvent une façon rapide et simple d’avoir une idée de la probabilité de succès d’une action.\n\nMalgré tout, j’ai plus l’impression que c’est un outil de curiosité qui fonctionne bien, mais qui ne rentre pas dans une expérience de jeu classique d’un joueur.\n\nAujourd’hui l’application n’est plus sur le Play store.",
        imgs: [ImgFin],
      },
    ],
    extraLink: [
      {
        name: "Le jeu Warhamer 40 000",
        link: "https://warhammer40000.com/",
      },
    ],
  },
  {
    slug: "SpiritOfAdventure",
    name: "Spirit of Adventure",
    date: "2020",
    subtitle: "L’application pour jouer aux jeux de rôles",
    logo: ImglogoSpiritOfAdventure,
    background: ImgBackgroudSpiritOfAdventure,
    backgroundColor: "1F1A18E3",
    primarycolor: "#1F1A18",
    secondaryColor: "#302521",
    hightlightColor: "#EB4E22",
    hightlightColorHover: "#CF1F00",
    introduction:
      "Premier projet d'Open Era, j'ai travaillé conjointement avec trois autres ingénieurs. Il s’agit d’une application numérique permettant de jouer aux jeux de rôle, ensemble ou à distance.",
    paragraphs: [
      {
        title: "Genèse du projet",
        content:
          "L’idée de l’application Spirit of Adventure est de fournir un support pour permettre à tous de jouer aux jeux de rôles.\n\nLe jeu de rôles est un loisir nécessitant un certain volume de matériel pour jouer (livres, figurines, plateaux de jeu, dés, feuilles, crayons...). Aussi cela nécessite un certain temps de préparation par le maître du jeu pour mener cette partie à bien.\n\nNotre objectif est simple : Pouvoir démarrer une partie de jeu de rôle en moins de 10min à tout moment ensemble ou à distance.",
        imgs: [ImgEvolution],
      },
      {
        title: "Kickstarter",
        content:
          "Pour financer une première partie de notre projet, nous avons choisi de passer par un Kickstarter.\n\nJe me suis occupé de la présentation graphique de celui-ci. L’utilisateur doit se sentir emmené dans l’aventure de notre projet. Pour cela, j’ai réadapté une ambiance avec des références aux jeux de rôles et à la pop culture.\n\nIl n’a pas abouti. Nous avons identifié plusieurs problématiques notamment reliées à la professionnalisation de ce mode de financement et par le manque de concret de notre offre.",
        imgs: [ImgKickstarter],
      },
      {
        title: "Prototype de l’application",
        content:
          "Le prototype de l’application de Spirit of Adventure doit montrer l'intérêt de ce type de support pour le jeu de rôle. Nous avons choisi les fonctionnalités minimales pour profiter d’une expérience maximum.\n\nContrainte supplémentaire : les interfaces doivent être conceptualisées de manière à laisser la possibilité d'être agrémentées de mise à jour.\n\nJ’ai créé ces interfaces, d’abord en wireframe puis une fois validé par l’équipe, sous React Native.\nPour cela il faut garder notre type d’utilisateur à l'esprit :\n- Il ne connaît pas forcément le jeu de rôle\n- Il n'appartient pas nécessairement à un groupe de joueurs\n- Il veut jouer sans prise de tête\n- Il souhaite commencer à jouer rapidement ou ...\n- ... il souhaite créer facilement des scénarios pour les proposer à ces joueurs",
        videos: [
          {
            img: ImgPrototype,
            link: "https://www.facebook.com/OpenEraStudio/videos/617191542148512/",
            player: "Facebook",
          },
        ],
      },
      {
        title: "Création d’un environnement de jeu et illustrations",
        content:
          "Pour se projeter dans les fonctionnalités de l’application, j’ai créé un set de règles et une histoire pour illustrer l’intégration d’un monde de jeux de rôles.\n\nJ’ai également fait de l’illustration pour que nos playtesteurs puissent s’immerger un peu plus dans le monde.",
        imgs: [ImgIllustration],
      },
      {
        title: "Le défi des barmans",
        content:
          "L'événement met en scène des barmans de différents bars à jeux de Lyon dans un jeu de rôle en direct sur Twitch. J’ai co-conçu une vidéo de présentation permettant aux spectateurs de rentrer dans l’ambiance de l’histoire emprunte d’une forte inspiration mésoaméricaine.\n\nPour l’aspect conte ancien, je choisis de dessiner avec un style esquisse. Cela rajoute un aspect vivant à chaque dessin tout en restant simple pour garder l’attention du spectateur sur la voie narrative.\n\nDans la foulée, il y a une présentation des personnages et des participants. Cette fois, l’objectif est différent : cette présentation devra être également un générique récurrent une fois les vidéos mises en sur Youtube. Changement de ton, il faut du dynamisme : une musique entrainante mésoaméricaine est ajoutée, les dessins sont plus détaillés et les animations sont rythmées sur la musique.",
        videos: [
          {
            img: ImgDefiDesBarmans,
            link: "https://www.youtube.com/watch?v=OrRiXaDz530&t=150s",
            player: "Youtube",
          },
        ],
      },
    ],
    extraLink: [
      {
        name: "La page Facebook d'OpenEra",
        link: "https://www.facebook.com/OpenEraStudio",
      },
      {
        name: "La chaine Youtube d'OpenEra",
        link: "https://www.youtube.com/@openera4468",
      },
    ],
  },
  // {
  //   name: "Goolidays",
  //   subtitle: "Le réseau social pour les voyageurs",
  //   logo: ImgLogoGoolidays,
  //   background: ImgBackgroundGoolidays,
  //   backgroundColor: "#102115E3",
  //   primarycolor: "#102115",
  //   secondaryColor: "#122E1A",
  //   hightlightColor: "#26A69A",
  //   hightlightColorHover: "#12524B",
  //   introduction:
  //     "Graphiste pour le site de recontre entre voyageurs\n Ce fut ma première aventure de projet de site web.\nLe projet n’existe malheureusement plus, pour des soucis de perspectives et financements. Je suis intervenu en temps que graphiste pour ce site de recontre entre voyageurs.\nCe fut ma première aventure de projet de site web.\nLe projet n’existe malheureusement plus, pour des soucis de perspectives et financements.",
  //   paragraphs: [
  //     {
  //       title: "Construction de la marque",
  //       content:
  //         "Pour la création du Logo, il faut que l'utilisateur arrive à dicerner les valeurs de voyage et de partage. Je suis parti de l'idée de la pangée, tous les continents se fusionnant en un seul. Cela crée une unité autour du voyage sous forme d'un avion et sa trainée qui entourent l'ensemble des continents dans une logique de rassemblement.\n\nPour La page d'accueil, il faut ressentir l'aspect cosmopolite de la plateforme, en plus des autres valeurs. Dans ce contexte on trouve des monuments célèbres du monde entier sur un fond de 'bienvenue' écrit en de multiples langues ",
  //       imgs: [ImgPageAccueil],
  //      videos: "",
  //     },
  //     {
  //       title: "Design de tracts",
  //       content:
  //         "Le client souhaitait distribuer des tracts dans les universités pour faire parler de son site. Je lui ai donc proposé un format s'apparentant à un billet de train permettant d'inclure directement la notion de voyage.\n",
  //       imgs: [ImgTract],
  //      videos: "",
  //     },
  //   ],
  //   liens: [],
  // },
  // {
  //     name : "L'atelier des Logos",
  //     logo : logoAtelierDesLogos,
  //     background : backgroudAtelierDesLogos,
  //     backgroundColor:"#262626E3",
  //     primarycolor:"#262626",
  //     secondaryColor:"#303030",
  //     hightlightColor:"#102329",
  //     hightlightColorHover:"#BD261F",
  //     introduction : "avec la société Open Era",
  //     Introduction : "Graphiste pour le site de recontre entre voyageur",
  //     paragraphs:[
  //         {
  //             title:"Identité graphique",
  //             content:"Je suis intervenu en tant que graphiste dans ce projet de réseau social autour du thème du voyage. Je me suis occupé de la création de Logo, page d’accueil et tracts.\nCes créations se sont basées sur deux idées : le voyage et le partage.\nCe fut ma première aventure de projet de site web. Le projet n’existe malheureusement plus, pour des soucis de perspectives et financements.",
  //             imgs:[],
  //            videos:""
  //         },
  //         {
  //             title:"",
  //             content:"",
  //             imgs:[],
  //            videos:""
  //         }
  //     ],
  //     liens:[]
  // }
];
