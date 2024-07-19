document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === "") return; // If input is empty, do nothing

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = ""; // Clear input field after adding task

        // Add event listener to delete button
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
    });
});
