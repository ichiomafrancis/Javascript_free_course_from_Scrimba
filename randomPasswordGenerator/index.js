const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOneEl = document.getElementById("passwordOne-el");
let passwordTwoEl = document.getElementById("passwordTwo-el");
let password = false;

// let randomValue = characters[Math.floor(Math.random() * characters.length)];

function getPassword() {
  let passwordOne = "";
  let passwordTwo = "";
  if (password === false) {
    for (let i = 0; i < 15; i++) {
      passwordOne += characters[Math.floor(Math.random() * characters.length)];
      passwordTwo += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;
    password = true;
  } else if (password === true) {
    passwordOneEl.textContent = " ";
    passwordTwoEl.textContent = " ";
    password = false;
  }
}
