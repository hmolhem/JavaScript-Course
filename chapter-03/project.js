var maxCounter = 120;
const saveMaxCounter = maxCounter;
var countInterval;
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
var btnReset = document.getElementById('reset');
var txt = document.getElementsByTagName('p')[0];


let onloadInit = function(){
    
    btnStop.disabled = true;
    btnReset.disabled= true;
    
    let portionTimeArraynumbers = divideNumbertoMinuteAndSecond(maxCounter);
    txt.innerHTML = portionTimeArraynumbers[0] + ":" + portionTimeArraynumbers[1];
    document.getElementById("progress").value = maxCounter;
    document.getElementById("progress").max = maxCounter;
};

let divideNumbertoMinuteAndSecond = function(number){
    if (number<0){
        clearInterval(countInterval);
        btnReset.onclick();
    }else{
        let mitutePart = Math.floor(number / 60).toString();
        let secondPart = (number % 60).toString();
        mitutePart = (mitutePart.length == 1) ? "0".concat(mitutePart): mitutePart;
        secondPart = (secondPart.length == 1) ? "0".concat(secondPart): secondPart;
        return [mitutePart, secondPart ];
    }
};

btnStart.onclick = () =>{
        countInterval = setInterval(function(){
        maxCounter--;
        Cookies.set('currentCount',maxCounter);
        portionTimeArray = divideNumbertoMinuteAndSecond(maxCounter);
        txt.innerHTML = portionTimeArray[0] + ":" + portionTimeArray[1];
        document.getElementById("progress").value = maxCounter;
        if (maxCounter == 0){
            clearInterval(countInterval);
            btnReset.onclick();
        }
    },1000);
    Cookies.set('state','started');
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = false;
};

btnStop.onclick = () =>{
    clearInterval(countInterval);
    maxCounter = Number(Cookies.get('currentCount'));
    portionTimeArray = divideNumbertoMinuteAndSecond(maxCounter);
    txt.innerHTML = portionTimeArray[0] + ":" + portionTimeArray[1];
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
};

btnReset.onclick = () =>{
    clearInterval(countInterval);
    let diff= saveMaxCounter - maxCounter;
    maxCounter += diff;
    let portionTimeArray = divideNumbertoMinuteAndSecond(maxCounter);
    txt.innerHTML = portionTimeArray[0] + ":" + portionTimeArray[1];
    
    document.getElementById("progress").value = maxCounter;
    document.getElementById("progress").max = maxCounter;    

    Cookies.set('currentCount',maxCounter);
    Cookies.set('state','stoped');

    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;


};

