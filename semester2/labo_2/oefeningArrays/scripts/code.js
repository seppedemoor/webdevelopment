const setup = () => {
    const namen = ['Milo', 'Phebe', 'Robby', 'Trui', 'Grim'];
    console.log(namen);
    console.log(namen[0], namen[2], namen[4]);

    VoegNaamToe(namen);
    console.log(namen.join(", "));
}


const VoegNaamToe = (namenArray) => {
    let nieuweNaam = prompt("Voer een extra naam in:");
    if (nieuweNaam) {
        namenArray.push(nieuweNaam);
    }
}

window.addEventListener("load", setup);
