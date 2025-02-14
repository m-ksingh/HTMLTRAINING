document.getElementById("task-form").addEventListener("submit", function (event) {
    let title = document.getElementById("task-title").value;
    if (title.trim() === "") {
        alert("Task title cannot be empty!");
        event.preventDefault();
    }
});