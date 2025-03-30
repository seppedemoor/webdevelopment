const global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    isBusy: false,
    flippedCards: [],
    matchedPairs: 0
};

const setup = () => {
    const gameContainer = document.getElementById("gameContainer");
    const resetButton = document.getElementById("resetButton");

    function initializeGame() {
        gameContainer.innerHTML = "";
        global.matchedPairs = 0;
        global.isBusy = false;
        global.flippedCards = [];

        const cardImages = [];
        for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
            cardImages.push(`images/kaart${i}.png`, `images/kaart${i}.png`);
        }
        cardImages.sort(() => Math.random() - 0.5);

        cardImages.forEach((image) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.image = image;
            card.addEventListener("click", () => flipCard(card));
            gameContainer.appendChild(card);
        });
    }

    function flipCard(card) {
        if (global.isBusy || card.classList.contains("flipped")) return;
        card.style.backgroundImage = `url(${card.dataset.image})`;
        card.classList.add("flipped");
        global.flippedCards.push(card);
        if (global.flippedCards.length === 2) {
            global.isBusy = true;
            setTimeout(checkMatch, 1000);
        }
    }

    function checkMatch() {
        const [card1, card2] = global.flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            card1.classList.add("hidden");
            card2.classList.add("hidden");
            global.matchedPairs++;
            if (global.matchedPairs === global.AANTAL_KAARTEN) {
                setTimeout(() => alert("Gefeliciteerd! Je hebt gewonnen!"), 500);
            }
        } else {
            card1.style.backgroundImage = "url('images/achterkant.png')";
            card2.style.backgroundImage = "url('images/achterkant.png')";
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }
        global.flippedCards = [];
        global.isBusy = false;
    }

    resetButton.addEventListener("click", initializeGame);
    initializeGame();
};
window.addEventListener("load", setup);