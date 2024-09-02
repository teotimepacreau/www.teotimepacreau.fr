---
title: "Les bases pour modéliser une base de données"
type: "Article"
date: "2024-08-02"
description: "Quelle méthode pour conceptualiser une base de données à partir d'une simple expression de besoins ?"
tags: 
  - 'Base de données'
layout: blogpost_layout.njk
eleventyComputed:
  meta:
    site:
      name: "{{ metadata.title }}"
      description: "{{ metadata.description }}"
      url: "{{ metadata.url }}"
    title: "{{ title }}"
    description: "{{ description }}"
    image:
      src: "{% if image %}{{ metadata.url }}{{ image }}{% endif %}"
    author:
      name: "Teotime Pacreau"
    published: "{{ date }}"
---
**DISCLAIMER** : Cet article aborde une approche de modélisation issue de la méthode de [Merise](https://fr.wikipedia.org/wiki/Merise_(informatique)). Il existe de nombreuses autres méthodes et approches qui font varier la complexité.

## Préfigurer un modèle de données
Prenons l'exemple d'une sollicitation d'un service marketing qui procède à des enquêtes de satisfaction client. Celui-ci souhaite sortir de son modèle traditionnel de récolte de questionnaire de satisfaction papier puis traitement sous tableur. Le service exprime le besoin de centraliser les réponses obtenues et d'automatiser l'envoi d'enquêtes par mail.

Suite à une réunion de cadrage et qualification du besoin, vous repartez avec cette problématique affinée : "des chefs de projets marketing sont en charge de l'élaboration d'enquêtes clients. On souhaite à terme spécialiser chaque chef de projet marketing sur une typologie d'enquête, chaque type d'enquête à des questions specifiques mais toutes les enquêtes commencent par un bloc de questions communes. Il faut que l'on puisse tracer quelle enquête a été crée par quel chef de projet marketing. Tous les types d'enquête recueillent l'âge, le nom, l'adresse du client. Nous souhaitons que les enquêtes soient adressées par mail aux clients."

Avant d'entrer dans la conception de la solution numérique, il est nécessaire de conceptualiser notre modèle de données. En effet, celui-ci conditionnera l'architecture de la solution. Il prendra la forme d'un schéma qui matérialisera les différentes relations en nos données. Pour cela, voyons plus en détail une méthode simple à utiliser.

## Dictionnaire de données
La méthode Merise invite à mener des interviews et à analyser les documents utilisés par le service dans le but d’établir le dictionnaire de données.

Il s'agit d'un tableau qui recense toutes les données que comporte le problème. Une donnée est une occurence non-décomposable qui est amenée à varier. Le tableau précise les caractéristiques de la donnée retenue.

| Nom de la donnée   | Format | Taille | Type élémentaire ou calculé | Document associé|
| -------- | ------- | ------- | ------- | ------- |
| Âge | Entier    | 3 | Elémentaire  | Fiche client |
| Nom_client | Alphabétique   | 40 | Elémentaire  | Fiche client |
| Prénom_client | Alphabétique   | 40 | Elémentaire  | Fiche client |
| N° de rue | Alphanumérique  | 5 | Elémentaire  | Fiche client |
| Nom de rue | Alphabétique   | 40 | Elémentaire  | Fiche client |
| CP | Entier  | 5 | Entier  | Fiche client |
| Ville | Alphabétique   | 40 | Elémentaire  | Fiche client |
| Categorie| Alphabétique   | 20 | Elémentaire  | Enquete|
| Questions_communes | Alphanumérique   | 100 | Elémentaire  | Enquete|
| Questions_specifiques_categorie | Alphanumérique   | 100 | Elémentaire  | Enquete|
| Nom_chef_projet_marketing | Alphabétique   | 40 | Elémentaire  | /|
| Prenom_chef_projet_marketing | Alphabétique   | 40 | Elémentaire  | /|

## Le Modèle Conceptuel de Données
Plusieurs types de schémas conceptuels existent, correspondants aux différents types de base de données que l’on peut rencontrer :
- le modèle hiérarchique
- le modèle réseaux sémantiques
- le modèle entité / attribut / relation (appelé ERD en anglais)
- le modèle objet

Par souci de simplicité nous nous appuierons sur le modèle entité / attribut / relation qui est fréquemment utilisé pour les bases de données relationnelles.  
Si vous ne savez pas ce qu'est une base de données relationnelle ou dans quels cas l'utiliser, je vous invite à consulter [mon article sur le sujet](https://www.teotimepacreau.fr/blog/sqlite/).

Le fondement de notre BDD repose sur les entités : elles représentent les sujets qui composent le processus informationnel pour lequel nos données seront enregistrées.
Une entité possède des attributs : il s'agit de propriétés qui caractérisent l'entité. Par exemple pour une entité "citoyen" les attributs pourront être "âge, genre, situation familiale".

Pour passer du dictionnaire de données à la modélisation des Entités-Attributs, on regroupe les données qui ont un lien entre elles en se demandant de quelle donnée unique elles dépendent.
Voici la modélisation de notre problème posé en introduction :
![Capture d'écran de la modélisation en entité-attribut](/img/entite-attribut-merise.png "Modélisation en entité-attribut")
## Les relations et leurs cardinalités
Les relations décrivent comment les entités interagissent entre elles. Les relations sont généralement marquées par des verbes "achète à", "est traité par"...
La relation peut comporter des attributs, on l’appelle alors “relation porteuse”. 

Les cardinalités sont des indicateurs qui matérialisent la qualité de la relation entre deux entités. Par exemple pour deux entités "Enquêtes" et "Clients", les cardinalités sont le nombre de clients pour lesquelles il peut exister a minima et a maxima une ebquête et inversement.  
La méthode pour les définir est de toujours exprimer un minimum : "Un client peut remplir au minimum combien d'enquêtes ? 0, 1 ou n ? (n représentant l'infini)". Et un maximum "Un client peut remplir au maximum combien d'enquêtes ? 0, 1 ou n ?".

Ces cardinalités sont précieuses car elles nous permettront de vérifier la qualité de notre modèle grâce à des règles de normalisation.

Voici les relations et leurs cardinalités de notre exemple :
![Capture d'écran de la modélisation des relations Merise](/img/entite-attribut-merise.png "Modélisation des relations")

### Clé primaire et étrangère  
Le principe de clés est indispensable pour faire référence à un enregistrement précis d'une table.
La clé primaire est l'identifiant unique d'une entité.  
La clé étrangère est une référence à la clé primaire d'une autre entité. Utile pour mettre en relation deux enregistrements qui ont un rapport entre eux.

### Comment schématiser facilement notre Modèle Logique de Données  
J'utilise l'outil gratuit en ligne [Draw.io](https://app.diagrams.net/) qui a un sous-menu dédié "Relation entre les éléments".

![Interface de Draw.io](/img/interface_drawio.png "Interface de Draw.io, volet latéral composé du sous-menu relation entre les éléments")

Pour les cardinalités : une enquête existe au minimum si un chef de projet la crée; une enquête existe au maximum pour un chef de projet (plusieurs chefs de projet ne peuvent créer la même enquête). Donc 1,1. Dans l'autre sens de la relation un chef de projet peut exister au minimum sans qu'aucune enquête ne soit créée; un chef de projet peut créer une infinité d'enquête au maximum. Donc 0,n.

![Modélisation de la base de données selon le modèle Entité Attribut Relation](/img/modelisation_bdd.png "Modélisation de la base de données selon le modèle Entité Attribut Relation")

## Sources
<https://www.youtube.com/watch?v=OxJo051TMr8/>

<https://fr.wikiversity.org/wiki/Introduction_aux_syst%C3%A8mes_de_bases_de_donn%C3%A9es/Introduction/>

<https://www.base-de-donnees.com/mld/>