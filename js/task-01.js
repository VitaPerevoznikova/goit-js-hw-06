
const categoriList = document.querySelector('#categories');
const categoriItems = categoriList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriItems.length}`);

categoriItems.forEach(categoryItem => {

const categoryTitle = categoryItem.querySelector('h2').textContent;
console.log(`Category: ${categoryTitle}`);

const elementsOfItem = categoryItem.querySelectorAll('li');
console.log(`Elements: ${elementsOfItem.length}`);
   
});

