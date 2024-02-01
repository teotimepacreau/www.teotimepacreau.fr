---
title: "Tour d'horizon des CMS Headless basés sur Git"
date: "2024-01-31"
description: "Pourquoi utiliser un CMS ? Quel est l'intérêt d'un CMS Headless qui se base sur Git ? Quelles solutions sont à disposition ?"
tags: 
  - 'CMS'
  - 'Git'
layout: postlayout.html
type: post
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
## Qu'est-ce qu'un CMS ?

CMS désigne Content Management System, il s'agit d'un système qui rend possible de créer, gérer de modifier facilement un site web, sans avoir besoin de connaissances techniques en langage informatique.
L'implémentation d'un CMS est donc particulièrement utile dans le développement d'un site web, afin de permettre aux non-initiés d'administrer le site.

## Les 2 types de CMS : traditionnel et headless

Le CMS le plus connu, Wordpress, est traditionnel dans le sens où l'administrateur vient modifier visuellement le contenu du site, ce qui entraîne une mise à jour de la base de données. Le frontend et le backend sont intrinsèquement liés, ce qui limite les possibilités de personnalisation de l'affichage et contraint à utiliser des rendus visuels normés issus de template. 

Un CMS Headless, quand à lui, ne s'intéresse qu'au backend et vise donc à répertorier le contenu. Cela permet de séparer les données (le "corps") de la manière dont elles sont présentées (la "tête"), d'où le terme "headless". Un développeur peut ainsi utiliser la technologie de son choix sans se soucier de l'impact sur le frontend, et réutiliser le contenu pour tout type de support de sortie (site web, application, logiciel...)

## Pourquoi adosser un CMS Headless à Git ?

Un CMS Headless basé sur Git permet de :
- versionner le contenu, ce qui facilite la restauration du contenu antérieur en cas de mauvaise manipulation
- "ramifier"(git branch), pour créer des bifurcations de contenu par exemple, déployables à tout moment
- échapper aux verrous de propriété que pourrait imposer l'éditeur du CMS
- enlever une couche de complexité car il n'y a pas de base de données à gérer car tout le contenu est répertorié dans des dossiers/documents


Notre contenu prend forme au moyen de fichiers Markdown. Ceux-ci vont contenir toutes les données associées au fichier dans le *frontmatter* (ex: date, description, titre, etc...) ainsi que le corps du document. Il est alors très simple de créer, éditer et supprimer ce type de fichier 100% versionné par Git.

## Comparaison de deux CMS Headless Git based

### Decap CMS

