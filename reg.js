document.addEventListener("DOMContentLoaded", function () {
    const ageInput = document.getElementById("age");
    const guardianFields = document.querySelector(".guardian-fields");
    const guardianNameInput = document.getElementById("guardianName");
    const guardianNumberInput = document.getElementById("guardianNumber");
    const form = document.getElementById("registrationForm");

    ageInput.addEventListener("input", function () {
        const age = parseInt(this.value, 10);
        if (age >= 18) {
            guardianFields.style.display = "none";
            guardianNameInput.required = false;
            guardianNumberInput.required = false;
        } else {
            guardianFields.style.display = "block";
            guardianNameInput.required = true;
            guardianNumberInput.required = true;
        }
    });

    form.addEventListener("submit", function (event) {
        const age = parseInt(ageInput.value, 10);
        if (age < 18 && (!guardianNameInput.value || !guardianNumberInput.value)) {
            alert("Du må fylle ut feltene for foresattes navn og nummer når du er under 18 år.");
            event.preventDefault(); // Stopper skjemaet fra å sendes
        }
    });
});
