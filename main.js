const form = document.getElementById("visitorForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const zip = document.getElementById("zip");
const state = document.getElementById("state");
const visitReason = document.getElementById("visitReason");
const successMessage = document.getElementById("successMessage");
const clearBtn = document.getElementById("clearBtn");

function checkField(input, validator, errorMessage) {
  if (!validator(input.value)) {
    showError(input, errorMessage);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

fullName.addEventListener("input", () => {
  checkField(fullName, validateName, "Name must be at least 3 characters.");
});

email.addEventListener("input", () => {
  checkField(email, validateEmail, "Enter a valid email address.");
});

phone.addEventListener("input", () => {
  checkField(phone, validatePhone, "Enter a valid phone number.");
});

zip.addEventListener("input", () => {
  checkField(zip, validateZip, "ZIP code must be 5 digits.");
});

state.addEventListener("change", () => {
  checkField(state, validateState, "Please select a state.");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isNameValid = checkField(fullName, validateName, "Name must be at least 3 characters.");
  const isEmailValid = checkField(email, validateEmail, "Enter a valid email address.");
  const isPhoneValid = checkField(phone, validatePhone, "Enter a valid phone number.");
  const isZipValid = checkField(zip, validateZip, "ZIP code must be 5 digits.");
  const isStateValid = checkField(state, validateState, "Please select a state.");

  if (isNameValid && isEmailValid && isPhoneValid && isZipValid && isStateValid) {
    successMessage.textContent = "Form submitted successfully.";
    form.reset();

    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach(field => {
      field.classList.remove("valid");
      field.classList.remove("invalid");
    });
  } else {
    successMessage.textContent = "";
  }
});

clearBtn.addEventListener("click", function () {
  successMessage.textContent = "";
  const fields = form.querySelectorAll("input, select, textarea");
  const messages = form.querySelectorAll(".error-message");

  fields.forEach(field => {
    field.classList.remove("valid");
    field.classList.remove("invalid");
  });

  messages.forEach(message => {
    message.textContent = "";
  });
});
