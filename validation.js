function validateForm(name, email, phone, visitors, month, park, deal) {
    if (name === "" || email === "" || phone === "" || visitors === "" || month === "" || park === "" || deal === "") {
        return "Please fill out all fields.";
    }

    if (!email.includes("@")) {
        return "Enter a valid email.";
    }

    if (isNaN(visitors) || visitors <= 0) {
        return "Enter a valid number of visitors.";
    }

    return "";
}
