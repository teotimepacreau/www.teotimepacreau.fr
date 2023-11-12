const elementsToAnimate = document.querySelectorAll('.intersect');
console.log(elementsToAnimate)

function hide(){
    for(let element of elementsToAnimate) {
        element.classList.add('intersect-hidden')
        if(element.id != "dont-animate"){
          element.style.transform = "translateY(-80px)"
        }else{
          continue
        }
    }
}

document.onload = hide();

// INTERSECTION OBSERVER
const options = {
    root: null,// c'est l'élément qui est utilisée comme zone d'affichage pour évaluer la visibilité de la cible. Doit être un ancêtre de la cible. Par défaut "null" donc c'est le viewport.
    threshold: 0,//échelle de 0 à 1. 0 par défaut signifie que dès qu'on voit un micro bout de l'intersection ça se déclenche. 1 signifie qu'il vaut voir l'entièreté de l'intersection pour que ça se déclenche. 0.25 signifie qu'il faut voir 25% de la section pour que ça se déclenche.
    rootMargin:  "0px 0px 0px 0px",//applique une distance à partir de laquelle l'IntersectionObserve se déclenche, par défaut 0, là si on met -200px ça se déclenchera 200px AU DESSUS de la ligne. Marche que en px ou %. Marche aussi de la droite vers la gauche si on fait du sidescrolling.
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
          }else{
            console.log(entry)
            entry.target.classList.add('intersect-visible');
            if(entry.target.id === "dont-animate"){
              return
            }else{
            entry.target.style.transform = "translateY(0)"
            }
          }
    });
},options);

elementsToAnimate.forEach(section => {//pour appliquer l'action à la NodeList
  observer.observe(section);
});