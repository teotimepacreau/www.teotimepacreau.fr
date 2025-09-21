---
eleventyExcludeFromCollections: true
title: "Designer des tableaux clairs et efficaces"
description: "Règles d'UX et d'UI pour présenter des tableaux."
type: "Article"
date: '2025-09-20'
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

Tout *[Knowledge Worker](https://www.teotimepacreau.fr/essais/challenger-pratiques-transformation-organisationelle-par-le-design-de-services#:~:text=Le%20terme%20travailleur,Drucker%20%E2%80%98knowledge%20work%E2%80%99)* se retrouve régulièrement face à des tableaux : tableurs et tableaux font partis de notre quotidien pour structurer une idée à double entrée.

Pourtant on rencontre très, *trop* fréquemment des tableaux qui rendent l'information encore plus complexe à appréhender que dans sa forme initiale.

## Tableau ou graphique, quelle forme pour quel usage ?

Avant de choisir une forme praticulière, il est nécessaire de raisonner en terme d'usage. Les tableaux sont plus adaptés pour présenter des valeurs, les comparer ou présenter des unités de mesure multiples. A contrario, les graphiques, sont plus adaptés pour démontrer les tendances, anomalies et relations. 

[Charlie Munger](https://fr.wikipedia.org/wiki/Charlie_Munger?useskin=vector), le bras droit de Warren Buffet chez Berkshire Hathaway, a passé de nombreuses années à s'intéresser à l'encrage des idées mathématiques dans les système biologiques et psychologiques, il explique que *les graphiques assemblent les nombres dans une forme qui ressemble au *mouvement*. Cette représentation du mouvement nous accroche en faisant appel à nos sens primaires*.

{% citationsmarginales "MUNGER, Charlie. <a href='https://www.stripe.press/poor-charlies-almanack/talk-three?progress=14.48%'><em>Poor Charlie’s Almanack The Essential Wit and Wisdom of Charles T. Munger. Talk 3 : A Lesson on Elementary, Worldly Wisdom as It Relates to Investment Management and Business, Revisited</em></a>.Stripe Press, 2023" %}
At any rate, mankind invented a system to cope with the fact that we are so intrinsically lousy at manipulating numbers. It’s called the graph. Oddly enough, it came out of the Middle Ages. It’s the only intellectual invention of the monks during the Middle Ages. I know of that’s worth a damn. The graph puts numbers in a form that looks like motion. So it’s using some of this primitive neural stuff in your system in a way that helps you understand it.
{% endcitationsmarginales %}

*[Les graphiques montrent la forêt là où des tableaux montre les arbres](https://simplexct.com/data-ink-ratio-tables#:~:text=In%20other%20words%2C%20graphs%20show%20the%20forest%20while%20tables%20show%20the%20trees.)*.

Pour tous les sujets de visualisation de l'information, [Edward Tufte](https://www.edwardtufte.com/notebook/table-and-timetable-design-and-typography/) est l'auteur de référence. Il a établi un véritable standard de [mise en page des documents](https://edwardtufte.github.io/tufte-css/) et a proposé des travaux de recherche avancée à propos des techniques de *datavisualisation*.

Dans sa thèse ["The visual display of quantitative information"](https://ia800408.us.archive.org/15/items/tufte_visual_display_of_quantitative_information_low-res/tufte_visual_display_of_quantitative_information_low-res_text.pdf), Edward Tufte évoque l'histoire et l'intérêt des graphiques :

William Playfair (1759-1823), a Scottish political economist made the first known time-series using economic data. It was published in
Playfair's remarkable book, The Commercial and Political Atlas (Lon-
don, 1786). Playfair contrasted his new graphical method
with the tabular presentation of data:
"Information [...] is generally imper-
fectly retained; and a man who has carefully investigated a
printed table, finds, when done, that he has only a very faint
and partial idea of what he has read; and that like a figure
imprinted on sand, is soon totally erased and defaced. Upon that these Charts
were made; and, while they give a simple and distinct idea,
they are as near perfect accuracy as is any way useful. On
inspecting any one of these Charts attentively, a sufficiently
distinct impression will be made, to remain unimpaired for a
considerable time, and the idea which does remain will be
simple and complete."
For Playfair, graphics were preferable to tables because graphics
showed the shape of the data in a comparative perspective.

![Graphique de tous les imports et exports d'Angleterre de 1700 à 1782, représentant en ordonnée les millions de marchandises et le temps en abscisse. Le graphique est fait à la main via un quadrillage.](/img/premier_graphique.png "Premier graphique à avoir été largement diffusé, détaillant tous les imports et exports d'Angleterre de 1700 à 1782")

## Règles générales de mise en forme d'un tableau

![Exemple de tableau multicolore, surchargé, complexe à appréhender. Le tableau présente des données fictives relatives au cinéma.](/img/tableau_excel_typique.png "Un exemple de tableau que l'on a tous déjà rencontré, source et tous droits réservés Dark Horse Analytics")

Le tableau ci-dessus est difficile à appréhender de par sa mise en forme. Il véhicule une impression de complexité visuelle alors qu'il présente des informations plutôt simples.

Quels points d'amélioration peut-on identifier ?

- l'intégralité des bordures sont présentes
- une alternance de couleurs sur chaque ligne
- les étiquettes de colonne sont centrées et alignées vers le bas avec un espacement jusqu'en haut de la case conséquent
- tous les textes et nombres sont centrés

- plus il y a de bordures plus le tableau est complexe à appréhender
- plus il y a de couleurs différentes et plus le tableau est complexe à appréhender
- le texte doit toujours être aligné à gauche
- les nombres doivent toujours être alignés à droite
- les étiquettes de colonnes doivent toujours être alignées avec le contenu des colonnes
- on regroupe les cellules similaires pour éviter les répétitions
- les bordures sont souvent superflues car l'alignement des cellules suffit souvent à discerner les relations
- un saut de ligne dans un tableau peut être plus efficace qu'une bordure pour espacer des groupes de données

L'agence de visualisation de données [Dark Horse Analytics](https://www.darkhorseanalytics.com/) avait partagé une série de billets de blog en 2014 intitulé "[Data Looks Better Naked](https://www.darkhorseanalytics.com/blog/data-looks-better-naked)".

Voici le traitement qu'ils ont appliqués au tableau pour le rendre plus lisible :

![Le gif montre visuellement l'application des règles de mise en forme énumérées au dessus. Le tableau devient clair et lisible](/img/ClearOffTheTable.gif "Traitement design d'un tableau")

Un autre exemple frappant proposée par l'agence [SimplexCT] :

[placer gif nettoyage_de_tableau.gif]

On peut noter :

- le choix de colorer en section le corps du tableau non pas via une clée de sélection particulière mais simplement en divisant en 4 sections
- le fait de remplacer les 0 très répétitifs par des tirets pour supprimer de la charge visuelle
- la mise en évidence des titres via une mise en majuscule complète souligné par une seule bordure plutôt qu'utiliser du gras ou des couleurs fortes
- le placement du total en haut plutôt qu'en pied de tableau

Au sujet des tableaux, Eward Tufte donne [quatre principes](https://www.nas.nasa.gov/assets/nas/pdf/techreports/1994/nas-94-002.pdf) :

- Above all else show the data.
- Maximize the data-ink ratio.
- Erase non-data-ink.
- Erase redundant data-ink.

## Construire des `<table>` lisibles et clairs en HTML CSS

### Le HTML

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

Par défaut, chaque case du tableau a ses 4 bordures de matérialisées et les cases sont séparées les unes des autres car le navigateur attribut un style par défaut pour la table avec la propriété `border-collapse` qui prend pour valeur `separate`.

[placer image border-collapse-separate.PNG]

La valeur `collapse` permet de partager les bordures, ce qui est *beaucoup* plus courant dans les tableaux que l'on voit tous les jours.

[placer image border-collapse-collapse.PNG]

#### Gérer le dépassement de contenu

Pour éviter que le tableau soit trop grand pour le dimensionnement qui lui est réservé, il peut être judicieux d'appliquer la propriété `overflow: scroll` à l'élément qui wrap le tableau

```html
<div style="overflow: scroll;">
	<table>
	</table>
</div>
```

#### Rendre les étiquettes de colonne ou un volet du tableau "sticky"

## Sources

<https://simplexct.com/data-ink-ratio-tables>

<https://www.darkhorseanalytics.com/blog/>

<https://piccalil.li/blog/styling-tables-the-modern-css-way/>