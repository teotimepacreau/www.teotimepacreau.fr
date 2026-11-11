---
eleventyExcludeFromCollections: true
title: "Lire la dette d'une entreprise"
description: ""
type: "Article"
date: '2026-11-10'
tags: 
  - 'Analyse financiere'
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
Quand on lit la dette d'une entreprise, on peut essayer de repérer quatre points :

- les créanciers ont ils plus de pouvoir que les actionnaires ?
- l'entreprise a-t-elle atteint son plafond maximal d'endettement ?
- il y a-t-il un mur de dette à venir causé par la maturité de la dette ?
- de combien le résultat net est il amputé par les intérêts ?
- quel est la trajectoire de l'entreprise depuis X années ?

Nous prendrons en exemple :

<div id="stock-ticker-card" style="padding: var(--rythme) calc(.5*var(--rythme)); border: 1px solid var(--txt); border-radius: var(--border-radius); max-width: max-content">
  <div id="stock-content">Chargement...</div>
</div>

<script>
  async function loadStock() {
    const apiKey = apiKeyStocksFromAlphaVantage; // À obtenir gratuitement sur alphavantage.co
    const symbol = "LOUP.PAR"; // Ou un autre symbole supporté
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const stockTickerData = data["Global stockTickerData"];

      if (!stockTickerData || Object.keys(stockTickerData).length === 0) {
        throw new Error("Données introuvables");
      }

      const price = parseFloat(stockTickerData["05. price"]).toFixed(2);
      const change = parseFloat(stockTickerData["09. change"]).toFixed(2);
      const changePercent = stockTickerData["10. change percent"].replace("%", "");
      const isPositive = change >= 0;

      document.getElementById("stock-content").innerHTML = `
        <span style="display: block; font-weight: bold;"><a href="https://www.ldc.fr/finance">LDC</a></span>
        <span style="display: block;">${price} EUR</span>
        <span style="display: block;">
          ${isPositive ? "+" : "-"}${changePercent}%
        </span>
      `;
    } catch (err) {
      document.getElementById("stock-content").innerHTML = "<span>Erreur de chargement de l'action boursière.</span>";
      console.error(err);
    }
  }

  document.addEventListener("DOMContentLoaded", loadStock);
</script>

## Premier abord : le passif du bilan

Les "Emprunts partie à long terme" correspondent au montant des dettes que l'entreprise doit rembourser à plus d'un an.

Les "Emprunts partie à long terme" correspondent au montant des dettes que l'entreprise doit rembourser à moins d'un an.

Le *gearing* permet d'estimer l'impact de la dette sur l'autonomie financière de l'entreprise : il mesure le rapport de force entre les propriétaires (actionnaires via les capitaux propres) et les créanciers (banques via les dettes). Si le gearing est supérieur à 100% les créanciers ont une capacité d'influence supérieure aux propriétaires car il y a plus de dettes que de capitaux propres.

<math>
  <mfrac>
    <mtext>Dettes long terme + Dettes court terme + Concours bancaire courant</mtext>
    <mtext>Total capitaux propres</mtext>
  </mfrac>
</math>
=
<math>
  <mfrac>
    <mtext>717829</mtext>
    <mtext>2586928</mtext>
  </mfrac>
</math>
=28%

On souhaite également repérer la capacité restante de l'entreprise à lever de la dette. On peut déterminer cela avec:
<math>
  <mfrac>
    <mtext>Dette brute</mtext>
    <mtext>EBITDA</mtext>
  </mfrac>
