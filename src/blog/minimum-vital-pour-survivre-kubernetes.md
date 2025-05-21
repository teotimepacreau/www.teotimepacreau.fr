---
title: "Minimum vital pour survivre sur un sujet Kubernetes"
description: "Le minimum pour comprendre le fonctionnement de Kubernetes"
type: "Article"
date: '2025-05-21'
tags: 
  - 'Kubernetes'
  - 'Docker'
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

Un conteneur est une virtualisation de l'environnement d'exécution. Il a l'avantage d'être plus léger qu'une VM car il n'embarque pas la couche OS mais seulement les dépendances et l'application.

![Schéma reprenant les différences entre une VM et un conteneur : la VM est assise sur un serveur et embarque son OS tandis que le conteneur compte sur Docker qui se charge d'embarquer l'OS et les bins et librairies nécessaires](/img/fonctionnement-vm-vs-conteneur.png "Schéma comparant le fonctionnement d'une VM comparé à un conteneur")

Kubernetes est une solution d'orchestration de conteneurs permettant d'automatiser l'allocation des ressources et la gestion des conteneurs. Grâce à Kubernetes le développeur n'a plus besoin de se soucier de la couche infrastructure et peut être davantage focus sur la prod. La solution s'appuie sur son architecture pour répondre aux pics de charges en transférant des paquets de conteneurs d'un hôte à l'autre, il équulibre la charge, centralise les log...

# Architecture Kubernetes

Le Kubernetes Master est l'agent maître qui donne les ordres. Un Node est une machine qui héberge un hôte Docker. Un Pod est un environnement d'exécution qui contient un ou plusieurs conteneurs.

![Schéma détaillant l'architecture Kubernetes : Master, multiples Nodes, Pod conteneur un ou des conteneurs Docker](/img/architecture-kubernetes.png "Schéma minimal d'architecture Docker")

Tous les conteneurs d'un Pod partagent la même adresse IP, les mêmes ports réseaux et peuvent partager un volume pour stocker et échanger des données entre eux.

Le Kubernetes Master fait migrer les Pods selon le Node le plus approprié pour allouer les ressources en cas de pic de charge, il gère également l'utilisation des ressources sur chaque Node. Avec Kubernetes les ordres d'administration réseaux proviennent d'un système automatisé plutôt que d'une configuration manuelle non adapatée à des dizaines de conteneurs.