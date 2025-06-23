---
title: "Bonnes pratiques pour générer un flux RSS"
description: "Analyse des éléments à prendre en compte pour générer un flux et le partager au plus grand nombre"
type: "Article"
date: '2025-06-21'
tags: 
  - 'RSS'
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
Pensé originellement comme une force pour RSS 2.0 cette extensibilité infinie et non encadrée par la spécification entraîne des problèmes évidents de prise en charge des balises non reconnues par les lecteurs de flux. Cela peut engendrer des documents XML non conformes qui ne seraient pas assimilables par les lecteurs de flux.

Atom 1.0 autorise lui aussi les *namespaces* mais il encadre strictement leur utilisation uniquement dans des emplacements spécifiques. Cela rend Atom plus prédictible pour les lecteurs de flux. Très concrètement Atom autorise les *namespaces* mais la spécification explique qu'il n'est pas possible de remplacer une balise Atom requise (comme `<title>`, `<id>`, `<updated>`). Atom 1.0 est donc bien moins ambigüe que RSS 2.0

### Balises de personnalisation offertes par le format

Atom 1.0 offre plusieurs balises de métadonnées parmi lesquelles :

- les éléments `<author>`, `<name>` et `<email>` permettent de caractériser l'auteur
- `<rights>` pour indiquer les droits de propriété intellectuelle sur le contenu
- `<source>` pour indiquer un contenu originaire d'un autre flux
- les éléments `<subtitle>` `<summary>`, `<title>` permettent de caractériser le flux
- `<content>` contient les éléments de chaque entrée et peut-être de type texte ou HTML
- `xml:lang="fr"` est un attribut qui se place dans l'élément `<feed>` et qui est hérité par tous les descendants pour indiquer la langue du flux

RSS 2.0 offre quand à lui :

| Element | Description |
|----------------|-----------------------------------------------------------------------------------------------|
| `title`       | Le titre de l’élément. |
| `link`        | L’URL de l’élément. |
| `description` | Le résumé ou contenu de l’élément. |
| `author`      | Adresse email de l’auteur de l’élément. |
| `category`    | Catégorie(s) à laquelle appartient l’élément. |
| `comments`    | URL d’une page pour les commentaires relatifs à l’élément. |
| `enclosure`   | Décrit un fichier média attaché à l’élément. |
| `guid`        | Identifiant unique de l’élément. |
| `pubDate`     | Date de publication de l’élément. |
| `source`      | Le flux RSS d’origine d’où provient l’élément.|
| `language`      | Langue utilisée dans le flux |
| `copyright`     | Mention de droit d’auteur sur le contenu du flux. |
| `managingEditor`| Email du responsable éditorial. |
| `webMaster`     | Email du responsable technique.|
| `lastBuildDate` | Dernière date de mise à jour du contenu. |
| `category`      | Catégories auxquelles appartient le flux. |
| `generator`     | Nom du programme qui a généré le flux. |
| `docs`          | URL vers la documentation du format RSS utilisé. |
| `cloud`         | Décrit un système de notification de mise à jour du flux. |
| `ttl`           | "Time To Live" — durée (en minutes) pendant laquelle le flux peut être mis en cache. |
| `image`         | Image associée au flux (JPEG, PNG ou GIF). |
| `rating`        | Évaluation pour le contrôle parental (encadré par une sorte d'équivalent américain au CSA FR).|
| `textInput`     | Permet d’afficher un champ de saisie texte avec le flux. |
| `skipHours`     | Heures pendant lesquelles les agrégateurs peuvent ignorer la récupération du flux. |
| `skipDays`      | Jours pendant lesquels les agrégateurs peuvent ignorer la récupération du flux. |

## Découvrabilité du flux

Pour que l'utilisateur puisse souscrire au flux depuis n'importe quelle page du site et sans avoir à connaître l'URL exacte du flux, il suffit de place une balise `<link>` avec l'attribut `rel` à l'intérieur de la balise `<head>` du HTML.

```html
<link rel="alternate" href="/feed/feed.xml" title="Flux du blog et des essais de Téotime Pacreau" type="application/atom+xml">
```

Cela permettra aux utilisateurs de lecteurs de flux de copier n'importe quelle URL du site, le lecteur de flux trouvera automatiquement l'URL du flux.

## Déménagement de flux Atom

L'élément `<link>` associé à l'attribut `rel="self"` permet d'indiquer l'URL canonique du flux pour indiquer aux services consommateurs (lecteurs RSS, agrégateurs, robots) où ils peuvent récupérer la dernière version du flux `<link href="https://www.teotimepacreau.fr/feed/feed.xml"/>`. Cela a deux avantages : il permet de déménager le flux, certains lecteurs de flux mettront automatiquement l'URL de récupération du flux à jour s'il détecte une modification sur le `rel="self"`. Deuxièmement cela améliore le cache pour le polling du flux.

## Catégories de flux Atom

Pour proposer des catégories segmentées lors de l'abonnement à un flux il suffit d'utiliser l'élément suivant :

```xml
<category term="Blog" label="Blog"/>
<category term="Essais" label="Essais"/>
```

## Adapter les règles HTTP au partage d'un document de flux

Les lecteurs de flux ping très fréquemment le document de flux, ainsi si la charge est trop lourde pour le serveur il peut-être utile d'adapter le `cache-control` dans le `header` HTTP :

- pour un flux avec une nouvelle entrée tous les mois il peut-être adapté de proposer une période de cache maximale d'1h `Cache-Control: max-age=3600`
- pour un flux avec plusieurs nouvelles entrées tous les jours il peut-être adapté de proposer une période de cache maximale de 5 minutes `Cache-Control: max-age=300`

Il convient de désactiver toutes les règles anti-bot sur la page de partage du document de flux piur permettre l'indexation et la découverte par les lecteurs de flux.

Pour permettre à certains lecteurs de flux d'effectuer des requêtes il peut être nécessaire d'ajouter l'en-tête `Access-Control-Allow-Origin: *` afin de modifier la règle CORS.

## Sources

<https://kevincox.ca/2022/05/06/rss-feed-best-practices/>

<https://news.ycombinator.com/item?id=26169162>

<http://www.xmlfacile.com/guide_xml/namespace_espace_de_noms_1.php5>

<https://www.ietf.org/rfc/rfc4287.txt>

<https://www.rssboard.org/rss-specification>
