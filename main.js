document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let visitors = document.getElementById("visitors").value.trim();
    let month = document.getElementById("month").value;
    let park = document.getElementById("park").value;
    let deal = document.getElementById("deal").value;

    let message = validateForm(name, email, phone, visitors, month, park, deal);
    let messageBox = document.getElementById("message");

    if (message !== "") {
        messageBox.innerText = message;
        messageBox.style.color = "red";
    } else {
        messageBox.innerText = "Success! Your discount request has been submitted.";
        messageBox.style.color = "green";
        document.getElementById("visitorForm").reset();
    }
});
