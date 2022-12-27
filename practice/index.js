// PRACTICE 1
// let fighters = [
//   "🐉",
//   "🐥",
//   "🐊",
//   "💩",
//   "🦍",
//   "🐢",
//   "🐩",
//   "🦭",
//   "🦀",
//   "🐝",
//   "🤖",
//   "🐘",
//   "🐸",
//   "🕷",
//   "🐆",
//   "🦕",
//   "🦁",
// ];

// let stageEl = document.getElementById("stage");
// let fightButton = document.getElementById("fightButton");

// fightButton.addEventListener("click", function () {
//   // Challenge:
//   // When the user clicks on the "Pick Fighters" button, pick two random
//   // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
//   let player1 = fighters[Math.floor(Math.random() * fighters.length)];
//   let player2 = fighters[Math.floor(Math.random() * fighters.length)];
//   stageEl.textContent = player1 + " vs " + player2;
// });

// PRACTICE 2
// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let log = `The ${arr.length} ${desc} are `;
  for (let i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      if (i == arr.length - 2) {
        log += arr[i] + " ";
      } else log += arr[i] + ", ";
    } else log += `and ${arr[i]}`;
  }
  console.log(log);
}

generateSentence("largest countries", ["China", "India", "USA"]);
