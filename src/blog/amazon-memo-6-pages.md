---
title: "Le mémo à 6 pages d'Amazon"
type: "Article"
date: '2024-04-29'
updatedate: '2025-09-21'
description: "Comment la culture de l'écrit d'Amazon garantie-t-elle son efficacité ?"
tags: 
  - 'Management'
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

*[**DISCLAIMER**] Est-ce que j'aime Amazon ? Pas nécessairement. Est-ce que j'admire Jeff Bezos ou d'autres milliardaires des GAFAM ? Non. Par contre, l'efficacité d'Amazon en tant qu'organisation et service client est indéniable.*

Jeff Bezos estime que la lecture et l'écriture ont joués un rôle majeur dans la construction d'Amazon en tant qu'organisation.

[En 2017, dans sa lettre annuelle aux actionnaires d'Amazon, Jeff Bezos expose les standards d'organisation de l'entreprise](https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders).

{% citationsmarginales "BEZOS, Jeff. <a href="https://www.aboutamazon.com/news/company-news/2017-letter-to-shareholders"><em>2017 Letter to Shareholders</em></a>." %}
We don’t do PowerPoint (or any other slide-oriented) presentations at Amazon. Instead, we write narratively structured six-page memos. We silently read one at the beginning of each meeting in a kind of “study hall.” Not surprisingly, the quality of these memos varies widely. Some have the clarity of angels singing. They are brilliant and thoughtful and set up the meeting for high-quality discussion. Sometimes they come in at the other end of the spectrum.
[...]I find that much of the time, readers react to great memos very similarly. They know it when they see it. The standard is there, and it is real, even if it’s not easily describable.
Here’s what we’ve figured out. Often, when a memo isn’t great, it’s not the writer’s inability to recognize the high standard, but instead a wrong expectation on scope: they mistakenly believe a high-standards, six-page memo can be written in one or two days or even a few hours, when really it might take a week or more! They’re trying to perfect a handstand in just two weeks, and we’re not coaching them right. The great memos are written and re-written, shared with colleagues who are asked to improve the work, set aside for a couple of days, and then edited again with a fresh mind. They simply can’t be done in a day or two. The key point here is that you can improve results through the simple act of teaching scope – that a great memo probably should take a week or more.
{% endcitationsmarginales %}

Amazon s'est construit sur une culture de l'écrit dans le but de :

- clarifier les raisonnements
- faciliter les transferts de connaissance
- éliminer les meetings non-nécessaires

## Pourquoi PowerPoint n'est pas efficace en réunion et banni par Amazon

![Capture d'écran d'un mail de Jeff Bezos adressé à ses équipes. Contenu du mail "**From:** Bezos, Jeff **Sent:** Wednesday, June 09, 2004 6:02 pm **Subject:** Re: No powerpoint presentations from now on at steam. A little more help with the question “why.” Well structured, narrative text is what we’re after rather than just text. If someone builds a list of bullet points in word, that would be just as bad as powerpoint. The reason writing a good 4 page memo is harder than “writing” a 20 page powerpoint is because the narrative structure of a good memo forces better thought and better understanding of what’s more important than what, and how things are related. Powerpoint-style presentations somehow give permission to gloss over ideas, flatten out any sense of relative importance, and ignore the interconnectedness of ideas.".](/img/bezos_email.webp "Mail de Jeff Bezos adressé à ses équipes demandant de stopper l'utilisation de PowerPoint")

Les présentations slides type "bullet points" que l'on connaît tous ont un écueil majeur : la difficulté pour les auditeurs à comprendre où l'orateur veut en venir. Les bullet points manquent naturellement de précision et peuvent cacher des sens contradictoires. Également, il est facile de se laisser happer par la façon dont sont présentées les informations plutôt que sur le fond.
Le format invite naturellement à couper l'orateur pour poser des questions *durant* la présentation alors que la réponse peut-être inclus dans la slide d'après.
En contrepied des présentations visuellement plaisantes, Amazon s'est construit sur une culture de l'écrit. Depuis 2004, le processus d'écriture est devenu une doctrine centrale pour guider toute prise de décision.
Chaque réunion est obligatoirement basée sur un document écrit.

Un des documents clé utilisé par Amazon est le mémo à 6 pages.

### L'influence d'Edward Tufte

Dans l'ouvrage *Working Backwards: Insights, Stories, and Secrets from Inside Amazon*, écrit par deux cadres du comité exécutif d'Amazon, ceux-ci révèlent l'influence des travaux d'[Edward Tufte](https://www.teotimepacreau.fr/blog/produire-un-document-print-sans-logiciel-de-traitement-de-texte/#:~:text=d%E2%80%99Edward%20Tufte.%20Ce%20dernier%20a%20th%C3%A9oris%C3%A9%20la%20pr%C3%A9sentation%20d%E2%80%99information%20au%20format%20texte%20pour%20qu%E2%80%99elle%20soit%20le%20plus%20compr%C3%A9hensible%20possible) sur le choix de bannir les diapositives.

{% citationsmarginales "BRYAR Colin, CARR Bill. <a href="https://www.edwardtufte.com/notebook/edward-tufte-presentation-method-caused-jeff-bezos-amazon-aws-to-throw-out-powerpoint/"><em>Working Backwards: Insights, Stories, and Secrets from Inside Amazon</em></a>.  St. Martin's Press, 2021." %}
Jeff and I often discussed ways to improve the S-Team meetings. After a difficult presentation in early 2004, on a business flight we read and discussed an essay “The Cognitive Style of PowerPoint: Pitching Out Corrupts Within” by Edward Tufte, a Yale professor who is an authority on information visualization. Tufte identified in one sentence our problem:
“As analysis becomes more causal, multivariate, comparative, evidence based, and resolution-intense, the more damaging the bullet list becomes.”
Tufte’s description fit our discussions at the meetings: complex, interconnected, requiring plenty of information to explore. Such analysis is not well served by a progression of slides that makes it difficult to refer one idea to another. The Amazon audience of tightly scheduled, experienced executives was eager to get to the heart of the matter. They would pepper the presenter with questions and push to get to conclusions. Sometimes the questions did not serve to clarify a point or move the presentation along but would instead lead the entire group away from the main argument. Some questions might be premature and would be answered in a later slide. In his essay, Tufte proposed a solution:
“For serious presentations, replace PowerPoint slides with paper handouts showing words, numbers, data graphics, images together. High-resolution handouts allow viewers to contextualize, compare, narrate, and recast evidence. In contrast, data-thin, forgetful displays tend to make audiences stupid and passive, and also to diminish the credibility of the presenter.”
Tufte’s wise advice on how to banish PowerPoint:
“Making this transition in large organizations requires a straightforward executive order: ‘From now on your presentation software is Microsoft Word, not PowerPoint. Get used to it.’
That is essentially what we did. On June 9, 2004, the members of the S-Team received an email with this subject line: ‘No PowerPoint presentations from now on at S-Team.’ This message was simple, direct, earthshaking: from that day on team members were required to write short narratives [sentences, not bullet lists] describing their ideas, and PowerPoint was banned.
{% endcitationsmarginales %}

## Comment construire le mémo à 6 pages d'Amazon

Le document peut se structurer avec les 6 parties suivantes :

1. **Introduction** : ce que le sujet couvre, données contextuelles.
2. **Objectifs à atteindre** : l'objectif général en une phrase, puis décomposé en sous-objectifs. Une donnée passée suivie par la donnée future attendue, suivi par un calcul expliqué du changement entre les deux. Le résultat chiffré à atteindre. Bullet points acceptés ici.
3. **Principes clés que suit le projet pour être en phase avec l'organisation** : remettre les grands principes de l'orga. Dire comment le projet s'intègre dans ceux-ci (alignement stratégique).
4. **État actuel de l'activité/d'avancement du projet** : résumé des données actuelles qui montrent l'avancement du projet.
5. **Leçons apprises** : récapitulatif de l'historique du projet, des étapes et surtout des échecs recontrés.
6. **Priorités stratégiques** : démonstration de chaque tâches planifiées et comment celles-ci se rattachent aux objectifs.

Les 1. 2. 4. 5. sont tous seulement des faits, la seule partie avec de la spéculation est le 6.

Les bullet-points, listes et images sont interdites, aucune fioriture dans les 6 pages. Toutes les données, rapports et graphiques peuvent-être placés seulement en annexe.

## Comment se déroule la réunion

En amont de la réunion, le document est partagé à tous afin que chacun puisse s'en imprégner.

Pendant la réunion, chaque participant a 20-30 minutes pour lire le document en silence, tout le monde lit ensemble. La plupart des personnes notent leurs questions sur le document. S'en suit autant de temps que nécessaire pour que tous les paritipants discutent et échangent. Le format de discussion n'a pas à être cadrée, le but est de trouver un consensus.

Quand la réunion est terminée, il est de la responsabilité de l'auteur de mettre à jour le document et de l'adresser à tous autant de fois que nécessaire.

## Pourquoi cela fonctionne

1. le format du document : les 6 catégories distinctes permettent aux managers de repérer et creuser les parties qu'ils souhaitent. Adapté aux emplois du temps du top management.
2. l'intérêt du storytelling : le fait de présenter sous forme narrative plutôt que par bullet points est plus adapté au fonctionnement de notre cerveau. En effet, nous percevons le monde plus facilement via des histoires.
3. le timing de la réunion : le format timé permet de s'assurer que chaque membre a bien toutes les informations avant de poser des questions contrairement à une présentation en slides où l'on est plus facilement amener à interrompre pour poser des questions.
4. le processus autour de la rédaction du document : permet de partager une vision commune au sein de l'organisation via le process de ré-écriture et de mise à jour suite au meeting.
5. le contenu du document : permet de jongler entre metrics et verbatim clients.

{% citationsmarginales "BEZOS, Jeff. <a href="https://lexfridman.com/jeff-bezos/"><em>Jeff Bezos: Amazon and Blue Origin</em></a>. 2023" %}
I've noticed when the anecdotes and the metrics disagree, the anecdotes are usually right. That's why it's so important to check that data with your intuition and instincts, and you need to teach that to executives and junior executives.
{% endcitationsmarginales %}

## Sources

<https://quartr.com/insights/business-philosophy/amazon-s-writing-culture-explained>

<https://writingcooperative.com/the-anatomy-of-an-amazon-6-pager-fc79f31a41c9/>

<https://newsletter.seomba.com/p/how-to-write-an-amazon-style-narrative/>

https://youtu.be/e47wAgIhZ7o?si=D5we78NdxIhGaAj1