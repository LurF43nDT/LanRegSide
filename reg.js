document.addEventListener("DOMContentLoaded", function () {
    const ageInput = document.getElementById("age");
    const guardianFields = document.querySelector(".guardian-fields");
    const guardianNameInput = document.getElementById("guardianName");
    const guardianNumberInput = document.getElementById("guardianNumber");
    const form = document.getElementById("registrationForm");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Vis/skjul foresatt-felter basert på alder
    ageInput.addEventListener("input", function () {
        const age = parseInt(this.value);
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

    // Håndter skjema-submission
    form.addEventListener("submit", function (event) {
        const age = parseInt(ageInput.value);
        if (age < 18 && (guardianNameInput.value === "" || guardianNumberInput.value === "")) {
            alert("Du må fylle ut feltene for foresattes navn og nummer når du er under 18 år.");
            event.preventDefault(); // Stopper innsending hvis felt mangler
            return;
        }

        // Viser en bekreftelsesmelding
        event.preventDefault(); // Stopper den vanlige innsendingen (kan fjernes hvis redirect brukes)
        confirmationMessage.style.display = "block";

        // Alternativ: Redirect til en takk-side (om du vil)
        // window.location.href = "/thank-you.html";

        setTimeout(() => {
            form.submit(); // Sender skjemaet etter at brukeren ser meldingen
        }, 2000);
    });
});
