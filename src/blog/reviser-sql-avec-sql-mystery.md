---
title: "Réviser SQL avec 'SQL Murder Mystery'"
type: "Article"
date: "2024-09-19"
description: "Solution et processus pour résoudre une enquête grâce au SQL"
tags: 
  - 'SQL'
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
[SQL Murder Mystery](https://mystery.knightlab.com/) est un site proposant de résoudre une enquête policière en mettant en pratique SQL. 
Une seule indication est donnée au départ : "the crime was a ​murder​ that occurred sometime on ​Jan.15, 2018​ and that it took place in ​SQL City".
Tout l'exercice consiste à requêter une base de données sous-jacente que les services de police auraient constitués. Celle-ci est schématisée par un [Entity-Relationships-Diagram](https://www.teotimepacreau.fr/blog/modelisation-base-de-donnees/). Il faut donc trouver la logique en requêtant les tables à la suite les unes des autres pour déduire qui est le criminel puis le commanditaire.

![Le schéma ERD de la base de données de l'enquête](/img/ERD-SQL-Mystery.png "Schéma ERD de la base de données de l'enquête")

## 1 : Retrouver la description du crime_scene_report

```sql
SELECT * FROM crime_scene_report
WHERE date = '20180115'
AND type = 'murder'
AND city = 'SQL City';
```

On apprend dans le champ `description` de crime_scene_report :
"The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave"."

## 2.1 : Trouver qui est le premier témoin et son id

```sql
SELECT address_number 
WHERE address_street_name = 'Northwestern Dr`
ORDER BY address_number DESC #pour trouver directement le numéro de la dernière maison de la rue
```

La dernière maison de la rue est logiquement le numéro le plus élévé de la rue : 4919 `address_number`

On cherche ensuite à connaître tous les détails de ce témoin vivant au 4919 rue Northwestern Dr.

```sql
SELECT * FROM person
WHERE address_street_name = 'Northwestern Dr'
AND address_number = "4919"
```

On obtient :

|id|name|license_id|address_number|address_street_name|ssn|
|--|--|--|--|--|--|
|14887|Morty Schapiro|118009|4919|Northwestern Dr|111564949|

## 2.2 Trouver l'id du second témoin

On sait que le second témoin se nomme Annabel et vie dans la rue Franklin. La colonne `name` de la table `person` est composée du prenom ET du nom. Or nous n'avons que le prénom, il faut donc utiliser une méthode SQL de matching partiel.

```sql
SELECT * FROM person
WHERE address_street_name = "Franklin Ave"
AND name LIKE 'Annabel%'
```

On obtient :

|id|name|license_id|address_number|address_street_name|ssn|
|--|--|--|--|--|--|
|16371|Annabel Miller|490173|103|Franklin Ave|318771143|

## 3. Trouver la retranscription des interrogatoires de chaque témoin

On a l'id de chaque témoin. 
Retrouvons l'intérrogatoire de temoin n°1 :

```sql
SELECT * FROM interview
WHERE person_id = '14887'
```

On obtient :

|person_id|transcript|
|--|--|
|14887|I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".|

Retrouvons l'interrogatoire de témoin n°2 :

```sql
SELECT * FROM interview
WHERE person_id = '16371'
```

On obtient :

|person_id|transcript|
|--|--|
|16371|I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.|

## 4. Tracer le membre de la salle de sport aperçu

On sait que le suspect à un sac qui commence par "48Z". Seuls les membres "gold" ont ces sacs. Le suspect est rentré dans une voiture avec une plaque incluant le n° "H42W".

```sql
SELECT * FROM get_fit_now_member
WHERE membership_status = 'gold'
AND id LIKE '48Z%'
```

On obtient :

|id|person_id|name|membership_start_date|membership_status|
|--|--|--|--|--|
|48Z7A|28819|Joe Germuska|20160305|gold|
|48Z55|67318|Jeremy Bowers|20160101|gold|

Il y a 2 résultats : on se souvient que le 2ème témoin se souvient que les évènements se sont déroulés le 9 Janvier.
Or le premier résultat a un membership_start_date de 20160305. Il ne peut donc s'agir que de Jeremy Bowers.

L'interface nous le confirme : "Congrats, you found the murderer! But wait, there's more... If you think you're up for a challenge, try querying the interview transcript of the murderer to find the real villain behind this crime".

## 5. Continuons avec le challenge proposé : retrouvez l'interrogatoire du meutrier

```sql
SELECT * FROM interview
WHERE person_id = '67318'
```

On obtient :

|person_id|transcript|
|--|--|
|67318|I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017.|

## 6. Trouver qui est allé 3 fois au concert "SQL Symphony Concert " en Décembre 2017

```sql
SELECT * FROM facebook_event_checkin
WHERE event_name = 'SQL Symphony Concert'
AND date LIKE '201712__'
GROUP BY person_id
HAVING COUNT(person_id) = 3
```

On obtient 2 entrées :

|person_id|event_id|event_name|date|
|--|--|--|--|
|24556|1143|SQL Symphony Concert|20171224|
|99716|1143|SQL Symphony Concert|20171229|

Il nous faut donc affiner pour savoir laquelle des deux personnes est la commanditaire

## 7. Trouver laquelle des deux personnes conduit une Tesla Model S
On procède à une jointure des tables `person` et `drivers_license` basé sur l'id des 2 personnes étant allées à l'évènement.

```sql
SELECT *
FROM drivers_license
JOIN person
ON person.license_id = drivers_license.id
WHERE person.id = '24556' OR person.id = '99716';
```

On obtient une seule entrée :

<div class="table-wrapper" style="overflow-x:auto">

|id|age|height|eye_color|hair_color|gender|plate_number|car_make|car_model|id|name|license_id|address_number|address_street_name|ssn|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|202298|68|66|green|red|female|500123|Tesla	Model S|99716|Miranda Priestly|202298|1883|Golden Ave|987756388|

</div>

L'interface nous le confirme : "Congrats, you found the brains behind the murder! Everyone in SQL City hails you as the greatest SQL detective of all time. Time to break out the champagne!".

## Ce que j'ai appris

1. Le matching partiel SQL avec `%` et `_`
2. `GROUP BY` et `HAVING`
3. La jointure de base en SQL