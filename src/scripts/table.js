const displayTableForMobile = async ()=>{
    const allTd = document.querySelectorAll('td')
    const allTh = document.querySelectorAll('th')
    allTd.forEach((td, index)=>{
            const text = allTh[index].textContent
            td.setAttribute('data-cell', text)
    })
}
displayTableForMobile()