class ToDo {
    constructor() {
        this.form = document.querySelector('#task-form');
        this.taskInput = document.querySelector('#task');
        this.filter = document.querySelector('#filter');
        this.taskList = document.querySelector('.list-group');
        this.clearBtn = document.querySelector('.clear-tasks');
    }

    loadEvents() {
        // DOM Load event
        document.addEventListener('DOMContentLoaded', this.getTasks);

        // Add task event
        this.form.addEventListener('submit', this.addTask);
        
        // Remove task event
        this.taskList.addEventListener('click', this.removeTask);

        // Clear task
        this.clearBtn.addEventListener('click', this.clearTask);

        // Filter task
        this.filter.addEventListener('keyup', this.filterTask);
    }

    getTasks() {
        let tasks;
        let flag = localStorage.getItem('tasks') === null;
        if (flag) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        if (!flag) {
            tasks.forEach(function (task) {
                // Create li element
                const li = document.createElement('li');
                // Add class
                li.className = 'list-group-item d-flex align-items-center';
                // Create text node and append to li
                li.appendChild(document.createTextNode(task));
                // Create i element
                const i = document.createElement('i');
                // Add class
                i.className = 'fas fa-times text-danger mr-auto delete-item';
                // Append the i to li
                li.appendChild(i);
                // Append li to ul
                this.taskList.appendChild(li);
            });
        }
    }

    // Add task
    addTask(e) {

        let flag = this.taskInput.value === '';
        console.log(flag);

        // if (flag) {
        //     alert('First enter the task and then click Add task');
        // } else {
        //     // Create li element
        //     const li = document.createElement('li');
        //     // Add class
        //     li.className = 'list-group-item d-flex align-items-center';
        //     // Create text node and append to li
        //     li.appendChild(document.createTextNode(this.taskInput.value));
        //     // Create i element
        //     const i = document.createElement('i');
        //     // Add class
        //     i.className = 'fas fa-times text-danger mr-auto delete-item';
        //     // Append the i to li
        //     li.appendChild(i);

        //     // Append li to ul
        //     taskList.appendChild(li);

        //     // Store in LS
        //     storeTaskInLocalStorage(this.taskInput.value);

        //     // Clear input
        //     taskInput.value = '';

        //     e.preventDefault();

        // }
    }

    // Store Task
    storeTaskInLocalStorage(task) {
        // console.log(task);

        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task
    removeTask(e) {

        if (e.target.classList.contains('delete-item')) {
            if (confirm('Are you sure?')) {
                e.target.parentElement.remove();
                // Remove from LS
                removeTaskFromLocalStorage(e.target.parentElement);
            }
        }

    }

    //  Remove from LS
    removeTaskFromLocalStorage(taskItem) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function (task, index) {
            if (taskItem.textContent === task) {
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Clear task
    clearTask() {
        taskList.innerHTML = '';
        // Clear from LS
        clearTasksFromLocalStorage();
    }


    // Clear Tasks from LS
    clearTasksFromLocalStorage() {
        localStorage.clear();
    }

    // Filter task
    filterTask(e) {
        const text = e.target.value.toLowerCase();
        // console.log(text);

        document.querySelectorAll('.list-group-item').forEach(function (task) {
            // console.log(task);
            const item = task.textContent;
            // console.log(item);

            if (item.toLowerCase().indexOf(text) != -1) {
                task.classList.add("d-flex");
            } else {
                task.classList.remove("d-flex");
                task.style.display = 'none';
            }

        });

    }



}

const tasks = new ToDo();
// console.log(tasks);
tasks.loadEvents();