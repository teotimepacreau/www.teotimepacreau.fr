const displayTableForMobile = function () {
  document.querySelectorAll("table").forEach((table) => {
    const allTh = table.querySelectorAll("th");
    let allRows = table.querySelectorAll("tbody tr");
    allRows.forEach((row) => {
      const allTd = row.querySelectorAll("tbody tr td");
      allTd.forEach((td, index) => {
        const text = allTh[index] ? allTh[index].textContent : "";
        td.setAttribute("data-cell", text);
      });
    });
  });
};
displayTableForMobile();
