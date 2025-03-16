const setup = () => {
    let input = "beginwaarde";
    let gemeentes = [];
    while (input !== null) {
        input = window.prompt('Voer een stad in:');
        gemeentes.push(input);
    }
    output(gemeentes.sort());
}

const output = (gemeentes) => {
    for (let i = 0; i < gemeentes.length; i++) {
        if (gemeentes[i] !== null) {
            let outputVeld = document.getElementById("gemeenten");
            outputVeld.innerHTML += "<option value='" + gemeentes[i] + "'>" + gemeentes[i] + "</option>";
        }
    }
}

window.addEventListener("load", setup);
