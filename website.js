// Example JavaScript code (optional)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        console.log("Form Data:", formData);
        // Additional logic for form submission
    });
});
