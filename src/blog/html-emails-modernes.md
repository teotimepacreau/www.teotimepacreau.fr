---
title: 'HTML emails modernes : en finir avec les tables'
date: '2023-12-13'
description: "Mettre à jour les pratiques de développement d'emails HTML grâce aux nouvelles règles supportées, tour d'horizon de l'état des clients mails et choisir des solutions pragmatiques qui conviennent à la grande majorité des lecteurs de mails."
tags: 
  - 'email'
  - 'HTML'
  - 'webmail'
layout: postlayout.html
---

Le monde du développement d'emails est rempli d'inconsistences, de hacks, d'éléments HTML obsolètes, et de règles CSS abandonnées depuis longtemps.
Les développeurs d'emails se retrouvent ainsi à devoir jongler entre des `<tables>` layouts, des `<tr>` et `<td>` (une façon de structurer le HTML en colonne et lignes comme on le ferait dans un tableau), les inline-styles CSS, `float` une propriété CSS qui a perdu de son usage, à juste titre, depuis l'arrivée de `flexbox` et `grid`.

En théorie, le monde du développement d'emails devrait être simple car les emails ne sont rien de plus que des documents HTML, comme une page web, échangés entre nos clients mails. Cependant l'élément bloquant est bien cette dépendance aux clients mails qui ont tous des manières de différente de transformer le HTML en rendu visuel pour l'utilisateur.
Le support de chaque client mail des règles CSS et du HTML est différent et a pris énormément de retard par rapport au développement web classique.

Ainsi, si vous avez l'habitude d'utiliser des méthodes CSS modernes comme  `dark-mode`, `grid`, `@font-face` celles-ci sont soient :
- pas supportés du tout
- ne fonctionnent pas comme attendu au rendu
- ne sont pas supportés de la même façon entre les différents clients mails

Le développement d'emails est donc devenu un casse tête où le développeur doit sans cesser vérifier si la règle CSS ou l'élément HTML utilisé est supporté grâce à des outils indispensables comme https://www.caniemail.com/. 

Le peu d'effort mis par Google, Apple et Microsoft pour intégrer le support des nouveautés CSS et HTML s'explique par des raisons de [sécurité](https://www.darkreading.com/cyberattacks-data-breaches/attackers-use-unicode-html-to-bypass-email-security-tools), de [guerre commerciale](https://www.linkedin.com/pulse/brief-update-email-client-wars-david-taitelbaum/), et d'impossibilité à se mettre d'accord sur un [*HTML email standard*](https://medium.com/email-design/will-there-ever-be-an-html-email-standard-bf8a2b7f48d8). A titre d'exemple [Outlook utilise encore Word pour rendre les emails sur mobile (?)](https://www.hteumeuleu.com/2020/outlook-rendering-engine/).

## Une révolution en cours dans le monde du développement des emails

Une révolution de la façon de développer des emails est en cours grâce à deux facteurs :
- la part d'utilisation des différents clients mails
- les récentes changements en terme de support des règles CSS/HTML des 3 principaux clients mails
![Part de marché des différents clients mails](/img/part-de-marche-clients-mails.png "Graphique représentant les différentes par de marchés des clients mails")

Si l'on développe des emails, c'est avant tout pour qu'ils soient lus, et pour cela il est important d'avoir bien en tête les parts d'usages des différents clients mails car il est IMPOSSIBLE de développer des emails compatibles pour les dizaines de clients mails qui existent (certains clients mails encore actifs comme AOL ont des parts d'utilisation infimes).

## Guide 
Le guide de développement moderne d'email ci-dessous s'appuie sur deux considérations pragmatiques :
- nous prenons en compte seulement les clients Apple Mail, Gmail et Outlook qui couvre ainsi 90% des lecteurs de mails dans le monde.
- nous utiliserons des règles CSS/HTML supportés à minima part 70% de tout les clients mails

Ainsi tous les éléments ci-dessous sont compatibles et supportés pour les 2 conditions précédentes et devraient combler la grande majorité des besoins.

### Stopper les table layouts et float
Les table layouts dans les emails mènent à de nombreux problème d'accessibilité et de rendering.