</math>
qui mesure la couverture de la dette par l'EBITDA. Si le résultat est supérieur à quatre cela signifie dans un premier temps que l'entreprise mettrait virtuellement plus de 4 années (d'EBITDA) à rembourser sa dette mais aussi que l'entreprise n'est pas en capacité de lever de la dette supplémentaire. En effet la [BCE donne pour consigne aux banques de considérer comme prêt à effet de levier un ratio de 4x Dette brute/EBITDA](https://www.bankingsupervision.europa.eu/ecb/pub/pdf/ssm.leveraged_transactions_guidance_201705.en.pdf).
Si le prêt est classé en "effet de levier" par la banque alors :

- des fonds propres supplémentaires sont à immobiliser pour la banque
- un coût d'octroi ou de refinancement plus élevé
- une réticence ou un refus des banques d'augmenter les lignes de crédit si le levier brut global devient trop élevé.

A noter que les banques regardent plutôt la dette nette (=on soustrait la trésorerie à la dette brute) car on considère que la trésorerie peut-être mobilisée facilement pour rembourser. J'utilise plutôt l'approche de la BCE pour des raisons de rapidité à calculer le ratio.

## Décomposer la dette grâce à la note aux états financiers relative aux dettes

On cherche à décomposer la dette en fonction de ses échéances de remboursement pour comprendre la maturité de la dette et repérer un éventuel "mur de dette" à rembourser si celle-ci n'est pas bien répartie dans le temps.
En lisant la note relative à la dette on comprend que la dette est décomposée selon les échéances de remboursement suivantes :

{% pele %}
---
config:
  sankey:
    showValues: true
    nodeWidth: 4
    nodePadding: 10
---
sankey

Dette,Echéance à 1 an,244891
Dette,Echéance entre 1 et 5 ans,316343
Dette,Echéance à plus de 5 ans,56674
{% endpele %}

Cependant, la plupart des grandes entreprises ne remboursent pas à proprement parler leur dette, elles font
"rouler" la dette en ré-empruntant. [La dette des sociétés non financières a ainsi retrouvé son niveau d'avant COVID que depuis le second trimestre 2026, à 75% du PIB](https://webstat.banque-france.fr/fr/catalogue/cnfsi/CNFSI.Q.S.FR.W0.S11.S1.C.L.LE.DETT.T._Z.XDC_R_B1GQ_CY._T.S.V.N._T).

![Graphique linéaire : Évolution trimestrielle du taux d'endettement des sociétés non financières (SNF) en France en pourcentage du PIB, de mars 1999 à mars 2026. On observe que les sociétés se sont toujours plus endettées avec un pic durant le COVID](/img/dette_snf_francaises.png "Dette des sociétés non financières françaises")

## Comprendre comment l'entreprise fait rouler sa dette avec le tableau des flux de trésorerie

![Tableau des flux de trésorerie : on constate le poste 'émission d'emprunts' corresponds aux emprunts souscrits sur l'année et le poste 'remboursement d'emprunts'](/img/dettes_dans_flux_tresorerie.png "Mise en valeur des emprunts et remboursements de dette dans les flux de trésorerie")

Sur l'année, l'entreprise s'est donc davantage endettée (poste émission d'emprunts) en comparaison au montant de dette qu'elle a remboursée.

## Le coût réel de l'endettement qui vient réduire le résultat net

Alors, quel est l'impact de l'endettement si l'entreprise ré-emprunte a minima autant que ce qu'elle rembourse ?
Le compte de résultat fait part du "Coût de l'endettement financier", cela correspond au coût annuel payé pour rembourser les intérêts de la dette.

![Compte de résultat : les intérêts payés pour la dette sont comptabilisés en charge, dans le cas de l'entreprise prise en exemple cela représente un coût de 17 millions d'euros](/img/charge_interet_dette_compte_de_resultat.png "Mise en valeur de la charge des intérêts payés sur la dette dans le compte de résultat")

## Trajectoire de l'endettement depuis 3 années

## Intérêt pour l'approche d'investissement value

{% citationsmarginales "BAKSHI, Sanjay. <em>Vantage Point: 8 Points of View For Evaluating a Stock</em> Extrait de l'article de blog <a href='https://fundooprofessor.wordpress.com/2011/04/24/vantage_point/'>Fundoo Professor</a>. 2026. [consulté le 8 Novembre 2026].", "en" %}Smart value investors don’t always value stocks or businesses. Rather they seek a margin of safety. They know that the question, "How is much its worth", is tougher than the question, “Is this likely to be worth a lot more than my price?”. Smart value investors keep away from making elaborate predictions. Instead, they focus on protection in the form of a margin of safety.{% endcitationsmarginales %}