/*
    validation.js
    Code written by Reynaldo Moros Spoy for course project use.
    This file contains the validation library functions for the visitor form.
*/

const stateAbbreviations = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
    "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
    "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
    "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];

const zipRegex = /^\d{5}(-\d{4})?$/;
const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setElementValidity(fieldId, valid, message) {
    const field = document.getElementById(fieldId);

    if (!field) {
        return false;
    }

    field.classList.add("was-validated");
    field.setCustomValidity(valid ? "" : message);

    const errorDiv = field.parentElement.querySelector(".errorMsg");
    if (errorDiv) {
        errorDiv.textContent = valid ? "" : message;
    }

    return valid;
}

function checkRequired(fieldId, requiredMessage) {
    const field = document.getElementById(fieldId);

    if (!field) {
        return false;
    }

    const value = field.value.trim();
    const isValid = value !== "";

    return setElementValidity(fieldId, isValid, requiredMessage);
}

function checkFormat(fieldId, badFormatMessage, regex) {
    const field = document.getElementById(fieldId);

    if (!field) {
        return false;
    }

    const value = field.value.trim();
    const isValid = regex.test(value);

    return setElementValidity(fieldId, isValid, badFormatMessage);
}

function validateState(fieldId, invalidMessage) {
    const field = document.getElementById(fieldId);

    if (!field) {
        return false;
    }

    const value = field.value.trim().toUpperCase();
    field.value = value;

    const isValid = stateAbbreviations.includes(value);
    return setElementValidity(fieldId, isValid, invalidMessage);
}

function validateCheckboxGroup() {
    const checkboxes = document.querySelectorAll('input[name="contactSource"]');
    const errorDiv = document.getElementById("checkboxError");
    let oneChecked = false;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            oneChecked = true;
        }
    });

    if (oneChecked) {
        errorDiv.textContent = "";
        return true;
    }

    errorDiv.textContent = "Please select at least one option.";
    return false;
}

function validateField(fieldId) {
    switch (fieldId) {
        case "firstName":
            return checkRequired("firstName", "First name is required.");

        case "lastName":
            return checkRequired("lastName", "Last name is required.");

        case "address":
            return checkRequired("address", "Address is required.");

        case "city":
            return checkRequired("city", "City is required.");

        case "state":
            if (!checkRequired("state", "State is required.")) {
                return false;
            }
            return validateState("state", "Enter a valid 2-letter state.");

        case "zip":
            if (!checkRequired("zip", "Zip code is required.")) {
                return false;
            }
            return checkFormat("zip", "Enter a valid zip code.", zipRegex);

        case "phone":
            if (!checkRequired("phone", "Cell phone is required.")) {
                return false;
            }
            return checkFormat("phone", "Enter a valid phone number.", phoneRegex);

        case "email":
            if (!checkRequired("email", "Email is required.")) {
                return false;
            }
            return checkFormat("email", "Enter a valid email address.", emailRegex);

        case "findPage":
            return checkRequired("findPage", "Please choose how you found the page.");

        default:
            return true;
    }
}

function validateForm() {
    let isValid = true;

    const fieldIds = [
        "firstName",
        "lastName",
        "address",
        "city",
        "state",
        "zip",
        "phone",
        "email",
        "findPage"
    ];

    fieldIds.forEach(function (fieldId) {
        if (!validateField(fieldId)) {
            isValid = false;
        }
    });

    if (!validateCheckboxGroup()) {
        isValid = false;
    }

    return isValid;
}

function initValidation(formSelector) {
    const form = document.querySelector(formSelector);

    if (!form) {
        return;
    }

    const trackedFields = form.querySelectorAll(".track-validation");

    trackedFields.forEach(function (field) {
        field.addEventListener("change", function () {
            validateField(field.id);
        });
    });

    const groupCheckboxes = document.querySelectorAll('input[name="contactSource"]');
    groupCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", validateCheckboxGroup);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const formIsValid = validateForm();

        if (formIsValid && form.checkValidity()) {
            document.getElementById("formArea").style.display = "none";
            document.getElementById("thankYouMessage").classList.add("show");
        }
    });
}
