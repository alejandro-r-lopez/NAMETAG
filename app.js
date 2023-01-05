/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
const displayName = document.getElementById('nameDisplay');
const displayBtn = document.getElementById('submit');
const nameInput = document.getElementById('name-input');

nameInput.value = 'Your Name Here';

displayBtn.addEventListener('click', () => {
    displayName.textContent = nameInput.value;
    nameInput.value = 'Your Name Here';
});

nameInput.addEventListener('click', () => {
    nameInput.value = '';
});
