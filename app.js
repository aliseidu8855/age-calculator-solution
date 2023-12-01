const inputElement4 = document.getElementById("fourDigitInput");
const inputElement2D = document.getElementById("twoDigitInputD");
const inputElement2M = document.getElementById("twoDigitInputM");
const inputButton = document.getElementById("inputButton");
const dayErrorMessage = document.getElementById("dayErrorMessage");
const monthErrorMessage = document.getElementById("monthErrorMessage");
const yearErrorMessage = document.getElementById("yearErrorMessage");

inputElement4.addEventListener("input", function (event) {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
});

inputElement2D.addEventListener("input", function (event) {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});

inputElement2M.addEventListener("input", function (event) {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});

// Check if inputButton is an <img> tag
if (inputButton.tagName.toLowerCase() === "img") {
  inputButton.addEventListener("click", function () {
    // Perform operations when the image is clicked (e.g., calculate age)
    calculateAge();
  });
} else {
  // Handle if the element is not an <img> tag
  console.error("The element with id 'inputButton' is not an <img> tag.");
}

function calculateAge() {
  // Get the input values
  const dayValue = parseInt(inputElement2D.value);
  const monthValue = parseInt(inputElement2M.value);
  const yearValue = parseInt(inputElement4.value);

  if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
    displayError("enter valid date");
    return;
  }
  // Get current date
  const currentDate = new Date();

  // Check if the input date is a valid date
  const inputDate = new Date(yearValue, monthValue - 1, dayValue);
  const isInvalidDate = isNaN(inputDate.getTime());

  if (isInvalidDate) {
    displayError("enter valid date");
    return;
  }
  // Check if the input date is in the future (beyond current date)
  if (inputDate > currentDate) {
    displayError("enter valid date");
    return;
  }

  // Calculate difference in milliseconds between current date and input date
  const ageDifference = currentDate - inputDate;

  // Convert milliseconds to years, months, and days
  const ageDate = new Date(ageDifference);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  // Display the calculated age in the respective span elements
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;

  clearErrorMessages();
  clearErrorStates();
}
function displayError(message) {
  dayErrorMessage.textContent = "";
  monthErrorMessage.textContent = "";
  yearErrorMessage.textContent = "";

  if (!inputElement2D.value.trim()) {
    document.getElementById("error-messages-day").classList.add("error-state");
    dayErrorMessage.textContent = message;
  } else {
    document
      .getElementById("error-messages-day")
      .classList.remove("error-state");
  }

  if (!inputElement2M.value.trim()) {
    document
      .getElementById("error-messages-month")
      .classList.add("error-state");
    monthErrorMessage.textContent = message;
  } else {
    document
      .getElementById("error-messages-month")
      .classList.remove("error-state");
  }

  if (!inputElement4.value.trim()) {
    document.getElementById("error-messages-year").classList.add("error-state");
    yearErrorMessage.textContent = message;
  } else {
    document
      .getElementById("error-messages-year")
      .classList.remove("error-state");
  }
}

function clearErrorMessages() {
  if (document.getElementById("error-messages-day")) {
    document
      .getElementById("error-messages-day")
      .classList.remove("error-state");
    dayErrorMessage.textContent = "";
  }
  if (document.getElementById("error-messages-month")) {
    document
      .getElementById("error-messages-month")
      .classList.remove("error-state");
    monthErrorMessage.textContent = "";
  }
  if (document.getElementById("error-messages-year")) {
    document
      .getElementById("error-messages-year")
      .classList.remove("error-state");
    yearErrorMessage.textContent = "";
  }
}
function clearErrorStates() {
  document.getElementById("error-messages-day").classList.remove("error-state");
  document
    .getElementById("error-messages-month")
    .classList.remove("error-state");
  document
    .getElementById("error-messages-year")
    .classList.remove("error-state");
}
