---
eleventyExcludeFromCollections: true
title: "Designer des tableaux clairs et efficaces"
description: "Règles d'UX et UI pour présenter des tableaux."
type: "Article"
date: '2025-06-28'
tags: 
  - 'Design'
  - 'WebDev'
  - 'CSS'
  - 'HTML'
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

Tout *[Knowledge Worker](https://www.teotimepacreau.fr/essais/challenger-pratiques-transformation-organisationelle-par-le-design-de-services#:~:text=Le%20terme%20travailleur,Drucker%20%E2%80%98knowledge%20work%E2%80%99)* se retrouve régulièrement face à des tableaux : tableurs très régulièrement, parfois un tableau simplement pour structurer une idée à double entrée.

![Exemple de tableau multicolore, surchargé, complexe à appréhender. Le tableau présente des données fictives relatives au cinéma.](/img/tableau_excel_typique.png "Un exemple de tableau que l'on a tous déjà rencontré, source et tous droits réservés Dark Horse Analytics")

Le tableau ci-dessus est difficile à appréhender de par sa mise en forme. Il véhicule une impression de complexité visuelle alors qu'il présente des informations plutôt simples.

Quels points d'amélioration peut-on identifier ?

- l'intégralité des bordures sont présentes
- une alternance de couleurs sur chaque ligne
- les étiquettes de colonne sont centrées et alignées vers le bas avec un espacement jusqu'en haut de la case conséquent
- tous les textes et nombres sont centrés

## Règles générales de mise en forme d'un tableau

- plus il y a de bordures plus le tableau est complexe à appréhender
- plus il y a de couleurs différentes et plus le tableau est complexe à appréhender
- le texte doit toujours être aligné à gauche
- les nombres doivent toujours être alignés à droite
- les étiquettes de colonnes doivent toujorus être alignées avec leur contenu
- on regroupe les cellules similaires pour éviter les répétitions
- un saut de ligne dans un tableau peut être plus efficace qu'une bordure pour espacer des groupes de données

L'agence de visualisation de données [Dark Horse Analytics](https://www.darkhorseanalytics.com/) avait partagé une série de billets de blog en 2014 intitulé "[Data Looks Better Naked](https://www.darkhorseanalytics.com/blog/data-looks-better-naked)".

Voici le traitement qu'ils ont appliqués au tableau pour le rendre plus lisible :

![Le gif montre visuellement l'application des règles de mise en forme énumérées au dessus. Le tableau devient clair et lisible](/img/ClearOffTheTable.gif "Traitement design d'un tableau")

## Construire des <table> lisibles et clairs en HTML CSS

L'élément `<table>` englobe le contenu. A l'intérieur on retrouve `<thead>` contient les étiquettes de colonne. `<tbody>` contient le corps du tableau.
Une ligne est construite à partir de `<tr>` qui contient elle même l'élément de référence de la ligne `<th>` et la donnée associée `<td>`.
Pour afficher un total ou un élément résumant le tableau en pied de tableau il est possible d'utiliser l'élément englobant `<tfoot>`.
Pour titrer le tableau on utilise l'élément `<caption>` en premier descendant de l'élément `<table>`.

```html
<table>
	<caption>Titre du tableau</caption>
 	<thead>
		<tr>
			<th scope="column">Pays</th>
			<th scope="column">Temperature</th>
		</tr>
 	</thead>
	<tbody>
    <tr>
      <th>
        France
      </th>
      <td>
        30°C
      </td>
    </tr>
	</tbody>
	<tfoot>
    <tr>
      <th>
        Total
      </th>
      <td>
        30°C
      </td>
    </tr>
	</tfoot>
</table>
```

Le style par défaut appliqué par le navigateur est :

```css
table {
	display: table;
  border-spacing: 2px;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: 0;
}
```

Il est important de ne pas modifier la propriété `diplay: table` sous peine de rendre le tableau inaccessible pour les utilisateurs de technologies d'assistance.