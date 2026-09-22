---
title: "Mieux distinguer les instructions par rapport aux skills pour avoir des agents de code plus efficaces"
description: "Les instructions et les skills permettent tout deux de donner du contexte aux agents de code. Connaître leurs rôles respectifs et bien les structurer."
type: "Article"
date: '2026-09-22'
tags: 
  - 'IA'
  - 'Copilot'
  - 'Code'
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
*[**DISCLAIMER**] Cet article est centré sur l'écosystème Copilot mais il s'agit de standards applicables à tous les fournisseurs d'agent.*

## Instructions

Les instructions fournissent à l'agent le contexte de ce que l'on construit et décrivent les standards que l'on attend  pour influencer la façon dont l'IA générera le code.
L'intention est plutôt est plutôt d'être spécifique au produit.
Les `instructions` n'ont pas besoin d'être spécifiées dans les intéractions avec l'agent, elles conditionnent le comportement de l'agent silencieusement.

### Niveau repository

#### Applicable à l'ensemble du dossier de repository

`./github/copilot-instructions.md`

Exemple de contenu :

- Stack technologique
- Patterns d'architecture
- Conventions de nommage
- Consignes de sécurité
- Procédure de gestion des erreurs
- Standards de documentation

#### Applicable à un chemin de dossier / à des extensions de fichiers spécifiques

`./github/*.instructions.md`
Permet de cibler des dossiers spécifiques du repo ou/et des extensions de fichiers spécifiques (voir les règles de [syntax glob](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions#creating-path-specific-custom-instructions) applicables). A utiliser si nous avons des exigences particulières pour certains fichiers par exemple.

Utile pour :

- différencier la logique front de la logique back
- appliquer des patterns spécifiques à un dossier dans le cadre de l'usage d'un framework (qui appliquent souvent une logique par dossier)

Le frontmatter permet de restreindre l'application à un certain type de fichier.

```markdown
---
name: 'Python Standards'
description: 'Coding conventions for Python files'
applyTo: 'assignments/**/*.py'
---
abcd
```

Pour bien rédiger le corps d'une `instruction.md`, on peut suivre la convention suivante :

```markdown
---
name:
description:
applyTo:
---
# Titre

## Section dédiée à la guideline 1
- attendu
- exemple de code démontrant le pattern attendu
- explication de pourquoi l'approche est préférable à une autre

(éviter au maximum les contradictions entre les guidelines)

## Section dédiée à la guideline 2
```

## Skills

Les skills équipent l'agent pour actionner, à la demande, des tâches individuelles.
Quand une tâche demandée à l'agent match la description du skill fournit par l'usager alors le skill est appliqué automatiquement. Le skill, à la différence de l'instruction, requiert une invocation explicite par l'utilisateur.

L'intention est de ne pas être spécifique au produit, mais plutôt d'avoir des skills ré-utilisables à d'autres produits.

Le `skill` peut-être constitué optionnellement sous forme de dossier regroupant plusieurs contextes de compétences mais peut aussi exister de façon solitaire.

```markdown
my-skill/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

Pour bien rédiger un SKILL.md on peut suivre la convention suivante :

```markdown
---
name: (identifiant pour la / command)
description: (une description particulièrement complète pour que l'agent puisse détecter que le skill match avec la demande)
---

# Description du skill

## Quand il est approprié d'utiliser le skill

## Attendus dans l'exécution du skill

## Les références
[references/testing-patterns.md](references/testing-patterns.md)
````

La description du skill dans le frontmatter est particulièrement critique pour que l'agent détecte avec le succès le moment opportun pour déclencher le skill.

## Source

<https://awesome-copilot.github.com/learning-hub/what-are-agents-skills-instructions/>
<https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions>
<https://code.visualstudio.com/docs/agent-customization/custom-instructions>
<https://awesome-copilot.github.com/learning-hub/defining-custom-instructions/>
<https://awesome-copilot.github.com/learning-hub/creating-effectiv>