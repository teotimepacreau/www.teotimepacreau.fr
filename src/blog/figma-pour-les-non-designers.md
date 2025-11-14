---
title: "La révolution visuelle qu'apporte Figma aux non-designers"
type: "Article"
date: "2024-08-23"
updatedate: "2025-11-14"
description: "Pourquoi Figma, en tant qu'outil de travail, permet de présenter idéalement des concepts, facilite la collaboration et l'échange de feedback"
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
A mon arrivée chez [Etat'LIN, le laboratoire d'innovation publique de l'Etat en Pays de la Loire](https://www.modernisation.gouv.fr/laboratoires/etatlin), j'ai été intégré à une équipe de designers de service. L'une des premières choses qui m'a frappé est la capacité des designers à donner vie aux idées. Les réflexions s'accompagnent toujours d'une matérialisation sous forme de schéma ou de dessin qui sont ensuite accrochés aux murs pour obtenir une image claire de la situation en un coup d'oeil. Cela a pour effet de rendre tangible les intentions et facilite l'alignement de l'équipe sur une idée.
Cette manière de procéder peut paraître habituelle pour ceux qui travaillent dans les milieux habitués aux méthodes issues du design. Mais pour moi, venant de métiers de gestion opérationnelle et d'approche classique de gestion, cela semblait complètement étranger. Un instinct de traduction des idées en formes matérielles plutôt qu'un réflexe d'écrit.

-> *Alors, comment rendre visible, en un coup d'oeil, des idées et systèmes complexes ?*

![Photo de prototypes d'une interface numérique sur des wireframe papier](/img/prototypage-design.png "Exemple de traduction d'idées en prototype et notes tangibles")

Depuis la pandémie, nous sommes tous devenus habitués aux "tableaux blancs collaboratif visuel".

![Capture d'écran d'un atelier collaboratif sur Figjam](/img/figjam_collaboratif.png "Un atelier collaboratif sur le tableau collaboratif de Figma")

Ces outils fournissent des canvas collaboratifs - des espaces infinis et zoomables pour le travail. Ils sont bien plus que de simples "tableaux blancs virtuels" car ils apportent une nouvelle manière de rendre accessible et tangible le travail lié à la connaissance.

## Quel outil numérique utiliser pour schématiser sans savoir dessiner ?

Les travaux liés à la stratégie, l'organisation ou les approches type "consultant" requièrent de présenter, de façon macro, des concepts abstraits. Il est souvent indispensable de présenter une vue d'ensemble aux commanditaires :

{% citationsmarginales "CRITCHLOW, Tom. <a href='https://newsletter.seomba.com/i/33888235/a-canvas-for-strategy-work'><em>A canva for strategy work</em></a>. Article, 2021", "en" %}The language of strategy is about “10,000ft view” or “birds eye view” or “bigger picture”. But which of our digital tools provide this big picture view? Typically, presentations…. except this linear flow of 16x9 rectangles is not the right tool for the job.{% endcitationsmarginales %}

La solution la plus répandue pour présenter des concepts, analyses, plans... est de présenter un diapo PowerPoint. Cependant, le flow linéaire des slides que l’on connaît tous a un [écueil majeur : il est facile de se laisser happer par la façon dont sont présentées les informations plutôt que par le fond des idées. Le format invite naturellement à couper l’orateur pour poser des questions durant la présentation alors que la réponse peut-être inclus dans la slide d’après.](https://www.teotimepacreau.fr/blog/amazon-memo-6-pages/#:~:text=meetings%20non-n%C3%A9cessaires-,pourquoi%20powerpoint%20n%E2%80%99est%20pas%20efficace%20en%20reunion%20et%20banni%20par%20amazon,-From%3A%20Bezos%2C%20Jeff). De plus, les slides sont peu adaptées pour présenter une vision macro d'ensemble et montrer les interconnexions.

Figma est idéal pour présenter du contenu façon "big picture" et permet également d'aller profondément dans le détail via le zoom infini. L'outil rend simple les allers-retours, liens entre les éléments, l'intégration de formats multiples (PDF, images, textes, vidéos...). Cette expérience zoomable et intuitive facilite le travail stratégique, pour présenter les points clés, systèmes, modèles...

### Le changement fondamental apporté dans l'échange de feedback

Une grande partie du travail de consultant nécessite des allers et retours avec le commanditaire pour affiner le travail fourni via des observations. Les blocs de commentaires des éditeurs de texte type Word sont souvent utilisés pour y répondre : on sélectionne une portion de texte et l'on adjoint un commentaire. Est-ce réellement efficace ? Il y a besoin de nombreux allers-retours du document qui font perdre du temps quand on n'utilise pas d'éditeur de texte collaboratif type Google Docs. Et comment faire quand j'ai non pas une observation textuelle à ajouter mais un autre document vers lequel pointer ? Lier des concepts entre eux ?

![Capture d'écran de l'interface de commentaires Word](/img/commentaires_word.png "L'interface de commentaires Word")

Figma change totalement l'approche traditionnelle d'échange de feedback en permettant d'adjoindre des documents PDF, des images, des posts-it en plus des commentaires et de tracer physiquement des liens entres les annotations et les documents étudiés. De plus, pas de fichier à s'envoyer en boucle : le canva collaboratif se met à jour avec les ajouts. Le format canva ouvre de nouveaux horizons pour la collaboration et permet une finesse d'analyse que l'on peut difficilement atteindre avec une succession de commentaire d'éditeur de texte.

![Capture d'écran d'une analyse collaborative de document sur Figma : 8 pages de PDF sont annotées et liées à des posts-it, images et documents](/img/analyse_collaborative_figma.png "Une analyse collaborative de document sur Figma par [Daniel Cardoso Llach, chercheur sur l'impact des technologies sur les processus de design](https://x.com/dcardo/status/1361821788406247426)")

### Exemple pratique
Il m'a été demandé de faire le bilan de la réorganisation à l'oeuvre depuis une année d'une direction de la DREAL (Direction Régionale de l’Environnement, de l’Aménagement et du Logement) composé d'une vingtaine de collaborateurs.
Après avoir questionné et qualifié la commande avec le commanditaire, nous avons convenu que le besoin exprimé était de :

- caractériser les évolutions introduites par la réorganisation avec les managers et d'esquisser des premières pistes d'actions correctrices.
- récolter l'expression et le ressenti de l'ensemble des agents du service au sujet de la réorganisation, envisager des pistes d'amélioration puis prioriser les actions à engager.

Il me fallait donc concevoir deux séminaires en construisant des outils sur-mesure et en ré-adaptant des outils de facilitation connus. Après avoir segmenté les différents objectifs à atteindre dans les temps impartis, j'ai consulté la boîte à outils de facilitation [Utilo](https://www.utilo.org/outils/) en matchant les thématiques du guide aux buts identifiés des temps collectifs.

![Capture d'écran de thématiques du guide Utilo](/img/utilo.png "Thématiques du guide Utilo")

Pour adapter les outils et créer les supports manquants, j'utilise Figma. Lors du temps de validation préalable avec le commanditaire, il est très simple de présenter l'idée globale et le détail des outils graĉe au format en canva. Le principal avantage est de réduire les allers-retours avec le commanditaire et de pouvoir expliquer en détail les points qui suscitent des interrogations.

![Canva de facilitation organisationnelle](/img/facilitation_organisationnelle.png "Le canva de facilitation organisationnelle proposé")

La restitution des ateliers est facilement intégrable et permet d'avoir un livrable prêt à être remis.

## Sources

<https://newsletter.seomba.com/p/the-visual-revolution-in-knowledge>