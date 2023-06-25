const categoriesList = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(categorie => {
  console.log(`Category: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.children[1].children.length}`);
});
