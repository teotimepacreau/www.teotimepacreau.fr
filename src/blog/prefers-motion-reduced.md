---
title: "Accessibilité & animations : laisser la main à l'utilisateur avec prefers-reduced-motion"
date: '2024-03-17'
description: "Certains utilisateurs peuvent ressentir une gêne face aux animations des pages web. Prefers-reduced-motion détecte si l'utilisateur a demandé au système de minimiser la quantité d'animation ou de mouvement."
tags: 
  - 'Accessibilité'
  - 'UX'
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

Le "Responsive Design" ne se limite plus à adapter l'affichage d'un site web au format desktop et mobile. Il est nécessaire de prendre en compte de nouveaux éléments : 
- Être responsive à l'utilisateur : prendre en compte ses préférences avec, par exemple, `dark-mode/light-mode`, `prefers-reduced-motion`, `prefers-contrast`...
- Être responsive aux composants eux-mêmes : un composant carte peut être recomposée en fonction de la largeur d'écran disponible mais aussi de sa hauteur intrinsèque.
- Être responsive aux nouveaux appareils : smartphones pliables, montres connectées.
Cette approche est appelée le "New Responsive Design"
![Graphique reprenant les éléments essentiels de l'approche New Responsive Design](/img/new-responsive.png "Graphique reprenant les éléments essentiels de l'approche New Responsive Design")

## Laisser la main à l'utilisateur concernant l'affichage des animations
`prefers-reduced-motion` a été intégré entre 2018 et 2020 sur tous les navigateurs. C'est une préférence activable dans les paramètres du navigateurs, celle-ci prend deux états :
- `reduced` : indique que l'utilisateur souhaitent que les interfaces minimisent le mouvement ou l'animation, de préférence au point où tous les mouvements non essentiels sont supprimés.
- `no-preference` : indique que l'utilisateur n'a formulé aucune préférence. Cette valeur de mot clé est évaluée comme étant false dans le contexte booléen

## S'en saisir en tant que développeur
Tout d'abord il est plutôt simple de simuler la préférence via navigateur mais la fonctionnalité est caché. Il convient d'ouvrir le Chrome Dev Inspector (CTRl+SHIFT+I) puis ouvrir le `...` du bandeau "Console" puis cliquer sur "More Tools" puis "Rendering".

<video controls muted src="/img/activer-reduced-motion-navigateur.mp4" aria-description="Activer prefers-reduced-motion dans le navigateur" title="Activer prefers-reduced-motion dans le navigateur"></video>

Pour adapter le code en fonction de la préférence sélectionnée par l'utilisateur, il est possible de cibler via une requête CSS :

```
/*
  Si l'utilisateur a exprimé le souhait, ne pas montrer l'animation sur les boutons.
*/
@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}

/*
  Si l'utilisateur n'a pas statué sur la préférence, montrer l'animation.
*/
@media (prefers-reduced-motion: no-preference) {
  button {
    /* `vibrate` keyframes are defined elsewhere */
    animation: vibrate 0.3s linear infinite both;
  }
}
```
Il est également possible d'utiliser Javascript pour détecter la préference, et choisir de jouer en conséquence ou adapter les animations :
```
  // On attrape la préférence exprimée par l'utilisateur
    let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // SI L'UTILISATEUR N'A PAS ACTIVÉ prefers-reduced-motion alors on déroule l'animation
    if (!prefersReducedMotion) {
      gsap.to(
        ".intersect",
        {
          y: "-20dvh",
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
    }
```

## Démonstration
<video controls muted src="/img/prefers-reduced-motion.mp4" aria-description="Démonstration de l'avant après du déroulement des animations en fonction de la préférence exprimée par l'utilisateur" title="Démonstration de l'avant après du déroulement des animations en fonction de la préférence exprimée par l'utilisateur"></video>

## Sources 
<https://www.youtube.com/watch?v=dhrX_biPH8c/>

<https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html/>

<https://web.dev/articles/prefers-reduced-motion?hl=fr/>