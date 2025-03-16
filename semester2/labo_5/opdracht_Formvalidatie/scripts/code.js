const setup = () => {
    document.getElementById("validateBtn").addEventListener("click", function() {
        let valid = true;

        let voornaam = document.getElementById("voornaam").value.trim();
        if (voornaam.length > 30) {
            valid = false;
            showError("voornaam", "Max. 30 karakters");
        }

        let familienaam = document.getElementById("familienaam").value.trim();
        if (familienaam === "") {
            valid = false;
            showError("familienaam", "Verplicht veld");
        } else if (familienaam.length > 50) {
            valid = false;
            showError("familienaam", "Max. 50 karakters");
        }

        let geboortedatum = document.getElementById("geboortedatum").value;
        if (geboortedatum === "") {
            valid = false;
            showError("geboortedatum", "Verplicht veld");
        }

        let email = document.getElementById("email").value.trim();
        if (email === "") {
            valid = false;
            showError("email", "Verplicht veld");
        } else {
            let atCount = 0;
            let beforeAt = false;
            let afterAt = false;

            for (let i = 0; i < email.length; i++) {
                if (email[i] === '@') {
                    atCount++;
                }
                if (atCount === 0 && email[i] !== '@') {
                    beforeAt = true;
                }
                if (atCount === 1 && email[i] !== '@') {
                    afterAt = true;
                }
            }

            if (atCount !== 1 || !beforeAt || !afterAt) {
                valid = false;
                showError("email", "Geen geldig email adres");
            }
        }

        let kinderen = document.getElementById("kinderen").value;
        if (kinderen === "" || kinderen < 0 || kinderen >= 99) {
            valid = false;
            if (kinderen < 0) {
                showError("kinderen", "Is geen positief getal");
            } else {
                showError("kinderen", "Is te vruchtbaar");
            }
        }

        if (valid) {
            alert("Proficiat! Alle gegevens zijn correct ingevuld.");
        }
    });
}

const showError = (field, message) => {
    document.getElementById(field).classList.add("error");
    document.getElementById("error-" + field).textContent = message;
}

window.addEventListener("load", setup);
