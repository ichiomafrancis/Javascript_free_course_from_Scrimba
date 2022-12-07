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

// console.log(firstCard);
// console.log(secondCard);
// console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
}

//CASH OUT!
console.log(hasBlackJack);
