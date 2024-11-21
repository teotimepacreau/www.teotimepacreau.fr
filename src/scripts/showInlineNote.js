let allInlineNotesBlock = document.querySelectorAll('.lettrage-superieur')
allInlineNotesBlock.forEach((element)=>{
    element.firstElementChild.addEventListener('click', (event)=> {
        event.target.nextElementSibling.style.display = 'block'
    })
})