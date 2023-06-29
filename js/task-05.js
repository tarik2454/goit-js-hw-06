const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange({ target: { value } }) {
  const text = (nameOutput.textContent = 'Anonymous');

  nameOutput.textContent = value || text;
}
