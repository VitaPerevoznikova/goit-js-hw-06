"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const newIngredients = ["Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments"];

const markup = newIngredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
  
  ingredientsList.appendChild(markup);

  console.log(markup);

