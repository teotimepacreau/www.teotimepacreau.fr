---
title: "Comment faire tourner une application NodeJS sur un VPS ?"
type: "Article"
date: "2024-09-16"
description: "Containeriser & faire tourner en permanence une application NodeJS"
tags: 
  - 'Docker'
  - 'VPS'
  - 'NodeJS'
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
## La logique nécessaire pour déployer une application sur un VPS
Quand on développe une application NodeJS, l'un des premiers besoins qui se dresse est "comment puis-je faire tourner cette application en continu même quand mon PC local est éteint ?".

Avoir un [Virtual Private Server (VPS) présente l'avantage d'avoir une machine qui tourner 24h/24](https://www.teotimepacreau.fr/blog/heberger-soi-meme-des-applications/), c'est donc idéal pour éxecuter notre application NodeJS en continu.
Mais comment y parvenir ?

En effet notre VPS possède son propre OS (dans la majorité des cas Linux). Quand notre app évolue, on a pas envie de tirer les derniers changement de code, installer les nouvelles dépendances, faire redémarrer le processus d'éxecution.

Dockeriser l'application va nous permettre de créer un environnement propre pour l'application et ainsi éviter les conflits de version de Node. Cela assure que l'application va se comporter de la même façon peu importe si elle tourner sur notre machine locale ou sur le VPS.

## Comment Dockeriser une application Node ?

![Schema Dockerisation d'une application NodeJS : première étape élaborer un Dockerfile, seconde étape builder l'image, troisième étape on obtient l'image Docker, quatrième étape choisir un cloud pour distribuer l'image Docker, cinquième étape execution de l'image DOcker dans un container sur notre VPS](/img/schema_dockerisation_nodejs.png "Schéma 'Dockeriser et éxecuter une application Node'")

Prenons l'exemple d'un script NodeJS de scrapping des offres d'emploi de remplacement de l'Education Nationale, on a besoin de la dépendance [Puppeteer](https://pptr.dev/) pour scrapper les données via Javascript ainsi que d'une solution pour envoyer hebdomadairement le résultat par mail : [Resend](https://resend.com/)

Notre programme NodeJS peut ressembler à ça :
```javascript
import puppeteer from "puppeteer";
import cron from "node-cron";
import { Resend } from "resend";
import 'dotenv/config'

const resend = new Resend(process.env.RESEND_API_KEY);

let scrapper = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],//désactivation du sandbox de Chromium car fait bugger le container Docker une fois déployé
  });
  const page = await browser.newPage();

  await page.goto(
    "https://recrutement.education.gouv.fr/recrutement/offres?term=&Region__c=52&Departement__c=044&Population__c=EN2D%3BDE"
  );

  // PSEUDO CODE : je souhaite recevoir toutes les semaines la date et le titre de l'annonce. I. Dans chaque article, je sélectionne la date et l'annonce, j'insère dans un array d'objet [{date: , titre:}]
  let dateArray = await page.$$eval("::-p-text(Publié le)", (elements) => {
    return Array.from(elements).map((element) => {
      return element.textContent;
    });
  });

  let titreArray = await page.$$eval(".fr-card__title", (elements) => {
    return Array.from(elements).map((element) => {
      return element.textContent;
    });
  });

  let arrayConsolide = dateArray.map((date, index) => {
    return {
      date,
      titre: titreArray[index],
    };
  });
  console.log(arrayConsolide);
  await browser.close();
  return arrayConsolide;
};
let mailer = async () => {
  try {
    let arrayConsolide = await scrapper();
    let htmlContent = "";
    arrayConsolide.forEach((annonce) => {
      htmlContent += `
        <h2>Recherche ${annonce.titre}</h2>
        <p>${annonce.date}</p>
      `;
    });

    (async function () {
      const { data, error } = await resend.emails.send({
        from: process.env.FROM_EMAIL, //process.env.FROM_EMAIL
        to: process.env.TO_EMAIL,
        subject: "Nouvelles annonces remplacement education nationale",
        html: htmlContent,
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();
  } catch (err) {
    console.error("le serveur ne parvient pas à envoyer le mail :", err);
  }
};
// mailer()
cron.schedule("20 10 * * 3", () => mailer(), { timezone: "Europe/Paris" }); //run tous les mercredis à 10h00
```

Il nous faut donc "convertir" le script en image Docker pour pouvoir le faire tourner en continu sur un VPS. Voici les étapes pour y parvenir.

### 1. Créer le Dockerfile
Le Dockerfile est un fichier permettant de spécifier les instructions pour créer une image Docker. Il suit toujours la même logique :
- la première ligne est toujours l'image de départ choisie. Celle-ci conditionne l'environnement d'éxecution de l'image.
- les lignes intermédiaires contiennent la suite d'instructions.
- la ligne de fin est la commande qui lance le processus

```docker
#spécifie une image de base sur laquelle on se base
FROM ghcr.io/puppeteer/puppeteer:latest 

# dossier qui sera utilisé dans le container
WORKDIR /app

# on commence par copier le package.json pour pouvoir ensuite installer les dépendances
COPY package.json /app

# on installe les dépendances
RUN npm install

# on copie tout notre dossier de code dans le workdir
COPY . /app

# on démarre le script
CMD [ "npm", "start"]
```

### 2. Connecter Docker à un registry
Un *registry* est une sorte de "drive" permettant de déposer les images Docker de façon centralisée. Ce qui permet de les partager avec d'autres utilisateurs ou d'autres machines. Nous verrons plus tard que le registry permet aussi de reconstruire l'image dynamiquement en fonction de nos changements de code.
Il en existe plusieurs :
- Docker Hub
- Github Container Registry...

Comme le code de notre app Node est déjà stocké sur Github pour assurer son versionnage, nous en profitons pour utiliser le Github Container Registry.

Il est nécessaire de générer un access token dans Github pour connecter Docker à celui-ci :

![Capture d'écran interface de génération d'un access token dans Github](/img/github-access-token.png "Générer un access token dans github")

Puis via une ligne de commande Docker, on connecte Docker au Github Container Registry.

```docker
sudo docker login --username nomdutilisateur --password github_access_token ghcr.io
```

### 3. Construire l'image Docker
L'étape de build est indispensable pour construire l'image Docker.
```docker
sudo docker build . -t ghcr.io/nomdutilisateur/nomdelimage
# le . signifie que Docker doit se baser sur le dossier racine, puis on part obligatoirement de l'adresse ghcr.io (adresse du Github Container Registry) suivie de notre nom d'utilisateur Github puis on nomme comme on souhaite notre image.
```

### 4. Pousser l'image Docker vers le registry

```docker
sudo docker push ghcr.io/nomdutilisateur/nomdelimage
```

On retrouve désormais notre image Docker dans l'onglet "Packages" du menu de Github.

![Capture d'écran de l'interface Packages du menu de Github : le package de notre app apparaît bien](/img/github-access-token.png "L'onglet Packages de Github")

### 5. Faire tourner l'image Docker en continu sur notre VPS

On se connecte à notre VPS puis il suffit d'entrer `docker run ghcr.io/nomdutilisateur/nomdelimage`. Le container tourne en permanence et selon notre exemple nous recevons bien le scrap de toutes les offres de remplacement de l'éducation nationale toutes les semaines dans notre boîte mail.

## Mettre en place un déploiement continu (CD) de notre image Docker
Au moindre changement/amélioration du code de notre app NodeJS, celle-ci ne se reflète pas dans notre image Docker.
Mettre en place un processus de déploiement en continu permet de s'assurer qu'à chaque fois que notre code est poussé vers le repository Github cela puisse reconstruire l’image Docker et la pousser vers le registry.

Pour cela, Github propose les [Github Actions](https://docs.github.com/fr/actions/about-github-actions/understanding-github-actions) une solution pour automatiser des actions quand un évènement se déroule dans notre dépôt de code.

Au préalable il faut déposer notre token de connexion Docker-Github en tant que secret du repo. On va dans le repo → settings → secrets → actions et on place le Docker_github_token en “repository secret”. 

![Capture d'écran de l'interface de dépôt du token pour le lier au repo](/img/github-action-token.png "Lier le token Docker-Github au repo")

On doit créer un fichier YAML contenant les instructions d'automatisation puis le placer dans la racine du repo .github/workflows/notrefichier.yaml

```yaml
name: Docker Image CI for GHCR #on nomme notre process

on:
  push #se déclenche au push de code ver& le repo

jobs:
  build_and_publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3 #la version actuelle des actions checkout de github workflow : ça prend notre code du repo et le met dans le Action Runner pour que ça puisse build le code
      - name: Build and push the Image
        run: |
          sudo docker login --username nomdutilisateur --password ${{ secrets.DOCKER_GITHUB_TOKEN }} ghcr.io
          sudo docker build . --tag ghcr.io/nomdutilisateur/nomdelimage
          sudo docker push ghcr.io/nomdutilisateur/nomdelimage
```

A chaque push de code vers notre repo, la Github Action build notre image puis la pousse vers la registry, ce qui nous permet d'avoir une image toujours prête à être tirée sur notre VPS.

## Sources
<https://www.youtube.com/watch?v=RgZyX-e6W9E>

<https://www.youtube.com/watch?v=uRQ7Qm_0BZ8>

<https://github.com/skills/test-with-actions/blob/main/.github/steps/1-add-a-test-workflow.md>