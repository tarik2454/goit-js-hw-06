'use strict';

const inputNumEl = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();

    elementsToAdd.push(div);
  }

  return elementsToAdd;
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputNumEl.value = '';
};

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumEl.value);
  boxesEl.append(...boxesToAdd);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
