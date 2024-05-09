---
title: "Héberger soi-même des applications en ayant peu de connaissances DevOps"
date: '2024-04-04'
description: "Pour sortir des solutions propriétaires, héberger soi-même est la clé. Mais comment faire quand on a peu de connaissances en réseau, Linux et Docker ?"
tags: 
  - 'DevOps'
  - 'Hébergement'
layout: blogpost_layout.html
type: post
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

Il n'est pas nécessaire d'avoir des connaissances parfaites en administration de systèmes et réseau pour héberger soi-même des services web. Avec un minimum de connaissance du terminal de commandes, les bases minimales de Docker et une compréhension du système de Ports, il est tout à fait possible d'y parvenir.

## Serveur
Pour pouvoir héberger des applications, il est nécessaire d'avoir une machine disponible à tout moment.
Plusieurs solutions existent : acheter du hardware pour avoir un serveur physique chez soi (NAS/Homelab), faire tourner une machine existante 24h/24, faire appel à un Virtual Private Server (VPS).
Mon choix s'est porté sur le VPS par facilité d'usage et par le peu d'entretien requis. Un VPS est un serveur distant appartenant à une entreprise, dont une partie vous est louée.
Les VPS au meilleur rapport qualité/prix, européens, pour une utilisation basique sont [Hetzner](https://www.hetzner.com/) et [Contabo](https://contabo.com/en/). Le prix par an est d'environ 60€.

Un VPS a besoin d'un OS pour tourner, il est recommandé de choisir un OS Linux pour installer plus facilement des solutions open-source.

## Accéder au VPS
Il suffit d'utiliser le terminal de commande de votre ordinateur :
```
ssh nomdutilisateur@adresseIP
```
`ssh` est la commande qui permet d'accéder à une machine à distance.
`nomdutilisateur` est souvent "admin" ou tout autre nom défini.
`adresseIP` est l'adresse IP publique de votre VPS, par exemple : "192.0.2.0".

Ensuite le mot de passe de votre VPS vous est demandé. Attention, pour des raisons de sécurité, les touches ne s'afficheront pas. Il est recommandé de faire un simple `coller` en faisant un unique clic droit après avoir copié votre mot de passe.

## Être capable d'installer des applications sur son VPS
Notre approche va être d'installer Docker pour être capable d'installer ensuite Portainer.
Qu'est-ce que Docker ? Docker est une plate-forme logicielle qui vous permet de concevoir, tester et déployer rapidement des applications à l'aide de conteneurs.
Pourquoi choisir Docker ? Au-delà des caractéristiques techniques, c'est l'outil que vous recontrerez le plus dans les tutos en lignes pour héberger soi-même quasiment tous les services web.

Néammoins, l'apprentissage de Docker est relativement complexe, et surtout son fonctionnement en ligne de commandes est peu intuitif pour les néophytes.
Et c'est ici que Portainer prend toute son utilité : il s'agit d'une interface graphique cliquable pour Docker.
Portainer est facilement utilisable grâce à son interface cliquable qui permet de comprendre ce qui se passe visuellement, contrairement aux lignes de commande Docker. Portainer permet de s'initier aux notions de containers, de stacks (docker-compose) et de réseaux.

![Interface graphique de Portainer](/img/portainer.png "Interface graphique de Portainer")

Nous allons donc d'abord installer Docker sur notre VPS pour être capable d'installer ensuite Portainer.

Installer Docker sur son VPS 
```
apt install docker.io
```

`apt` est une commande native dans Linux qui permet d'installer des applications.

Puis installer Portainer
```
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

[Tutoriel d'installation de Docker et Portainer sur son VPS](https://www.youtube.com/watch?v=LOp_Cb2s7m8)

Pour ouvrir Portainer il suffit d'entrer dans la barre de recherche de notre navigateur web l'adresse IP suivi du port du service que l'on souhaite utiliser.
On reprend notre exemple initial avec l'adresse IP "192.0.2.0". Reprenons notre commande entré pour installer Portainer : `-p 9000:9000`. Cela signifie que Portainer est accessible sur le port 9000 de notre "hôte" : le VPS.
On entre donc dans la barre de recherche 192.0.2.0:9000. 
On arrive sur la page de première connexion, il faut donc définir le nom d'utilisateur, le mdp.

![Page de première connexion de Portainer](/img/portaineradmin.png "Page de première connexion de Portainer")

On choisit ensuite l'environnement Docker

![Page de choix de l'environnement Docker](/img/portainerenvironnement.png "Page de choix de l'environnement Docker")

## Comprendre Portainer

L'interface de Portainer s'ouvre en présentant les différents environnements que nous avons configuré. Il faut voir les environnements comme des machines virtuelles séparées, à l'image d'un environnement Linux que l'on pourrait avoir sur une machine Windows ou autre.

On clique sur le nom de l'environnement.
![Sélection de l'environnement Docker](/img/portainerenvironnement2.png "Sélection de l'environnement Docker")

On arrive sur le dashboard.
![Dashboard Portainer](/img/portainerdashboard.png "Dashboard Portainer")

Explication des différents menus :
- **Stacks** permet d'entrer des commandes `docker-compose`, ce sont des empilements de containers
- **Containers** regroupe tous les services webs que l'on héberge
- **Images** liste les images Docker utilisées par nos containers
- **Networks** permet de créer des "bridge" entre nos containers pour qu'ils puissent communiquer les uns avec les autres
- **Volumes** ce sont les base de données nécessaires à l'enregistrement des données de nos containers

## Comprendre le principe d'un proxy manager
Imaginons que l'on installe un lecteur de flux RSS, [Miniflux](https://miniflux.app/). Si nous l'installons via Portainer celui-ci sera accessible seulement au niveau *local*, donc seulement au niveau de l'adresse IP de notre VPS suivi du port d'accès que l'on aura défini pour Miniflux.
On peut effectivement y accéder via n'importe quel naviagteur web mais celui-ci affichera que la connexion n'est pas sécurisée car nous exposons seulement du HTTP et non pas un certificat HTTPS.

![Message de Chrome en cas de connexion HTTP](/img/connexionHTTP.png "Message de Chrome en cas de connexion HTTP")

De plus cela requiert d'entrer manuellement l'IP et le port plutôt qu'une URL familière constituée de lettres.

Un proxy manager permet ainsi d'exposer un service d'un port local vers une URL dédiée et sécurisée via HTTPS.
C'est ici que [Nginx Proxy Manager](https://nginxproxymanager.com/) intervient.

### Installer Nginx Proxy Manager via Portainer
Via le menu **Stacks** on clique sur `+Add stack`, puis via `Web Editor` on entre cette commande docker-compose

```
version: "3.3"
services:
  npm-app:
    image: 'jc21/nginx-proxy-manager:latest'
    container_name: npm-app
    restart: unless-stopped
    ports:
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
      # Add any other Stream port you want to expose
      # - '21:21' # FTP
    environment:
      DB_MYSQL_HOST: "blabla-db" #A remplacer
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: "blabla" #A remplacer
      DB_MYSQL_PASSWORD: ${DB_MYSQL_PASSWORD} #A definir en variable d'environnement
      DB_MYSQL_NAME: "blabla"
      # Uncomment the line below if IPv6 is not enabled on your host
      # DISABLE_IPV6: 'true'
    volumes:
      - ./npm-data:/data:Z
      - ./letsencrypt:/etc/letsencrypt:Z
    depends_on:
      - npm-db
    networks:
      - npm-network
      - npm-internal

  npm-db:
    image: 'mariadb:latest'
    container_name: npm-db
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD} #A definir en variable d'environnement
      MYSQL_DATABASE: 'blabla' #A remplacer
      MYSQL_USER: 'blabla' #A remplacer
      MYSQL_PASSWORD: ${DB_MYSQL_PASSWORD} #A definir en variable d'environnement
    volumes:
      - ./npm-data/mysql:/var/lib/mysql:Z
    networks:
      - npm-internal

