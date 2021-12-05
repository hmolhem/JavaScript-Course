var maxCounter = 10;
var countInterval;
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
var btnReset = document.getElementById('reset');
let txt = document.getElementsByTagName('p')[0];


let onloadInit = function(){
    btnStop.disabled = true;
    btnReset.disabled= true;
    
    let portionTimeArraynumbers = divideNumbertoMinuteAndSecond(maxCounter);
    txt.innerHTML = portionTimeArraynumbers[0] + ":" + portionTimeArraynumbers[1];
    document.getElementById("progress").value = maxCounter;
    document.getElementById("progress").max = maxCounter;
};


btnStart.onclick = () =>{
        countInterval = setInterval(function(){
        Cookies.set('currentCount',maxCounter);
        portionTimeArray = divideNumbertoMinuteAndSecond(maxCounter);
        txt.innerHTML = portionTimeArray[0] + ":" + portionTimeArray[1];
        maxCounter--;
        if (maxCounter == 0){
            clearInterval(countInterval);
        }
    },1000);
    Cookies.set('state','started');
    document.getElementById("progress").value = maxCounter;
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
    console.log(maxCounter);
};

btnReset.onclick = () =>{
    clearInterval(countInterval);

    let portionTimeArray = divideNumbertoMinuteAndSecond(maxCounter);
    txt.innerHTML = portionTimeArray[0] + ":" + portionTimeArray[1];
    
    document.getElementById("progress").value = maxCounter;
    document.getElementById("progress").max = maxCounter;    

    Cookies.set('newNumber',maxCounter);
    Cookies.set('state','stoped');

    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
};

let divideNumbertoMinuteAndSecond = function(number){
    let mitutePart = Math.floor(number / 60).toString();
    let secondPart = (number % 60).toString();
    mitutePart = (mitutePart.length == 1) ? "0".concat(mitutePart): mitutePart;
    secondPart = (secondPart.length == 1) ? "0".concat(secondPart): secondPart;
    return [mitutePart, secondPart ];
};


let isEqual2Number = () =>{
    return (timeleft == myNumber) ? true : false;
};