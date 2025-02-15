const setup = () => {
    let knop = document.getElementById("btnVerander");
    knop.addEventListener("click", () => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    });
}

window.addEventListener("load", setup);
