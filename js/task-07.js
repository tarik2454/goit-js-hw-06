const fontSizeControlInput = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', onInputChange);

function onInputChange({ target: { value } }) {
  textChange.style.fontSize = `${value}px`;
}
