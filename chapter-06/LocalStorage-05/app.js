// Object.create()
const addMethods = {
    addTask(e) {
        // Add to LocalStorage
        const task = document.getElementById("task").value;
        let tasks;
        const flag = localStorage.getItem('tasks') === null;

        flag ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        alert('Task saved');

        e.preventDefault();
    },

    display() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const flag = localStorage.getItem('tasks') === null;
        if (!flag) {
            tasks.forEach(function (task) {
                console.log(task);
            });
        }
    },

    removeDoulicate() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const flag = localStorage.getItem('tasks') === null;
        if (!flag) {
            let uniqueTasks = [];
            tasks.forEach((c) => {
                if (!uniqueTasks.includes(c)) {
                    uniqueTasks.push(c);
                }
                localStorage.setItem('tasks', JSON.stringify(uniqueTasks));
            });
        }
    }
};


function toDo() {
    let doTask = Object.create(addMethods);
    doTask.formTask = document.querySelector('form');
    return doTask;
}

const task = toDo();
task.formTask.addEventListener('submit', task.addTask);
task.display();