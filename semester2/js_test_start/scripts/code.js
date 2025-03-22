const setup = () => {
const txtInput = document.getElementById('txtInput');
const staatKip = document.getElementById('staatKip');
const img = document.getElementById('img');
const note = document.getElementById('note');

    if (staatKip.value === "metEi") {
        img.classList.add("img.with-egg");
        note.innerText += "Hier boven een kip met een ei"
    }else{
        img.classList.remove("img");
        note.innerText += "Hier belown een kip zonder een ei"
    }

    const aantalLetters = (text, sequence) => {
        let count = 0;
        let index = text.lastIndexOf(sequence);
        while (index !== -1) {
            count++;
            text = text.substring(0, index);
            index = text.lastIndexOf(sequence);
        }
        return count;
    };

    txtInput.addEventListener("input", () => {
        const text = note.value;
        const result = aantalLetters(text, txtInput.value);
        note.innerText =+ "Letter" + txtInput.value +" komt " + result + " voor in bovenstaande zin";
    });
}
window.addEventListener("load", setup);