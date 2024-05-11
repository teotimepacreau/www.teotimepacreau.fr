---
title: "Menu hamburger accessible sans Javascript"
date: '2024-05-11'
description: "Comment construire un menu hamburger accessible à tous en respectant l'amélioration progressive ?"
tags: 
  - 'Frontend'
  - 'DevWeb'
layout: blogpost_layout.html
type: post
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

## Les bases d'un menu en HTML sémantique
Un menu est constitué de liens, on utilise donc la balise `<a>`.

Quand il y a plusieurs liens, il convient de wrapper les `<a>` dans des `li`. Cela confère plusieurs avantages pour les utilisateurs assistés par un lecteur d'écran:
- l'annonce vocale préalable de chaque liens
- raccourci pour sauter entre chaque élément de liste
- l'annonce voccale de l'index de l'item sélectionné (par exemple "élément de liste, deux parmi quatre")

On wrap les `li` dans une liste non-ordonnée `ul`. Enfin, on wrap le tout dans l'élément de navigation sémantique HTML `nav`. Utiliser `nav` permet de bénéficier du **landmark** (une section de première importance identifiée par le navigateur)

## Popover, l'API de navigateur
Quand on crée un menu hamburger, plusieurs règles d'UX s'imposent :
- le reste de la page doit être utilisable pour l'utilisateur. En terme technique c'est un comportement **non-modal** [(pour plus d'informations sur la différence modal - non modal voir ce lien)](https://hidde.blog/dialog-modal-popover-differences/#heading-3).
- on souhaite que le menu se superpose au contenu plutôt que de pousser le contenu vers un côté. Cela préserve l'importance du contenu de la page en arrière plan.
- le clic en dehors du menu ou la touche `ESC` doit fermer le menu

Popover est un nouvel attribut HTML [supporté par l'ensemble des navigateurs](https://developer.mozilla.org/fr/docs/Web/API/Popover_API). Il offre un mécanisme natif pour afficher du contenu au dessus de la page **sans Javascript**.

## Les attributs d'accessibilité inclus par défaut dans le popover

## Les attributs d'accessibilité qu'il est pertinent d'ajouter au popover


## Sources
<https://ux.stackexchange.com/questions/46305/navigation-drawer-tablet-push-or-overlay/>

<https://web.dev/articles/website-navigation/>

<https://hidde.blog/popover-semantics/>