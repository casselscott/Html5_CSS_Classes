document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (validateForm(name, email, message)) {
            confirmationMessage.classList.remove('hidden');
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
S