document.addEventListener('keydown', escapeKey);
function escapeKey(e){
    if (e.key === 'Escape'){
        document.querySelector('h3').innerHTML = 'You press Esc.'
    }
}

document.addEventListener('keydown', actionKey);
function actionKey(e){
    document.querySelector('h1').innerText = e.key;
}



