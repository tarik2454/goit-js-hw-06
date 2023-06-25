const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur({ target }) {
  console.dir(typeof target.dataset.length);
  if (parseInt(target.dataset.length) === target.value.length) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
}
