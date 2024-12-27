---
title: "Introduction à différentes méthodes de conduite de projet informatique"
type: "Article"
date: '2024-12-27'
tags: 
  - 'Agilité'
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

## A l'origine : le modèle en cascade (waterfall)
Les premiers projets informatiques ont utilisés des méthodes issues des sciences de l'ingénieur en s'inspirant des manières de mener un projet de construction. Cela a introduit une culture de la contrainte due à des coûts importants en phase de réalisation et à l'impossibilité de modifier l'ouvrage en cours de route typique aux projets immobiliers.
Le modèle en cascade conditionne le début de chaque phase à la finalisation complète de la phase précédente :

1. Exigences : récolte de l'expression de besoins auquel le produit doit répondre (livrable = document d'expression des besoins)
2. Analyse : formalisation des exigences dans un cahier des charges fonctionnel (livrable = cahier des charges fonctionnel)
3. Conception : planification du développement et rédaction des spécifications techniques (livrable = modèles & spécifications techniques)
4. Mise en œuvre : réalisation du produit (livrable = le produit)
5. Validation : tests du produit avec l'usager pour vérifier la conformité aux exigences (livrable = tests)
6. Mise en service
Le modèle a rapidement montré ses limites car la nature immatérielle des projets informatiques permet des approches impossibles à d'autres secteurs : possibilité de livrer un projet *viable au minimum* pour construire les fonctionnalités en avançant, réversibilité, coûts logistiques et matériels inexistants...
Le défaut principal de ce modèle est de penser que le client est pleinement conscient de l'ensemble des fonctionnalités qu'il attend avant même d'avoir eu le produit entre les mains. Le second défaut est l'allergie du modèle aux changements en cours de projet contraire à ce qui a été déterminé dans les phases précédentes.

## L'approche agile

L'approche agile s'est construite en réaction au modèle en cascade et à l'imprévisibilité des projets informatiques particulière au contexte des années 90. La période voyait en effet l'apparition et l'appropriation rapide de nouveaux langages de programmation (comme Visual Basic, Python, Ruby, Java, Javascript...), rendant [obsolètes certains langages au bout de quelques mois seulement](https://en.wikipedia.org/wiki/Timeline_of_programming_languages#1990s).
Les auteurs du [manifeste agile](https://agilemanifesto.org/) estimaient que le taux important d'échecs des projets de développements logiciels était dû à la lourdeur des méthodes traditionnelles inspirées du génie civil notamment au travers du cycle de développement en cascade.
L'idée était également de lutter contre l'*effet tunnel* (il s'agit d'un décrochage du lien entre le client et le développement du projet).

Il s'agit donc d'un style de conduite de projet basé sur la collaboration entre des équipes autonomes et les clients. **Le but :** impliquer au maximum le client et être très réactif à ses demandes. **Méthode :** planification adaptative pilotée par l'utilisateur, reporting visuel en temps réel de l'avancement ainsi que des problèmes rencontrés, tests et ajouts de fonctionnalités en continu selon les demandes du clients, livraisons partielle pour chaque lots, amélioration continue.

Agile est le terme chapeau qui regroupe les framework SCRUM, LEAN, KANBAN. Ce sont des cadres de travail pour mettre en place de l'agilité dans la gestion de projets.

### SCRUM

**Doctrine** : fondé sur la conviction que le développement est une succession d'activités qui ne peuvent être anticipées et planifiées.
Le projet est découpé en plusieurs *sprints*, la priorisation des activités s'appuie sur des *artefacts*, le rythme d'avancement s'appuie sur des *rituels*.

La méthode se veut incrémentale et itérative, les sprints peuvent donc être recommencés pour répondre à de nouvelles demandes client ou à l'apparition de nouvelles technologies.
Elle s'appuie sur des rôles précis :

- 1 SCRUM Master qui guide l'équipe à travers la méthode et est l'interlocuteur coordinateur au quotidien
- 1 Product Owner garant de la vision client du produit, en charge du maintien et de la priorisation de la liste des fonctionnalités à développer.
- les équipes techniques

**Sprints** : un sprint est une période de temps pendant laquelle on travaille sur un lot de fonctionnalités.
Chaque sprint commence par une estimation du temps à passer et la planification des tâches, chaque sprint se termine par une rétrospective de ce qui a été achevé. Le sprint n'exprime pas un besoin de rapidité mais plutôt de période définie consacrée à 100% à une ou plusieurs briques fonctionnelles.
La livraison du lot de fonctionnalités au client se fait uniquement à la fin de chaque sprint.
Le sprint planning global englobe toutes les étapes et est issu du backlog.

**Artefacts** :

- le backlog : liste priorisée des fonctionnalités à réaliser
- User Stories : format d'expression des fonctionnalités (en tant que... je veux... afin de...). Les User Stories peuvent être regroupées en Epics (amat de User Stories doublé d'un objectif)
- planning poker : technique d'estimation de la charge de travail exprimée en points. La gamme des points est croissante et s'inspire de la suite de Fibonacci (0,5;1;2;3;5;8;13;20;30;50;100;200) car plus une charge est élevée plus sa valeur est incertaine.
- burndown chart : graphique partagé permettant de visualiser l'avancement du sprint en mettant en valeur la sommes des tâches restantes à faire
**Rituels** : 
- le daily : meeting de 15 minutes tous les jours où chacun explique les tâches réalisées de la journée précédente, les problèmes bloquants et les tâches qui seront faites le jour présent
- le sprint planning : le PO présente les fonctionnalités découpées en tâches, l'effort de développement est estimé par l'équipe technique qui s'engage sur le contenu du sprint
- le sprint review qui a lieu à la fin de chaque sprint : chacun exprime ce qui a été accompli pendant le sprint, ce qui a changé, détermine que faire ensuite

