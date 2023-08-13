"use strict";

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener("click", () => {
counterValue -= 1;
 updateValue();
});

incrementButton.addEventListener("click", () => {
counterValue += 1;
updateValue();
});

function updateValue() {
    valueSpan.textContent = counterValue;
};
