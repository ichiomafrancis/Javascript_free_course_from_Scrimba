/* Separated the characters into two parts: The first array contains all the characters including the special characters while the second array does not contain the special characters.*/
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

// Get the element for the password display fields using its id
let passwordOneEl = document.getElementById("passwordOne-el");
let passwordTwoEl = document.getElementById("passwordTwo-el");

//Function to generate random passwords according to the users given conditions
function generateRandomPassword() {
  //Declared the password variables
  let passwordOne = "";
  let passwordTwo = "";
  //Declared the variable to store the value of the checkbox
  let checkboxEl = document.getElementById("checkbox-el").checked;
  //Read the value of the input field where the user indicates their desired length for the generated password
  let passwordLengthEl = document.getElementById("passwordLength-el").value;
  /*if true, this indicates that the user wants to include special characters in the random generated password.
  So we use the first array that contains all the characters including the special characters*/
  if (checkboxEl === true) {
    //loop through the characters according to the specified password length by the user to generate random passwords
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
    /*loop through the characters according to the specified password length by the user.
    So we use the second array that does not contain the special characters*/
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
  //Set the content of the password field to the newly generated random passwords
  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
}

function copyPasswordOne() {
  // getting the text content that we want to copy
  let textOneEl = document.getElementById("passwordOne-el").textContent;
  // Copy selected text into clipboard
  navigator.clipboard.writeText(textOneEl);
}

function copyPasswordTwo() {
  // getting the text content that we want to copy
  let textTwoEl = document.getElementById("passwordTwo-el").textContent;
  // Copy selected text into clipboard
  navigator.clipboard.writeText(textTwoEl);
}
