---
title: "Bonnes pratiques pour générer un flux RSS"
description: "Optimisations pour assurer la meilleure compatibilité à un flux web"
type: "Article"
date: '2025-06-20'
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
On le connaît davantage sous le nom de "flux RSS" mais le RSS est le nom d'un "dialecte" de XML pensé pour permettre la syndication de contenu.
XML est un format de [sérialisation de données](https://www.arthurperret.fr/cours/serialisation.html) avec la particularité de pouvoir être *étendu* par une grammaire définie (Document Type Definition ou les schémas XML). Cela permet à qui le souhaite de créer des dialectes de format XML afin d'échanger des documents répondant aux mêmes règles.

Les flux web se reposent donc sur le format XML sous-jacent. RSS 2.0 (dernière version en 2009) et Atom 1.0 (dernière version en 2005) sont les standards de flux web les plus connus.

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

Pour choisir quel format privilégier trois questions se posent : le format est-il bien supporté par les lecteurs de flux ? La spécification du format est-elle ambigüe ? Le format offre-t-il assez de balises pour personnaliser le contenu partagé ?

### Comparaison des formats pris en charge par les lecteurs de flux les plus populaires

| | [Miniflux](https://miniflux.app/) | [Tiny Tiny RSS](https://tt-rss.org/) | [Fresh RSS](https://freshrss.github.io/FreshRSS/en/) | [Fusion](https://github.com/0x2E/fusion) | [Moccasin](https://github.com/rektdeckard/moccasin) |
| -- | -- | -- | -- | -- | -- |
| RSS 2.0 | Supporté | Supporté | Supporté | Supporté | Supporté |
| Atom 1.0 | Supporté | Supporté | Supporté | Supporté | Supporté |
| JSON 1.1 |  Supporté | Non supporté | Non supporté | Supporté | Non supporté |

Les flux JSON ne sont malheureusement toujours pas pris en charge par une partie des lecteurs de flux modernes. Afin d'assurer un maximum de compatibilité, les formats RSS 2.0 et Atom 1.0 sont à privilégier.

### La spécification du format est-elle ambigüe ?

La spécification de RSS 2.0 est pensée pour être extensible à l'infini via le principe des *namespaces* XML. En effet, dans un cas "classique" un fichier XML ne contiendra que des balises qui appartiennent à une seule grammaire de référence. Les *namespaces* permettent de d'avoir des balises issues de plusieurs grammaires différentes. Par exemple la balise HTML `<svg>` n'est pas reconnue par XML nativement, on défini alors un *namespace* via l'attribut `xmlns` : `<svg xmlns="http://www.w3.org/2000/svg">` pour que le document XML reste valide malgré une balise inconnue nativement.
Pensé originellement comme une force pour RSS 2.0 cette extensibilité infinie et non encadrée par la spécification entraîne des problèmes évidents de prise en charge des balises non reconnues par les lecteurs de flux.

Atom 1.0 autorise lui aussi les *namespaces* mais il encadre strictement leur utilisation uniquement dans des emplacements spécifiques. Cela rend Atom plus prédictible pour les lecteurs de flux. Très concrètement Atom autorise les *namespaces* mais la spécification explique qu'il n'est pas possible de remplacer une balise Atom requise (comme `<title>`, `<id>`, `<updated>`).

### Balises de personnalisation offertes par le format

## Sources

<https://kevincox.ca/2022/05/06/rss-feed-best-practices/>

<https://news.ycombinator.com/item?id=26169162>

<http://www.xmlfacile.com/guide_xml/namespace_espace_de_noms_1.php5>
