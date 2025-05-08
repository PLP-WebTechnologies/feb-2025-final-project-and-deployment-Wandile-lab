document.getElementById("contact-form").addEventListener("submit", function (e) {
    const name = document.querySelector('input[name="fullName"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Prevent form submission
    if (!name || !email || !message) {
        e.preventDefault(); 
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Thank you for reaching out! Your message has been sent.");
    }
});
