const setup = () => {
    let btnConvert = document.getElementById("btnConvert");
    btnConvert.addEventListener("click", vervangDeNaarHet);
}

const vervangDeNaarHet = () => {
    let inputElement = document.getElementById("txtInput");
    let input = inputElement.value.toLowerCase();
    let output = "";
    let lastIndex = 0;

    for (let i = 0; i < input.length - 1; i++) {
        if (input.substring(i, i + 2) === "de") {
            output += input.substring(lastIndex, i) + "het";
            lastIndex = i + 2;
        }
    }
    output += input.substring(lastIndex);
    console.log(output);
}

window.addEventListener("load", setup);
