const setup = () => {
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', addP);
}
const addP = () => {
    let txtInput = document.querySelector('#txtInput');
    let myDIV = document.querySelector('#myDIV');
    let p = document.createElement("p");
    p.textContent = txtInput.value;
    myDIV.appendChild(p);
}
window.addEventListener("load", setup);