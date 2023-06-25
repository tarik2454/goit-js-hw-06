const inputNumEl = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesList = document.querySelector('div#boxes');

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
  boxesList.innerHTML = '';
  inputNumEl.value = '';
};

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumEl.value);
  boxesList.append(...boxesToAdd);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//* ---- second option (map)
// const controls = document.querySelector('#controls');
// const boxesList = document.querySelector('div#boxes');

// const onClickButton = function ({ target }) {
//   const input = target.closest('#controls').firstElementChild;

//   if (target.dataset.create === '') {
//     createBoxes(input.value);
//   }
//   if (target.dataset.destroy === '') {
//     boxesList.innerHTML = '';
//   }
// };

// controls.addEventListener('click', onClickButton);

// const createBoxes = amount => {
//   const arrayOfNumber = Array.from({ length: amount });
//   let width = 30;
//   let height = 30;

//   const newArray = arrayOfNumber.map((value, innex, array) => {
//     const div = document.createElement('div');
//     div.style.cssText = `width: ${(width += 10)}px ; height: ${(height += 10)}px`;
//     div.style.backgroundColor = getRandomHexColor();

//     return div;
//   });

//   boxesList.append(...newArray);
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
