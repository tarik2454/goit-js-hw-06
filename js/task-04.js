'use strict';

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);

function onIncrementClick() {
  const counter = (counterValue += 1);
  valueEl.textContent = counter;
}

function onDecrementClick() {
  const counter = (counterValue -= 1);
  valueEl.textContent = counter;
}
