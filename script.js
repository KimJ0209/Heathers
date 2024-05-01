let game = document.querySelector(".game");
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");

let urls = "https://cdn.glitch.global/e086f8e8-8fcf-4311-a925-cd6e3496e3d3/Untitled72_2024041521";
let cards = [
    "4549.png?v=1713243271233",
    "4559.png?v=1713243278477",
    "4602.png?v=1713243281359",
    "4605.png?v=1713243285813",
    "4607.png?v=1713243287991",
    "4609.png?v=1713243289729",
    "4613.png?v=1713243291963",
    "4616.png?v=1713243294980"
];

let audio = new Audio("https://cdn.glitch.global/4b46f704-d46f-4326-81cb-12df50d3a508/mixkit-arcade-game-jump-coin-216.wav?v=1713579837904"); // Create new Audio element with the correct audio file path

buttonShow.onclick = function() {
    console.log("Showing the deck...");
    audio.play(); // Play the audio when showing the deck
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + urls +
            card +
            ")' class='card'></div>");
    }
};

buttonDouble.onclick = function() {
    console.log("Now the deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" +
                urls + card + ")' class='card'></div>");
        }
    }
    console.log("Deck has " + cards.length + " cards.");
    buttonDouble.style.color = "silver";
};

buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            urls + card + ")' class='card'></div");
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

buttonFlip.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + urls + card + ")' class='card' id='" + i + "'></div>");
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

document.addEventListener("click", (event) => {
    let clickedId = event.target.id;
});