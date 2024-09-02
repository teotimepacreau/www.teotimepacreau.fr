const displayTableForMobile = function (){
    const allTh = document.querySelectorAll('th')
    let allRows = document.querySelectorAll('tbody tr')
    console.log(allRows)
    allRows.forEach((row)=>{
        const allTd = row.querySelectorAll('tbody tr td')
        allTd.forEach((td, index)=>{
            const text = allTh[index].textContent
            td.setAttribute('data-cell', text)
    })
    })
}
displayTableForMobile()