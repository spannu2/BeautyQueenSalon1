/********w************
    
    Project 4 Stylesheet
    Name:Sumail Kaur Pannu
    Date:09-08-23
    Description: This is my form.

*********************/

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function(event) {
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      const emailInput = document.getElementById("email");
  
      const phonePattern = /^\d{10}$/;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      let hasError = false;
  
      if (!phonePattern.test(phoneInput.value)) {
        highlightError(phoneInput);
        hasError = true;
      }
  
      if (!emailPattern.test(emailInput.value)) {
        highlightError(emailInput);
        hasError = true;
      }
  
      if (hasError) {
        errorMessage.style.display = "block";
        event.preventDefault();
      }
    });
  
    function highlightError(inputElement) {
      inputElement.classList.add("error");
      inputElement.focus();
    }
  
    const allInputs = form.querySelectorAll("input, textarea");
    allInputs.forEach(function(input) {
      input.addEventListener("focus", function() {
        this.style.backgroundColor = "#f0f0f0";
      });
      input.addEventListener("blur", function() {
        this.style.backgroundColor = "";
      });
    });
  });
  