---
title: "Les bases pour modéliser une base de données"
date: "2024-08-02"
description: "Quelle méthode pour conceptualiser une base de données à partir d'une simple expression de besoins ?"
tags: 
  - 'Base de donnéess'
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
**DISCLAIMER** : Cet article aborde une approche de modélisation dite MLD (Modèle Logique de Données) par souci de simplicité. Il existe de nombreuses autres méthodes et approches qui font varier la complexité.

## Préfigurer un modèle de données
Prenons l'exemple d'une sollicitation d'un service marketing qui procède à des enquêtes de satisfaction client. Celui-ci souhaite sortir de son modèle traditionnel de récolte de questionnaire de satisfaction papier puis traitement sous tableur. Le service exprime le besoin de centraliser les réponses obtenues et d'automatiser l'envoi d'enquêtes par mail.

Suite à une réunion de cadrage et qualification du besoin, vous repartez avec cette problématique affinée : "des chefs de projets marketing sont en charge de l'élaboration d'enquêtes clients. On souhaite à terme spécialiser chaque chef de projet marketing sur plusieurs typologie d'enquêtes pour lesquelles les questions varieront. Il faut que l'on puisse tracer quelle enquête a été crée par quel chef de projet marketing. Tous les types d'enquête recueillent l'âge, le nom, le genre, l'adresse du client. Nous souhaitons que les enquêtes soient adressées par mail aux clients."

Avant d'entrer dans la conception de la solution numérique, il est nécessaire de conceptualiser notre modèle de données. En effet, celui-ci conditionnera l'architecture de la solution. Il prendra la forme d'un schéma qui matérialisera les différentes relations en nos données. Pour cela, voyons plus en détail une méthode simple à utiliser.
## Le Modèle Logique de Données
Plusieurs types de schémas conceptuels existent, correspondants aux différents types de base de données que l’on peut rencontrer :
- le modèle hiérarchique
- le modèle réseaux sémantiques
- le modèle entité / attribut / relation (appelé ERD en anglais)
- le modèle objet

Par souci de simplicité nous nous appuierons sur le modèle entité / attribut / relation qui est fréquemment utilisé pour les bases de données relationnelles.  
Si vous ne savez pas ce qu'est une base de données relationnelle ou dans quels cas l'utiliser, je vous invite à consulter [mon article sur le sujet](https://www.teotimepacreau.fr/blog/sqlite/).

Le fondement de notre BDD est les entités : elles représentent les sujets qui composent le processus informationnel pour lequel nos données seront enregistrées.

Une entité possède des attributs : il s'agit de propriétés qui caractérisent l'entité. Par exemple pour une entité "citoyen" les attributs pourront être "âge, genre, situation familiale".

Les relations décrivent comment les entités interagissent entre elles. Les relations sont généralement marquées par des verbes "achète à", "est traité par"...
## Clé primaire et étrangère  
Le principe de clés est indispensable pour faire référence à un enregistrement précis d'une table.
La clé primaire est l'identifiant unique d'une entité.  
La clé étrangère est une référence à la clé primaire d'une autre entité. Utile pour mettre en relation deux enregistrements qui ont un rapport entre eux.
## Cardinalités  
Les cardinalités sont des indicateurs qui matérialisent la qualité de la relation entre deux entités. Par exemple pour deux entités "Enquête" et "Observation", les cardinalités sont le nombre d'"Enquête" pour lesquelles il existe une "Observation" et inversement.  
La méthode pour les schématiser est de toujours exprimer un minimum : "Une Enquête peut exister avec au minimum combien d'Observation ? 0, 1 ou n ? (n représentant l'infini)". Et un maximum "Une Enquête peut exister avec au maximum combien d'Observation ? 0, 1 ou n ?".

Ces cardinalités sont précieuses car elles nous permettront de vérifier la qualité de notre modèle grâce à des règles de normalisation.
## Comment schématiser facilement notre Modèle Logique de Données  
J'utilise l'outil gratuit en ligne [Draw.io](https://app.diagrams.net/) qui a un sous-menu dédié "Relation entre les éléments".

![Interface de Draw.io](/img/interface_drawio.png "Interface de Draw.io, volet latéral composé du sous-menu relation entre les éléments")

Reprenons notre exemple mentionné en introduction : **"des chefs de projets marketing sont en charge de l'élaboration d'enquêtes clients." -> on comprend qu'il nous faut une entité "enquête" ainsi qu'une entité "chefs de projet marketing".**
L'entité "enquête" est constituée des attributs âge, nom, genre, adresse du client et questions à poser.
On a besoin d'identifier de façon unique pour pouvoir tracer chaque enquête alors on lui associe un identifiant unique (clé primaire PK). Chaque enquête est créée par un chef de projet marketing ce qui crée notre relation entre les 2 entités.
L'entité "chefs de projet marketing" est constituée d'un ID et du nom.
Nous avons besoin de relier l'enquête à son créateur, aussi nous créons une clé étrangère "chef de projet_id" dans l'entité "Enquête" reliée à l'ID du chef de projet.
Pour les cardinalités : une enquête existe au minimum si un chef de projet la crée; une enquête existe au maximum pour un chef de projet (plusieurs chefs de projet ne peuvent créer la même enquête). Donc 1,1. Dans l'autre sens de la relation un chef de projet peut exister au minimum sans qu'aucune enquête ne soit créée; un chef de projet peut créer une infinité d'enquête au maximum. Donc 0,n.

![Modélisation de la base de données selon le modèle Entité Attribut Relation](/img/modelisation_bdd.png "Modélisation de la base de données selon le modèle Entité Attribut Relation")

## Règles de normalisation  
Une entité se représente graphiquement par un rectangle.  
  
Un attribut se place dans le rectangle de l'entité.  
  
Une relation se représente graphiquement par un losange.  
  
La clé primaire s'identifie avec PK (Primary Key) en colonne dans l'entité face à l'attribut correspondant.  
La clé etrangère s'identifie de la même manière avec FK (Foreign Key). On en profite pour la relier graphiquement à la clé primaire à laquelle elle fait référence.  
  
Un attribut qui possède plusieurs sous-attributs devient automatiquement une entité.  
  
Cardinalité de 1,1 dans les deux sens d’une relation signifie que la relation est fantôme donc il faut fusionner les 2 entités en une seule et supprimer la relation.
Cardinalité avec `n` en maximum dans les deux sens signifie qu’il faut ajouter une table de liaison composée uniquement de 2 clés étrangères faisant référence aux clés primaires des 2 entités.
## Sources
<https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DOxJo051TMr8&ved=2ahUKEwjC8sjjwtaHAxVaVaQEHQYbN9oQwqsBegQIEhAF&usg=AOvVaw0s33csR82DcvsRZM8oKPjw/>

<https://fr.wikiversity.org/wiki/Introduction_aux_syst%C3%A8mes_de_bases_de_donn%C3%A9es/Introduction/>

<https://www.base-de-donnees.com/mld/>