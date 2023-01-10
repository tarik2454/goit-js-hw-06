'use strict';

const changeColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('span.color');

changeColorBtn.addEventListener('click', onTargetButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onTargetButtonClick() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
