/* RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 1
Author: Dong Manh Duc
ID: 3978290 
Acknowledgement: https://stackoverflow.com/ */

function submitForm() {
    alert('Form submitted successfully.');
  }

  function resetForm() {
    const inputElements = document.querySelectorAll('.form-container input');

    inputElements.forEach((input) => {
      input.value = '';
    });

    const textArea = document.querySelectorAll('.form-container textarea');
    textArea.forEach((text) => {
      text.value = '';
    });

    const dropdown = document.getElementById('purpose');
    dropdown.selectedIndex = 0;

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
      if (radio.defaultChecked) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });

    const checkboxButtons = document.querySelectorAll('input[type="checkbox"]');
    checkboxButtons.forEach((checkbox) => {
      if (checkbox.defaultChecked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  }