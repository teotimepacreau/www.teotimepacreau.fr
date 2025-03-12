---
title: "Comprendre l'évolution des prix de l'immobilier en France"
description: "Pourquoi UML permet une base de communication idéale entre étude fonctionnelle et développement lors d'un projet informatique"
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

## Sources
