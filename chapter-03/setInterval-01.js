 var x = setInterval(myTimer,1000);

function myTimer() {
    var myTime = new Date();

    var clock = myTime.toLocaleTimeString();
    document.getElementById('clock').innerHTML = clock;
}

const btn = document.getElementById('stop');
var stop = function(){
    clearInterval(x);
};
btn.addEventListener('click',stop);


