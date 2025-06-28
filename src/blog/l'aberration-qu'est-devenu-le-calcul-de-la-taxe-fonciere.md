---
eleventyExcludeFromCollections: true
title: "L'aberration qu'est devenu le calcul de la taxe foncière"
description: "Plongée dans l'obscur mode de calcul de l'impôt le plus captif"
type: "Article"
date: "Last Modified"
tags: 
  - 'Immobilier'
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

La taxe foncière sur les propriétés baties est un impôt levé sur la quasi totalité des propriétaires de locaux d'habitation. Son mode de calcul [n'a pas évolué depuis 1970](https://bofip.impots.gouv.fr/bofip/1535-PGP.html/identifiant=BOI-IF-TFB-20-10-10-20-20121210) car il est calculé à partir des conditions du marché locatif au 1er Janvier 1970 pour le bien c'est à dire la "valeur locative cadastrale", cette valeur représente ainsi l’estimation du loyer annuel brut qui serait perçu par le redevable s’il louait son bien aux conditions de marché... de 1970.
Cette valeur locative cadastrale est abattue de 50% puis multipliée par un taux d'imposition voté par la commune (au mois d’avril, les communes votent leurs taux de taxe foncière sous contrainte d’équilibre budgétaire en connaissance de leurs bases imposables), l'EPCI et les syndicats intercommunaux. (environ 40% pour ma commune(bond de +5% entre 2023 et 2024) et 6% pour mon EPCI).

Les valeurs locatives cadastrales elle-même sont revalorisées par l'Etat en proportion de l’indice des prix à la consommation harmonisé (+10% en 4 ans !)

[Les recettes fiscales de la TF sont distribuées par part au budget des différentes collectivités (communes, EPCI, syndicats intercommunaux). Le montant total de taxe foncière inclut enfin des frais de gestion, que l’État perçoit en contrepartie du recouvrement réalisé pour le compte des collectivités. Les frais s’échelonnent de 3 à 9 % selon la composante de TF considérée](https://www.impots.gouv.fr/sites/default/files/media/9_statistiques/0_etudes_et_stats/0_publications/dgfip_statistiques/2025/num34_05/dgfip_stat_34_tf_2025.pdf)

## Comment est déterminée la valeur locative cadastrale ?

La valeur locative cadatsrale est établie à partir des éléments déclarés à l'administration fiscale (surface, nombre de pièces, usage des pièces, éléments de confort, dépendances...), à partir de ces informations l'administration fiscale catégorise le bien parmis 8 catégories de biens, voici le tableau recensant les critères :

![Tableau détaillant les critères pour la classification d'un bien dans une catégorie de valeur cadastrale locative, version accessible voir lien](/img/classification_taxe_fonciere.png "[Tableau 1 détaillant les critères pour la classification d'un bien dans une catégorie de valeur cadastrale locative](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037128024)")
