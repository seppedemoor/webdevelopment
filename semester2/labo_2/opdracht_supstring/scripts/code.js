const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", genereerSubstring);
}

const genereerSubstring = () => {
    let txtInput = document.getElementById("txtInput").value;
    let startIndex = parseInt(document.getElementById("startIndex").value);
    let endIndex = parseInt(document.getElementById("endIndex").value);
    let txtOutput = document.getElementById("txtOutput");

    if (startIndex >= 0 && endIndex > startIndex && startIndex < txtInput.length) {
        txtOutput.textContent = txtInput.substring(startIndex, endIndex);
    } else {
        txtOutput.textContent = "Ongeldige indexwaarden!";
    }
}

window.addEventListener("load", setup);
