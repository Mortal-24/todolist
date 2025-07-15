document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('todo-btn');
    const taskList = document.getElementById('taskList');
    const clear_btn = document.getElementById('clear-btn');

    // Get current date and time string
    function get_time() {
        const today = new Date();
        return today.toLocaleString(); // e.g., "7/13/2025, 7:00:00 PM"
    }

    // Add Task
    addTaskBtn.addEventListener('click', function() {
        const tasktext = input.value.trim();

        if (tasktext === '') {
            alert('Please enter a task');
            return;
        }

        // Create list item container
        const li = document.createElement('li');
        li.classList.add('task-item'); // for optional styling

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = tasktext;

        // Timestamp
        const timeSpan = document.createElement('span');
        timeSpan.textContent = get_time();
        timeSpan.style.fontSize = '12px';
        timeSpan.style.color = 'gray';
        timeSpan.style.display = 'block';

        // Combine
        li.appendChild(taskSpan);
        li.appendChild(timeSpan);

        // Mark complete on click
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        taskList.appendChild(li);
        input.value = '';
    });

    // Clear all tasks
    clear_btn.addEventListener('click', function() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    });
});
