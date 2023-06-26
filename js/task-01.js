const categoriesList = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].map(categorie => {
  console.log(`Category: ${categorie.querySelector('h2').textContent}`);
  console.log(`Elements: ${categorie.querySelector('ul').children.length}`);
});
