'use strict';

const textInput = document.querySelector('#name-input[placeholder]');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', changeName);

function changeName(event) {
  textOutput.textContent = event.currentTarget.value;
}
