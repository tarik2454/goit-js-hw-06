'use strict';

const validationInput = document.querySelector('#validation-input');
const lengthSymbol = document.querySelector('[data-length="6"]');

validationInput.addEventListener('blur', onChangeBorderColor);

function onChangeBorderColor(event) {
  if (event.currentTarget.value.length == lengthSymbol.dataset.length) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}

//* ---- Second option
// const textInput = document.querySelector('#validation-input');

// textInput.addEventListener('blur', event => {
//   if (event.target.value.length == textInput.getAttribute('data-length')) {
//     textInput.classList.add('valid');
//     if (textInput.classList.contains('invalid')) {
//       textInput.classList.remove('invalid');
//     }
//   } else {
//     if (textInput.classList.contains('valid')) {
//       textInput.classList.remove('valid');
//     }
//     textInput.classList.add('invalid');
//   }
// });
