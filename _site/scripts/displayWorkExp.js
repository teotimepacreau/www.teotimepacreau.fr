const workTitleParent = document.querySelector('.travail')

workTitleParent.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('travail-titre-poste')) {
        let WorkDesc = event.target.nextElementSibling
        WorkDesc.classList.add('visible')
    }
})