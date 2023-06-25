const fontSizeControlInput = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', onInputChange);

function onInputChange({ target }) {
  textChange.style.fontSize = `${target.value}px`;
}
