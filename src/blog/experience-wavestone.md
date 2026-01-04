---
title: "L'expérience Wavestone"
type: "Article"
date: '2026-01-04'
tags: 
  - 'Consulting'
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

Wavestone est un cabinet de conseil Français, anciennement Solucom.

## Le processus de recrutement

Juillet 2024, S. de Wavestone me propose de me coopter pour un CDI en tant que consultant chez Wavestone suite à un ajout LinkedIn. S. m'explique qu'il y a 3 gradations pour les positions de consulting : analyst, consultant, senior consultant; elle considère que 2 années d'expérience dans le secteur en alternance permet d'entrer sur une position de consultant.

30 minutes d'échange téléphonique RH avec A. de Wavestone qui me de demande de lui présenter mon parcours et ma compréhension des missions et valeurs de Wavestone. M'explique que la rémunération dépend de l'école dont le diplôme est issu. Les écoles sont classifiés par Wavestone de D à A. Mon école est considéré comme étant de rang D. A. m'annonce une rémunération de 36k€ brut par an. J'indique à A. que les conditions ne sont pas réunies pour que je candidate.

Janvier 2025, je décide de candidater. S. me coopte. S'en suit un nouvel échange téléphonique demandé par A. pour répéter les mêmes choses qu'en Juillet 2024. Trois entretiens "officiels" d'embauche successifs me sont demandés :
- le premier entretien d'embauche avec un.e Consultant.e junior est une formalité : questions de base sur le parcours, la posture, la vision du conseil, réciter les valeurs Wavestone et ma compréhension de l'entreprise. La personne me valide suite à l'entretien.
- le second avec un.e Manager : questions sur le parcours, la posture, la vision du conseil, *qu'est-ce qui me pousse à candidater*, trois mises en situation d'analyse de mon comportement visant à comprendre mes réactions face à des situations de conseil complexe. Il m'est expliqué que je dois préparer un business case visant à répondre via des slides à une problématique qui me sera posée en amont, je dois présenter en 10 minutes le business case lors du prochain entretien. La personne me valide suite à l'entretien.

La problématique qui m'est posée pour le business case : "En tant que DSI, puis-je concilier les enjeux de développement de l'usage de l'IA pour les métiers et les enjeux numérique responsable du SI ?"

Voici le business case que j'ai produit pour répondre à la problématique :

<embed src="/img/business_case_wavestone.pdf" width="100%" height="500px" type="application/pdf">

Troisième et dernier entretien avec le directeur de l'agence Wavestone dans ma ville de province. Il me laisse dérouler la présentation puis pose des questions d'approfondissement et de contradictions comme s'il était le client. Il sort du rôle de client pour m'indiquer que le design visuel est trop simpliste pour lui et exprime des doutes sur mes capacités de design. S'en suit des questions sur le parcours, la posture, la vision du conseil, *qu'est-ce qui me pousse à candidater*, *qu'est-ce qui justifie ma motivation*.

Une semaine après le troisième entretien, A. m'annonce que je suis validé pour le poste, il me fait une proposition de salaire désormais à 35540€ brut au lieu de 36000€ pour un démarrage un mois et demi plus tard fin Avril 2025 : 34000€ pour mon diplôme et 1540€ pour mes 2 années d'expérience en alternance. Quatre mois de période d'essai renouvelable une fois. Je rentre en CDI en tant qu'*analyst* et aucune marge de manoeuvre pour honorer la marge de manoeuvre faite par S. pour que j'entre en tant que *consultant*.

Je découvre une semaine après en parcourant le contrat de travail qui vient de m'être adressé que les 35540€ sont décomposés en une rémunération fixe annuelle de 34470€ et 800€ brut de prime de vacances "susceptible d'évoluer" (à traduire par "annulable en cas de mauvais résultats pour l'entreprise").

## L'intégration

Jour 1 : une marraine m'est indiquée pour répondre à toute mes questions d'ordre pratique lié aux outils de travail. Le point de validation de période d'essai à mois +3 est déjà positionné dans mon agenda par les RH.
Dans la semaine suivant mon arrivée un *Career Development Manager (CDM)*, N., m'est assigné : c'est le manager au sens RH du terme qui se prononce sur chaque étape de la carrière dont la validation de la période d'essai.

Les personnes sans activité doivent partager sur un canal Teams, dont les 150 collaborateurs de l'agence sont destinataires, la disponibilité pour prêter main forte. Les consultants peuvent librement demander aux personnes qui ont partagées un message de disponibilité de l'appui, sans avoir à avertir un manager.
Les appuis peuvent prendre toutes les formes : aide pour la constitution d'une proposition commerciale, analyse de documents pour une mission en cours, actions de développement commercial...

Entre Avril et Mai 2025 nous sommes une dizaine à être nouvel arrivant : 9 stagiaires et moi en CDI.

A semaine +3 j'échange avec une personne arrivé en Janvier 2025 en CDI : J. est ingénieur informatique diplômé, il a 3 ans d'expérience en alternance dans un groupe privé client de Wavestone. Il a l'air sérieux et professionnel. J. m'indique que sa période d'essai vient d'être arrêté, il doit quitter l'entreprise à l'issu du délai légal.
Au vu de son profil plus cappé que le mien, je comprends la problématique de période d'essai qui m'attend.

