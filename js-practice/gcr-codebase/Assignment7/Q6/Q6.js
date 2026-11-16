
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const rows = studentTable.getElementsByTagName("tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase();
    let found = 0;

    for (let i = 0; i < rows.length; i++) {
        const rowText = rows[i].textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            rows[i].style.display = "";
            found++;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});
