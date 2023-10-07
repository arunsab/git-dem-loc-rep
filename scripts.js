// Get a reference to the body element
var body = document.body;

// Function to change the background color
function changeBackgroundColor() {
    body.style.backgroundColor = "blue"; // Change to your desired background color
}

// Attach an event listener to a button or any other element
var button = document.getElementById("changeColorButton"); // Assuming you have a button with id="changeColorButton"
button.addEventListener("click", changeBackgroundColor);

