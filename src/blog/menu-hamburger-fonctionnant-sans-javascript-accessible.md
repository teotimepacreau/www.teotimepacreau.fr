---
title: "Créer un menu hamburger fonctionnant sans Javascript grâce à Popover API"
date: "2024-05-23"
description: "Comment construire un menu hamburger de navigation accessible à tous en respectant l'amélioration progressive ?"
tags:
  - "Frontend"
  - "DevWeb"
  - "CSS"
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

## Les bases d'un menu en HTML sémantique

Un menu est constitué de liens, on utilise donc la balise HTML `<a>` pour représenter les liens.

Quand il y a plusieurs liens, il convient de créer une liste de liens en wrappant les `<a>` dans des `<li>`. Cela confère plusieurs avantages pour les utilisateurs assistés par un lecteur d'écran :

- l'annonce vocale préalable de chaque liens
- un raccourci pour sauter entre chaque élément de liste
- l'annonce voccale de l'index de l'item sélectionné (par exemple "élément de liste, deux parmi quatre")

On wrap les `<li>` dans une liste non-ordonnée `<ul>`. Enfin, on wrap le tout dans l'élément HTML de navigation sémantique `<nav>`. Utiliser `<nav>` permet de bénéficier du **landmark** de navigation pour que le navigateur identifie plus facilement la section dédiée (un **landmark** est une région de la page de première importance reconnue par le navigateur).

## Popover, l'API de navigateur dédiée aux éléments flottants

