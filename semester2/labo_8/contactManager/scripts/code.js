// bewerk_persoon.js

let personen = [
    {
        voornaam: 'Seppe',
        familienaam: 'De Moor',
        geboorteDatum: new Date('2005-4-20'),
        email: 'demoorseppe@gmail.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Phebe',
        familienaam: 'De Jeagher',
        geboorteDatum: new Date('2005-10-24'),
        email: 'dejeagherphebe@gmail.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Grim',
        familienaam: 'Baeke',
        geboorteDatum: new Date('2005-12-15'),
        email: 'Grim.baeke@gmail.com',
        aantalKinderen: 2
    },
    {
        voornaam: 'Yorben',
        familienaam: 'Van der Meiren',
        geboorteDatum: new Date('2005-04-22'),
        email: 'vandermeirenyorben@gmail.com',
        aantalKinderen: 0
    }
];

const getInputValue = (id) => document.getElementById(id).value;

const bewaarBewerktePersoon = () => {
    valideer();
    const fouteElementen = document.querySelectorAll(".invalid");
    if (fouteElementen.length > 0) return;

    const voornaam = getInputValue("txtVoornaam");
    const familienaam = getInputValue("txtFamilienaam");
    const geboorteDatum = new Date(getInputValue("txtGeboorteDatum"));
    const email = getInputValue("txtEmail");
    const aantalKinderen = getInputValue("txtAantalKinderen");

    let indexOfPerson = personen.findIndex(p => p.voornaam === voornaam && p.familienaam === familienaam);

    const nieuweGegevens = { voornaam, familienaam, geboorteDatum, email, aantalKinderen };

    if (indexOfPerson === -1) {
        personen.push(nieuweGegevens);
    } else {
        Object.assign(personen[indexOfPerson], nieuweGegevens);
    }

    updateList();
};

const updateList = () => {
    const lstPersonen = document.querySelector("#lstPersonen");
    lstPersonen.innerHTML = "";

    personen.forEach((persoon, i) => {
        const option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = i;
        option.addEventListener("click", laadPersoon);
        lstPersonen.appendChild(option);
    });
};

const laadPersoon = (event) => {
    const index = parseInt(event.target.value);
    const persoon = personen[index];
    const date = new Date(persoon.geboorteDatum);

    const maand = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    const dag = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const datum = `${date.getFullYear()}-${maand}-${dag}`;

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = datum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const bewerkNieuwePersoon = () => {
    ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"]
        .forEach(id => document.getElementById(id).value = "");
};

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    updateList();
};

window.addEventListener("load", setup);
