const withSpecialCharacters = [
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

const withoutSpecialCharacters = [
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
];

let passwordOneEl = document.getElementById("passwordOne-el");
let passwordTwoEl = document.getElementById("passwordTwo-el");

function generateRandomPassword() {
  let passwordOne = "";
  let passwordTwo = "";
  let checkboxEl = document.getElementById("checkbox-el").checked;
  if (checkboxEl === true) {
    let passwordLengthEl = document.getElementById("passwordLength-el").value;
    for (let i = 0; i < passwordLengthEl; i++) {
      passwordOne +=
        withSpecialCharacters[
          Math.floor(Math.random() * withSpecialCharacters.length)
        ];
      passwordTwo +=
        withSpecialCharacters[
          Math.floor(Math.random() * withSpecialCharacters.length)
        ];
    }
  } else {
    let passwordLengthEl = document.getElementById("passwordLength-el").value;
    for (let i = 0; i < passwordLengthEl; i++) {
      passwordOne +=
        withoutSpecialCharacters[
          Math.floor(Math.random() * withoutSpecialCharacters.length)
        ];
      passwordTwo +=
        withoutSpecialCharacters[
          Math.floor(Math.random() * withoutSpecialCharacters.length)
        ];
    }
  }
  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
}
