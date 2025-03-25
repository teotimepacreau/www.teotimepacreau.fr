---
title: "Suivre l'évolution du marché immobilier dans son département"
type: "Article"
date: '2025-03-25'
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

L'Inspection Générale de l'Environnement et du Développement Durable (IGEDD) propose un [jeu de données mis à jour mensuellement pour suivre l'évolution du montant de l'assiette des droits de mutation immobiliers](https://www.igedd.developpement-durable.gouv.fr/droits-de-mutation-immobiliers-par-a1652.html) (parfois improprement appelés ["frais de notaire"](http://www.igedd.developpement-durable.gouv.fr/frais-de-notaire-et-droits-de-a1414.html)).

L'assiette des droits de mutation correspond au montant total des ventes immobilières en €, cela sert de référence aux acteurs publics pour le calcul des taxes sur les ventes immobilières.

Les droits de mutation sont constitués du droit d'enregistrement et de la taxe de publicité foncière (regroupe des prélèvements effectués au profit des départements, des communes et de l'État = 4.5% du prix du bien pour le département, 1.2% pour la commune, des frais d'assiette et de recouvrement perçus au profit de l'État de 2,37% du montant du droit départemental, le tout plafonné à 5.81% maximum).

Ce jeu de données est intéressant car il permet d'analyser en finesse, avec une granularité sur le département, l'évolution du montant total des ventes de logements anciens et terrains confondus car toute vente à titre onéreux de bien ancien ou de terrain passe obligatoirement par ce fichier. Il nous donne donc un potentiel indice sur l'évolution du nombre de logement anciens vendus ou de leur prix sans pouvoir distinguer.

Pour connaître le nombre de vente exact de logements d'un département ou d'une ville : le fichier [DVF](https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/) est la référence mais il est nécessaire d'attendre le mois d'Avril postérieur à chaque année pour les données du dernier semestre de l'année précédente ou le mois d'Octobre pour les données du premier semestre de l'année en cours, le temps que les données soient consolidées.

![Feuille de données tableur de l'évolution du montant de l'assiette des droits de mutation immobiliers en Loire-Atlantique. On observe une nette décroissance du montant puis un début de stabilisation](/img/montant_dmto_loire_atlantique_2025.png "Evolution du montant de l'assiette des droits de mutation immobiliers - données Loire-Atlantique")

## Comprendre les termes du jeu de données

Le "régime de droit commun (mutations à titre onéreux)" désigne ["les mutations à titre exclusivement onéreux d’immeubles anciens et de terrains non soumis à la taxe sur la valeur ajoutée"](https://www.igedd.developpement-durable.gouv.fr/droits-de-mutation-immobiliers-commentaires-sur-le-a1013.html).

Le "régime dérogatoire" désigne ["les mutations à titre onéreux d’immeubles neufs et assimilés, de biens achetés en vue d’une revente rapide (régime « marchands de biens ») et de terrains soumis à la taxe sur la valeur ajoutée"](https://www.igedd.developpement-durable.gouv.fr/droits-de-mutation-immobiliers-commentaires-sur-le-a1013.html).

Le notaire dispose d'un délai [d'un mois pour transmettre l'acte de vente d'un bien à la direction des finances publiques, en conséquence les montants mentionnés sont décalés d'un mois](https://www.igedd.developpement-durable.gouv.fr/effet-du-raccourcissement-du-delai-d-envoi-des-a1189.html).

## Exemple concret en Loire-Atlantique

Pour estimer l'évolution du marché immobilier ancien dans le département sur l'année écoulé, on observe la colonne "croissance annuelle du montant cumulé sur 12 mois -> régime de droit commun". Cela écarte le neuf, les marchands de biens, et les donations. On se retrouve avec un montant qui mèle ventes immobilières de bâti et de terrains anciens.

En Décembre 2024, l'évolution annuelle du montant cumulé des mutations de logements anciens et terrain était en diminution de -15%.
Le neuf semble augmenter pour la première fois après 18 mois de diminution d'affilée.

On observe que les mois de Juillet de chaque année concentrent le plus haut montant annuel de mutations.

## Comprendre la composition des droits de mutation immobiliers à titre onéreux

- la taxe de publicité foncière d'un montant de 5.81% du prix du bien (détaillé plus haut)
- la contribution de sécurité immobilière d'un montant de 0,1% du prix du bien
- le notaire se rémunère à hauteur de 0,79% du prix du bien
- ajouter les frais nécessaires à la constitution du dossier par le notaire (par exemple les sommes nécessaires à la consultation du cadastre, aux frais relatifs au service de publicité foncière, ou concernant les documents d'urbanisme)