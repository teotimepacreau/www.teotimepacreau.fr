---
title: "Synchroniser un repo Github avec Gitlab"
date: '2024-06-04'
tags: 
  - 'Git'
layout: blogpost_layout.html
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

Pour des raisons techniques, j'ai eu besoin de cloner un repo existant sur Github dans l'alternative open-source [Gitlab](https://about.gitlab.com/). Je souhaitais synchroniser tout les changement effectués dans le repo Gitlab en les poussant vers le repo Github.

## Clonage d'un repo Github dans Gitlab
Gitlab propose de créer un repo en créant un clône d'un repo pré-existant sur un autre service via "Importer un projet". Il suffit de fournir l'URL du repo Github.

![Capture de la page de proposition des modalités de création de repo Gitlab](/img/gitlab-clonage1.png "Clonage d'un repo pré-existant")

L'interface demande ensuite de remplir des champs : 
- le nom d'utilisateur correspond au nom d'utilisateur du repo distant Github
- le mot de passe correspond à un token d'accès personnel que nous devons générer depuis https://github.com/settings/tokens pour autoriser Gitlab à tirer depuis notre compte Github
- cocher la case "Dépôt miroir"

![Capture des Champs demandés par Gitlab pour autoriser le clonage du projet](/img/gitlab-clonage2.png "Champs demandés par Gitlab pour autoriser le clonage du projet")


## Synchroniser les 2 repos
Il est possible de pousser et/ou récupérer automatiquement les modifications vers ou depuis l'autre dépôt. Les branches, les étiquettes et les commits seront automatiquement synchronisés.

Pour cela il faut se rendre dans le repo Gitlab -> Paramètres -> Dépôt -> Dépôts miroirs.
Il faut de nouveau coller l'url du dépôt distant Github et placer le nom d'utilisateur Github. Le champ "mot de passe" correspond au token généré précédemment sur Github.

![Capture des champs requis pour synchroniser](/img/gitlab-synchronisation.png "Champs requis pour synchroniser")

N'importe quel commit effectué sera poussé depuis Gitlab vers Github. Le repo Gitlab tirera tout changement effectué sur Github.