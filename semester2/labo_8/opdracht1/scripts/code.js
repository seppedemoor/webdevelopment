const setup = () => {
    berekenDagen();
}

const berekenDagen = () => {
    const txt = document.querySelector("#txt");
    const vandaag = new Date();
    const geboorteDatum = new Date(2005, 3, 20); // Mei (maand 4)

    const verschilInMillis = vandaag - geboorteDatum;
    const verschilInDagen = Math.floor(verschilInMillis / (1000 * 60 * 60 * 24));

    console.log(`Aantal dagen sinds 20 mei 2005: ${verschilInDagen}`);
    txt.textContent = `Aantal dagen sinds 20 april 2005: ${verschilInDagen}`;
}

window.addEventListener("load", setup);