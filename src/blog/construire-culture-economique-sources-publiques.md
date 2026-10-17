---
title: "Suivre l'actualité macroéonomique française et européenne à partir de sources du service public"
description: "Les sources à suivre gratuites et de qualité pour suivre l'activité macroéconomique FR et UE"
type: "Article"
date: '2026-10-17'
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

[Projections macroéconomiques de la Banque de France - Publication trimestrielle](https://www.banque-france.fr/fr/publications-et-statistiques/publications/publications-economiques-et-financieres/projections-macroeconomiques)
Cette projection partage une prévision à deux ans des indicateurs suivants :
- croissance du PIB annuel
- inflation
- taux de chômage
- évolution du pouvoir d'achat des ménages
- croissance de l'investissement des entreprises
- taux de marge des entreprises non financières


[Panorama des prêts à l'habitat des ménages de la Banque de France - Statistiques et observations mensuelles](https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-juillet-2026)
Je m'attarde uniquement sur :

- le taux de croissance annuel des encours de crédits à l'habitat aux particuliers
- le taux moyen des crédits à l'habitat hors renégociation

[Je partage ici ma méthode complète et les jeux de données qui me permettent de suivre l'évolution du marché immobilier Français](https://www.teotimepacreau.fr/blog/comprendre-levolution-des-prix-immobiliers-en-france/)


[L'évolution annuelle de l'IPC - série indicielle mensuelle - INSEE](https://www.insee.fr/fr/statistiques/serie/011814133)

Pourquoi l'IPC plutôt que l'IPCH ?
L'Indice des Prix à la Consommation Harmonisé est un mode de calcul poussé par l'UE pour faciliter les comparaisons entre les pays européens. Contrairement à l'IPC, l'IPCH couvre les dépenses de consommation de l'ensemble des ménages réalisées sur le territoire national (y compris les touristes); l'IPC quand à lui couvre seulement les ménages résidants sur le territoire national. L'IPCH déduit certains remboursement issus des pouvoirs publics (notamment la Sécurité Sociale pour les prix des médicaments et les soins de santé) et prend en compte l'ensemble des services non marchands (exemple : frais de scolarité des écoles privées, services hospitaliers...) contrairement à l'IPC. [L’IPC et l’IPCH ne portent donc pas sur le même concept de consommation : consommation effective – avant remboursement – pour l’IPC, dépense de consommation – après remboursement – pour l’IPCH](https://blog.insee.fr/pourquoi-l-insee-calcule-2-ipc/)
(voir également : <https://blog.insee.fr/ipc-vs-ipc-harmonise-sante-et-energie-comptent/>, <https://fr.wikipedia.org/wiki/Indice_des_prix_%C3%A0_la_consommation_harmonis%C3%A9?useskin=vector#Population_couverte>)

### Analyses macroéconomiques généralistes

[Les articles de la Direction Générale du Trésor du Ministère de l'Economie.](https://www.tresor.economie.gouv.fr/Articles) Les flashs conjonctures trimestriels sur l'économie Française notamment sont très éclairant.

[Le Blog de l’Observatoire Français des Conjonctures Economiques, seulement pour les posts taggés "France"](https://www.ofce.fr/blog2024/#category=France) fournit des éclaircissements sur des sous thèmes macroéconomiques; à l'image de [cet article très intéressant qui explique que la France affiche pour la première fois en vingt ans un solde commercial positif avec le reste de l'UE](https://www.ofce.fr/blog2024/fr/2026/20261006_ea_eg/).
A noter que l'OFCE et le CEPII fusionnent à partir de Septembre 2026 pour former l'[Institut Français d'Economie](https://ife.eco/).

### Scénarios de projection macroéconomique

Le [Rapport d'Avancement Annuel (RAA) sur le PSMT (Plan budgétaire Structurel à Moyen Terme)](https://www.tresor.economie.gouv.fr/Articles/2026/04/22/publication-du-rapport-d-avancement-annuel-2026) rend compte de la trajectoire budgétaire de l'Etat Français aux autorités de l'Union Européenne. - Rapport annuel publié au mois d'Avril - rédigé par la DG Trésor du Ministère de l'Economie.
Je consulte uniquement les parties suivantes :

- scénario macroéconomique pour l'année en cours
- perspectives macroéconomiques sur trois ans
- l'état des finances publiques
- les grandes orientations des réformes de politique économique à venir

Le [Rapport Economique Social et Financier](https://www.tresor.economie.gouv.fr/Articles/2025/10/15/le-rapport-economique-social-et-financier-plf-pour-2026-est-publie), est joint au projet de loi de finances lors de son dépôt chaque automne.
Je lis uniquement entre les pages 40 et 60 via la partie "Perspectives Economiques" qui détaille :

- la situation économique mondiale
- les entreprises
- les ménages
- le commerce extérieur
- l'emploi
- l'inflation et les salaires
- la croissance potentielle et un scénario à moyen terme

La département des Affaires Economiques et Financières de la Commission Européenne publie annuellement, au printemps, une projection macroéonomique à deux ans pour tous ses états membres, [la France bénéfice d'une page dédiée](https://economy-finance.ec.europa.eu/economic-surveillance-eu-member-states/country-pages-including-country-reports/france/economic-forecast-france_en?prefLang=fr).

## Europe

[Le bulletin économique de la BCE - publication mensuelle](https://www.ecb.europa.eu/press/economic-bulletin/html/index.en.html)
Il présente l'information économique et monétaire publique sur laquelle se base le conseil des gouveneurs de la BCE pour décider de l'évolution du taux directeur de la BCE.
En terme de contenu, la partie introductive de résumé suffit car elle comporte une synthèse détaillée de l'activité économique en Europe, l'inflation, les risques et les conditions de financement.

### Statistiques

Le dashboard de <https://l0g.fr/> dédié à la macro Europe <https://euro.l0g.fr/> se source uniquement sur des données sur service public européen et consolide en surcouche un score de risque au regard des indicateurs relevés.

La [série de publications thématiques "Key Figures" d'Eurostat](https://ec.europa.eu/eurostat/publications/key-figures) est utile pour comparer les situations entre les pays de l'UE.

## Pourquoi privilégier des sources du service public

- Pour faire travailler nos impôts
- Pour éviter les biais d'influence des grands think tanks et des intérêts privés
- Parce qu'on a, au niveau national et européen, un des services publics les plus fiables et les mieux contrôlés du monde