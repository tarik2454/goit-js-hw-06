const categoriesList = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelector('ul').children.length}`);
});
