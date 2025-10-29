---
eleventyExcludeFromCollections: true
title: "Designer des tableaux clairs et efficaces"
description: "Présenter des données : quelle forme choisir en fonction de l'usage souhaité et comment concevoir des tableaux user friendly"
type: "Article"
date: '2025-10-26'
tags: 
  - 'Design'
  - 'Management'
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
Tout *[Knowledge Worker](https://www.teotimepacreau.fr/essais/challenger-pratiques-transformation-organisationelle-par-le-design-de-services#:~:text=Le%20terme%20travailleur,Drucker%20%E2%80%98knowledge%20work%E2%80%99)* se retrouve régulièrement face à des tableurs et des tableaux. Pourtant on rencontre très, *trop* fréquemment des tableaux qui rendent l'information encore plus complexe à appréhender que dans sa forme initiale.

## Tableau ou graphique, quelle forme pour quel usage ?

Avant de choisir une forme praticulière, il est nécessaire de raisonner en terme d'usage.

Pour tous les sujets de visualisation de l'information, [Edward Tufte](https://www.edwardtufte.com/) est l'auteur de référence. Ses travaux de recherche avancés dans sa thèse "The Visual Display of Quantitative Information" ont posés un standard.

{% citationsmarginales "TUFTE, Edward. <a href='https://www.cs.rug.nl/svcg/uploads/VisualAnalytics/Tufte01-2.pdf'><em>The Visual Display of Quantitative Information, SECOND EDITION</em></a>. 2001", "en" %}The conventional sentence is a poor way to show more than two numbers because it prevents comparisons within the data. [He illustrates with an example sentence] "Nearly 53 percent of the type A group did something or other compared to 46 percent of B and slightly more than 57 percent of C."
Arrange the type to facilitate comparisons, as in this text-table:</br>
Group A 53%</br>
Group B 46%</br>
Group C 57%</br>
There are nearly always better sequences than alphabetical-for example, ordering by content or by data values:</br>
Group B 46%</br>
Group A 53%</br>
Group C 57%</br>
Tables are preferable to graphics for many small data sets. A table is nearly always better than a dumb pie chart{% endcitationsmarginales %}

[Les tableaux sont plus adaptés pour présenter des valeurs, les comparer ou présenter des unités de mesure multiples. A contrario, les graphiques, sont plus adaptés pour démontrer les tendances, anomalies et relations](https://simplexct.com/data-ink-ratio-tables#:~:text=Tables%20are%20best%20suited%20for%20looking%20up%20precise%20values%2C%20comparing%20individual%20values%20or%20presenting%20values%20involving%20multiple%20units%20of%20measure.%20Graphs%2C%20on%20the%20other%20hand%2C%20are%20better%20for%20detecting%20trends%2C%20anomalies%20or%20relations).

[Charlie Munger](https://fr.wikipedia.org/wiki/Charlie_Munger), le bras droit de Warren Buffet chez Berkshire Hathaway, a passé de nombreuses années à s'intéresser à l'ancrage des concepts mathématiques dans les systèmes biologiques et psychologiques. Il explique que *les graphiques assemblent les nombres dans une forme qui ressemble au *mouvement*. Cette représentation du mouvement nous accroche en faisant appel à nos sens primaires*.

{% citationsmarginales "MUNGER, Charlie. <a href='https://www.stripe.press/poor-charlies-almanack/talk-three?progress=14.48%'><em>Poor Charlie’s Almanack : The Essential Wit and Wisdom of Charles T. Munger. Talk 3 : A Lesson on Elementary, Worldly Wisdom as It Relates to Investment Management and Business, Revisited</em></a>. Stripe Press, 2023", "en" %}At any rate, mankind invented a system to cope with the fact that we are so intrinsically lousy at manipulating numbers. It’s called the graph. Oddly enough, it came out of the Middle Ages. It’s the only intellectual invention of the monks during the Middle Ages. I know of that’s worth a damn. The graph puts numbers in a form that looks like motion. So it’s using some of this primitive neural stuff in your system in a way that helps you understand it.{% endcitationsmarginales %}

Dans sa thèse, Edward Tufte évoque lui aussi l'histoire et l'intérêt des graphiques :

{% citationsmarginales "TUFTE, Edward. <a href='https://ia800408.us.archive.org/15/items/tufte_visual_display_of_quantitative_information_low-res/tufte_visual_display_of_quantitative_information_low-res_text.pdf'><em>The Visual Display of Quantitative Information</em></a>. 1983", "en" %}William Playfair (1759-1823), a Scottish political economist made the first known time-series using economic data. [...] Playfair contrasted his new graphical method with the tabular presentation of data: "Information [...] is generally imperfectly retained; and a man who has carefully investigated a printed table, finds, when done, that he has only a very faint and partial idea of what he has read; and that like a figure imprinted on sand, is soon totally erased and defaced. Upon that these Charts were made; and, while they give a simple and distinct idea, they are as near perfect accuracy as is any way useful. On inspecting any one of these Charts attentively, a sufficiently distinct impression will be made, to remain unimpaired for a considerable time, and the idea which does remain will be simple and complete." For Playfair, graphics were preferable to tables because graphics showed the shape of the data in a comparative perspective.{% endcitationsmarginales %}

![Graphique de tous les imports et exports d'Angleterre de 1700 à 1782, représentant en ordonnée les millions de marchandises et le temps en abscisse. Le graphique est fait à la main via un quadrillage.](/img/premier_graphique.png "Premier graphique à avoir été largement diffusé, détaillant tous les imports et exports d'Angleterre de 1700 à 1782")

*[Les graphiques montrent la forêt là où les tableaux montrent les arbres](https://simplexct.com/data-ink-ratio-tables#:~:text=In%20other%20words%2C%20graphs%20show%20the%20forest%20while%20tables%20show%20the%20trees.)*.

## Règles générales de mise en forme d'un tableau

![Exemple de tableau multicolore, surchargé, complexe à appréhender. Le tableau présente des données fictives relatives au cinéma.](/img/tableau_excel_typique.png "Un exemple de tableau que l'on a tous déjà rencontré, source et tous droits réservés Dark Horse Analytics")

Le tableau ci-dessus est difficile à appréhender de par sa mise en forme. Il véhicule une impression de complexité visuelle alors qu'il présente des informations plutôt simples.

Quels défauts peut-on identifier ?

- l'intégralité des bordures sont présentes
- une alternance de couleurs sur chaque ligne
- les étiquettes de colonne sont centrées et alignées vers le bas avec un espacement jusqu'en haut de la case conséquent
- tous les textes et nombres sont centrés

De manière générale, les règles suivantes s'appliquent pour les tableaux :

- plus il y a de bordures plus le tableau est complexe à appréhender
- plus il y a de couleurs différentes et plus le tableau est complexe à appréhender
- le texte doit toujours être aligné au sens d'écriture de la langue
- les nombres doivent toujours être alignés à droite pour faciliter leur lecture
- les étiquettes de colonnes doivent toujours être alignées avec le contenu de leur colonne
- on regroupe les cellules similaires pour éviter les répétitions
- les bordures sont souvent superflues car l'alignement suffit à discerner les relations entre les items
- un saut de ligne dans un tableau peut être plus efficace qu'une bordure pour espacer des groupes de données

L'agence de visualisation de données [Dark Horse Analytics](https://www.darkhorseanalytics.com/) avait partagé une série de billets de blog en 2014 intitulé "[Data Looks Better Naked](https://www.darkhorseanalytics.com/blog/data-looks-better-naked)".

Voici le traitement qu'ils ont appliqués au tableau pour le rendre plus lisible :

![Le gif montre visuellement l'application des règles de mise en forme énumérées au dessus. Le tableau devient clair et lisible](/img/ClearOffTheTable.gif "Traitement dataviz d'un tableau")

Un autre exemple de traitement *dataviz* de tableau :

![Le gif montre visuellement l'application des règles de mise en forme énumérées au dessus. Le tableau initialement complexe en terme de présentation devient clair et lisible](/img/nettoyage_de_tableau.gif "Traitement dataviz d'un tableau par l'agence [SimplexCT](https://simplexct.com/)")

On peut noter :

- le choix de colorer en section le corps du tableau non pas via une clée de sélection particulière mais simplement en divisant en 4 sections
- le fait de remplacer les 0 répétés par des tirets pour supprimer de la charge visuelle
- la mise en évidence des titres via une mise en majuscule plutôt que d'utiliser du gras ou des couleurs fortes
- le placement de total en haut plutôt qu'en pied de tableau pour prioriser l'information

Au sujet des tableaux, Eward Tufte donne [quatre principes](https://www.nas.nasa.gov/assets/nas/pdf/techreports/1994/nas-94-002.pdf) :

- Above all else show the data.
- Maximize the data-ink ratio.
- Erase non-data-ink.
- Erase redundant data-ink.

[Tufte a également documenté un travail de re-design de tableau pour les tables d'horaires d'une ligne de chemin de fer américaine](https://www.edwardtufte.com/notebook/table-and-timetable-design-and-typography/).

## Construire des `<table>` lisibles et clairs en HTML CSS

### Le HTML

L'élément `<table>` englobe le contenu. A l'intérieur on retrouve `<thead>` qui contient les étiquettes de colonne. `<tbody>` contient le corps du tableau.
Une ligne est construite à partir de `<tr>` qui contient elle même l'élément de référence de la ligne `<th>` et la donnée associée `<td>`.
Pour afficher un total ou un élément résumant le tableau en pied de tableau il est possible d'utiliser l'élément englobant `<tfoot>`.
Pour titrer le tableau on utilise l'élément `<caption>` en premier descendant de l'élément `<table>`.

```html
<table>
	<caption>Indices obligataires France Allemagne</caption>
 	<thead>
		<tr>
			<th scope="column">Pays</th>
			<th scope="column">OAT</th>
		</tr>
 	</thead>
	<tbody>
    <tr>
      <th>
        France
      </th>
      <td>
        3.42
      </td>
    </tr>
    <tr>
      <th>
        Allemagne
      </th>
      <td>
        2.63
      </td>
    </tr>
	</tbody>
	<tfoot>
    <tr>
      <th>
        Spread
      </th>
      <td>
        0.79
      </td>
    </tr>
	</tfoot>
</table>
```

<table style="border-collapse: unset">
	<caption style="caption-side: bottom; font-size: var(--step--2);">Indices obligataires France Allemagne</caption>
 	<thead>
		<tr>
			<th scope="column">Pays</th>
			<th scope="column" style="text-align: end">OAT</th>
		</tr>
 	</thead>
	<tbody>
    <tr>
      <th>
        France
      </th>
      <td style="text-align: end">
        3.42
      </td>
    </tr>
    <tr>
      <th>
        Allemagne
      </th>
      <td style="text-align: end">
        2.63
      </td>
    </tr>
	</tbody>
	<tfoot>
    <tr>
      <th>
        Spread
      </th>
      <td style="text-align: end">
        0.79
      </td>
    </tr>
	</tfoot>
</table>

### Le CSS

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

#### Les bordures

Par défaut, chaque case du tableau à ses quatre bordures matérialisées et les cases sont séparées les unes des autres car le navigateur attribut un style par défaut pour la table avec la propriété `border-collapse` qui prend pour valeur `separate`.

![Capture d'écran de la matérialisation des bordures en cas de propriété CSS `border-collapse: separate`. Toutes les bordures sont séparées les unes des autres](/img/border-collapse-separate.png "Propriété de bordure par défaut appliquée par le navigateur")


La valeur `collapse` permet de partager les bordures, ce qui est *beaucoup* plus courant dans les tableaux que l'on voit tous les jours.

![Capture d'écran de la matérialisation des bordures en cas de propriété CSS `border-collapse: collapse`. Toutes les bordures partagées entre les cellules sont fusionnées](/img/border-collapse-collapse.png "Propriété de bordure `collapse`")

#### Gérer le dépassement de contenu

Pour éviter que le tableau soit trop grand pour le dimensionnement qui lui est réservé, il peut être judicieux d'appliquer la propriété `overflow: scroll` à l'élément qui wrap le tableau afin de permettre un défilement au scroll en cas de dépassement.

```html
<div style="overflow: scroll;">
	<table>
	</table>
</div>
```

### Rendre les en-têtes de colonne ou un volet du tableau "sticky"

[prendre capture vidéo du fonctionnement de mes en-têtes de colonne de tableau sur mon site]

```css
thead {
  position: sticky;/*l'élément glisse désormais dans l'espace contenu par son ancêtre direct*/
  top: 0.1rem;/*obligatoire de choisir si l'élément est sicky à partir du top, bottom, right ou left, ici je choisis de coller au haut du tableau en décalent légèrement le thead pour ne pas coller la barre du navigateur */
}
```

Pour figer le premier volet d'un tableau à double entrée sur l'axe horizontal, l'approche est un peu différente, on rend `sticky` les premiers `<th>` descendants de chaque `<tr>` : 

```css
th:first-child {
	position: sticky;
	left: 0;
	border-inline-end: none;
}
```

#### Alignement vertical à l'intérieur des cellules

[ placer image table-vertical-alignment.PNG]

Quand les colonnes deviennent plus étroites cela a pour effet de wrapper le texte de la colonne qui en contient le plus. Et fait donc, flotter le contenu de la cellule la moins large au centre vertical de la cellule. On souhaite plutôt aligner le contenu de notre seconde cellule sur la première ligne de texte de la première cellule via la valeur `baseline`

```css
th,
td {
	vertical-align: baseline;
}
```

#### Cohérence typographique

Dans certaines typographies, les chiffres ont des largeurs différentes, on souhaite plutôt avoir la même largeur pour chaque chiffre en utilisant la propriété CSS : `font-variant-numeric: tabular-nums`.

![Capture d'écran de la différence entre une typographie en nombres tabulaires et non tabulaires : une série de 1 et de 0 tabulaires a la même largeur tandis que les deux mêmes lignes en tabulaires ont des chiffres de largeur différente](/img/tabular_vs_non-tabular_nums.png "Différence de largeur des chiffres en cas de typographie tabulaire et non tabulaire")

#### Rendre le tableau responsive sur mobile

L'étroitesse du contenu affiché sur mobile oblige à repenser le tableau. En effet, sur mobile le tableau va rapidement s'allonger en hauteur et l'on en souhaite pas que l'utilisateur ne sache pas à quelle en-tête de colonne correspond la donnée contenue dans la cellule. Une solution peut être d'afficher les en-têtes de colonne en les répétant à côté de chaque donnée de cellule.

On ne prend ici en considération que le cas de `<table>` générées à partir de Markdown, elles n'ont donc que des en-têtes de colonnes et ne peuvent avoir d'en-tête de ligne car [Markdown ne supporte pas les tableaux à double entrée](https://blog.markdowntools.com/posts/markdown-table-ultimate-guide). En Markdown il n'est également pas possible de regrouper plusieurs cellules entre elles alors qu'il est possible de le faire en HTML via l'attribut `rowspan` ou `colspan`.

[placer image tableau_desktop]

[placer image tableau_mobile]

Techniquement, on souhaite que les en-têtes de colonne `<th>` contenus dans `<thead>` soient réinjectés dans le corps du tableau. On crée un script en Javascript en ce sens :

```js
const displayTableForMobile = function () {
  document.querySelectorAll("table").forEach((table) => {
    const allTh = table.querySelectorAll("thead th");
    let allRows = table.querySelectorAll("tbody tr");
    allRows.forEach((row) => {
      const allTd = row.querySelectorAll("tbody tr td");
      allTd.forEach((td, index) => {
        const text = allTh[index] ? allTh[index].textContent : "";
        td.setAttribute("data-cell", text);
      });
    });
  });
};
displayTableForMobile();
```

Pour chaque table sélectionnée, on sélectionne tous les en-têtes de colonne ainsi que toute les lignes du corps de tableau. Pour chaque ligne sélectionnée, on sélectionne chaque cellule. Pour chaque cellule, on instancie une constante `text` qui raccroche l'en-tête de colonne et on le place dans un attribut HTML custom `data-cell`.

Puis on a nécessairement besoin de CSS pour afficher le contenu de l'attribut `data-cell` avant le contenu de la cellule :

```css
/*---RESPONSIVE TABLES ON MOBILE : pour que ça fonctionne nécessaire que chaque td ait un attribut 'data-cell' qui soit égal au th de sa colonne, par exemple : th "job-title", td doit être <td data-cell="job-title">---*/
@media (width < 800px) {
  th {
    display: none;
  }
  td {
    display: grid;
    grid-template-columns: 33dvw auto;
    word-wrap: anywhere;
  }
  td::before {
    content: attr(data-cell);
  }
}
```

## Sources

<https://simplexct.com/data-ink-ratio-tables>

<https://www.darkhorseanalytics.com/blog/>

<https://piccalil.li/blog/styling-tables-the-modern-css-way/>

<https://practicaltypography.com/grids-of-numbers.html>