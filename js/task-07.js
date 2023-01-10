'use strict';

const fontSizeControlInput = document.querySelector('input#font-size-control');
const textOutput = document.querySelector('span#text');

fontSizeControlInput.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  textOutput.style.fontSize = event.currentTarget.value + 'px';
}
