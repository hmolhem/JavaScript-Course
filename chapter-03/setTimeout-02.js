var myFuction = function(){
    const timeout = 3000;
    var x = document.getElementsByTagName('h2');
    setTimeout(() => {
        x[0].innerHTML = 'I Love JS';
    }, timeout);
};