let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    event.preventDefault();
    console.log('clicked');
});

