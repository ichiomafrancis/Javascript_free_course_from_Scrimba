let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// console.log(saveEl.innerText);
// console.log(saveEl.innerHTML);
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saveText = `${count} - `;
  saveEl.innerText += ` ${saveText}`;
  countEl.innerText = 0;
  count = 0;
}

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Francis Chioma";
// let greeting = "Great to have you ";

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += " 👋";
