// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = 'rgb(100, 150, 200)';
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
   // Implement the function to reset background color
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`;
  const colorMap = { 'r': 'red', 'g': 'green', 'b': 'blue', 'y': 'yellow', 'p': 'purple' };
  const key = event.key.toLowerCase();
  if (colorMap[key]) {
    document.body.style.backgroundColor = colorMap[key];
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const inputValue = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = `You typed: ${inputValue}`;
  if (inputValue) {
    document.body.style.backgroundColor = inputValue;
  }
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  // Additional event listeners for dynamic interactions
  document
    .getElementById('changeColorButton')
    .addEventListener('mouseenter', () => {
      document.body.style.cursor = 'pointer';
    })

  document
    .getElementById('changeColorButton')
    .addEventListener('mouseleave', () => {
      document.body.style.cursor = 'default';
    })

  document
    .getElementById('textInput')
    .addEventListener('focus', () => {
      document.body.style.border = '2px solid blue';
    })

  document
    .getElementById('textInput')
    .addEventListener('blur', () => {
      document.body.style.border = 'none';
    })
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