networks:
  npm-internal:
  npm-network:
    external: true
```

A quoi sert cette commande ? Nous demandons à Nginx-Proxy-Manager de recueillir les ports 80 (HTTP) et les ports 443 (HTTPS), également nous créons un réseau dédidé "npm-network" qui devra être utilisé par chaque service web que nous installerons sur notre VPS.

Pour entrer sur Nginx-Proxy-Manager nous visitons notre IP:81.

![Page d'accueil de Nginx-Proxy-Manager](/img/nginx-accueil.png "Page d'accueil de Nginx-Proxy-Manager")

Nous commençons par l'obtention d'un certificat SSL qui nous permettra d'afficher nos services webs en HTTPS. Pour cela, on clique sur le menu "SSL" puis "Add SSL Certificate".

![Obtenir un certificat SSL](/img/nginx-ssl.png "Obtenir un certificat SSL")

On entre notre nom de domaine précédé par `*.` donc `*.blabla.fr` pour que tous nos futurs sous-domaines aient un certifat SSL. Il faut absolument activer `Use a DNS challenge` puis choisir son fournisseur de nom de domaine. Il vous sera demandé un token API qui est fourni par votre fournisseur de domaine. Enfin cocher `I agree`.

Une fois le certificat SSL obtenu, il sera désormais possible d'ajouter des Proxy viale menu "Hosts". Mais pour cela nous allons d'abord reprendre notre exemple d'installation de Miniflux

## Installer une application et l'exposer sur une URL dédiée
### Installer et configurer Miniflux via Portainer
Nous reprenons notre exemple d'installation de Miniflux.
Dans Portainer nous ajoutons une stack comme vu précédemment pour Nginx-Proxy-Manager.
Ici le docker-compose :

```
services:
  miniflux:
    image: miniflux/miniflux:latest
    ports:
      - "8080:8080"
    depends_on:
      db:
        condition: service_healthy
    environment:
      - DATABASE_URL=postgres://miniflux:secret@db/miniflux?sslmode=disable
      - RUN_MIGRATIONS=1
      - CREATE_ADMIN=1
      - ADMIN_USERNAME=blabla #A remplacer
      - ADMIN_PASSWORD=blabla #A remplacer
  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=blabla #A remplacer
      - POSTGRES_PASSWORD=blabla #A remplacer
      - POSTGRES_DB=blabla #A remplacer
    volumes:
      - miniflux-db:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "miniflux"]
      interval: 10s
      start_period: 30s
