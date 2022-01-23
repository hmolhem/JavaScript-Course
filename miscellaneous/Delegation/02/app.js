let menu = document.querySelector('#menu');

menu.addEventListener('click', allEventHandler);

function allEventHandler(event) {
    console.log(event.target);
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            console.log(target.closest('li'));
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            console.log(target.closest('li'));
            break;
        case 'report':
            console.log('Report menu item was clicked');
            console.log(target.closest('li'));
            break;
    }
}