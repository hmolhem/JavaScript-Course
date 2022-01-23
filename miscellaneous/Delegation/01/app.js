let home = document.getElementById('home');
let dashboard = document.getElementById('dashboard');
let report = document.getElementById('report');

home.addEventListener('click', homeEventHandler);
dashboard.addEventListener('click',dashboardEventHandler);
report.addEventListener('click',reportEventHandler);

function homeEventHandler() {
    console.log('Home menu item was clicked');
}
function dashboardEventHandler () {
    console.log('Dashboard menu item was clicked');
}
function reportEventHandler() {
    console.log('Report menu item was clicked');
}

