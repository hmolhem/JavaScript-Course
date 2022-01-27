data = {
    cardContent: [    
        {
            id:1,
            question:"what color is sky",
            answer:"blue"
        },
        {
            id:2,
            question:"what is the capital city of Iran",
            answer:"Tehran"
        },
        {   
            id:3,
            question:"what is the population of Iran",
            answer:"80M"
        }
    ]
};

const result = document.querySelector('.result');
const dialog = document.querySelector('.dialog');
const openDialog = document.querySelector('#showModalBtn');
const closeButton = document.querySelector('#close');
const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const saveModalButton = document.querySelector('#save');
var  cardBodyArray = document.querySelectorAll('.card-body');

// dialog.addEventListener('close', (event) => {
    //     result.textContent = 'dialog was closed';
    // });

openDialog.addEventListener('click', () => {
  if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      result.textContent = '';
  } else {
    //   result.textContent = 'The dialog API is not supported by this browser';
    alert('The dialog API is not supported by this browser');
  }
});

closeButton.addEventListener('click', () => {
    dialog.close();
});


question.addEventListener('click', event =>{
    console.log(event.target.value);
});
answer.addEventListener('click',(event)=>{
    console.log(event.target.tagName);
});


saveModalButton.addEventListener('click',(event)=>{
    // console.log(event.target.tagName);
    // console.log(question.value);
    // console.log(answer.value);
    // console.log(data.cardContent.length);
    let tempObject = {id:data.cardContent.length+1, 
                        question:question.value,
                        answer: answer.value
                        };

    console.log(tempObject);
    data.cardContent.push(tempObject);

    var template = document.getElementById('template').innerHTML;
    rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;

});

// var template = document.getElementById('template').innerHTML;
// var rendered = Mustache.render(template, data);
// document.getElementById('target').innerHTML = rendered;


// const showAnswer = document.querySelectorAll('#showAnswer');
// showAnswer.addEventListener('mousemove',showHideAnswer);

function showHideAnswer() {
    window.alert('Hello');
}

cardBodyArray.forEach((card,index) => {

    let  ps = card.querySelectorAll('p');
    card.addEventListener('click', event =>{

        let  flag = event.target.id;
        switch (flag) {
            case "showAnswer":
                // console.log(`You click on Show Answer with ${index}`);
                // showHideAnswer(); 
                if (ps[1].style.visibility === 'hidden'){
                    ps[1].style.visibility = 'visible';
                }else{
                    ps[1].style.visibility = 'hidden';
                }  
                break;
            case "editQuestion":
                // console.log(`You click on Edit Equation with ${index}`);
                // alert(ps[0].innerText);
                // alert(ps[1].innerText);
                
                document.getElementById('question').value = ps[0].innerText.slice(2);
                document.getElementById('answer').value = ps[1].innerText.slice(2);
                dialog.showModal();
                // push to array

                break;
            case "deleteQuestion":
                console.log(`You click on Delete Equation with ${index}`);
                break;
                default:
                    break;
                }
    });
});
