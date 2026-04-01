function validateForm(name, email, phone, visitors, month, park, deal) {
    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        visitors === "" ||
        month === "" ||
        park === "" ||
        deal === ""
    ) {
        return "Please fill out all fields.";
    }

    if (!email.includes("@") || !email.includes(".")) {
        return "Please enter a valid email address.";
    }

    if (isNaN(visitors) || Number(visitors) <= 0) {
        return "Please enter a valid number of visitors.";
    }

    if (phone.length < 7) {
        return "Please enter a valid phone number.";
    }

    return "";
}
