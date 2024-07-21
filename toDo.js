document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(taskItem));

        taskActions.appendChild(editBtn);
        taskActions.appendChild(deleteBtn);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function editTask(taskItem, taskContent) {
        const newTaskText = prompt('Edit your task', taskContent.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskContent.textContent = newTaskText.trim();
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
