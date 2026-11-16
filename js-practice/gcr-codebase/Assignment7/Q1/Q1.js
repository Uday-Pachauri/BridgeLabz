
const productInput = document.getElementById("productInput");

const addButton = document.getElementById("addButton");

const productList = document.getElementById("productList");

addButton.addEventListener("click", function() {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter product name");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "product-name";
    span.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    productList.appendChild(li);

    productInput.value = "";
});

productList.addEventListener("click", function(event) {

    const li = event.target.closest("li");

    if (!li) {
        return;
    }

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {

        const span = li.querySelector(".product-name");

        if (li.querySelector(".editInput")) {
            return;
        }

        const input = document.createElement("input");

        input.className = "editInput";
        input.value = span.textContent;

        span.replaceWith(input);

        input.focus();

        function saveEdit() {

            const newName = input.value.trim();

            const newSpan = document.createElement("span");

            newSpan.className = "product-name";

            newSpan.textContent = newName || span.textContent;

            if (input.isConnected) {
                input.replaceWith(newSpan);
            }
        }

        input.addEventListener("blur", saveEdit);

        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                input.blur();
            }
        });
    }
});
