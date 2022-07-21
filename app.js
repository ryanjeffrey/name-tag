// Name tag input
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

// Colors
const gradient = document.getElementById('gradient');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');

const bgColor = document.getElementById('name-tag');


gradient.addEventListener('click', () => {
    bgColor.style.background =
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
    updateButton.style.background =
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
});

red.addEventListener('click', () => {
    bgColor.style.background = '#FF0000';
    updateButton.style.background = '#FF0000';
});

orange.addEventListener('click', () => {
    bgColor.style.background = '#FF7F00';
    updateButton.style.background = '#FF7F00';
    
});

yellow.addEventListener('click', () => {
    bgColor.style.background = '#FFFF00';
    updateButton.style.background = '#FFFF00';
});

green.addEventListener('click', () => {
    bgColor.style.background = '#00FF00';
    updateButton.style.background = '#00FF00';
});

blue.addEventListener('click', () => {
    bgColor.style.background = '#0000FF';
    updateButton.style.background = '#0000FF';
});

indigo.addEventListener('click', () => {
    bgColor.style.background = '#4B0082';
    updateButton.style.background = '#4B0082';
});

violet.addEventListener('click', () => {
    bgColor.style.background = '#9400D3';
    updateButton.style.background = '#9400D3';
});