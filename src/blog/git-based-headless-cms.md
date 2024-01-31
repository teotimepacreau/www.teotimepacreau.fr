---
title: "Tour d'horizon des Headless CMS Git based"
date: "2024-01-30"
description: "..."
tags: 
  - 'CMS'
  - 'Git'
layout: postlayout.html
---
## Qu'est-ce qu'un CMS ?

CMS désigne Content Management System, il s'agit d'un système qui rend possible de créer, gérer de modifier facilement un site web, sans avoir besoin de connaissances techniques en langage informatique.
L'implémentation d'un CMS est donc particulièrement utile dans le développement d'un site web, afin de permettre aux non-initiés d'administrer le site.

## Les 2 types de CMS : traditionnel et headless

Le CMS le plus connu, Wordpress, est traditionnel dans le sens où l'administrateur vient modifier visuellement le contenu du site, ce qui entraîne une mise à jour de la base de données. Le frontend et le backend sont intrinsèquement liés, ce qui limite les possibilités de personnalisation de l'affichage et contraint à utiliser des rendus visuels normés issus de template. 

Un CMS Headless, quand à lui, ne s'intéresse qu'au backend et vise donc à répertorier le contenu. Cela permet de séparer les données (le "corps") de la manière dont elles sont présentées (la "tête"), d'où le terme "headless". Un développeur peut ainsi utiliser la technologie de son choix sans se soucier de l'impact sur le frontend, et réutiliser le contenu pour tout type de support de sortie (site web, application, logiciel...)

## Pourquoi adosser un CMS Headless à Git ?

Un CMS Headless basé sur Git a plusieurs avantages :
- il permet de versionner le contenu, ce qui facilite la restauration du contenu antérieur en cas de mauvaise manipulation
- il permet de "ramifier"(git branch), pour créer des bifurcations de contenu par exemple, déployables à tout moment
- il permet d'échapper aux verrous de propriété que pourrait imposer l'éditeur du CMS
- et surtout il enlève une couche de complexité car il n'y a pas de base de données à gérer car tout le contenu est répertorié dans des dossiers/documents

## Comparaison des CMS Headless Git based

### Decap CMS
| Interface d'édition en français   | Pré-visualition de l'édition | Support d'authentification | Edition possible en localhost | Dépendance à une plateforme pour le déploiement |
| -------- | ------- | ------- | ------- | ------- |
| Oui  | Oui    | Github, Gitlab, Bitbucket(Jira) | Possible mais conditionné à une configuration alternative (pas possible d'avoir les changements à la fois sur le repo distant et à la fois en local)  | Compatible uniquement avec Netlify |

## Sources
