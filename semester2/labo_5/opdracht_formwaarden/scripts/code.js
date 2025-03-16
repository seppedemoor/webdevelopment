const initialize = () => {
    let resultaatKnop = document.getElementById("btn");
    resultaatKnop.addEventListener("click", toonResultaat);
}

const toonResultaat = (event) => {
    controleerRoker();
    controleerTaal();
    controleerBuurland();
    controleerBestelling();
}

const controleerRoker = () => {
    let isRoker = document.getElementById("isRoker").checked;
    if (isRoker) {
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }
}

const controleerTaal = () => {
    let talen = document.getElementsByName("moedertaal");
    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            console.log("Moedertaal is " + talen[i].value);
        }
    }
}

const controleerBuurland = () => {
    let buurlandOpties = document.getElementById("buurland").options;
    for (let i = 0; i < buurlandOpties.length; i++) {
        if (buurlandOpties[i].selected) {
            console.log("Favoriete buurland is " + buurlandOpties[i].text);
        }
    }
}

const controleerBestelling = () => {
    let bestellingOpties = document.getElementById("bestelling").options;
    let bestellingSamenvatting = "Bestelling bestaat uit ";
    for (let i = 0; i < bestellingOpties.length; i++) {
        if (bestellingOpties[i].selected) {
            bestellingSamenvatting += bestellingOpties[i].text + " ";
        }
    }
    console.log(bestellingSamenvatting);
}

window.addEventListener("load", initialize);
