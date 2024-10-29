// Display current time
function showCurrentTime() {
    const timeDisplay = document.getElementById("current-time");
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    timeDisplay.textContent = `Time: ${timeString}`;
}
setInterval(showCurrentTime, 1000);

// Add task to specific time slot
function addTask(button) {
    const taskInput = button.previousElementSibling;
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.createElement('ul');
        const taskItem = document.createElement('li');
        taskItem.className = "task-item";
        taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">x</button>`;
        
        button.parentElement.appendChild(taskList);
        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear input
    }
}

// Remove task from time slot
function removeTask(button) {
    button.parentElement.remove();
}
