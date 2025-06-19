---
title: "Bonnes pratiques pour générer un flux RSS"
description: "Optimisations pour assurer la meilleure compatibilité à un flux web"
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
Plus que jamais [s'affranchir des algorithmes de sélection de contenu devient nécessaire](https://www.radiofrance.fr/franceinter/podcasts/la-terre-au-carre/la-terre-au-carre-du-mercredi-05-fevrier-2025-3233441). Les flux web permettent de suivre facilement des publications.
On le connaît davantage sous le nom de "flux RSS" mais le RSS est le nom d'une spécification de XML permettant la syndication de contenu.
XML est un format de [sérialisation de données](https://www.arthurperret.fr/cours/serialisation.html) avec la particularité de pouvoir être *étendu* par une grammaire définie (Document Type Definition ou les schémas XML). Cela permet à qui le souhaite de créer des standards de format XML afin d'échanger des documents répondant aux mêmes règles.

Les flux web se reposent donc sur le format XML sous-jacent. RSS 2.0 (dernière version en 2002) et Atom 1.0 (dernière version en 2005) sont les standards de flux web les plus connus.

```xml
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="fr">
<title>Teotime Pacreau Blog</title>
<subtitle>Blogs et essais</subtitle>
<link href="https://www.teotimepacreau.fr/feed/feed.xml" rel="self"/>
<link href="https://www.teotimepacreau.fr/"/>
<updated>2025-05-21T00:00:00Z</updated>
<id>https://www.teotimepacreau.fr/</id>
<author>
<name>Téotime Pacreau</name>
<email>teotime.pac@outlook.fr</email>
</author>
<entry>
<title>Minimum vital pour survivre sur un sujet Kubernetes</title>
<link href="https://www.teotimepacreau.fr/blog/minimum-vital-pour-survivre-kubernetes/"/>
<updated>2025-05-21T00:00:00Z</updated>
<id>https://www.teotimepacreau.fr/blog/minimum-vital-pour-survivre-kubernetes/</id>
<content type="html">Hello</content>
</entry>

```

## Privilégier le format RSS, Atom ou JSON ?
Pour choisir quel format privilégier deux questions se posent : le format est-il bien supporté par les lecteurs de flux ? La spécification du format est-elle ambigüe ?

### Comparaison des formats pris en charge par les lecteurs de flux les plus populaires

| | [Miniflux](https://miniflux.app/) | [Tiny Tiny RSS](https://tt-rss.org/) | [Fresh RSS](https://freshrss.github.io/FreshRSS/en/) | [Fusion](https://github.com/0x2E/fusion) | [Moccasin](https://github.com/rektdeckard/moccasin) |
| -- | -- | -- | -- | -- | -- |
| RSS 2.0 | Supporté | Supporté | Supporté | Supporté | Supporté |
| Atom 1.0 | Supporté | Supporté | Supporté | Supporté | Supporté |
| JSON 1.1 |  Supporté | Non supporté | Non supporté | Supporté | Non supporté |

Les flux JSON ne sont malheureusement toujours pas pris en charge par une partie des lecteurs de flux modernes. Afin d'assurer un maximum de compatibilité, les formats RSS 2.0 et Atom 1.0 sont à privilégier.

### La spécification du format est-elle ambigüe ?

## Sources

<https://kevincox.ca/2022/05/06/rss-feed-best-practices/>