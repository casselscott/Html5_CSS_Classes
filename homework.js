document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('homeworkForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentName = document.getElementById('studentName').value.trim();
        const className = document.getElementById('class').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const description = document.getElementById('description').value.trim();
        const dueDate = document.getElementById('dueDate').value.trim();

        if (validateForm(studentName, className, subject, description, dueDate)) {
            confirmationMessage.classList.remove('hidden');
            form.reset();
        }
    });

    function validateForm(studentName, className, subject, description, dueDate) {
        if (studentName === '' || className === '' || subject === '' || description === '' || dueDate === '') {
            alert('All fields are required.');
            return false;
        }

        if (!validateDate(dueDate)) {
            alert('Please enter a valid due date.');
            return false;
        }

        return true;
    }

    function validateDate(date) {
        const today = new Date().toISOString().split('T')[0];
        return date >= today;
    }
});
