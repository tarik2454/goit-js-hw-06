const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const {
    target: { classList, dataset, value },
  } = event;

  if (parseInt(dataset.length) === value.length) {
    classList.add('valid');
    classList.remove('invalid');
  } else {
    classList.add('invalid');
    classList.remove('valid');
  }
}
