---
title: "La modélisation fonctionnelle avec UML"
description: "Pourquoi UML permet une base de communication idéale entre fonctionnel et développement lors d'un projet informatique"
type: "Article"
date: '2025-01-12'
tags: 
  - 'UML'
  - 'Informatique fonctionnelle'
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

Lors du cadrage d'un projet informatique, on procède à l'analyse des objectifs, l'analyse des règles métiers, l'analyse et la production d'exigences, la définition du dictionnaire. Le cadrage est vital pour un projet informatique et permet de guider la modélisation fonctionnelle à venir.

Qu'apporte UML ? UML fourni un moyen de spécifier une solution via la modélisation mais surtout une base de dialogue, un language commun, à beaucoup d'intervenants dans un projet informatique. Son utilité se retrouve tant dans les phases d'expression des besoins / spécifications pour produire un modèle de référence que dans les étapes ultérieures de développement notamment au travers de l'indications de classes utiles à la programmation objet.

UML est particulièrement associé au [développement en cascade](./methodes-gestion-de-projet-informatique.md) ou au cycle en V mais à toute son utilité en agilité puisqu'il facilite grandement la communication interne à l'équipe. Lorsqu'utilisé avec pragmatisme, UML peut fournir une base au sprint en spécifiant les attentes fonctionnelles et l'intégration dans l'ensemble du système.