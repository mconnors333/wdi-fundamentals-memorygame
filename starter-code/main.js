// create variables for the cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo === cardFour) {

    alert("You found a match!");

} else {
    alert("Sorry, try again.");
}
if (cardTwo === cardOne) {

    alert("You found a match!");

} else {
    alert("Sorry, try again.");
}

if (cardThree === cardFour) {

    alert("You found a match!");

} else {
    alert("Sorry, try again.");
}
*/
var board = document.getElementById("game-board");

var createCards = function() {
    for(var i = 0; i < 4; i++) {
    var card = document.createElement("div");
    card.className = "card";
    board.appendChild(card);
}
};


createCards();
