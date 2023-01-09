'use strict';

const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(function (categorie) {
  console.log(`Category: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.children[1].children.length}`);
});

//* ---- Second option (function)
// const categoriesList = document.querySelectorAll('.item');
// console.log('Number of categories:', categoriesList.length);

// const categoriesShow = categories => {
//   [...categories].map(category =>
//     console.log(`Category: ${category.firstElementChild.textContent}
//     Elements: ${category.children[1].children.length}`)
//   );
// };

// categoriesShow(categoriesList);

//* ---- Third option (function)
// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`);

// const categoriesShow = category => {
//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.children[1].children.length}`);
// };

// const elements = [...categoriesList].map(categoriesShow);
