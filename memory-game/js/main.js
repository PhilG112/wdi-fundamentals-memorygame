var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    }
    alert("Sorry, try again");
}

function flipCard(index) {
    console.log("User flipped " + cards[index].rank)
    console.log(cards[index].cardImage);
    console.log(cards[index].suit);
    cardsInPlay.push(cards[index].rank);
    checkForMatch();
}

flipCard(0);
flipCard(2);

