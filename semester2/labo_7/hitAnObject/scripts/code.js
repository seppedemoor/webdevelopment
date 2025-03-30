let global = {
    totalImages: 5,
    imageSize: 48,
    imagePath: "images/",
    imageExtension: ".png",
    moveSpeed: 2000,
    score: 0,
    gameActive: false,
    timer: null
};

const playField = document.getElementById("playField");
const startButton = document.getElementById("startGame");
const scoreDisplay = document.getElementById("score");

let objectImage = document.createElement("img");
objectImage.style.position = "absolute";
objectImage.style.width = `${global.imageSize}px`;
objectImage.style.height = `${global.imageSize}px`;

function getRandomPosition() {
    let x = Math.random() * (playField.clientWidth - global.imageSize);
    let y = Math.random() * (playField.clientHeight - global.imageSize);
    return { x, y };
}

function moveObject() {
    if (!global.gameActive) return;
    let { x, y } = getRandomPosition();
    objectImage.style.left = `${x}px`;
    objectImage.style.top = `${y}px`;
    objectImage.src = global.imagePath + Math.floor(Math.random() * global.totalImages) + global.imageExtension;
    global.timer = setTimeout(moveObject, global.moveSpeed);
}

objectImage.addEventListener("click", function () {
    if (!global.gameActive) return;
    if (objectImage.src.includes("0.png")) {
        alert("Game Over!");
        global.gameActive = false;
        clearTimeout(global.timer);
    } else {
        global.score++;
        scoreDisplay.textContent = global.score;
        moveObject();
    }
});

startButton.addEventListener("click", function () {
    global.score = 0;
    scoreDisplay.textContent = global.score;
    global.gameActive = true;
    playField.appendChild(objectImage);
    moveObject();
});
