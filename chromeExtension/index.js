let myLeads = [];
const inputEl = document.getElementById("input-el");
// Get the button element and add a click event listener to it
const inputBtn = document.getElementById("input-btn");
//Get the unordered list element
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

//localStorage.getItem("key") - gets the value corresponding to the key
//JSON.parse(localStorage.getItem("key")) - converts the string value into an array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

tabBtn.addEventListener("click", function () {
  console.log(tabs[0].url);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a href='${leads[i]}' target="_blank">
        ${leads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

//Another method to add the results of the loop to the ul element
/*const li = document.createElement("li")
  li.textContent = myLeads[i]
  ulEl.append(li)*/

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

//Add event listener to the button and also perform the function once the button is clicked
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  //JSON.stringify converts the myLeads array to a string.
  //localStorage.setItem("key", "value") - Stores key value pairs in the local storage.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
