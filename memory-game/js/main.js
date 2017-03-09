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
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
        clearStates();
    }else {
        alert("Sorry, try again");
        clearStates();
    }
}

function clearStates() {
    var numOfCards = document.getElementsByTagName("img").length;
    for(i = 0; i < numOfCards;i++) { 
        document.getElementsByTagName("img")[i].setAttribute("src", "images/back.png");
    }
    cardsInPlay = [];    
}

function flipCard() {
    var cardId = this.getAttribute("data-id");    
    this.setAttribute("src", cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    if(cardsInPlay.length > 1){
        checkForMatch();    
    }
}

function createBoard() {
    for(var i=0; i < cards.length;i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}

createBoard();