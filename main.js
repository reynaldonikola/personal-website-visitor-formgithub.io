document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let visitors = document.getElementById("visitors").value;
    let month = document.getElementById("month").value;
    let park = document.getElementById("park").value;
    let deal = document.getElementById("deal").value;

    let message = validateForm(name, email, phone, visitors, month, park, deal);

    if (message !== "") {
        document.getElementById("message").innerText = message;
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerText = "Success! Check your email for exclusive deals.";
        document.getElementById("message").style.color = "green";

        document.getElementById("visitorForm").reset();
    }
});
