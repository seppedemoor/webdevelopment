const setup = () => {
    const txtInput = document.getElementById("txtInput");
    const resultElement = document.getElementById("result");
    const btnIndexCount = document.getElementById("btnIndexCount");
    const btnLastIndexCount = document.getElementById("btnLastIndexCount");

    const countOccurrencesIndexOf = (text, sequence) => {
        let count = 0;
        let index = text.indexOf(sequence);
        while (index !== -1) {
            count++;
            index = text.indexOf(sequence, index + 1);
        }
        return count;
    };

    const countOccurrencesLastIndexOf = (text, sequence) => {
        let count = 0;
        let index = text.lastIndexOf(sequence);
        while (index !== -1) {
            count++;
            text = text.substring(0, index); // Verkort de tekst tot voor de laatste gevonden "an"
            index = text.lastIndexOf(sequence);
        }
        return count;
    };

    btnIndexCount.addEventListener("click", () => {
        const text = txtInput.value;
        const result = countOccurrencesIndexOf(text, "an");
        resultElement.innerText = "Aantal keer 'an' met indexOf: " + result;
    });

    btnLastIndexCount.addEventListener("click", () => {
        const text = txtInput.value;
        const result = countOccurrencesLastIndexOf(text, "an");
        resultElement.innerText = "Aantal keer 'an' met lastIndexOf: " + result;
    });
};

window.addEventListener("load", setup);
