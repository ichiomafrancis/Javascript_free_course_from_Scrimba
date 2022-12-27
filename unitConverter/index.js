/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  getLength(inputValue);
  getVolume(inputValue);
  getMass(inputValue);
});

function getLength(value) {
  let feet = (value * 3.281).toFixed(3);
  let meter = (value / 3.281).toFixed(3);
  lengthEl.innerText = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`;
}

function getVolume(value) {
  let gallon = (value * 0.264).toFixed(3);
  let liter = (value / 0.264).toFixed(3);
  volumeEl.innerText = `${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters`;
}

function getMass(value) {
  let pound = (value * 2.204).toFixed(3);
  let kilogram = (value / 2.204).toFixed(3);
  massEl.innerText = `${value} kilos = ${pound} pounds | ${value} pounds = ${kilogram} kilos`;
}
