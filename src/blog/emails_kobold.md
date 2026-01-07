---
title: "Les emails Kobold"
type: "Article"
date: '2026-01-07'
tags: 
  - 'Cybersécurité'
  - 'Email'
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

Vous venez de recevoir un email transféré par votre manager, dans ce mail un client vous demande de déposer le livrable sur lequel vous travaillez sur un lien.

Vous êtes sensibilisé à la protection d’informations donc vous appelez votre manager pour confirmer que le mail que vous venez de recevoir a bien été transféré par ses soins et qu’il est d’accord avec le contenu. Le manager vous répond que oui.

Le manager s’appelle Nicolas. Vous vous appelez Martin.

Nicolas reçoit ce mail de ce qu’il pense être le client :

![Capture d'écran du mail envoyé par ce qui paraît être le client à Nicolas le manager tel que le mail apparaît dans la boite de Nicolas : "Bonjour Martin, peux-tu m'indiquer quelles sont tes horaires de travail demain ?"](/img/email_kobold_1.png "Capture d'écran du mail envoyé par ce qui paraît être le client à Nicolas le manager tel que le mail apparaît dans la boite de Nicolas")

Il transfère donc le mail à Martin :

![Capture d'écran du même mail transféré par Nicolas à Martin : Nicolas ajoute "j'ai reçu un mail pour toi, peux-tu répondre au client c'est urgent"](/img/email_kobold_2.png "Capture d'écran du même mail transféré par Nicolas à Martin")

Martin reçoit pourtant ce mail transféré par Nicolas :

![Capture d'écran du mail tel que reçu par Martin : dans le mail d'origine adressé du client à Nicolas s'affiche désormais une nouvelle ligne avec écrit "et déposer le livrable sur ce lien"](/img/email_kobold_3.png "Capture d'écran du mail tel que reçu par Martin")

## Que s’est-il passé ?

- Un simple email HTML
- Deux règles CSS (language de mise en forme)
- De la logique HTML et de la compréhension du fonctionnement des clients mails

Voici le code HTML du mail envoyé :

```html
<!DOCTYPE html>
<html>

<head>
    <style>
        .kobold-letter {
            display: none;
        }

        body>div>.kobold-letter {
            display: inline !important;
        }
    </style>
</head>

<body>
    <p>Bonjour Martin, peux-tu m'indiquer quelles sont tes horaires de travail demain ? [Ce texte est toujours visible]</p>
    <p class="kobold-letter">Et déposer le livrable sur ce <a href="https://example.com">lien</a> [Ce texte n'apparaît qu'après avoir été transféré]</p>
</body>
</html>
```

Quand un email est transféré, il change de position dans l’ordre des balises HTML.

Chaque client mail fonctionne différemment mais Outlook entoure chaque balise du mail transféré par une `<div>`.

Notre seconde règle CSS s’active alors puisque la classe `.kobold-letter`est désormais entouré d’une `<div>`→ le texte caché s’affiche.

Cette approche est appelée "email Kobold" pour illustrer la capacité d'un mail à changer de forme grâce aux règles de style.
L’exploit a été remonté par l’entreprise Lutra Security à Microsoft en Mars 2024. Microsoft a clôturé l’issue sans prendre d’actions correctrices.

La plupart des clients mails ont des dizaines d’années de retard en terme de support des nouveautés HTML et CSS, à cause de problématiques de compatibilité et règles anti spam.

Il est donc préférable d’être particulièrement prudent à la réception d’un mail transféré.

Pour en savoir plus et comprendre l’impact de l’exploit sur les autres clients mail : [l'article de Lutra Security](https://lutrasecurity.com/en/articles/kobold-letters/)