const workTitleParent = document.querySelector('.travail')

workTitleParent.addEventListener('mouseover', (event) => {
    console.log(event)
    if(event.target.nodeName == "SUMMARY"){
        event.target.parentElement.open = true
        event.target.style.fontWeight = "500"
    }
})