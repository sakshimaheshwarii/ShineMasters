document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_email: document.getElementById('email').value,
        message_html: document.getElementById('message').value
    })
    .then(function(response) {
        alert('Your query was sent successfully!');
    }, function(error) {
        alert('Failed to send the query. Please try again.');
    });
});
