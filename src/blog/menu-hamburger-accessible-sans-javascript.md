---
eleventyExcludeFromCollections: true # A ENLEVER AU MOMENT DE POSTER

title: "Créer un menu hamburger fonctionnant sans Javascript"
date: '2024-05-20'
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
Un menu est constitué de liens, on utilise donc la balise HTML `<a>`.

Quand il y a plusieurs liens, il convient de créer une liste de liens en wrappant les `<a>` dans des `<li>`. Cela confère plusieurs avantages pour les utilisateurs assistés par un lecteur d'écran :
- l'annonce vocale préalable de chaque liens
- un raccourci pour sauter entre chaque élément de liste
- l'annonce voccale de l'index de l'item sélectionné (par exemple "élément de liste, deux parmi quatre")

On wrap les `<li>` dans une liste non-ordonnée `<ul>`. Enfin, on wrap le tout dans l'élément HTML de navigation sémantique `<nav>`. Utiliser `<nav>` permet de bénéficier du **landmark** de navigation pour que le navigateur identifie plus facilement la section dédiée (un **landmark** est une région de la page de première importance identifiée par le navigateur)

## Popover, l'API de navigateur dédiée aux éléments flottants

Popover est un nouvel attribut HTML [supporté par l'ensemble des navigateurs](https://developer.mozilla.org/fr/docs/Web/API/Popover_API). Il offre un mécanisme natif pour afficher du contenu au dessus de la page **sans Javascript**.
Plusieurs fonctionnalités lui sont automatiquement associées :
- "Top-layer", une couche de superposition est automatiquement créée pour le popover qui sera au-dessus de n'importe quel `z-index`
- "Light-dismiss", un simple clic en dehors du popover le ferme automatiquement
- "Tab focus", le focus se place automatiquement dans le popover après ouverture
- "Keyboard support", tapper sur`ESC` ferme le popover et retourne le focus au contenu en arrière plan

[METTRE ICI UNE DEMO DU FONCTIONNEMENT SANS JS]

### Comment créer notre menu avec Popover
Quand on crée un menu hamburger, plusieurs règles d'UX s'imposent :
- le reste de la page doit rester utilisable pour l'utilisateur. En terme technique c'est un comportement **non-modal** [(pour plus d'informations sur la différence modal - non modal voir ce lien)](https://hidde.blog/dialog-modal-popover-differences/#heading-3).
- on souhaite que le menu se superpose au contenu plutôt que de pousser le contenu vers un côté. Cela préserve l'importance du contenu de la page en arrière plan.
- un simple clic en dehors du menu ou la touche `ESC` doit fermer le menu
- un bouton actionne l'ouverture et la fermeture du menu

L'API Popover est composée d'un attribut HTML `popover` à placer sur l'élément à faire flotter. On place, sur un un bouton d'ouverture un attribut `popovertarget` qui prend en valeur l'ID de notre élément flottant. On spécifie l'action via `popovertargetaction` : celle-ci peut prendre 3 valeurs `show`, `hide` ou `auto`.


```
<button popovertarget="mobile-navigation" popovertargetaction="show">

<nav popover id="mobile-navigation">

	<button popovertarget="mobile-navigation" popovertargetaction="hide">

  <ul>
    <li><a href="/index">HOME</a></li>
    <li><a href="/blog">BLOG</a></li>
    <li><a href="/projets">PROJETS</a></li>
  </ul>
</nav>
```

### Animer l'ouverture et la fermeture du Popover

Il est possible de donner un style d'avant ouverture au popover via le sélecteur CSS :popover-open et la règle `@starting-style`. On donne ensuite un style à l'état ouvert dans `:popover-open`. Enfin on donne un style à l'état fermé directement dans l'attribut `[popover]`. La propriété `display` est dite "discrète" par nature : [cela signifie qu'elle ne peut pas être animée de façon native](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties#discrete). Pour pouvoir animer `display`, la propriété `transition-behavior: allow-discrete` est désormais prise en charge par tous les navigateurs sauf Firefox.

```
[popover] {
    left: 0;
    top: 0;
    height: 100dvh;
    width: 60dvw;
    transition: transform .2s ease-out, opacity .2s ease-out,
    display .2s ease-out;
    transition-behavior: allow-discrete;

    /*POPOVER IN EXIT STATE */
    opacity: 0;
    transform: translateX(-50px);
  }
  [popover]:popover-open {
    /*POPOVER BEFORE THE OPENING*/
    @starting-style {
      opacity: 0;
      transform: translateX(-50px);
    }
    /*POPOVER IN OPEN STATE*/
    opacity: 1;
    transform: translateX(0px);
  }
```

[METTRE VIDEO DE L'ANIMATION]

## Les attributs d'accessibilité inclus par défaut dans le popover

- `aria-expanded` : quand un popover est invoqué par un `<button>` (fonctionne seulement avec l'élément HTML bouton) le navigateur associe automatiquement l’état étendu `aria-expanded=”true”` ou replié `aria-expanded=”false”` au popover associé
- `aria-details` : il s’agit d’un attribut qui établit la relation entre deux éléments HTML. SI notre popover ne suit pas directiment notre bouton, le navigateur se charge d’établir automatiquement le `aria-details`

## Les attributs d'accessibilité qu'il est pertinent d'ajouter au popover

- aria-controls
- aria-haspopup
- type=”button”


## Sources
<https://ux.stackexchange.com/questions/46305/navigation-drawer-tablet-push-or-overlay/>

<https://web.dev/articles/website-navigation/>

<https://hidde.blog/popover-semantics/>