'use strict';

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const ingredientsParrent = document.querySelector('#ingredients');

// const makeListIngredientsEl = ingredients.map(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.className = 'item';
//   liEl.textContent = ingredient;

//   return liEl;
// });

// ingredientsParrent.append(...makeListIngredientsEl);

//* ---- Second option (forEach)
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsParrent = document.querySelector('#ingredients');

const liArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  liArray.push(item);
});

ingredientsParrent.append(...liArray);
