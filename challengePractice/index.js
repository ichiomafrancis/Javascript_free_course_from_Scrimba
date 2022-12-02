let num1 = 8;
let num2 = 2;
let result;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

result = document.getElementById("result-el");

function add() {
  add = num1 + num2;
  result.textContent = `sum = ${add}`;
}

function subtract() {
  difference = num1 - num2;
  result.textContent = `difference = ${difference}`;
}

function divide() {
  division = num1 / num2;
  result.textContent = `division= ${division}`;
}

function multiply() {
  product = num1 * num2;
  result.textContent = `product = ${product}`;
}
