let task = {
    formTask: document.querySelector('form'),

    // Add to LocalStorage
    addTask: function (e) {
        const task = document.getElementById("task").value;
        let tasks;
        const flag = localStorage.getItem('tasks') === null;

        flag ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        alert('Task saved');

        e.preventDefault();
    },

    // Display LocalStorage
    display: function() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const flag = localStorage.getItem('tasks') === null;
        if (!flag) {
            tasks.forEach(function (task) {
                console.log(task);
            });
        }
    },

    // Remove Douplicate LocalStorge
    removeDoulicate: function() {
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

task.formTask.addEventListener('submit', task.addTask);
task.display();