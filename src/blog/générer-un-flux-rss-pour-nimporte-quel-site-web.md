---
title: "Générer un flux RSS pour quasiment n'importe quel site web"
type: "Article"
date: '2024-12-08'
description: "Comment héberger soi-même RSS-Proxy, l'outil de génération de flux RSS pour les sites qui n'en proposent pas ?"
tags: 
  - 'Docker'
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
Un flux RSS est une technique de communication qui permet de diffuser de l’information et suivre des sources d’information sur le Web. Celui-ci suit en continu les mises à jour d'un site web et partage, en format ouvert, l'intégralité du contenu récemment publié.
L'inconvénient majeur du RSS est le fait qu'aujourd'hui peu de sites web proposent un flux RSS. Les flux algorithmiques issus de la vague des réseaux sociaux des années 2010 ainsi que [l'abandon prémédité par les géants du web des technologies rendant accessibles l'utilisation du RSS au plus grand nombre](https://www.theverge.com/23778253/google-reader-death-2013-rss-social), dans une optique de financiarisation de l'information, ont eu pour effet de réléguer les flux RSS au second plan.
Dans le contexte actuel de [fragmentation des plateformes sociales](https://www.lemonde.fr/pixels/article/2024/10/06/pour-les-reseaux-sociaux-la-fin-d-un-regne_6344843_4408996.html), les flux web sont une formidable opportunité de reprendre le contrôle sur les informations que l'on souhaite recevoir : gratuité, pas d'algorithme, pas de dépendance à une plateforme en particulier, intéropérabilité. Les avantages sont nombreux.

Les flux RSS sont générés traditionnellement par le concepteur du site web, et exposés via un lien ou une icône <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,136a64,64,0,0,1,64,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,88A112,112,0,0,1,168,200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,40A160,160,0,0,1,216,200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="60" cy="196" r="12"/></svg>. Quand ils ne sont pas exposés, il est possible de les chercher manuellement dans l'inspection du code de la page à l'intérieur de la balise `<head>` à la recherche de la ligne `<link rel="alternate" href="/feed/feed.xml" title="titre du flux" type="application/atom+xml"/>`. Une autre méthode consiste à chercher dans l'URL en ajoutant `rss.xml` ou `feed.xml` souvent à la racine du site. On commence ici à toucher aux formats de génération des flux : un flux web est toujours rendu accessible via un fichier XML, XML est un format de fichier conçu pour afficher des données, celui-ci ne comporte pas d'[éléments prédéfinis mais une série de règles de syntaxe qui permettent de créer des langages particuliers avec leurs propres élément](https://www.arthurperret.fr/cours/serialisation.html). [Arthur Perret parle avec justesse de flux web plutôt que de flux RSS](https://www.arthurperret.fr/blog/2022-11-18-le-retour-des-flux-web-et-pas-que-rss.html) car il existe différents formats de génération de flux : les flux RSS, Atom, JSON...

En utilisant les flux web on se rend compte assez rapidement d'un écueil majeur : que faire quand le site ne propose pas de flux ?

## RSS-Proxy, un outil open source permettant de créer un flux RSS ou Atom pour quasiment tous les sites web

[RSS-Proxy](https://github.com/damoeb/rss-proxy) analyse la structure HTML d'un site visé et génère un flux. Il est possible de souscrire à ce flux depuis n'importe quel lecteur de flux, comme [Miniflux, un lecteur de flux open source, gratuit et intuitif](https://github.com/miniflux/v2).

![Capture d'écran de l'interface de génération de flux RSS via RSS Proxy](https://github.com/damoeb/rss-proxy/raw/master/docs/rssproxy-candidates.png "Interface de génération de flux via RSS-Proxy")

![Capture d'écran de l'interface de Miniflux](/img/interface-miniflux.png "Interface de Miniflux")

RSS-Proxy nécessite d'être hébergé par l'utilisateur pour être utilisé. Si vous ne savez pas comment héberger un service, je vous renvoie vers mon article *beginner-friendly* ["Héberger soi même des applications"](https://www.teotimepacreau.fr/blog/heberger-soi-meme-des-applications/)

## Comment l'installer ?

```docker
docker pull damoeb/rss-proxy:2.1
docker run -p 8080:8080 -e APP_API_GATEWAY_URL=https://foo.bar -it damoeb/rss-proxy:2.1 #on remplace la variable d'environnement APP_API_GATEWAY_URL par l'IP ou le nom de domaine que l'on souhaite exposer pour RSS Proxy
```

Dans la pratique RSS-Proxy génère une URL persistente exposant le flux généré. Notre lecteur de flux doit pouvoir accéder à cette URL. Dans le cas où l'on héberge soi-même son lecteur de flux, il faut impérativement prévoir un moyen pour que les deux containers puissent communiquer. En raisonnement "réseau" on souhaite un pont réseau car les containers sont, par défaut, isolés les uns des autres et ne peuvent communiquer pour prévenir des problèmes de sécurité.
Docker fournit nativement un réseau *bridge* : il s'agit d'un pont réseau pour connecter les containers entre eux. Ceux-ci vont communiquer via une plage IP privée. Il est nécessaire de connecter à ce réseau notre lecteur de flux pour qu'il puisse requêter l'URL contenant le flux généré.

## Un peu d'histoire des flux web
Aaron Swartz a contribué, en 2000, à 14 ans, à l’élaboration de la spécification 1.0 du format RSS. Il était convaincu par la nécessité de libérer l'information et de la rendre accessible au plus grand nombre. A contrecourant des tendances commerciales et scientifiques visant à restreindre l'accès à l'information derrière des paywall.
La spécification RSS reste ambigue en terme de balisage des inforations. Le format Atom a été introduit en 2005 pour unifier le balisage et causer moins de problèmes de compatibilité. [Un article d'autorité conseille de privilégier le format de flux Atom](https://kevincox.ca/2022/05/06/rss-feed-best-practices/).
Le format de flux JSON a été introduit en 2015 mais celui-ci souffre d'avoir été introduit trop tard pour concurrencer les formats RSS et ATOM et trop tôt pour être supporté par l'ensemble des lecteurs de flux web. [Le repo Github du format n'est plus maintenu depuis 2020](https://github.com/manton/JSONFeed). [La spécification du format JSON](https://www.jsonfeed.org/version/1/) propose pourtant de nombreuses fonctionnalités intéressantes, comme la possibilité d'afficher l'article suivant directement dans le flux, montrer les favicons, bannières et autres images, d'afficher les tags d'un article... Mais les lecteurs de flux seront-ils mis à jour pour afficher toutes ces nouvelles informations ?