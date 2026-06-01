// Save data (given name for protagonist) to localStorage
function saveData() {
    const data = document.getElementById('userInput').value;
    localStorage.setItem('mySavedItem', data);
}

// Retrieve data for usage in other pages 
let savedData = localStorage.getItem('mySavedItem');

// THE FOLLOWING IS USED TO DISPLAY THE NEXT PAGES' TEXT 

document.getElementById('morning').innerText = "Good morning, " + savedData + "! Only a second has passed since you've woken up, but for some reason you can't seem to shake off this intense craving for some chips from the store...";

document.getElementById('help').innerText = "Oh, " + savedData + "! There you are! I was wondering where you were. You usually come at around this time. How do you plan on helping out with this?";