| Interface d'édition en français   | Pré-visualition de l'édition | Support d'authentification | Edition possible en localhost | Dépendance à une plateforme pour le déploiement |
| -------- | ------- | ------- | ------- | ------- |
| Oui  | Oui    | Github, Gitlab, Bitbucket(Jira) | Possible mais conditionné à une configuration alternative (pas possible d'avoir les changements sur le repo distant et local en même temps)  | uniquement sur Netlify |

#### Philosophie de DECAP CMS
- pas d'API fournie, tout le workflow est basé sur Git
- très facile à installer (deux fichiers à copier coller), dépendances non obligatoire
- customisation du CMS uniquement en language YAML
- pas de cloud associé pour gérer le contenu à distance
- interface sobre mais efficace

#### Comment implémenter Decap CMS ?

1. Installer la dernière version de DECAP CMS via `npm install decap-cms`
2. Dans le dossier qui sert les `assets` habituellement créer un dossier `admin`
3. Au sein du dossier `admin` créer un fichier `index.html` et un fichier `config.yml`

![Exemple de structuration des dossiers pour DECAP CMS](/img/decap-project-structure.png "Exemple de structuration des dossiers pour DECAP CMS")

4. Le fichier `index.html` est le point d'entrée pour l'interface d'administration de DECAP CMS, coller dedans :
```
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```
5. `config.yml` est le coeur de la configuration du CMS : il permet de créer les différents champs de saisie et de paramétrer le fonctionnement global du CMS, coller dedans : 
```
local_backend: true # Si besoin d'utiliser le CMS en localhost, si site déjà déployé supprimer cette ligne

backend:
  name: git-gateway


# These lines should *not* be indented
media_folder: "static/uploads"  # Media files will be stored in the repo under static/uploads
public_folder: "/uploads"  # The src attribute for uploaded media will begin with /uploads

collections:
  - name: "articles"  # Used in routes, e.g., /admin/collections/articles
    label: "Articles"  # Displayed in the UI
    folder: "src/articles"  # The path to the folder where the documents are stored
    create: true  # Allow users to create new documents in this collection
    slug: "{{slug}}"  # Filename template, e.g., title.md
    fields: 
      - { label: "Layout", name: "layout", widget: "hidden", default: "blog" }
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Featured Photo", name: "featured", widget: "image", required: false }
      - { label: "Body", name: "body", widget: "markdown" }
```

6. A partir d'ici il est nécessaire de déployer le site sur Netlify même pour faire simplement fonctionner le CMS en localhost

7. Dans la configuration sur le site de Netlify il faut commencer par activer "l'identity" pour permettre aux futurs utilisateurs d'utiliser le CMS :

![Activation identity Netlify](/img/netlify-identity.png "Activation identity Netlify")

8. Puis il faut enregistrer Github comme provider :

![Activation de Github provider sous Netlify](/img/github-provider.png "Activation de Github provider sous Netlify")

9. Dernière étape de la configuration Netlify : l'activation de Git-Gateway pour permettre à Github de communiquer avec notre CMS

![Activation de Git-gateway sous Netlify](/img/git-gateway.png "Activation de Git-gateway sous Netlify")

10. Pour lancer DECAP CMS en localhost il faut le lancer **en parallèle** du serveur de développement. Donc un premier terminal avec `npm run dev` pour lancer le serveur de développement classique de votre site et un second terminal avec `npx decap-server`. Si les 2 ne sont pas run en parallel, il ne sera pas possible d'accéder à Decap CMS en localhost, celui-ci renverra constamment vers la version déployée.

11. Se rendre sur la page d'adminstration du CMS à partir de votre serveur de developpement local "http://localhost:5173/admin/index.html"

12. Permettre la connexion via Github

![Demande de première connexion DECAP CMS](/img/demande-connexion-decap.png "Demande de première connexion DECAP CMS")

![Autoriser la connexion via Github](/img/netlify-login-cms.png "Autoriser la connexion via Github")

13. L'accès à l'interface d'administration est enfin possible

![Interface d'administration de DECAP CMS](/img/admin-decap.png "Interface d'administration de DECAP CMS")

![Création d'un article sous DECAP CMS](/img/creation-article-decap.png "Création d'un article sous DECAP CMS")

### Tina CMS

| Interface d'édition en français   | Pré-visualition de l'édition | Support d'authentification | Edition possible en localhost | Dépendance à une plateforme pour le déploiement |
| -------- | ------- | ------- | ------- | ------- |
| Non  | Non (à moins d'utiliser React)    | Uniquement via des serverless functions de Vercel ou Netlify | Activé par défaut (0 config)  | Tina Cloud gratuit pour déployer CMS jusqu'à 2 utilisateurs, possible de sinon de déployer sur toutes plateformes |

#### Philosophie de Tina CMS
- API GraphQL fournie par défaut (requêtes sont pré-faites nativement en fonction du schéma de données)
- très facile à installer mais nécessite dépendance NPM
- customisation du CMS en fichier JS très simple via les objets
- Tina cloud gratuit jusqu'à 2 utilisateurs pour ne pas avoir besoin de déployer le CMS
- interface moderne et soignée

#### Comment implémenter Tina CMS ?

1. Installer la dernière version de Tina CMS via ` npx @tinacms/cli@latest init`

2. Mettre à jour les scripts de lancement du serveur de développement local pour run en parallele le CMS
```
 "scripts": {
    "dev": "tinacms dev -c \"vite dev\"",
		"build": "tinacms build && vite build",
		"preview": "vite preview"
  }
```

3. Pour lancer Tina CMS et visiter la page d'administration il suffit de lancer la commande `npm run dev` et de visiter "http://localhost:5173/admin/index.html"

![Page d'administration Tina CMS](/img/tina-home.png "Page d'administration Tina CMS")

4. Pour customiser les champs d'entrée il suffit de modifier l'objet 'collections' ./tina/config.js
```
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "tina";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "src/articles",
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "desc",
            label: "Description",
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "imagealt",
            label: "Description de l'image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corps de texte",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

5. Les champs créés viennent modifier l'API GraphQL, le CMS génère nativement les requêtes types dans le dossier `./tina/__generated__/client`

6. Aller chercher les données de l'API : TinaCMS génère automatiquement deux requêtes types que l’on peut retrouver dans ./tina/__generated/queries.gql :

Obtenir plusieurs articles et leur détails via blablablaConnection
```
import { client } from '../[pathToTina]/tina/__generated__/client'

const result = await client.queries.articleConnection();

const {
      data: {
        articleConnection: { edges },
      },
    } = result;
    console.log(edges)
```

Obtenir un seul article et ses détails (mais indiquer son path est obligatoire)

```
import { client } from '../[pathToTina]/tina/__generated__/client'

const myPost = await client.queries.post({ relativePath: 'HelloWorld.md' })

console.log(myPost.data.title)
```

7. Les supports d'authentification nécessaire à la connexion pour les futurs utilisateurs avec le repo distant peuvent être configuré ultérieurement

## Sources

<https://decapcms.org/docs/add-to-your-site/>
<https://tina.io/docs/>