Wavestone met 2 mois entiers à me staffer sur une mission, auparavant je multiplie donc les appuis auprès d'autres consultants, j'appuie quotidiennement sur toutes sortes de tâches : parmis la dizaine d'appui que j'ai pu exercer, la constitution d'un support interne de Knowledge Management relatif à la sécurisation de l'Active Directory via un modèle de tiering à partir de plusieurs missions menées par le cabinet et de supports de connaissance internes.
Il m'est demandé de réaliser le support sur PowerPoint. J'oriente la présentation autour de la [checklist de sécurisation AD recommandée par l'ANSSI](https://www.cert.ssi.gouv.fr/uploads/ad_checklist.html), rappel de l'existence des scripts Powershell HardenAD, méthode en trois partie pour 1 mener des ateliers de personnalisation du tiering prélable à 2 la mise en place du tiering puis 3 définition d'un plan de contrôle et résilience.

## Feedback, feedback & culte du feedback

Dès la première rencontre avec N. le CDM : celui-ci explique la place centrale du *feedback*, les feedbacks des différentes personnes pour lesquelles je mène des appuis / mes chefs de projets pour les missions sur lesquelles je serai staffé sont centrales pour l'*évaluation* de ma période d'essai. Je dois demander après chacun de mes appuis, même pour un appui d'une demi-journée un feedback à la personne.

Dès le premier point de suivi avec N., celui-ci me lit les feedbacks des personnes auprès desquels j'ai effectué des tâches d'appui. Les défauts repérés sont particulièrement mis en avant et il est demandé de les corriger pour le prochain point de suivi.

Je consigne donc tous les feedbacks, et update dès que possible mon *CDM* sur mes avancements et mes next steps pour donner de la visibilité et montrer mon sérieux. Je m'auto-évalue à partir des compétences demandées par l'organisation pour un rôle d'analyst.

## Staffing

Je suis donc staffé au bout de deux mois, sur étude d'intégration organisationnelle relative à l'internalisation de ressources DevOps pour la filiale d'une grande banque Française. Très concrètement, j'assiste pendant un mois la cheffe de projet positionnée sur la mission et passe donc 1 mois entier sur le logiciel PowerPoint à préparer des slides suites aux ateliers que l'on mène visant à chiffrer les économies projetées, élaborer une stratégie de transition et de transfert de connaissances. Reformulation des notes d'atelier pour les consolider en slides communicables au client.
L'exigence pour la production de slides "parfaites" est réelle, et justifiée par rapport aux interlocuteurs de la banque. Néammoins l'analyse du travail que je produis par la cheffe de projet est uniquement basé sur un idéal de perfection : chaque slide doit parfaitement coller à l'idée que se fait la cheffe de projet, il n'y a aucune marge de manoeuvre même graphique, je suis repris sur des couleurs, des tournures de phrase et des alignements de pixels non perceptibles par le cliet pendant toute la durée de la mission. Je colle pourtant à toutes les deadlines qui me sont demandées, je suis force de proposition et j'essaie d'aller plus loins que les demandes du client et mes slides sont de qualité mais cela ne suffit pas pour la cheffe de projet.
Le livrable est remis au client au bout d'un mois, comme prévu. Retours positifs du client, il m'est évoqué la possibilité de continuer sur la mission si suite il y a, mais nous sommes fin Juin 2025 donc pause. Les éléments de feedback positifs qui me sont présentés sont occultés par le CDM par le peu d'éléments négatifs perçus.

Puis je suis staffé pour contribuer à une étude d'opportunité d'adoption du multi-cloud pour un grand groupe agro-alimentaire : élaboration d'une gouvernance structurant l'adoption du cloud, stratégie et enjeux multi-cloud & multi-tenant. Cette fois, je dois examiner une centaine du supports internes consolidants des missions cloud réalisées par Wavestone puis réaliser une trentaine de slides pour expliquer pas à pas les 3 items cités précedemment, le tout entièrement en anglais. 
Je fournis des slides de qualité, avec de la profondeur et une vraie méthodologie. Le chef de projet m'exprime un *feedback* totalement différent de la précédente mission : cette fois la mise en forme et les tournures de phrases sont parfaites mais je crée "à partir de zéro" trop de slides et je ne copie colle pas assez de slides existantes, le chef de projet exprime des doutes sur ma *productivité* pour le long terme alors que tous les rendus sont en avance des deadlines.

Le 18 Juillet 2025 vient mon point de validation de période d'essai : j'ai consigné l'ensemble des feedbacks récoltés pendant tous les appuis et missions, préparé un argumentaire pour prouver mes améliorations sur les points négatifs qui m'ont été retournés et pour mettre en avant mes points forts. Je n'ai pas le luxe de pouvoir présenter ces éléments : N., le *CDM* m'annonce d'emblée dès le début du point que le directeur de l'agence et lui ont décidés de mettre fin à ma période d'essai. Me sont soulevés les points de feedback négatif. Je creuse, au vu du contexte de sous-staffing observé depuis mon arrivée et des éléments partagés à l'oral par le directeur de l'agence lors de l'afterwork de Juin 2025 "l'OCDE prévoit un contexte économique très dégradé, Numeum (l'un des syndicat de la convetion collective des activités de conseil Syntec) prévoit -2.5% pour les activités de conseil en 2025. Il est décidé d'échelonner les arrivées à partir de Septembre et de *réviser* le plan de recrutement". J'exprime ces éléments au CDM qui les balaient.

Fin de période d'essai donc. Même vécu que J. 3 mois auparavant, il n'y avait pas d'autres personnes recrutées en CDI.

L'ensemble de mes *feedback* récoltés pendant les 3 mois, anonymisés :

<embed src="/img/feedback_Wavestone.pdf" width="100%" height="500px" type="application/pdf">

## Que fait concrètement Wavestone ?

Dans mon agence, les missions menées étaient en très grande partie organisationnelles : missions de transformation organisationnelle, accompagnement à l'agilité, accompagnement à l'implémentation de l'IA, mise en conformité NIS2, DORA. Il y a une petite partie de technique notamment sur quelques missions d'audit de cybersécurité mais ces missions restent marginales.
Wavestone est le partenaire officiel de Microsoft pour l'implémentation de leurs solutions Office, Copilot... en France.