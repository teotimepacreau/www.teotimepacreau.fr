---
eleventyExcludeFromCollections: true
title: "La normalisation d'une base de données"
type: "Article"
date: "2024-09-12"
description: "Comment passer d'un modèle conceptuel à une base de données et comment s'assurer de sa robustesse ?"
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
**DISCLAIMER** : Cet article est la suite de mon précédent article : [Les bases pour modéliser une base de données](https://www.teotimepacreau.fr/blog/modelisation-base-de-donnees/). Pour une introduction à la modélisation conceptuelle et au principe de relations et cardinalités, s'y référer.

## Passer du Modèle Conceptuel de Données à la base de données
Chaque entité devient une table. Les attributs de notre entité deviennent les colonnes de la tables. Les relations sont soient tranformées en table soient elles disparaissent.

### Comment transformer les relations en tables ?
Les cardinalités maximales nous renseignent sur le type de relation :
- une cardinalité maximale de 1 dans les deux sens de la relation est appelée One To One. Elle nous indique que la relation est fantôme, il faut donc fusionner les 2 entités en une seule et supprimer la relation.

![Capture d'écran du passage de 2 entités reliés par une relation One To One en fusion d'une seule entité](/img/entite-attribut-merise.png "Passage de 2 entités reliés par une relation One To One en fusion d'une seule entité, crédit schéma : Université Le Mans")

- une cardinalité maximale de 1 d'un côté et de n de l'autre côté est appelée One To Many, la réciproque est Many To One. L'entité faible (celle ayant la cardinalité maximale de 1) absorbe la clé primaire de l'entité forte (celle ayant la cardinalité maximale n) en clé étrangère. La relation disparaît.

- une cardinalité maximale de n dans les deux sens est appelée Many To Many. La relation doit-être transformée en entité et copier les clés primaires des 2 entités à laquelle elle est liée pour les tranformer en clé étrangère dans la nouvelle entité.

- enfin, toute relation porteuse d'attributs se transforme en entité. Comme pour Many To Many, on copie les clés primaires des entités liés et on les transforment en clés étrangères.



## Sources
<https://youtu.be/GFQaEYEc8_8?si=g4PYVKrZCa8Jo2wi>

<https://perso.univ-lemans.fr/~cpiau/BD/SQL_PAGES/SQL0.html#L2-2>

Livre : BAPTISTE, Jean-Luc. *[Merise - guide pratique - modélisation des données et des traitements](https://www.editions-eni.fr/livre/merise-guide-pratique-3e-edition-modelisation-des-donnees-et-des-traitements-manipulations-avec-le-langage-sql-9782409015342), manipulations avec le langage SQL*. Editions ENI. 2021.