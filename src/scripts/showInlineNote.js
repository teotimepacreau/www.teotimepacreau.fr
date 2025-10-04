let allInlineNotesBlock = document.querySelectorAll('span.conteneur-citation-dans-texte')
allInlineNotesBlock.forEach((element)=>{
    element.firstElementChild.addEventListener('click', (event)=> {
        event.target.nextElementSibling.style.display = 'block'
    })
})