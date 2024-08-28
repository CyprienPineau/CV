// Spirit of adventure

import {
  ImgAppliFond,
  ImgBackgroudSpiritOfAdventure,
  ImgBackgroundGoolidays,
  ImgDefiDesBarmans,
  ImgEvolution,
  ImgFP1,
  ImgFP2,
  ImgFPFond,
  ImgLogoGoolidays,
  ImglogoSpiritOfAdventure,
  ImgLogoWarstat,
  ImgPageAccueil,
  ImgTract,
} from "_assets/index";
import { Project } from "_pages/Portefolio/components/Project/Project.types";

export const DATA_PORTEFOLIO: Project[] = [
  {
    name: "Warstart",
    subtitle: "Application mobile de calcul de probabilité pour Warhammer 40k",
    logo: ImgLogoWarstat,
    background: undefined,
    backgroundColor: "#191715",
    primarycolor: "#262626",
    secondaryColor: "#303030",
    hightlightColor: "#DE8215",
    hightlightColorHover: "#BD261F",
    introduction:
      "Fan de calcul de probabilité, j'ai fait une application pour aider les joueurs à faire un choix dans leur stratégie",
    paragraphs: [
      {
        title: "Identité graphique",
        content: "",
        imgs: [],
        background: "",
        video: "",
      },
    ],
    liens: [],
  },
  {
    name: "Spirit of Adventure",
    subtitle: "Application d'outils de jeu pour amateur de jeux de rôles",
    logo: ImglogoSpiritOfAdventure,
    background: ImgBackgroudSpiritOfAdventure,
    backgroundColor: "1F1A18E3",
    primarycolor: "#1F1A18",
    secondaryColor: "#302521",
    hightlightColor: "#EB4E22",
    hightlightColorHover: "#CF1F00",
    introduction:
      "Premier projet d'Open Era, j'ai travaillé conjointement avec trois autres ingénieurs.\nIl s’agit d’une application numérique permettant de jouer aux jeux de rôle, ensemble ou à distance.",
    paragraphs: [
      {
        title: "Identité graphique",
        content:
          "Le concept étant né, il faut maintenant créer une identité d'application. Pour ça nous avons fait référence à 3 mots : découverte, jeu et partage.\nC’était donc à moi de concevoir l’identité graphique lié notamment au logo.\n\nJ’ai choisi de représenter le mot “découverte” par une boussole, le mot “jeu” par un dé 20 faces (représentatif du domaine du jeu de rôle), et enfin le mot “partage” par le tournoiement naturel du logo, lui donnant par la même occasion du mouvement",
        imgs: [ImgEvolution],
        background: "",
        video: "",
      },
      {
        title: "Kickstarter",
        content:
          "Pour financer une première partie de notre projet, nous avons choisi de passer par un kickstarter. Celui ci n’a pas abouti. Nous avons identifié plusieurs problématiques notamment reliées à la professionnalisation de ce mode de financement et par le manque de concret de notre offre.\n\nJe me suis occupé de la présentation graphique de celui ci. L’utilisateur doit se sentir emmené dans l’aventure de notre projet. Pour cela j’ai réadapté une ambiance de la période de découverte des Amériques.",
        imgs: [ImgFP1, ImgFP2],
        background: ImgFPFond,
        video: "",
      },
      {
        title: "Prototype",
        content:
          "Le prototype de l’application de Spirit of Adventure doit montrer l'intérêt de ce type de support pour le jeu de rôle.\nNous avons donc choisi les fonctionnalités minimales pour profiter d’une expérience maximum.\nContrainte supplémentaire : les interfaces doivent être conceptualisées de manière à laisser la possibilité d'être agrémentées de mise à jour.\n\nJe suis donc responsable de créer ces interfaces, d’abord en wireframe puis une fois validé par l’équipe, sous React Native.\n\nPour cela il faut garder notre type d’utilisateur à l'esprit :\n- Il ne connaît pas forcément le jeu de rôle\n- Il n'appartient pas nécessairement à un groupe de joueurs\n- Il veut jouer sans prise de tête\n- Il souhaite commencer à jouer rapidement ou ...\n- ... il souhaite créer facilement des scénarios pour les proposer à ces joueurs",
        imgs: [],
        background: ImgAppliFond,
        video:
          "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FOpenEraStudio%2Fvideos%2F617191542148512%2F&show_text=0&width=560&autoplay=1&mute=1",
      },
      {
        title: "Le défi des barmans",
        content:
          "L'événement met en scène des barmans de différents bars à jeux de Lyon dans un “actual play” autour d’un univers Aztèque. Je mets donc au point une video de présentation permettant aux spectateurs de rentrer dans l’ambiance.\nPour l’aspect conte ancien, je choisis de dessiner selon un style esquisse. Cela rajoute un aspect vivant à chaque dessin tout en restant simple pour garder l’attention du spectateur sur la voie narrative.\n\nAussi dans la foulée, je conceptualise une video de présentation des personnages et des participants. Cette fois l’objectif est différent : cette présentation devra être également un générique récurrent une fois les videos mises en sur Youtube. Changement de ton, il faut du dynamisme : une musique entrainante mésoaméricaine est ajoutée, les dessins sont plus détaillés, et les animations sont calées sur la musique.",
        imgs: [],
        background: ImgDefiDesBarmans,
        video:
          "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FOpenEraStudio%2Fvideos%2F179386196717183%2F&show_text=0&width=560&autoplay=1&mute=1",
      },
    ],
    liens: [],
  },
  {
    name: "Goolidays",
    subtitle: "Le réseau social pour les voyageurs",
    logo: ImgLogoGoolidays,
    background: ImgBackgroundGoolidays,
    backgroundColor: "#102115E3",
    primarycolor: "#102115",
    secondaryColor: "#122E1A",
    hightlightColor: "#26A69A",
    hightlightColorHover: "#12524B",
    introduction:
      "Graphiste pour le site de recontre entre voyageurs\n Ce fut ma première aventure de projet de site web.\nLe projet n’existe malheureusement plus, pour des soucis de perspectives et financements. Je suis intervenu en temps que graphiste pour ce site de recontre entre voyageurs.\nCe fut ma première aventure de projet de site web.\nLe projet n’existe malheureusement plus, pour des soucis de perspectives et financements.",
    paragraphs: [
      {
        title: "Construction de la marque",
        content:
          "Pour la création du Logo, il faut que l'utilisateur arrive à dicerner les valeurs de voyage et de partage. Je suis parti de l'idée de la pangée, tous les continents se fusionnant en un seul. Cela crée une unité autour du voyage sous forme d'un avion et sa trainée qui entourent l'ensemble des continents dans une logique de rassemblement.\n\nPour La page d'accueil, il faut ressentir l'aspect cosmopolite de la plateforme, en plus des autres valeurs. Dans ce contexte on trouve des monuments célèbres du monde entier sur un fond de 'bienvenue' écrit en de multiples langues ",
        imgs: [ImgPageAccueil],
        background: "",
        video: "",
      },
      {
        title: "Design de tracts",
        content:
          "Le client souhaitait distribuer des tracts dans les universités pour faire parler de son site. Je lui ai donc proposé un format s'apparentant à un billet de train permettant d'inclure directement la notion de voyage.\n",
        imgs: [ImgTract],
        background: "",
        video: "",
      },
    ],
    liens: [],
  },
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
  //             background:"",
  //             video:""
  //         },
  //         {
  //             title:"",
  //             content:"",
  //             imgs:[],
  //             background:"",
  //             video:""
  //         }
  //     ],
  //     liens:[]
  // }
];
