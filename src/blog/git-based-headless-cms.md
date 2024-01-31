---
title: "Tour d'horizon des CMS Headless basés sur Git"
date: "2024-01-31"
description: "Pourquoi utiliser un CMS ? Quel est l'intérêt d'un CMS Headless qui se base sur Git ? Quelles solutions sont à disposition ?"
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

Un CMS Headless basé sur Git permet de :
- versionner le contenu, ce qui facilite la restauration du contenu antérieur en cas de mauvaise manipulation
- "ramifier"(git branch), pour créer des bifurcations de contenu par exemple, déployables à tout moment
- échapper aux verrous de propriété que pourrait imposer l'éditeur du CMS
- enlever une couche de complexité car il n'y a pas de base de données à gérer car tout le contenu est répertorié dans des dossiers/documents

Notre contenu prend forme au moyen de fichiers Markdown. Ceux-ci vont contenir toutes les données associées au fichier dans le *frontmatter* (ex: date, description, titre, etc...) ainsi que le corps du document. Il est alors très simple de créer, éditer et supprimer ce type de fichier 100% versionné par Git.

## Comparaison des CMS Headless Git based

### Decap CMS

| Interface d'édition en français   | Pré-visualition de l'édition | Support d'authentification | Edition possible en localhost | Dépendance à une plateforme pour le déploiement |
| -------- | ------- | ------- | ------- | ------- |
| Oui  | Oui    | Github, Gitlab, Bitbucket(Jira) | Possible mais conditionné à une configuration alternative (pas possible d'avoir les changements sur le repo distant et local en même temps)  | uniquement sur Netlify |

#### Philosophie de DECAP CMS
- 

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

## Sources

<https://decapcms.org/docs/add-to-your-site/>