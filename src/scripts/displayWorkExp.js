const workTitleParent = document.querySelector('.travail')
console.log(workTitleParent)

workTitleParent.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('travail-titre-poste')) {
        console.log('hovered')
        let WorkDesc = event.target.nextElementSibling
        console.log('WorkDesc', WorkDesc)
        WorkDesc.classList.add('visible')
    }
})