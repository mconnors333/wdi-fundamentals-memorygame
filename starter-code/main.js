// create variables for the cards
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var numOfMatch = 0;

var board = document.getElementById("game-board");

var createCards = function() {
    for(var i = 0; i < cards.length; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data-card', cards[i]);
    // when a card is clicked the function isTwoCards will be executed
    card.addEventListener('click', isTwoCards);
    board.appendChild(card);
}
};

var isTwoCards = function() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  var i = 0;

while (i < 2) {
  if(cardsInPlay[i] == "queen"){
  this.innerHTML = '<img id="queen" class="flippedcard" src="queen.png" alt="Queen of Spades" />';
    }

 if(cardsInPlay[i] == "king"){
     this.innerHTML = '<img id="king" class="flippedcard" src="king.png" alt="King of Spades" />';
    }
    i++;
    }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    if (isMatch(cardsInPlay)) {


        setTimeout(function(){alert("It's a match!");}, 250);
        numOfMatch++;


    } else {

        setTimeout(function(){
            alert("Sorry, try again.");
        } , 250);


    }

    // clear cards in play array for next try
    cardsInPlay = [];
    }

    if (numOfMatch == 2) {

        setTimeout(function(){alert("Congrats you win!");}, 500);

    }


};

// checks if the two cards are matches
var isMatch = function () {

    var match = false;
    if (cardsInPlay[0] == cardsInPlay[1]) {
        match = true;
    } else {
        setTimeout(function(){
            document.getElementById("queen").style.display = 'none';
            document.getElementById("king").style.display = 'none';
        } , 250);
    }

    return match;

};


createCards();