**Métriques de suivi de la performance :** temps pour accomplir un sprint et ampleur de la fonctionnalité réalisée

**Adaptation au changement :** quand un sprint démarre on ajoute/enlève rien

### KANBAN

**Doctrine :** la visualisation des tâches augmente la transparence et la motivation de l'équipe
Contrairement à la méthode SCRUM où l'on livre les fonctionnalités seulement à la fin du sprint, avec Kanban on livre les fonctionnalités dès qu'elles sont complétées, sans tenir compte des plannings et dates donc en continu.

**Visualisation :** toute la roadmap est visible et les tâches sont divisées en 3 : *to-do, WIP, done.* On repart toujours du backlog pour attribuer les tâches sur le Kanban

**Rituels :**

- daily

**Métriques :** temps passé pour basculer une tâche de "to-do" à "done"

**Adaptation au changement :** les priorités peuvent changer à tout moment

### LEAN 

**Doctrine :** L'approche est basée sur celle du *Minimum Viable Product (MVP)*, le but étant d'éliminer tout le superflus : que ce soit des fonctionnalités, des réunions, ou des boucles de feedback non-essentielles.
On livre donc un prototype avec le minimum de fonctionnalités et on adapte le produit en fonction des retours des utilisateurs, quitte à changer complètement l'idée de départ.

- les décisions structurantes pour le projet (par ex: architecture logicielle) doivent être repoussées au plus tard possible
- placer des fonctionnalités de valeur le plus vite possible entre les mains du client
- les utilisateurs sont au centre de toutes les décisions

**Rituels :**

- meeting réguliers visant à répondre aux questions "Que disent les données récoltées suite aux tests utilisateurs ? Comment cela affecte le produit ?"

**Métriques :** temps écoulé entre un feedback produit reçu et son implémentation

**Adaptation au changement :** les priorités changent seulement s'il y a un groupement de feedback client en corrélation

### Le mode produit

Particulièrement appuyé sur le LEAN, le mode produit ajoute l'encapacitement et l'autonomisation des parties prenantes du projet.

1. Formation et accompagnement des porteurs du besoin à vérifier l'existence de leur besoin/problématique sur le terrain (grille d'entretien, persona, parcours utilisateur...)
2. Analyse en chambre de la matière récoltée et consolidation en feuille de route produit (vision, objectifs, grandes fonctionnalités clés, étapes, budget)
3. Création d'un découpage du produit à partir du besoin des utilisateurs (Personas -> User Stories -> User Story Mapping -> Spécification fonctionnelles). Consolidation en backlog.
4. Conception et livraison du MVP pour le placer le plus rapidement possible entre les mains de l'utilisateur
5. Séances de tests, observations et recueil des feedbacks des usagers. Ajout des fonctionnalités en conséquence dans le backlog. Cycle de développement. A recommencer autant de fois que nécessaire.

## Sources

Livre "Vade-mecum de l'informatique contemporaine"; Eva et Henri LAUDE, Christian GOGLIN, éditions ENI, 2024.
<https://agilemanifesto.org/>
<https://fr.wikipedia.org/wiki/M%C3%A9thode_agile>
<https://fr.wikipedia.org/wiki/Scrum_(d%C3%A9veloppement)>
<https://steady.space/blog/comparing-scrum-kanban-lean/>
