const setup = () => {
    let btnSpatie = document.getElementById('btnSpatie');
    btnSpatie.addEventListener('click', spatieToevogen)
}

const spatieToevogen = () => {
    let txtInput = document.getElementById('txtInput');
    let txt = txtInput.value;
    let stringRes = "";

    for (let i = 0; i < txt.length; i++) {
        stringRes += txt.charAt(i) + " ";
    }
    console.log(stringRes);
}
window.addEventListener("load", setup);