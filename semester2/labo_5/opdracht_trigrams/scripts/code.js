const setup = () => {
    document.getElementById("btntrigram").addEventListener("click", maakTriagrams);
};

const maakTriagrams = () => {
    let input = document.getElementById("txtInput").value; // Correcte ID gebruiken
    let output = [];
    for (let i = 0; i <= input.length - 3; i++) {
        output.push(input.slice(i, i + 3));
    }
    console.log(output.join(" "));
};

window.addEventListener("load", setup);