Outlook pour Windows est [la seule raison](https://blocksedit.com/content-code/dealing-with-outlook/) pour laquelle on pourrait être tenté de continuer à utiliser les tables, mais il représente désormais moins de 3% de l'usage total des clients mails. Les divs sont désormais totalement supportées et simplifient grandement la structuration des emails.

### Éléments HTML
Les divs, headings (**`<h1>`**, **`<h2>`**, etc.), paragraphes (**`<p>`**), et les listes (**`<ul>`**, **`<li>`**) sont supportés partout.

Il est donc possible de se passer totalement des `<table>` grâce aux divs ! Fini le besoin de structurer en colonnes et en lignes.

Les élements HTML sémantiques ne sont pas supportés : 
- **`<article>`**
- **`<aside>`**
- **`<details>`**
- **`<figcaption>`**
- **`<figure>`**
- **`<footer>`**
- **`<header>`**
- **`<main>`**
- **`<mark>`**
- **`<nav>`**
- **`<section>`**
- **`<summary>`**
- **`<time>`**

### Appliquer du CSS

Il n'est pas possible d'appliquer un style pour un fichier CSS externe via `<link rel="stylesheet" src="style.css">` car le client mail ne le lira pas.

Il faut donc se tourner vers deux méthodes CSS "traditionnelles" :
- les inline styles. Exemple : `<p style="margin-top: 1rem !important; line-height: 1.5 !important;">`
- `<style>`

Quelques points d'attention sur `<style>` :
Si vous forwardez l'email, tous les `<style>` seront supprimés et leur style ne sera pas appliqué. Également les comptes tiers utilisant un client mail autre que celui propriétaire verront leur `<style>` tag supprimé.

Ainsi, le seul style qui ne sera pas suprrimé est le inline style.

Quel est l'intérêt d'utiliser le `<style>` tag alors ?
Il permet d'appliquer des éléments généraux à tous le document HTML et évite les répétitions, donc pratique pour déclarer
**`[:hover](https://css-tricks.com/almanac/selectors/h/hover/)`**, les focus, un background-color sur la page... `!important`** est requis pour passer outre un inline style.

### Éviter les répétitions en utilisant le mécanisme CSS d'héritage

Plutôt que de définir `font-family: "Gill Sans", sans-serif;` à chaque fois que l'on pose un `<p>` il est plus pratique d'utiliser l'héritage :
```
<body>  <div style="font-size:16px; font-family: system-ui;">    <!-- email content goes here -->  </div></body>
```

### Les unités
De longueur :
Seuls les `rem` et les `px` sont supportés. On aura tendance à privilégier les `rem` pour leur accessibilité naturelle en cas de zoom.
De couleur :
Seuls `#fffff` et `rgb()` sont supportés.

### Fonts
`@font-face` n'est pas supporté, impossible donc d'utiliser une font de son choix. Il est impératif de passer par les `system-fonts`, des polices d'écriture incluses nativement dans les OS.

Une règle à suivre de bonne pratique pour déclarer ses system-fonts :
```
font-family: “Custom Serif You Won’t Have”, Serif You Might Have, Serif Your System Almost Definitely has, serif;

font-family: “Canela”, Adobe Caslon Pro, Palatino, serif;
```
Pour choisir la system-font qui correspond le mieux au design imaginé, essayez de choisir une system-font qui a une hauteur-de-x similaire.

### Rendre les images responsive

Par défaut les images vont overflow, pour contrer cela : 

```
<div
    class="img-block"
    style="overflow: hidden; margin-top: 2rem; border-radius: 0.5rem !important;">
        <img
          style="max-width: 100%; object-fit: cover;
            display: block;"
          src="https://i.imgur.com/twfNOSU.jpg"
          alt="The Material Web Components website : a landing page explaining what is Material UI."
        />
    </div>
```
![Images responsives dans les clients mails](/img/email-images-responsive.png "Illustration d'utilisation d'images responsives grâce à la technique ci-dessus dans un client mail")


### Flexbox 
La flexbox est désormais supportée ! Très pratique pour afficher des images côte à côte ou créer des colonnes.
`display: flex` et `column-gap` fonctionnent mais `flex-direction:column` et `flex-wrap: wrap` ne sont pas supportés dans GMAIL seulement. Ils fonctionnent dans les 2 autres clients.

![Utilisation de flexbox dans un client mail](/img/flexbox-email.mp4 "Vidéo illustration l'illustration de flexbox dans un client mail")

### Position
`position: relative` et `position:absolute` ne sont pas supportés du tout

### Liens
Les clients mails scannent les adresses emails et les numéros de téléphone dans le contenu de vos mails et les transforment automatiquement en liens soulignés bleus. Pour contrer ces styles par défaut il faut les wrapper dans des `<a>` et enlever le style par défaut.
```
<a style="color: inherit; text-decoration: none;" href="">
	some@example.com
</a>
```

## Cas d'usage
J'ai construit un site d'inscription et d'envoi de newsletter qui repose entièrement sur ces principes, voici le [lien du projet](https://www.teotimepacreau.fr/projets/projetnewsletter/)

## Sources 
https://dodov.dev/blog/why-does-email-development-have-to-suck
https://www.hteumeuleu.com/blog/
https://www.caniemail.com/