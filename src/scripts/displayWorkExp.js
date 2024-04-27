const workTitleParent = document.querySelector('#experiences')

function isMobile () {
    return window.matchMedia("(max-width: 600px)").matches
  }
let mobile = isMobile()

workTitleParent.addEventListener('mouseover', (event) => {
    const parentElement = event.target.closest('details')
    if(event.target.nodeName == "SUMMARY"){
        event.target.style.fontWeight = "500"
    }
    if(event.target.nodeName == "SUMMARY" && !mobile){
        event.target.style.fontWeight = "500";
        parentElement.open = true
    }
})