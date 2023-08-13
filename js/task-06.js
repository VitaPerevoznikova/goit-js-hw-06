"use strict";
const validationInput = document.getElementById("validation-input");

  validationInput.addEventListener("blur", () => {
    const desiredLength = Number(validationInput.getAttribute("data-length"));
    const inputValue = validationInput.value.trim();

    if (inputValue.length === desiredLength) {
      validationInput.classList.add("valid");
      validationInput.classList.remove("invalid");
    } else {
      validationInput.classList.remove("valid");
      validationInput.classList.add("invalid");
    }
  });
