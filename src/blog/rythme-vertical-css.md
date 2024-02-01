---
title: 'Gérer facilement le rythme vertical de son site'
date: '2022-11-26'
description: "En 2 lignes de code, il est possible de mettre en place un système d'espacement modulable et réutilisable qui s'adapte à toutes les mises en page."
tags: 
  - 'CSS'
  - 'Rythme vertical'
  - 'Web design'
layout: postlayout.html
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
## Rythme vertical

Adopter un rythme vertical proportionnel et prédictible sur une page web permet de ressentir une [hiérarchie visuelle qui facilite l'expérience utilisateur](https://24ways.org/2006/compose-to-a-vertical-rhythm/).

### Comment le déterminer ?

On établit une *unité de mesure commune* qui régit tous nos espacements et tailles. 
Pour la déterminer, la règle typographique communément admise est **d'ajouter la hauteur de la ligne à la taille de la police d'écriture utilisée**. Cela crée notre *"unité de rythme"* que l'on va moduler pour tous nos espacements/tailles.
Notre base est la ```line-eight``` des paragraphes couplée à la ```font-size``` :

```
p {
  font-size: 1rem; /* =16px par défaut */
  line-eight: 1.4;
}
_____________
16*1.4=22.4
```
Notre *"unité de rythme"* est 22.4. L'objectif est d'essayer que chaque espacement en soit le multiple. 

### Exemple concret d'utilisation

- On souhaite un ```<h1>``` qui ferait 4 fois la taille de notre <p>.
- On souhaite également adapter la hauteur de ligne pour faciliter la lecture sur le gros-titre : ```line-eight: 1.1;```.

Un premier réflexe pourrait-être d'utiliser ```font-size: 4rem;```. 
Pourtant on veut que notre ```<h1>``` soit 4 fois plus grand que notre *"unité de rythme"* et non pas de notre taille de police. On module donc la font-size :

```
?*1.1=67.2
<=>61.09*1.1=67.2

On convertit 61.09px en rem : 16/61.09=3.81rem
```
## Le "hibou lobotomisé" : le sélecteur CSS qui fait gagner du temps

```* + *```, [autrement appelé le "hibou lobotomisé"](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) est un formidable moyen de mettre en place une règle CSS anonyme et automatique pour faciliter la mise en page.

- le sélecteur ">" cible tous les éléments enfants de la div parente
- le sélecteur "*" cible tous les éléments

```article > * + *``` nous permet donc de cibler tous les éléments de notre article suivant directement d'autres éléments.

## ... et une touche de Custom Properties

Les [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) permettent de déclarer des variables réutilisables. On en profite pour utiliser également la fonction "clamp" qui permet de switcher entre une valeur minimale, une valeur de circonstance et une valeur maximale. Cela permet à notre *unité de rythme* d'évoluer en accord avec l'espace disponible.
```
:root {
  --baseline : clamp(1.4rem, 1.1200rem + 1.4000vw, 2.8rem);
}
```
## Notre espacement automatique pour l'ensemble du site en 2 lignes de code
```
body > * + * {
  margin-top: var(--baseline);
}
```

Pourquoi utiliser seulement ```margin-top``` ? Les marges peuvent, dans certains cas, entrer en collision et se soustraire. [En ne déclarant que ```margin-top``` on évite cet inconvénient](https://cssfordesigners.com/articles/managing-vertical-margins-in-css).