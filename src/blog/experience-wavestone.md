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

Wavestone est un cabinet de conseil Français, anciennement Solucom. Retour sur mon expérience en tant qu'analyst en CDI.

## Le processus de recrutement

Juillet 2024, S. de Wavestone me propose de me coopter pour un CDI en tant que consultant chez Wavestone suite à un ajout LinkedIn. S. m'explique qu'il y a 3 gradations pour les positions de consulting : analyst, consultant, senior consultant; elle considère que 2 années d'expérience dans le secteur en alternance permettent d'entrer sur une position de consultant.

30 minutes d'échange téléphonique RH avec A. de Wavestone qui me demande de lui présenter mon parcours, ma compréhension des missions et les valeurs affichées par Wavestone. La rémunération dépend de l'école dont le diplôme est issu. Les écoles sont classifiées par Wavestone de D à A. Mon école est considérée comme étant de rang D. Il m'annonce une rémunération de 36k€ brut par an. J'indique à A. que les conditions ne sont pas réunies pour que je candidate.

Janvier 2025, je décide de candidater. S. me coopte. S'en suit un nouvel échange téléphonique demandé par A. pour répéter les mêmes choses qu'en Juillet 2024. Trois entretiens "officiels" d'embauche successifs me sont demandés :
- le premier entretien d'embauche avec un.e Consultant.e junior est une formalité : questions de base sur le parcours, la posture, la vision du conseil, réciter les valeurs Wavestone et ma compréhension de l'entreprise. La personne me valide suite à l'entretien.
- le second entretien avec un.e manager : questions sur le parcours, la posture, la vision du conseil, *qu'est-ce qui me pousse à candidater*, trois mises en situation visant à comprendre mes réactions face à des situations de conseil complexes. Il m'est expliqué que je dois préparer un business case visant à répondre via des slides à une problématique qui me sera posée en amont, je dois présenter en 10 minutes le business case lors du prochain entretien. La personne me valide suite à l'entretien.

La problématique qui m'est posée pour le business case : "En tant que DSI, puis-je concilier les enjeux de développement de l'usage de l'IA pour les métiers et les enjeux numérique responsable du SI ?"

Voici le business case que j'ai produit pour répondre à la problématique :

<embed src="/img/business_case_wavestone.pdf" width="100%" height="500px" type="application/pdf">

Troisième et dernier entretien avec le directeur de l'agence Wavestone dans ma ville de province. Il me laisse dérouler la présentation puis pose des questions d'approfondissement et de contradictions dans le rôle du client. Il sort du rôle de client pour m'indiquer que le design visuel est trop simpliste pour lui et exprime des doutes sur mes capacités de design. S'en suit des questions sur le parcours, la posture, la vision du conseil, *qu'est-ce qui me pousse à candidater*, *qu'est-ce qui justifie ma motivation*.

Une semaine après le troisième entretien, A. m'annonce que je suis validé pour le poste, il me fait une proposition de salaire désormais à 35540€ brut au lieu des 36000€ annoncés pour un démarrage un mois et demi plus tard fin Avril 2025 : 34000€ pour mon diplôme et 1540€ pour mes 2 années d'expérience en alternance. Quatre mois de période d'essai renouvelable une fois. Je rentre en CDI en tant qu'*analyst* et aucune marge de manoeuvre pour honorer la promesse faite par S. pour que j'entre en tant que *consultant*.

Je découvre une semaine après en parcourant le contrat de travail qui vient de m'être adressé que les 35540€ sont décomposés en une rémunération fixe annuelle de 34470€ et 800€ brut de prime de vacances "susceptible d'évoluer" (à traduire par "annulable en cas de mauvais résultats pour l'entreprise").

## L'intégration

Jour 1 : une marraine m'est indiquée pour répondre à toute mes questions d'ordre pratique liées aux outils de travail. Le point de validation de période d'essai à mois +3 est déjà positionné dans mon agenda par les RH.
Dans la semaine suivant mon arrivée un *Career Development Manager (CDM)*, N., m'est assigné : c'est le manager au sens RH du terme qui se prononce sur chaque étape de la carrière dont la validation de la période d'essai. Le CDM manage une petite dizaine de personnes et se fie uniquement aux feedbacks remontés par les chefs de projet.

