var counter = 0;
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
const txt = document.getElementsByTagName('p')[0];


var init = function(){
    btnStop.disabled = true;
    btnReset.disabled= true;
};

btnStart.onclick = () =>{
    txt.innerHTML = counter++;
};
