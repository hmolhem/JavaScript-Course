let x = 10;
const y =20;
let variable = document.getElementById('variable');
let constant = document.getElementById('const');
let btnSubmit = document.getElementById('submit');

// document.getElementsByClassName('var')[0].style.fontSize = 'Xx-Large';
// document.getElementsByClassName('const')[0].style.fontSize = 'Xx-Large';
// document.getElementsByClassName('message')[0].style.fontSize = 'Xx-Large';

btnSubmit.onclick = ()=>{
    
    try {
        x = Number(variable.value);
        y = Number(constant.value);
        throw "Error occurred";
    } catch (error) {
        document.getElementsByClassName('message')[0].innerText = error;
    }
};