---
title: "Comment faire tourner une application NodeJS sur un VPS ?"
type: "Article"
date: "2024-09-15"
description: "Containeriser & faire tourner en permanence une application NodeJS"
tags: 
  - 'Docker'
  - 'VPS'
  - 'NodeJS'
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
## La logique nécessaire pour déployer une application sur un VPS
Quand on développe une application NodeJS, l'un des premiers besoins qui se dresse est "comment puis-je faire tourner cette application en continu même quand mon PC local est éteint ?".

Avoir un [Virtual Private Server (VPS) présente l'avantage d'avoir une machine qui tourner 24h/24](https://www.teotimepacreau.fr/blog/heberger-soi-meme-des-applications/), c'est donc idéal pour éxecuter notre application NodeJS en continu.
Mais comment y parvenir ?

En effet notre VPS possède son propre OS (dans la majorité des cas Linux). Quand notre app évolue, on a pas envie de tirer les derniers changement de code, installer les nouvelles dépendances, faire redémarrer le processus d'éxecution.

Dockerizer l'application va nous permettre de créer un environnement propre pour l'application et ainsi éviter les conflits de version de Node. Cela assure que l'application va se comporter de la même façon peu importe si elle tourner sur notre machine locale ou sur le VPS.

## Comment Dockerizer une application Node ?

## Sources
<https://youtu.be/GFQaEYEc8_8?si=g4PYVKrZCa8Jo2wi>

<https://perso.univ-lemans.fr/~cpiau/BD/SQL_PAGES/SQL0.html#L2-2>

Livre : BAPTISTE, Jean-Luc. *[Merise - guide pratique - modélisation des données et des traitements](https://www.editions-eni.fr/livre/merise-guide-pratique-3e-edition-modelisation-des-donnees-et-des-traitements-manipulations-avec-le-langage-sql-9782409015342), manipulations avec le langage SQL*. Editions ENI. 2021.