Popover est un nouvel attribut HTML [supporté par l'ensemble des navigateurs](https://developer.mozilla.org/fr/docs/Web/API/Popover_API). Il offre un mécanisme natif pour afficher du contenu au dessus de la page **sans Javascript**. L'élément est masqué par défaut avec `display: none` jusqu'au déclenchement de son ouverture par l'élément qui le contrôle.
Plusieurs fonctionnalités lui sont automatiquement associées :

- "Top-layer", une couche de superposition est automatiquement créée pour que le popover s'affiche au-dessus de n'importe quel `z-index`.
- "Light-dismiss", un simple clic en dehors du popover le ferme automatiquement.
- "Tab focus", le focus se place automatiquement dans le popover après ouverture.
- "Keyboard support", tapper sur`ESC` ferme le popover et retourne le focus au contenu en arrière plan.

<figure>
  <video controls muted>
    <source src="/img/popover-sans-javascript.mp4" alt="Ouverture et fermeture d'un menu de navigation popover sur un navigateur où Javascript est désactivé" title="Ouverture et fermeture d'un menu de navigation popover sur un navigateur où Javascript est désactivé" type="video/mp4">
  </video>
  <figcaption>
  Ouverture et fermeture d'un menu de navigation popover sur un navigateur où Javascript est désactivé
  </figcaption>
</figure>

### Comment créer notre menu hamburger de navigation avec Popover

Quand on crée un menu hamburger, plusieurs règles d'UX s'imposent :

- le reste de la page doit rester utilisable pour l'utilisateur. On ne souhaite pas que l'ouverture du menu vienne interrompre l'action en cours. En terme technique c'est un comportement **non-modal** [(pour plus d'informations sur la différence modal - non modal voir ce lien)](https://www.nngroup.com/articles/modal-nonmodal-dialog/).
- on souhaite que le menu se superpose au contenu plutôt que de pousser le contenu vers un côté. [Cela préserve l'importance du contenu de la page en arrière plan](https://ux.stackexchange.com/questions/46305/navigation-drawer-tablet-push-or-overlay/).
- un simple clic en dehors du menu ou la touche `ESC` doit fermer le menu
- un bouton actionne l'ouverture et la fermeture du menu

L'API Popover est composée d'un attribut HTML `popover` à placer sur l'élément à faire flotter. On place, sur un un bouton d'ouverture un attribut `popovertarget` qui prend en valeur l'ID de notre élément flottant. On spécifie l'action via `popovertargetaction` : celle-ci peut prendre 3 valeurs `show`, `hide` ou `auto`.

```
<button popovertarget="mobile-navigation" popovertargetaction="show"></button>

<nav popover id="mobile-navigation">

	<button popovertarget="mobile-navigation" popovertargetaction="hide"></button>

  <ul>
    <li><a href="/index">HOME</a></li>
    <li><a href="/blog">BLOG</a></li>
    <li><a href="/projets">PROJETS</a></li>
  </ul>
</nav>
```

### Animer l'ouverture et la fermeture du Popover

Il est possible de donner un style d'avant ouverture au popover via le sélecteur CSS `:popover-open` et la règle `@starting-style`. `@starting-style` est une nouvelle règle CSS qui permet de définir le style d'un élément _avant_ son entrée dans le champ. On donne ensuite un style à l'état ouvert dans `:popover-open`. Enfin on donne un style à l'état fermé directement dans l'attribut `[popover]`. La propriété `display` est dite "discrète" par nature : [cela signifie qu'elle ne peut pas être animée de façon native](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties#discrete). Pour pouvoir animer `display`, la propriété `transition-behavior: allow-discrete` est désormais prise en charge par tous les navigateurs sauf Firefox.

```
[popover] {
    left: 0;
    top: 0;
    height: 100dvh;
    width: 60dvw;
    transition: transform .2s ease-out, opacity .2s ease-out,
    display .2s ease-out;
    transition-behavior: allow-discrete;

    /*POPOVER EN ETAT FERMÉ*/
    opacity: 0;
    transform: translateX(-50px);
  }
  [popover]:popover-open {
    @starting-style {/*POPOVER AVANT L'ENTREE DANS LE CHAMP*/
      opacity: 0;
      transform: translateX(-50px);
    }

    /*POPOVER EN ETAT OUVERT*/
    opacity: 1;
    transform: translateX(0px);
  }
```

<figure>
  <video controls muted height="400" style="height: 400px!important">
    <source src="/img/popover.mp4" alt="Ouverture et fermeture d'un menu de navigation popover avec animation d'opacité et de déplacement" title="Animation d'ouverture et de fermeture du popover" type="video/mp4">
  </video>
  <figcaption>
  Animation d'ouverture et de fermeture du popover
  </figcaption>
</figure>

## Les attributs d'accessibilité inclus par défaut dans le popover

- `aria-expanded` : quand un popover est invoqué par un `<button>` le navigateur associe automatiquement l’état étendu `aria-expanded=”true”` ou replié `aria-expanded=”false”` au bouton associé (fonctionne seulement quand l'élément HTML bouton invoque le popover)
- `aria-details` : il s’agit d’un attribut qui démontre la relation entre deux éléments HTML. Si notre popover ne suit pas directiment notre bouton, le navigateur se charge d’établir automatiquement le `aria-details`

## Les attributs d'accessibilité qu'il est pertinent d'ajouter à notre hamburger menu popover

1. `aria-controls`. Permet d'indiquer quel est l'élément actionné par le bouton. On indique l'ID de l'élément actionné. **Se place sur le bouton.**
2. `aria-haspopup="true"`. Indique que le bouton sécrète un menu. Cela permet d'avertir que, lorsque le bouton est pressé, l'utilisateur sera déplacé vers le menu. **Se place sur le bouton.**
3. `aria-label`. Permet de donner un nom accessible à un élément. On souhaite expliquer avec un nom accessible le rôle du bouton d'ouverture : "ouvrir la navigation principale". Pour l'élément `<nav>` on indique seulement le niveau de la navigation car le lecteur d'écran annoncer d'emblée qu'il s'agit d'un élément de navigation.
4. `aria-current="page"`. Permet de signifier sur quel page de la navigation se trouve actuellement l’utilisateur.
5. `type=”button”`. Permet de s'assurer que le bouton ne tente pas de soumettre un formulaire (comportement par défaut). **Se place sur le bouton.**

```
<button
  popovertarget="mobile-navigation"
  popovertargetaction="show"
	type="button"
  aria-label="ouvrir la navigation principale"
  aria-controls="mobile-navigation"
  aria-haspopup="true"
></button>

<nav
  id="mobile-navigation"
  aria-label="Principale"
  popover
>
  <button aria-label="fermer la navigation principale" aria-controls="mobile-navigation" popovertarget="mobile-navigation" popovertargetaction="hide">
  </button>
  <ul>
    <li><a aria-current="page" href="/index">HOME</a></li>
    <li><a href="/blog">BLOG</a></li>
    <li><a href="/projets">PROJETS</a></li>
  </ul>
</nav>
```

## Sources

<https://hidde.blog/popover-accessibility/>

<https://hidde.blog/dialog-modal-popover-differences/#heading-3/>

<https://web.dev/articles/website-navigation/>

<https://hidde.blog/popover-semantics/>

<https://nerdy.dev/using-starting-style-and-transition-behavior-for-enter-and-exit-stage-effects/>
