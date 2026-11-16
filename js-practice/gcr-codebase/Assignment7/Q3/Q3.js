
const step1 = document.getElementById("step1");

const step2 = document.getElementById("step2");

const step3 = document.getElementById("step3");

const stepTitle = document.getElementById("stepTitle");

const error = document.getElementById("error");

const backButton = document.getElementById("backButton");

const nextButton = document.getElementById("nextButton");

const summary = document.getElementById("summary");

let currentStep = 1;

function showStep() {

    step1.hidden = currentStep !== 1;

    step2.hidden = currentStep !== 2;

    step3.hidden = currentStep !== 3;

    stepTitle.textContent = "Step " + currentStep + " of 3";

    backButton.hidden = currentStep === 1;

    nextButton.textContent = currentStep === 3 ? "Submit" : "Next";

    error.textContent = "";
}

function validateStep() {

    if (currentStep === 1) {

        const name = document.getElementById("name").value.trim();

        if (name === "") {
            error.textContent = "Please enter your name";
            return false;
        }
    }

    if (currentStep === 2) {

        const email = document.getElementById("email").value.trim();

        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            error.textContent = "Please enter a valid email";
            return false;
        }
    }

    if (currentStep === 3) {

        const password = document.getElementById("password").value;

        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters";
            return false;
        }
    }

    return true;
}

nextButton.addEventListener("click", function() {

    if (!validateStep()) {
        return;
    }

    if (currentStep < 3) {

        currentStep++;

        showStep();

    } else {

        summary.hidden = false;

        summary.innerHTML = `
            <h3>Registration Summary</h3>
            <p>Name: ${document.getElementById("name").value}</p>
            <p>Email: ${document.getElementById("email").value}</p>
            <p>Password: ********</p>
        `;

        step1.hidden = true;
        step2.hidden = true;
        step3.hidden = true;

        stepTitle.textContent = "Form Completed";

        nextButton.hidden = true;
        backButton.hidden = true;
    }
});

backButton.addEventListener("click", function() {

    if (currentStep > 1) {

        currentStep--;

        showStep();
    }
});

showStep();
