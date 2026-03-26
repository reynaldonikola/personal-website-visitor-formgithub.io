function showError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");

  input.classList.remove("valid");
  input.classList.add("invalid");
  errorDisplay.textContent = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");

  input.classList.remove("invalid");
  input.classList.add("valid");
  errorDisplay.textContent = "";
}

function validateName(name) {
  return name.trim().length >= 3;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

function validatePhone(phone) {
  const regex = /^\d{3}-?\d{3}-?\d{4}$/;
  return regex.test(phone.trim());
}

function validateZip(zip) {
  const regex = /^\d{5}$/;
  return regex.test(zip.trim());
}

function validateState(state) {
  return state !== "";
}
