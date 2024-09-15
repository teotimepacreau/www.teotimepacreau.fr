---
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

![Capture d'écran du passage de 2 entités reliés par une relation One To One en fusion d'une seule entité](/img/relation-one-to-one.png "Passage de 2 entités reliés par une relation One To One en fusion d'une seule entité, crédit schéma : Université Le Mans")

- une cardinalité maximale de 1 d'un côté et de n de l'autre côté est appelée One To Many, Many To One dans l'autre sens. L'entité faible (celle ayant la cardinalité maximale de 1) absorbe la clé primaire de l'entité forte (celle ayant la cardinalité maximale n) en clé étrangère. La relation disparaît.

![Capture d'écran du passage de 2 entités reliés par une relation Many To One en fusion d'une seule entité](/img/relation-many-to-one.png "Passage de 2 entités reliés par une relation May To One en table (FK = clé étrangère. PK = clé primaire)")

Une cardinalité maximale de n dans les deux sens est appelée Many To Many. La relation doit-être transformée en entité (appelée table de liaison) et copier les clés primaires des 2 entités à laquelle elle est liée pour les tranformer en clé étrangère dans la nouvelle entité.

Enfin, toute relation porteuse d'attributs se transforme en entité. Comme pour Many To Many, on copie les clés primaires des entités liés et on les transforment en clés étrangères.

![Capture d'écran du passage de 2 entités reliés par une relation Many To Many porteuse d'attributs en table](/img/relation-many-to-many-et-relation-porteuse-attributs.png "Passage d'une relation Many To Many porteuse d'attributs à une table, crédit schéma : Université Le Mans")

## Formes normales
Les formes normales sont des règles certifiant que la base de données respecte certaines contraintes de modélisation.

En effet, on souhaite que notre base de données puisse répondre à 3 
principes pour de bonne élaboration : 
- pouvoir supprimer une entrée sans supprimer les données connexes. Par exemple : une table Livre ne doit pas avoir en colonnes l’auteur car si on supprime l'entrée cela supprimera l’auteur.
- éviter la répétition d’infos similaires car peu efficient pour le stockage. Par exemple : répéter sur 5000 entrée le même auteur, la même catégorie…
- assurer la consistance des données (avoir à entrer manuellement plusieurs fois le même nom d’auteur entraîne des erreurs)

Il y a 5 niveaux de formes normales, certifiant de façon graduelle la qualité de notre base de données. Pour des raisons de simplicité, nous détaillerons seulement les 3 premiers niveaux, qui suffisent dans 99% des cas.

1NF :
- avoir une table sans clé primaire n’est pas permis
- Utiliser les lignes pour véhiculer de l’information n’est pas permis
- 2 data-types différents ne peuvent exister dans une même colonne
- Enregistrer un groupe de données qui se répète de colonnes en colonnes n’est pas permis (ex: qté_1, item_1, qté_2, item_2)

2NF :
- Tous les attributs non-clés d’une table doivent dépendre uniquement de la clé primaire dans son entièreté (une clé primaire peut être là combinaison de plusieurs colonnes)

3NF :
- Tous les attributs non-clés d’une table doivent dépendre uniquement de la clé primaire, dans son entièreté, et rien d’autre que cette clé. La méthode est de représenter les dépendances fonctionnelles pour les colonnes non-clés de notre table.

![Capture d'écran d'une table avec en colonnes : Player_ID, Player_Rating, Player_Skill_Level avec 4 entrées pour illuster inconsistances qu'entraîne une table qui ne répond pas à la 3ème forme normale](/img/3eme_forme_normale.png "Illustration des inconsistances qu'entraîne une table qui ne répond pas à la 3ème forme normale. Crédit vidéo Learn Database Normalization, chaîne Youtube Decomplexify")

Avec notre illustration on peut se demander : le *Player_Rating* est-il dépendant uniquement du *Player_ID* en clé primaire ou de la combinaison du *Player_ID* et du *Player_Skill_Level* ? En effet, le niveau de skill du joueur ne peut pas être "Beginner" s'il est contenu entre 4 et 6.

## Sources
<https://youtu.be/GFQaEYEc8_8?si=g4PYVKrZCa8Jo2wi>

<https://perso.univ-lemans.fr/~cpiau/BD/SQL_PAGES/SQL0.html#L2-2>

Livre : BAPTISTE, Jean-Luc. *[Merise - guide pratique - modélisation des données et des traitements](https://www.editions-eni.fr/livre/merise-guide-pratique-3e-edition-modelisation-des-donnees-et-des-traitements-manipulations-avec-le-langage-sql-9782409015342), manipulations avec le langage SQL*. Editions ENI. 2021.