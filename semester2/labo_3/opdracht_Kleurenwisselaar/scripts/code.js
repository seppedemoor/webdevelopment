const setup = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    button1.addEventListener("click", changeColor);
    button2.addEventListener("click", changeColor);
    button3.addEventListener("click", changeColor);
}

const changeColor = (event) => {
    let button = event.target;
    if (button.style.backgroundColor === "lightblue") {
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        button.style.backgroundColor = "lightblue";
        button.style.color = "white";
    }
}

window.addEventListener("load", setup);
