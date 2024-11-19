# Introduction

Ce format a pour but d'être dynamique et facilement adaptable à n'importe qui pour générer un CV/Portefolio Web complet à partir de fichier de données.

Une fois totalement fini se, le format permettra qu'à partir d'une simple modification de fichiers de data, de mettre à jour la totalité du site web.

# Stack Technique :

ReactJs, Vite, Déploiment Netlify

# Styles Généraux :

File : ./src/globalStyle.css

Il est possible de changer les couleurs du thèmes du CV

# Données :

Files : ./data/data_experiences.js , ./data/data_formation.js , ./data/data_porfolio.js , ./data/data_skills.js

Stockés dans ces differents fichiers, les données concernants expériences / formations / compétences / porfolio y sont stocké.

# Démarage du projet :

`yarn install`

`yarn start`

# TODO

- Optimisation du chargement des images
- Ajout des images via les fichiers data ( passer en json et base 64 ?)
- Intégration de liens en bas de page de portefolio
- Régler problème de reférencement (Passage sur Next Js ?)
- Icône de page à ajouter
