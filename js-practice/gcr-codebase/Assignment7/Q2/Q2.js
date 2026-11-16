
const message = document.getElementById("message");

const counter = document.getElementById("counter");

const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

message.addEventListener("beforeinput", function(event) {

    if (event.inputType.startsWith("insert")) {

        const newLength = message.value.length + event.data.length;

        if (newLength > maxCharacters) {
            event.preventDefault();
        }
    }
});

message.addEventListener("input", function() {

    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining === 0) {
        counter.className = "danger";
    }

    else if (remaining <= 20) {
        counter.className = "warning";
    }

    else {
        counter.className = "";
    }
});

resetButton.addEventListener("click", function() {

    message.value = "";

    counter.textContent = "100 characters remaining";

    counter.className = "";
});
