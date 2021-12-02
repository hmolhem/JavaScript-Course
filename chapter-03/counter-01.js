let counter = 1;
let countInterval;
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let txt = document.getElementsByTagName('p')[0];


var init = function(){
    btnStop.disabled = true;
    btnReset.disabled= true;
};

btnStart.onclick = () =>{
    countInterval = setInterval(function(){
        txt.innerHTML = counter++;
    },1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = false;
};
btnStop.onclick = () =>{
    clearInterval(countInterval);
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
};
btnReset.onclick = () =>{

};
