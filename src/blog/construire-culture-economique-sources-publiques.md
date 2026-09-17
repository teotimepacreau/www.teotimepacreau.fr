---
title: "Suivre l'actualité macroéonomique européenne à partir de sources du service public"
description: ""
eleventyExcludeFromCollections: true
type: "Article"
date: '2026-09-16'
tags: 
  - 'Economie'
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

## France

### Statistiques
https://www.banque-france.fr/fr/publications-et-statistiques/publications/publications-economiques-et-financieres/projections-macroeconomiques
Projections macroéconomiques - Publication trimestrielles - Banque de France

Pour tous les items, prévisions à deux ans :
- prévisions de croissance du PIB annuel
- prévisions d'inflation
- prévisions d'évolution du pouvoir d'achat
- prévisions du taux de chômage
- prévisions d'évolution du pouvoir d'achat des ménages
- prévisions de croissance de l'investissement des entreprises
- prévisions du taux de marge des entreprises non financières


https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-juillet-2026
Panorama des prêts à l'habitat des ménages - Statistiques et observations mensuelles - Banque de France
Je m'attarde uniquement sur :
- le taux de croissance annuel des encours de crédits à l'habitat aux particuliers
- le taux moyen des crédits à l'habitat hors renégociationM métho
[Ma méthode complète et les jeux de données qui me permettent de suivre l'évolution du marché immobilier](https://www.teotimepacreau.fr/blog/comprendre-levolution-des-prix-immobiliers-en-france/)

https://www.insee.fr/fr/statistiques/serie/011812232
évolution annuelle de l'IPCH - série indicielle mensuelle - INSEE

Pourquoi l'IPCH plutôt que l'IPC ?
L'Indice des Prix à la Consommation Harmonisée est un mode de calcul poussé par l'UE pour faciliter les comparaisons entre les pays européens. Contrairement à l'IPC, l'IPCH couvre les dépenses de consommation de l'ensemble des ménages réalisées sur le territoire national (y compris les touristes); l'IPC quand à lui couvre seulement les ménages résidants sur le territoire national. Il déduit également tout remboursement issu des pouvoirs publics du calcul (exemple : Sécurité Sociale pour les prix des médicaments) et prend en compte l'ensemble des services non marchands (exemple : frais de scolarité des écoles privées).
(sources : https://blog.insee.fr/ipc-vs-ipc-harmonise-sante-et-energie-comptent/ https://fr.wikipedia.org/wiki/Indice_des_prix_%C3%A0_la_consommation_harmonis%C3%A9?useskin=vector#Population_couverte)

### Analyses macroéconomique généralistes

https://www.tresor.economie.gouv.fr/Articles
Les articles de la Direction Générale du Trésor du Ministère de l'Economie. Les flashs conjonctures trimestriels sur l'économie Française notamment sont très éclairant.

https://www.ofce.fr/blog2024/#category=France
Le Blog de l’Observatoire Français des Conjonctures Economiques, seulement pour les posts taggés "France"
A noter que l'OFCE et le CEPII fusionnent à partir de Septembre 2026 pour former l'[Institut Français d'Economie](https://www.ifeconomie.fr/).

### Trajectoire budgétaire de l'Etat Français

Le [Rapport d'Avancement Annuel (RAA) sur le PSMT (Plan budgétaire Structurel à Moyen Terme)](https://www.tresor.economie.gouv.fr/Articles/2026/04/22/publication-du-rapport-d-avancement-annuel-2026) rend compte de la trajectoire budgétaire de l'Etat Français aux autorités de l'Union Européenne. - Rapport annuel publié au mois d'Avril - rédigé par la DG Trésor
Uniquement sur les parties :
- scénario macroéconomique pour l'année en cours
- perspectives macroéconomiques sur trois ans
- l'état des finances publiques
- les grandes orientations des réformes de politique économique à venir

Le [Rapport Economique Social et Financier](https://www.tresor.economie.gouv.fr/Articles/2025/10/15/le-rapport-economique-social-et-financier-plf-pour-2026-est-publie), est joint au projet de loi de finances lors de son dépôt chaque automne.
Uniquement entre les pages 40 et 60 en général via la partie "Perspectives Economiques" qui détaille :
- la situation économique mondiale
- les entreprises
- les ménages
- le commerce extérieur
- l'emploi
- inflation et salaires
- la croissance potentielle et un scénario à moyen terme


## Pourquoi privilégier des sources du service public

Pour faire travailler nos impôts
Pour éviter les biais d'influence des grands think tanks et des intérêts privés
Parce qu'on a, au niveau national et européen, un des services publics les plus fiables et les mieux contrôlés du monde