Les personnes sans activité doivent partager sur un canal Teams, dont les 150 collaborateurs de l'agence sont destinataires, leur disponibilité pour prêter main forte. Les consultants peuvent librement demander aux personnes qui ont partagées un message de disponibilité de l'appui pour réaliser, sans avoir à avertir un manager.
Les appuis se font de gré à gré et peuvent prendre toutes les formes : aide pour la constitution d'une proposition commerciale, analyse de documents pour une mission en cours, préparation de livrables, actions de développement commercial...

Entre Avril et Mai 2025 nous sommes une dizaine à être nouvel arrivant : 9 stagiaires et moi en CDI.

A semaine +3 j'échange avec une personne arrivée en Janvier 2025 en CDI : J. est ingénieur informatique diplômé, il a 3 ans d'expérience en alternance dans un grand groupe privé client de Wavestone. Il a l'air sérieux et professionnel. J. m'indique que sa période d'essai vient d'être arrêté par Wavestone, il doit quitter l'entreprise à l'issu du délai légal.
Au vu de son profil plus cappé que le mien, je commence à saisir la politique actuelle de traitement des périodes d'essai.

Wavestone met 2 mois entiers à me staffer sur une mission, auparavant je multiplie donc les appuis auprès d'autres consultants, j'appuie quotidiennement sur toutes sortes de tâches : parmis la dizaine d'appui que j'ai pu exercer, la constitution d'un support interne de Knowledge Management relatif à une méthode e" sécurisation de l'Active Directory via un modèle de tiering, en partant de plusieurs missions menées par le cabinet et de supports de connaissance internes.
Il m'est demandé de réaliser le support sur PowerPoint. J'oriente la présentation autour de la [checklist de sécurisation AD recommandée par l'ANSSI](https://www.cert.ssi.gouv.fr/uploads/ad_checklist.html), rappel de l'existence des scripts Powershell HardenAD, méthode en trois partie pour mener des ateliers de personnalisation du tiering prélable à la mise en place du tiering puis définition de plans de contrôle et résilience.

## Feedback, feedback & culte du feedback

Dès la première rencontre avec N. le CDM : celui-ci explique la place centrale du *feedback*. Il est impératif de récolter les feedbacks des différentes personnes pour lesquelles je mène des tâches. Il faut demander un feedback même quand la tâche dure une demi-journée. *Le process dans le process donc*. La valeur ajoutée pour le client ? Oubliée. Cela mène à des situations ubuesques avec des feedbacks pour la formalisation de quatre slides. La valeur d'un consultant dépend-elle vraiment de l'alignement de trois blocs d'organigramme ?

Dès le premier point de suivi avec N., celui-ci me lit les feedbacks des personnes auprès desquels j'ai effectué des tâches d'appui. Les défauts repérés sont particulièrement mis en avant au détriment des points positifs.

Je bataille donc pour récupérer les feedbacks auprès de mes chefs de projet, parfois avec une semaine de relance. Je consigne donc tous les feedbacks, et update dès que possible mon *CDM* sur mes avancements et mes next steps pour donner de la visibilité et montrer mon sérieux. Je m'auto-évalue à partir des compétences demandées par l'organisation pour un rôle d'analyst.

## Staffing

Je suis donc staffé au bout de deux mois, sur une étude d'intégration organisationnelle relative à l'internalisation de ressources DevOps pour la filiale d'une grande banque Française. Très concrètement, il faut produire un PowerPoint de 75 slides et le livrer au client en un mois. J'assiste pendant un mois la cheffe de projet positionnée sur la mission et passe donc *un mois entier sur le logiciel PowerPoint à préparer des slides*. *Rêves de PowerPoint la nuit ?*. Suites aux ateliers que l'on mène visant à chiffrer les économies projetées, élaborer une stratégie de transition et de transfert de connaissances, je consolide toutes les notes que je prends pendant les ateliers en slides communicables au client.
L'exigence pour la production de slides "parfaites" est réelle, et sûrement justifiée par rapport aux interlocuteurs de la banque. Néammoins l'analyse du travail que je produis par la cheffe de projet est uniquement basée sur un idéal de perfection : chaque slide doit parfaitement coller à l'idée (non annoncée) que se fait la cheffe de projet. Il n'y a aucune marge de manoeuvre, je suis repris sur des couleurs, des tournures de phrase et des alignements de pixels non perceptibles par le cliet pendant toute la durée de la mission. Je colle pourtant à toutes les deadlines qui me sont demandées, je suis force de proposition et j'essaie d'aller plus loins que les demandes du client et mes slides sont de qualité mais cela ne suffit pas pour la cheffe de projet. *Le process dans le process une fois de plus, où est la valeur ajoutée pour le client ?*
Le livrable est remis au client au bout d'un mois, comme prévu. Retours positifs du client, il m'est évoqué la possibilité de continuer sur la mission si suite il y a, mais nous sommes fin Juin 2025 donc pause estivale. Les éléments de feedback positifs qui me sont présentés sont occultés par le CDM par le peu d'éléments négatifs perçus.

Puis je suis staffé pour contribuer à une étude d'opportunité d'adoption du multi-cloud pour un grand groupe agro-alimentaire : élaboration d'une gouvernance structurant l'adoption du cloud, stratégie et enjeux multi-cloud & multi-tenant. Cette fois, je dois examiner une centaine du supports internes consolidant des missions cloud réalisées par Wavestone; pour produire par la suite une trentaine de slides, le tout entièrement en anglais.
Je fournis des slides de qualité, avec de la profondeur et une vraie méthodologie. Le chef de projet m'exprime un *feedback* totalement contraire à la précédente mission : cette fois la mise en forme et les tournures de phrases sont parfaites mais je crée "à partir de zéro" trop de slides et je ne copie colle pas assez de slides existantes, le chef de projet exprime des doutes sur ma *productivité* pour le long terme alors que tous les rendus sont en avance par rapport aux deadlines.

## Période d'essai

Le 18 Juillet 2025 vient mon point de validation de période d'essai fixé de longue date : j'ai consigné l'ensemble des feedbacks récoltés pendant tous les appuis et missions, préparé un argumentaire pour prouver mes améliorations sur les points négatifs qui m'ont été retournés et pour mettre en avant mes points forts. Je n'ai pas le luxe de pouvoir présenter ces éléments : N., le *CDM* m'annonce d'emblée, dès les premières minutes d'entretien, que le directeur de l'agence et lui ont décidés de mettre fin à ma période d'essai. Me sont soulevés les points de feedback négatif. Je creuse, au vu du contexte de sous-staffing observé depuis mon arrivée et des éléments partagés à l'oral par le directeur de l'agence lors de l'afterwork de Juin 2025, je cite "l'OCDE prévoit un contexte économique très dégradé, Numeum (l'un des syndicat de la convetion collective des activités de conseil Syntec) prévoit -2.5% pour les activités de conseil en 2025. Il est décidé d'échelonner les arrivées à partir de Septembre et de *réviser* le plan de recrutement". J'exprime ces éléments au CDM qui les balaient.

Je pense sincèrement avoir tout donné pendant ces 3 mois. Le manque d'humanité et le culte du *process dans le process* fait froid dans le dos.

Fin de période d'essai donc et direction le chômage. Même vécu que J. 3 mois auparavant, il n'y avait pas d'autres personnes nouvellement recrutées en CDI. *Engager la personne me précédant puis m'engager successivement pour briser de nouveau la période d'essai ? Une manière d'entrer un chiffre dans la case "recrutement" qui sera analysée par les quelques détenteurs d'action Wavestone qui lisent encore le rapport d'activité ?*

L'ensemble de mes *feedback* récoltés pendant les 3 mois, anonymisés :

<embed src="/img/feedback_Wavestone.pdf" width="100%" height="500px" type="application/pdf">

## Que fait concrètement Wavestone ?

Dans mon agence, les missions menées étaient en très grande partie organisationnelles : missions de transformation organisationnelle, accompagnement à l'agilité, accompagnement à l'implémentation de l'IA, mise en conformité NIS2, DORA. Il y a une petite partie de technique notamment sur quelques missions d'audit de cybersécurité mais ces missions restent marginales.
Wavestone est le partenaire officiel de Microsoft pour l'implémentation de leurs solutions Office, Copilot... en France.