let myLeads = [];
const inputEl = document.getElementById("input-el");
// Get the button element and add a click event listener to it
const inputBtn = document.getElementById("input-btn");
//Get the unordered list element
const ulEl = document.getElementById("ul-el");

//Add event listener to the button and also perform the function once the button is clicked
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href='${myLeads[i]}' target="_blank">
        ${myLeads[i]}
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
