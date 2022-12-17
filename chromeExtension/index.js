let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
// Get the button element and add a click event listener to it
const inputBtn = document.getElementById("input-btn");
//Get the unordered list element
const ulEl = document.getElementById("ul-el");

//Add event listener to the button and also perform the function once the button is clicked
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

//Loop through the array
for (let i = 0; i < myLeads.length; i++) {
  // Add the results of the loop to the ul element
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  //Another method to add the results of the loop to the ul element
  /*const li = document.createElement("li")
  li.textContent = myLeads[i]
  ulEl.append(li)*/
}
