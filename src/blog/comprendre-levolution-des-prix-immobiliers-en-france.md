---
title: "Comprendre l'évolution des prix de l'immobilier en France"
description: "Quelles données et ressources retenir pour anticiper les évolutions de l'immobilier ancien en France"
type: "Article"
date: '2025-03-12'
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

On entend tout et son contraire concernant les prix de l'immobilier : "les prix ne peuvent que monter à long terme", "les taux des prêts immobiliers diminuent donc les prix vont augmenter", sans compter le nombre "d'experts" immobiliers invités dans les médias selon qui c'est toujours le bon moment pour acheter.

## Comprendre comment sont fixés les taux des prêts immobiliers

Une idée très répandue est que la BCE donne le mot d'ordre auprès des banques françaises avec l'évolution de son taux directeur. Quand la BCE diminue son taux directeur, les taux des prêts immobiliers devraient donc diminuer en conséquence ? [En réalité les banques se financent assez peu auprès de la BCE, mais plutôt sur les marchés financiers](https://www.capital.fr/immobilier/credit-immobilier-apres-la-decision-de-la-bce-les-taux-vont-ils-vraiment-continuer-a-baisser-1508673).
[Selon l’Autorité de Contrôle Prudentiel et de Résolution de la Banque fr France, la répartition des sources de financement des banques françaises se répartissait en 2023 comme suit](https://acpr.banque-france.fr/system/files/import/acpr/medias/documents/20240716_as161_grands_groupes_bancaires_fr_2023.pdf) :

| Poste au passif | Montant en milliards d'euros | Part du total |
| -- | -- | -- |
| Dérivés détenus à des fins de transaction (passif) | 510 | 6% |
| Titres de dette émis | 1 444 | 17% |
| Dépôts des banques centrales | 199 | 2.3% |
| Dépôts des administrations centrales | 154 | 1.8% |
| Dépôts des établissements de crédit | 436 | 5.1% |
| Dépôts des autres entreprises financières | 833 | 10.4% |
| Dépôts des SNF | 1468 | 17.3% |
| Dépôts des ménages | 2179 | 25.6% |
| Dérivés - comptabilité de couverture passif | 113,4  | 1.3% |
| Capitaux propres | 527 | 6.2% |
| Autres passifs | 585 | 6.9% |

Le tableau retranscrit est à retrouver à la page 11 du [document source](https://acpr.banque-france.fr/system/files/import/acpr/medias/documents/20240716_as161_grands_groupes_bancaires_fr_2023.pdf)

On comprend que l'essentiel du financement des banques françaises provient des dépôts avec 62.6% du total du passif. Ce sont des ressources stables, difficilement contrôlables par les banques car elles n'ont pas la main pour accroître ou réduire les dépôts des ménages par exemple.
Le banques françaises ne se financent qu'à hauteur de 2.3% auprès de la BCE en 2023.

On comprend donc que le taux de la BCE a un impact réduit sur le financement des banques. Par contre, la **politique monétaire de la BCE** a elle un effet indirect en influençant les taux obligataires (OAT 10 ans), qui servent de référence pour le financement des prêts immobiliers.

Pourquoi les taux obligataires servent de référence pour le financement des prêts immobiliers ?
On l'a vu, les "titres de dette émis" représentent 17% du passif. C'est une des seules façons pour les banques d'obtenir de l'argent de façon dynamique, à leur guise. Les "titres de dette" sont à grande majorité des obligations.
L'indice de référence pour suivre le marché des obligations en France est l'Obligation Assimilable du Trésir à 10 ans.

Pourquoi l’OAT 10 ans est-elle importante ?

- c'est l’indicateur principal des taux d’intérêt à long terme en France.
- sa rémunération dépend de la confiance des investisseurs dans l'Etat Français (dette, stabilité) et de l’environnement économique (inflation, croissance, politique monétaire de la BCE).

![Graphique du cours de L'OAT 10 ans de 2020 à 2025, on constate un taux de 3.6% le 12 Février 2025 et une augmentation massive de ce taux entre 2022 et 2025](/img/OAT_10ans.png "Graphique du cours de L'OAT 10 ans de 2020 à 2025")

On comprend donc que le financement des prêts immobiliers repose principalement sur les marchés d'obligations (s'obtient de façon dynamique en fonction des volontés de la banque) et les dépôts des clients (indépendant des volontés de la banque).

L'Inspection Générale de l’environnement et du développement durable (IGEDD) a une équipe dédiée à l'étude de l'évolution à long terme des prix immobilier. Cette équipe est représentée par [Jacques Friggit](https://friggit.eu/), ingénieur général et expert de référence sur le sujet, que l'on peut considérer neutre au vu de sa carrière dans la fonction publique.

Il démontre la corrélation entre le taux de la dette de l'Etat à long terme et le taux des prêts immobiliers depuis 1999.

![Graphique de corrélation entre les taux d’intérêt des prêts immobiliers et de la dette de l’Etat. On observe que les taux d'intérêt des prêts immobiliers suivent les taux de la dette de l'Etat à long terme](/img/correlation_oat_taux_prets_immobiliers.png "Corrélation entre les taux d’intérêt des prêts immobiliers et les taux de la dette de l’Etat à long terme")

Ainsi, l'indice OAT 10 ans est l'indice de référence pour anticiper les évolutions de taux des prêts immobiliers.
Selon la Fondation pour la recherche sur les administrations et les politiques publiques, [pour chaque augmentation de 1 point du taux de l’OAT 10 ans, les ménages subissent une augmentation de 1,4 point de taux des nouveaux crédits immobiliers](https://www.ifrap.org/budget-et-fiscalite/attention-une-hausse-des-taux-sur-la-dette-francaise-contaminerait-limmobilier-et-les-entreprises#:~:text=notation%20de%20l%E2%80%99entreprise.-,Pour%20les%20m%C3%A9nages%C2%A0,-Le%20taux%20de).

## Suivre l'évolution des taux des prêts immobiliers en France

La Banque Centrale Européenne produit des données en Open Source parmi lesquelles [un graphique établissant une moyenne des taux d'intérêt proposés par les banques dans le cadre d'un achat immobilier en France](https://data.ecb.europa.eu/data/datasets/MIR/MIR.M.FR.B.A2C.A.R.A.2250.EUR.N).

![Graphique établissant une moyenne des taux d'intérêt proposés par les banques dans le cadre d'un achat immobilier en France. 3.12% en moyenne en Janvier 2025](/img/graphique_taux_moyen_prets_immobiliers.png "Graphique de la BCE établissant une moyenne des taux d'intérêt proposés par les banques dans le cadre d'un achat immobilier en France")

## En quoi le volume de production de prêts immobiliers est un des indicateurs de l'évolution des prix de vente

[Raphaël Vignes](https://substack.com/@raphaelvignes), un investisseur amateur qui propose chaque mois son analyse du marché immobilier, pointe le fait que la production annuelle de crédits à l'habitat est en décroissance depuis Avril 2024.

![Graphique du taux de croissance annuelle de l'encours des crédits à l'habitat aux ménages en France selon la Banque de France. -0.6% sur l'année en Janvier 2025](/img/taux_de_croissance_annuelle_encours_credit_a_lhabitat.png "Graphique du taux de croissance annuelle de l'encours des crédits à l'habitat aux ménages en France")

![Graphique du taux de croissance annuelle de l'encours des crédits à l'habitat aux ménages en France selon la Banque de France selon la BCE](/img/graphique_taux_moyen_prets_immobiliers.png "Graphique équivalent côté BCE")

En décembre 2024, le taux de croissance annuelle de crédits à l'habitat sur un an est de -2.7%. Les taux restent prohibitifs (entre 3.5 et 4% de taux d'intérêt pour les dossiers classiques sur 25 ans et 2025) et les prix restent hauts. Or il est démontré que moins de volume de crédits disponibles entraîne toujours une baisse des prix à moyen terme car les biens entrent en concurrence.

## Voir au-delà des taux

Des taux oscillant entre 3% et 5% n'ont jamais été prohibitifs à l'achat de 1960 à 2008. Mais dans un contexte de pouvoir d'achat en décroissance depuis bientôt 20 ans, le taux est désormais perçu comme étant le vecteur barrière. L'entrave réelle à l'achat est le prix déconnecté des salaires qu'est devenu l'immobilier français.

Jacques Friggit, propose de suivre les prix des logements anciens acquis rapporté au revenu disponible de l'ensemble des ménages en prenant en compte l'inflation.

![Graphique d'indice de prix, nombre et montant des ventes de logements anciens et indice des loyers rapportés à leur tendance longue respective et durée d’emprunt pour acheter le même logement](/img/friggit_prix_immobilier.png "Indice de prix, nombre et montant des ventes de logements anciens et indice des loyers rapportés à leur tendance longue respective et durée d’emprunt pour acheter le même logement")

Son constat est sans appel : "au troisième trimestre 2024 le pouvoir d'achat immobilier était inférieur de 27% à ce qu'il était en 2000 et, pour acheter le même logement "toutes choses égales par ailleurs", un primo-accédant devait s'endetter sur 25 ans, contre 15 ans en 2000. Cette durée a diminué de 4 ans par rapport au dernier trimestre 2023 sous l'effet d'une légère rechute des taux d'intérêt et d'une faible baisse du prix des logements et, quoique toujours supérieure à la durée moyenne des prêts accordés, elle s'en est rapprochée. Il en est résulté une forte diminution puis une stagnation des volumes de transactions".

Si l'on compare avec le pic de 2022, les volumes ont chutés de 1200000 à 750000 unités de logements anciens vendues par an. Les prix ont amorcés une diminution depuis ce pic.

## La fausse solution de "construire des logements en masse pour faire baisser les prix"

Déréguler les normes de construction n'abaissera pas le prix des logements neufs. L'IGEDD via Jacques Friggit estime que construire 1 million de logements n'abaisserait que de 2.5% le prix des logements anciens ([en 2024 294500 logements ont été mis en chantier](https://www.statistiques.developpement-durable.gouv.fr/construction-de-logements-resultats-fin-janvier-2025-france-entiere?rubrique=&dossier=1047)). En Février 2024, face à plusieurs sénateurs missionés sur le logement, [il explique les deux raisons qui expliquent l'envolée des prix du neuf](https://www.youtube.com/watch?v=C2OeycnbO4g) :

- l'effet inflationniste provoqué par l'alongement de la durée moyenne des prêts immobiliers de 15 à 25 ans
- la hausse continue du prix du foncier provoquée par l'effet du *compte à rebours*, il s'agit de la démarche du promoteur qui, quand il repère un terrain propice à la construction neuve, compare le prix des dernières ventes immobilières autour du terrain, déduit ses charges (matériaux, main d'oeuvre, normes) et établit ainsi son prix de vente.

![Slide d'explication de l'envolée du prix des logements neufs : on y retrouve les éléments cités dans le paragraphe plus haut](/img/prix_logements_neufs.jpeg "Slide d'explication de l'envolée du prix des logements neufs. Source : Jacques Friggit IGEDD, audition sénat Février 2024")

## Qu'anticiper pour les mois à venir (Mars 2025)

Les taux vont cesser de diminuer car la situation européenne et le niveau d'endettement de l'Etat Français entraînent une augmentation inédite de l'OAT 10 ans.
Les prix de vente sont toujours déconnectés des salaires. Des taux stagnants, un pouvoir d'achat immobilier toujours faible entraînent l'immobilier ancien dans une tendance longue baissière.

## Les ressources indispensables pour suivre l'immobilier

- [la newsletter de l'évolution à long terme des prix et volumes de l'immobilier par l'IGEDD, représenté par Jacques Friggit](https://www.igedd.developpement-durable.gouv.fr/prix-immobilier-evolution-a-long-terme-a1048.html)
- [les analyses immobilières de Raphaël Vignes](https://x.com/RaphaelVignes)
- [la newsletter du site "Politique du logement", un think tank par un groupe des spécialistes de l’économie du logement](https://politiquedulogement.com/)
- [le jeu de données mensuel "Crédits aux particuliers de la Banque de France](https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2025-01)
- [le jeu de données "Bank interest rates - loans to households for house purchase (new business) - France, France, Monthly" de la BCE ](https://data.ecb.europa.eu/data/datasets/MIR/MIR.M.FR.B.A2C.A.R.A.2250.EUR.N)
- [le jeu de données "Lending for house purchase vis-a-vis euro area households reported by MFIs excl. ESCB in France (annual growth rate), France, Monthly" de la BCE](https://data.ecb.europa.eu/data/datasets/BSI/BSI.M.FR.N.A.A22.A.I.U2.2250.Z01.A)