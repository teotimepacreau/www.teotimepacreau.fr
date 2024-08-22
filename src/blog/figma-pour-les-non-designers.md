---
title: "La révolution visuelle qu'apporte Figma aux non-designers"
type: "Article"
date: "2024-08-22"
description: "Pourquoi Figma facilite la collaboration et l'échange de feedback pour les Knowledge Worker"
tags: 
  - 'Management'
  - 'Stratégie'
  - 'Figma'
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
A mon arrivée chez [Etat'LIN, le laboratoire d'innovation publique de l'Etat en Pays de la Loire](https://www.modernisation.gouv.fr/laboratoires/etatlin), j'ai été intégré à une équipe de designers de service. L'une des premières choses qui m'a frappé est la capacité des designers à donner vie aux idées. Les réflexions s'accompagnent toujours d'une matérialisation sous forme de schéma ou de dessin qui sont ensuite accrochés aux murs pour obtenir une image claire de la situation en un coup d'oeil.
Cette manière de procéder peut paraître habituelle pour ceux qui travaillent dans les milieux design. Mais pour moi, venant de métiers de gestion opérationnelle, cela semblait complètement étranger :
- *Comment rendre visible, en un coup d'oeil, des idées et systèmes complexes ?*
- *Quel outil numérique utiliser pour schématiser sans savoir dessiner ?*

![Exemple de prototype conçu par mes collègues designer, photo par Maxime Huriez](/img/prototypage-design.png "Photo de prototypes d'une interface numérique sur des wireframe papier")

Depuis la pandémie, nous sommes tous devenus habitués aux "tableaux blancs collaboratif visuel" comme Figma & Miro.

![Un atelier collaboratif sur le tableau collaboratif de Figma](/img/figjam_collaboratif.png "Capture d'écran d'un atelier collaboratif sur Figjam")

Ces outils fournissent des canvas collaboratifs - des espaces infinis et zoomables pour le travail. Ils sont bien plus que de simples "tableaux blancs virtuels" car ils apportent une nouvelle manière de rendre accessible et tangible le travail de connaissance.
<!-- Les "Travailleurs de la connaissance" (en anglais *Knowledge Workers*) -->

## Un Canva pour le travail stratégique
Les travaux liés à la stratégie, l'organisation ou les approches type "consultant" requièrent de présenter, de façon macro, des concepts abstraits. Il est souvent indispensable de présenter une vue d'ensemble aux commanditaires :
{% blockquote "Tom Critchlow", "[Extrait d'article](https://newsletter.seomba.com/i/33888235/a-canvas-for-strategy-work)" %}
The language of strategy is about “10,000ft view” or “birds eye view” or “bigger picture”. But which of our digital tools provide this big picture view? Typically, presentations…. except this linear flow of 16x9 rectangles is not the right tool for the job.
{% endblockquote %}

Typiquement, la solution courante est de présenter un diapo PowerPoint. Cependant, le flow linéaire des slides que l’on connaît tous a un [écueil majeur : la difficulté pour les auditeurs à comprendre où l’orateur veut en venir. Il est facile de se laisser happer par la façon dont sont présentées les informations plutôt que sur le fond. Le format invite naturellement à couper l’orateur pour poser des questions durant la présentation alors que la réponse peut-être inclus dans la slide d’après.](https://www.teotimepacreau.fr/blog/amazon-memo-6-pages/#:~:text=meetings%20non-n%C3%A9cessaires-,pourquoi%20powerpoint%20n%E2%80%99est%20pas%20efficace%20en%20reunion%20et%20banni%20par%20amazon,-From%3A%20Bezos%2C%20Jeff). Les slides ne sont donc pas l'outil adapté pour ce type de présentation.

Figma est idéal pour présenter du contenu en vue "big picture" (en affichant tous les éléments sur la page de façon dézoomée) et permet d'aller profondément dans le détail via le zoom infini. L'outil permet de faire facilement des allers et retours entre les morceaux de contenu que l'on souhaite présenter. Cette expérience zoomable permet d'obtenir la "big" picture requise pour le travail "stratégique", pour présenter les points clés, systèmes, modèles...

### Le changement fondamental dans l'échange de feedback
Une grande partie du travail de consultant nécessite des allers et retours avec le commanditaire pour affiner le travail fourni via des observations. Les blocs de commentaires des éditeurs de texte type Word sont souvent utilisés pour y répondre : on selectionne une portion de texte et l'on y adjoint un commentaire. Est-ce réellement efficace ? Il y a besoin d'allers-retours du document qui font perdre du temps quand il ne s'agit pas d'éditeur de texte collaboratif en ligne type Google Docs. Et comment faire quand j'ai non pas une observation textuelle à ajouter mais un autre document vers lequel pointer ?

![L'interface de commentaires Word](/img/commentaires_word.png "Capture d'écran de l'interface de commentaires Word")

Figma change totalement l'approche traditionnelle d'échange de feedback en permettant d'adjoindre des documents PDF, des images, des posts-it en plus des commentaires et de tracer physiquement des liens entres les annotations et les documents étudiés. De plus, pas de fichier à s'envoyer en boucle : le canva collaboratif se met à jour avec les ajouts. Le format canva ouvre de nouveaux horizons pour la collaboration et permet une finesse d'analyse que l'on peut difficilement atteindre avec une succession de commentaire d'éditeur de texte.

Voici un exemple

![Une analyse collaborative de document sur Figma](/img/analyse_collaborative_figma.png "Capture d'écran d'une analyse collaborative de document sur Figma : 8 pages de PDF sont annotées et liées à des posts-it, images et documents")

### Exemple pratique
Il m'a été demandé de faire le bilan de la réorganisation à l'oeuvre depuis une année d'un service de la DREAL( Direction Régionale de l’Environnement, de l’Aménagement et du Logement) composé d'une vingtaine de collaborateurs.
Après avoir questionné et qualifié la commande avec le commanditaire, nous avons convenu que le besoin exprimé était de :
- caractériser les évolutions introduites par la réorganisation avec les managers et d'esquisser des premières pistes d'actions correctrices.
- récolter l'expression et le ressenti de l'ensemble des agents du service au sujet de la réorganisation et d'envisager des pistes d'amélioration puis prioriser les actions à engager.

Il me fallait donc concevoir deux séminaires en construisant des outils sur-mesure et en ré-adaptant des outils de facilitation connus. Après avoir segmenté les différents objectifs à atteindre dans les temps impartis, j'ai consulté la boîte à outils de facilitation [Utilo](https://www.utilo.org/outils/) en matchant les thématiques du guide aux buts identifiés des temps collectifs.

![Thématiques du guide Utilo](/img/utilo.png "Capture d'écran de thématiques du guide Utilo")

Pour adapter les outils et créer les supports qui manquent, j'utilise Figma. Lors du temps de validation avec le commanditaire préalable aux ateliers avec les équipes, il est très simple de présenter l'idée globale et le détail des outils graĉe au format en canva.

![Le canva de facilitation organisationnelle](/img/facilitation_organisationnelle.png "Canva de facilitation organisationnelle")


