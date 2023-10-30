function openProject(url) {
    window.open(url, '_blank');
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally.

    // You can add code here to collect form data and process it, e.g., send an email.

    // Display a success message or reset the form as needed.
    alert('Your message has been sent!');
    this.reset(); // Reset the form.
});