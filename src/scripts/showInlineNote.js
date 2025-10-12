let allSidenotesCaller = document.querySelectorAll('.sidenote-caller')
allSidenotesCaller.forEach((element)=>{
    element.addEventListener('click', (event)=> {
        event.target.nextElementSibling.style.display = 'block'
    })
})