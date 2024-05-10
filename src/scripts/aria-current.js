let allNavLinks = document.querySelectorAll('.menu a')

allNavLinks.forEach((link)=>{
    
    if(link.href + '/' === window.location.href){/*obligé d'ajouter le / à link.href car sinon ne correspond pas à window.location.href */ 
        link.setAttribute('aria-current', 'page')
    }
})