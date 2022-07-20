// make a variable for the name div, input, and button
const nameDiv = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');

// console.log(nameDiv, nameInput, updateButton);

// add an event listener to the button - "listen for the click"
updateButton.addEventListener('click', () => {
    // get the value of the input
    const inputText = nameInput.value;
    // replace the name div text content with the input
    nameDiv.textContent = inputText;
});