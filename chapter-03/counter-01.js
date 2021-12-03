let counter = 1;
let countInterval;
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let txt = document.getElementsByTagName('p')[0];


var init = function(){
    btnStop.disabled = true;
    btnReset.disabled= true;
    // txt.innerHTML = Number(document.cookie.substr(6,2));
    txt.innerHTML = Number(Cookies.get('counter')) ; //use of js Cookies
    
    let preiviousState = Cookies.get('state');
    if (preiviousState == 'started'){
        btnStart.onclick();
    }
};

btnStart.onclick = () =>{
    countInterval = setInterval(function(){
        txt.innerHTML = counter++;
        // document.cookie = "counter=".concat(counter);
        Cookies.set('counter','10'); //use of js-cookie
    },1000);
    document.cookie = counter;
    Cookies.set('state','started');
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = false;
};
btnStop.onclick = () =>{
    clearInterval(countInterval);
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
    Cookies.set('state','stoped');

};
btnReset.onclick = () =>{
    Cookies.set('counter','stoped');
    clearInterval(countInterval);
    txt.innerHTML = 0;
    counter = 0;
    Cookies.set('counter','0');
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnStart.disabled = false;
};