volumes:
  miniflux-db:
networks:
  npm-internal:
  npm-network:
    external: true
```

Les 4 dernières lignes "Network" sont indispensables pour que le container Miniflux comprenne qu'il doit tourner sous le réseau de Nginx-Proxy-Manager.
Mais cela ne suffit pas pour exposer notre app sur le web. Nous devons manuellement aller dans le container associé puis descendre en bas de la page pour accéder au sous-menu "Network".

Il faut associer le container Miniflux au network nginx proxy manager "npm", via le menu déroulant "Select a Network".

![Associer le container Miniflux au network nginx proxy manager npm](/img/miniflux-network.png "Associer le container Miniflux au network nginx proxy manager npm")

### Se rendre dans son fournisseur de nom de domaine pour configurer un sous-domaine pour Miniflux
Pour exposer notre Miniflux local sur une URL dédiée, on choisit un sous-domaine "miniflux-reader.blabla.fr". Pour cela, nous devons nous rendre sur notre fournisseur de nom de domaine et ajouter manuellement un DNS.

On entre notre nom de sous domaine "miniflux-reader", en type de DNS on choisit uniquement le type A car seul celui-ci est dédié aux adresses IPV4 publiques. Aucun autre type de DNS ne fonctionnera. Puis on entre l'adresse IP publique de notre VPS, par exemple : 192.0.2.0 

![Ajouter un DNS](/img/DNS.png "Ajouter un DNS")

### Se rendre sur Nginx Proxy Manager pour ajouter le proxy de Miniflux
Dernière étape : ajouter le proxy. On se rend dans le sous-menu "Hosts" puis "Add Proxy Host".

La configuration à suivre :

![Ajouter un proxy](/img/nginx-proxy.png "Ajouter un proxy")

Dans "Forward Port" on note le port que l'on avait défini pour l'installation de notre app, en l'occurence 8080 pour notre exemple de Miniflux.

Puis on clique sur le sous-menu "SSL", dans le menu déroulant on choisit notre certificat SSL obtenu précédemment, et il est indispensable de cocher tous les boutons en dessous car sinon le proxy ne sera pas activé pour nos sous-domaines.
Nous pouvons enfin valider avec "Save".

![Sous-menu SSL d'ajout de proxy](/img/nginx-proxy-2.png "Sous-menu SSL d'ajout de proxy")

Notre Miniflux est finalement accessible sur son url dédiée en HTTPS "miniflux-reader.blabla.fr" 