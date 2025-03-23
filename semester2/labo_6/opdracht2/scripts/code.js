const setup = () => {
    let listitems = document.querySelectorAll('li');
    for (let i = 0; i < listitems.length; i++) {
        let item = listitems[i];
            item.classList.add('listitem');
    }
    let img = document.createElement("img");
    img.setAttribute("src", "images/profielfoto.jpg");
    img.setAttribute("alt", "foto van Seppe De Moor");
    let body = document.querySelector('body');
    body.appendChild(img);
}
window.addEventListener("load", setup);