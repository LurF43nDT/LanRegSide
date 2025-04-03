document.addEventListener("DOMContentLoaded", function () {
    const ageInput = document.getElementById("age");
    const guardianFields = document.querySelector(".guardian-fields");
    const guardianNameInput = document.getElementById("guardianName");
    const guardianNumberInput = document.getElementById("guardianNumber");
    const form = document.getElementById("registrationForm");
    const confirmationMessage = document.getElementById("confirmation-message");
    const statusMessage = document.getElementById("status-message");
    const maxParticipants = 50; // Maksgrense

    // Funksjon for å sjekke antall påmeldte
    async function checkRegistrations() {
        try {
            const response = await fetch("/.netlify/functions/check-registrations");
            const data = await response.json();
            const currentCount = data.count;

            if (currentCount >= maxParticipants) {
                form.style.display = "none"; // Skjul skjemaet
                statusMessage.textContent = "Påmelding er full!";
                statusMessage.style.color = "red";
            } else {
                statusMessage.textContent = `Plasser igjen: ${maxParticipants - currentCount}`;
                statusMessage.style.color = "black";
            }
        } catch (error) {
            console.error("Feil ved sjekking:", error);
            statusMessage.textContent = "Noe gikk galt.";
        }
    }

    // Sjekk ved lasting av siden
    checkRegistrations();

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
        event.preventDefault(); // Stopper standard innsending midlertidig
        confirmationMessage.style.display = "block";

        setTimeout(() => {
            form.submit(); // Sender skjemaet til Netlify
            checkRegistrations(); // Sjekk antall etter innsending
        }, 2000);
    });
});