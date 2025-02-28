const setup = () => {
    let btnSpatie = document.getElementById('btnSpatie');
    let inputTxt = document.getElementById('txtInput');

    btnSpatie.addEventListener('click', () => { maakMetSpacies(inputTxt.value); });
}
const maakMetSpacies = (inputTxt) => {
    let stringRes = "";

    for (let i = 0; i < inputTxt.length; i++) {
        stringRes += inputTxt.charAt(i) + " ";
    }
    console.log(stringRes);
}
window.addEventListener("load", setup);