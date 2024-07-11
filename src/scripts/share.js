// WEB SHARE API

let shareData = {
    title: document.title,
    url: window.location.href
}
let btn = document.getElementById('partage-btn')
btn.addEventListener('click', async ()=>{
    try{
        await navigator.share(shareData)

    }catch (err){
        console.error(err)
    }
})
