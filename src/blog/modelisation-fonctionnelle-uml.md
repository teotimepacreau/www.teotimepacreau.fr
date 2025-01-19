---
title: "La modélisation fonctionnelle avec UML"
description: "Pourquoi UML permet une base de communication idéale entre étude fonctionnelle et développement lors d'un projet informatique"
type: "Article"
date: '2025-01-19'
tags: 
  - 'UML'
  - 'Informatique fonctionnelle'
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

Lors du cadrage d'un projet informatique, on procède à l'analyse des objectifs, l'analyse des règles métiers, l'analyse et la production d'exigences. Le cadrage est vital car il permet de guider la modélisation fonctionnelle à venir avant même d'entrevoir la mise en oeuvre technique.

Qu'apporte UML ? UML(Unified Modeling Language) fourni un moyen de spécifier une modélisation mais surtout une base de dialogue, un language commun, à beaucoup d'intervenants dans un projet informatique. Son avantage repose avant tout sur la normalisation des visualisations compréhensibles aussi bien par un business analyst, qu'un développeur. Son utilité se retrouve tant dans les phases d'expression des besoins / spécifications pour produire un modèle de référence que dans les étapes ultérieures de développement notamment au travers de l'indications de classes utiles à la programmation objet.

UML est particulièrement associé au [développement en cascade](../methodes-gestion-de-projet-informatique/) et au cycle en V mais à toute son utilité en agilité puisqu'il facilite grandement la communication interne à l'équipe. Lorsqu'utilisé avec pragmatisme, UML peut fournir une base à chaque sprint en spécifiant les attentes fonctionnelles et l'intégration dans l'ensemble du système.

## Diagramme des cas d'utilisation

UML s'intègre dans une démarche globale *d'investigation du besoin* : il s'agit de s'imprégner des besoins métiers via des ateliers de travail, des [entretiens semi-directifs](../../essais/challenger-pratiques-transformation-organisationelle-par-le-design-de-services/), des observations in-situ, des user-journey.

Une fois la matière récoltée et analysée, on peut utiliser UML pour décrire le comportement et les fonctions d'un système attendues par l'utilisateur, on utilise pour cela le diagramme des cas d'utilisation.

![Schéma détaillant un diagramme de cas d'utilisation UML : on représente un acteur avec un bonhomme baton, un système avec un rectangle, un cas d'utilisation avec un ovale](/img/uml_diagramme_cas_dutilisation.webp "Exemple minimal de diagramme de cas d'utilisation UML")

Un cas d'utilisation est précisé à la fois par :

- un *scénario* qui représente les différentes enchaînements d'actions. Le scénario contient le déroulé de l'action avec succès, les enchaînements alternatifs, les enchaînements  d'erreurs.

![Schéma détaillant un scenario UML : on représente chaque étape via un point, en indiquant les erreurs, les parcours alternatifs...](/img/uml_scenario_cas_dutilisation.webp "Exemple minimal de scénario de cas d'utilisation UML")

- une fiche de description textuelle du cas d'utilisation sous la forme du tableau ci-dessous.

Sommaire d'identification | Description des scénarios | Exigences non fonctionnelles |
-- | -- | -- |
titre, résumé, date de création, version, responsable, acteurs | préconditions, enchaînements, enchaînements alternatifs, les enchaînements d'erreurs, postconditions | fréquence, volumétrie, disponibilité, fiabilité, confidentialité, performance attendue, les contraintes d'UX/UI |

### Comment représenter le **scénario nominal** et à quoi sert-il ?

Le scénario nominal est une description textuelle des enchaînements du scénario. On le représente dans un tableau à double colonne en liste ordonnée.

Acteur | Système étudié |
-- | -- |
| 1. Client arrive en caisse avec des articles qu'il souhaite acheter | |
| 2. Le caissier scan chaque article | |
| | 3. Le terminal détermine le prix de l'article |
| 4. Après avoir scanné tous les articles, le caissier indique que la vente est terminée |  |
| | 5. Le terminal calcule et affiche le montant total de la vente |

## Le diagramme de séquences

Le diagramme de séquences permet de décrire COMMENT se déroulent les intéractions entre les différents acteurs ou objets impliqués dans une procédure.
Concrètement, ils servent à identifier les *classes* requises par le système et le comportement des *objets* au cours des intéractions.

Ces *classes* et *objets* sont indispensable dans un contexte de Programmation Orientée Objet : il s'agit d'un style de programmation basant le code sur des objets. L'objet appartient à une classe, classe qui est définie par des propriétés et associée à des méthodes (des fonctions propres à la classe).

![Capture d'écran détaillant le code d'une classe avec ses propriétés et méthodes propres](/img/poo_classe.png "Une classe en code, extrait de la vidéo de Julien Code (source en bas de page)")

Le diagramme de séquence place à sa tête les classes suivies de haut en bas par une *ligne de vie*. On spécifie chaque action via l'appel d'une méthode associée à la classe en question. Les méthodes prennent des paramètres comportant les variables à passer aux fonctions. On peut représenter de façon graphique une condition, une boucle, un appel d'une fonction à une autre.

![Représentation graphique d'un diagramme de séquence introduisant une interface programmatique entre un utilisateur et une cafetière pour faire un café](/img/uml_diagramme_sequence.webp "Exemple de diagramme de séquence UML")

L'idée n'est pas de spécifier le code à venir, car c'est le rôle des développeurs, mais de planifier les classes et leurs différentes intéractions qui régiront le code.

## Sources

Livre "UML 2.5 par la pratique"; Pascal ROQUES, éditions Eyrolles, 2018.

<https://fr.wikibooks.org/wiki/Programmation_UML/Diagramme_de_s%C3%A9quences/>

<https://www.youtube.com/watch?v=AZ4gwy-ZGC4/>