/*Getting a random integer between two values.
The function getRandomInt(min,max) returns a random integer between the specified values. 
The value is no lower than min (or the next integer greater than min if min isn't an integer), 
and is less than (but not equal to) max.*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);

let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  function newCard() {
    console.log("Drawing a new card from the deck !");
  }

  // sumEl.innerText = `"Sum: ${sum}"`;
  cardsEl.innerText = "Cards: " + firstCard + " " + secondCard;
  sumEl.innerText = "Sum: " + sum;
  messageEl.innerText = message;

  //CASH OUT
  console.log(hasBlackJack);

  //GAME OVER
  console.log(isAlive);
}

