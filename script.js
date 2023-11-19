//Retrieves the HTML element with the ID "input-box" and assigns it to the variable inputBox
const inputBox = document.getElementById("input-box");
//Retrieves the HTML element with the ID "list-container" and assigns it to the variable listContainer
const listContainer = document.getElementById("list-container");
function addTask(){
    //Checks if the value of the inputBox is empty. If so, shows an alert indicating that something must be written
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        //If not empty, creates a new list item (li) and sets its innerHTML to the value of inputBox
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        //Appends (pridodaje) the new list item to the listContainer
        listContainer.appendChild(li);
        //Creates a new span element (span) and sets its innerHTML to the multiplication sign (×) 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //Appends the span to the newly created list item (li)
        li.appendChild(span); 
    } 
    //Clears the input box value.
    inputBox.value = "";
    //Calls the saveData function
    saveData();
}

//Adds a click event listener to the listContainer
listContainer.addEventListener("click", function(e){
    //Checks if the clicked element (e.target) has the tag name "LI". If true, toggles the "checked" class on the clicked list item
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //saving data
        saveData();
    }
    //If the clicked element has the tag name "SPAN", removes the parent element (the list item) from the listContainer.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //saving data
        saveData();
    }
}, false);

function saveData(){
    //Stores the HTML content of the listContainer in the local storage under the key "data" using localStorage.setItem
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    //Retrieves the stored data from local storage using localStorage.getItem("data") and sets the HTML content of the listContainer to that stored data
    listContainer.innerHTML = localStorage.getItem("data");
}
//Calls the showTask function, which populates the listContainer with the stored data when the page is loaded
showTask();
