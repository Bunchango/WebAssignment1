function submitForm() {
    // The function for submitting the form can be left empty or can perform specific actions if needed.
    // For example, you can send the form data to a server using AJAX or perform client-side validation before submitting.

    // Here's an example of showing an alert when the form is submitted:
    alert('Form submitted successfully.');
  }

  function resetForm() {
    // Resetting the form by setting all input fields to their default values.

    // Get all input elements within the form.
    const inputElements = document.querySelectorAll('.form-container input');

    // Loop through each input element and reset its value to an empty string.
    inputElements.forEach((input) => {
      input.value = '';
    });

    const textArea = document.querySelectorAll('.form-container textarea');
    textArea.forEach((text) => {
      text.value = '';
    });

    // Reset the selected option in the dropdown.
    const dropdown = document.getElementById('purpose');
    dropdown.selectedIndex = 0;

    // Reset the radio buttons to their default values.
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