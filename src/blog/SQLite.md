---
title: 'SQLite, la solution pragmatique en production pour le web'
date: '2023-11-10'
description: "Pourquoi SQLite mérite d'être considéré à sa juste valeur pour les projets de développement web."
tags: 
  - 'SQL'
  - 'Backend'
  - 'SQLite'
layout: blogpost_layout.html
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

## Les BDD relationnelles, passées de mode alors qu'elles répondent aux besoins de la grande majorité des projets des développement web

Il existe deux types de BDD : [les relationnelles et les non relationnelles](https://www.oracle.com/fr/database/base-donnees-relationnelle-difference-non-relationnelle/).
Les BDD relationnelles stockent les données dans des tables qui ont un lien entre elles (clé primaire qui est l'identifiant unique d'une entrée dans la table et la clé secondaire qui est l'identifiant d'une entrée qui permet de relier avec l'entrée d'une autre table). Il y a besoin de pré-définir une structure de données.
On traite les BDD relationnelles avec du SQL.
Les BDD non relationelles ne stockent pas les données dans des tables mais les stockent au format clé-valeur, dans des documents, en colonnes, en graphiques. Il n'y a pas besoin de pré-définir une structure de données. On traite les BDD non relationelles avec du NoSQL(MongoDB, Redis, Firebase...)

![Schéma comparant les outils appropriés pour traiter une BDD relationnelle ou non relationnelle : le SQL est utilisé pour des tables relationnelles tandis que le NoSQL est approprié pour le non-relationnel](/img/Schema_bdd.png "Schéma comparant les outils appropriés pour traiter une BDD relationnelle ou non relationnelle")

Les grandes entreprises préfèrent aujourd'hui les BDD non relationelles car elles permettent de stocker un très grand volume de données sans que ces données soient rassemblées en un seul endroit.
La tendance actuelle vise à former les nouveaux développeurs directement sur du NoSQL pour préparer aux pratiques des grandes entreprises.

![Graphique du State of DB 2023 comparant les résultats de l'enquête portant sur la part d'utilisation de chaque outil de management de BDD : Postgres est largement en tête,puis Redis, MySQL et enfin SQLite](/img/Graph_outil_BDD.png "Graphique du State of DB 2023 comparant les résultats de l'enquête portant sur la part d'utilisation de chaque outil de management de BDD")

De plus, les technologies NoSQL comme MongoDB ne sont pas faites pour le relationnel. Pourtant des bibliothèques comme Mongoose permettent de faire des schémas et ainsi récréer des relations entre les différentes données, cela revient donc à utiliser MongoDB exactement comme pour du relationnel. Sauf que MongoDB n'est pas créé pour ça, et il arrive souvent que les schémas ne soient pas correctement mis à jour.

Pourtant, le SQL a de nombreux atouts :
- il est facile à apprendre
- il est depuis sa création le système le plus performant de gestion de BDD
- il est facilement maintenable dans le temps

Ainsi, si l'application est de taille petite à modérée et que les données ont matière à être structurées (exemple : un catalogue de produits avec des entrées articles, prix, quantité) on préférera toujours le SQL.
Si tu as besoin d'un schéma... Si tes données sont relationnelles... Si tu veux faire des liens, des requêtes, etc... -> SQL

Pour les cas de très grandes applications de multinationales avec des données stockées sous des formes et des emplacements différents, on préférera le NoSQL.
Le NoSQL est également plus adaptée pour le développement agile car les données ne sont pas structurées pendant les itérations.
Si tu gères un grand volume de données... Si le type de tes données est changeant... Si tu as besoin de passer à l'échelle de façon récurrente -> MongoDB

## Pourquoi choisir SQL en 2023

SQL a 50 ans. C'est l'une des seules technologies de la préhistoire de l'informatique à avoir traversé les âges. Les raisons ?
- **sa simplicité** : Les instructions SQL s'écrivent d'une manière qui ressemble à celle de phrases ordinaires en anglais. Cette ressemblance voulue vise à faciliter l'apprentissage et la lecture. Les créateurs du SQL voulaient qu'il soit compréhensible aussi bien par des scientifiques que par des personnes en charge de la gestion commerciale d'entreprise sans avoir à faire appel à des informaticiens pour l'apprentissage.
- **sa rapidité** : sa rapidité : SQL est plus rapide que Python pour requêter les données, son avantage est d'avoir un schéma de données pré-établi
- **sa stabilité** : les commandes de bases SELECT, UPDATE, INSERT, DELETE n'ont pas changées en 50 ans, ainsi les manières d'interagir avec les BDD sont largement documentées et partagées à tous les niveaux des équipes de développement

## SQLite, la solution pragmatique pour le SQL

SQLite est une BDD SQL avec une fonctionnalité bien particulière : l'entièreté de la BDD tient en un seul fichier qui est intégré à la solution.
SQLite est traditionnellement associé au développement d'applications Android/iOS et aux tests locaux. Pourtant SQLite se prête particulièrement bien pour les projets web par sa simplicité et par l'intérêt d'avoir son serveur et sa BDD sur la même machine.

### Les avantages de SQLite 
- **facilité d'administration** : toutes les tâches d'administration de la BDD deviennent beaucoup plus simple. Pas besoin de compte pour administrer, la BDD est constituée d'un seul fichier intégré à l'application qu'il est possible de visualiser entièrement dans VSCode grâce à https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer
- **facilité de déploiement** : comme SQLite est un simple fichier binaire, il est facile de le pousser en production et de le faire migrer.
- **simplicité** : des NPM package simples d'utilisation comme https://www.npmjs.com/package/sqlite3 asynchrones par défaut, non bloquants et intuitifs, s'intègrent remarquablement bien avec NodeJS.
- **rapidité** : la proximité de la BDD avec l'application permet de réduire grandement la latence par rapport à d'autres BDD, si bien que SQLite est de loin le plus rapide mais également plus rapide que le [filesystem lui même](https://www.sqlite.org/fasterthanfs.html)
- **capacité** : la capacité de stockage est immense, une seule BDD peut contenir plus d'un milliards de Gigabits de données

### Les limites de SQLite

- **requêtes concurrentes** : comme la BDD SQLite est composée d'un seul fichier, les opérations d'ECRITURE ne peuvent pas se faire en même temps. Chaque opération est placée dans une file d'attente et la BDD est bloquée pendant ce temps. Les opérations se réalisent très rapidement, de l'ordre la milliseconde, si bien que le blocage est très court. Les opérations de LECTURE de la BDD elles supportent un nombre illimité de lectures concurrentes.
- **les types de données sont limitées** : NULL, INTEGER (chiffres entiers), REA L(nombres à virgules), TEXT, BLOB (données binaires d'une image, vidéo...). SQLite ne supporte donc pas les BOOLÉENS, les DATES
- **la validation des données** : SQLite vous permettra volontiers d'insérer "abcd" dans votre colonne INTEGER. Ou une chaîne de 20 caractères dans votre colonne VARCHAR(5)
- **pas d'outils de récupération des données en cas d'incident sur le serveur** : si le serveur meurt les données disparaissent. Il faut soi-même mettre en place une solution de réplication en continu de la BDD sur un serveur pour avoir un backup, notamment via https://litestream.io/
- **hébergement** de la BDD SQLite dans le cloud n'est pas possible avec tous les providers, personnellement j'utilise fly.io qui le propose nativement

## Cas d'usage
J'ai construit un site d'inscription et d'envoi de newsletter qui repose entièrement sur SQLite, voici le [lien du projet](https://www.teotimepacreau.fr/projets/projetnewsletter/)

## Sources
- <https://www.unixsheikh.com/articles/sqlite-the-only-database-you-will-ever-need-in-most-cases.html>
- <https://www.epicweb.dev/why-you-should-probably-be-using-sqlite>
- <https://venturebeat.com/dev/why-sqlite-may-become-foundational-for-digital-progress/>
- <https://www.datacamp.com/blog/all-about-sql-the-essential-language-for-database-management>