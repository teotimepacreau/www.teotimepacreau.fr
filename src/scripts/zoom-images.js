let imgs = document.querySelectorAll('img')

imgs.forEach(img => {
    img.addEventListener('click', ()=>{
        let parent = img.parentNode
        let newImg = img.cloneNode()
        let dialog = document.createElement('dialog')
        dialog.appendChild(newImg)
        parent.appendChild(dialog)
        dialog.showModal()

        dialog.addEventListener('click', (event)=>{
            if (event.target == dialog) {
                //car le dialog prend tout le reste de la page, l'intérieur de la boite c'est le <search>
                dialog.close();
                dialog.remove()
              }
        })
    })
});

