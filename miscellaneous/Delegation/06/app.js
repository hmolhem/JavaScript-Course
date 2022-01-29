document.getElementById('buttonId')
    .addEventListener('click', () => console.log('Clicked!'));

const buttons = document.getElementsByClassName('buttonClass');
for (const button of buttons) {
    button.addEventListener('click', () => console.log('Clicked!'));
}


document.getElementById('buttons')
.addEventListener('click', event => { // Step 2
  if (event.target.className === 'buttonClass') { // Step 3
    console.log('Click!');
  }
});