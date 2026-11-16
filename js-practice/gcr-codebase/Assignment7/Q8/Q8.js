
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", function(event) {
    event.stopPropagation();
    dropdownOptions.classList.toggle("show");
});

dropdownOptions.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownButton.textContent = event.target.textContent;
        dropdownOptions.classList.remove("show");
    }
});

document.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.remove("show");
    }
}, true);
