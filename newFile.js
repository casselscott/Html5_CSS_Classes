document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (validateForm(name, email, feedback)) {
      thankYouMessage.classList.remove("hidden");
    }
  });
});
