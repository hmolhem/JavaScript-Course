var cardInfo = (function (){

    var arrayCardInfo = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    
    
    let getCardInfo = function (){
        
        let cardObject = {
            _card_number: 0,
            _card_question: '',
            _card_answer: '',
        };
        
        cardObject._card_number = spanSelector[0].innerHTML;
        cardObject._card_question = spanSelector[1].innerHTML;
        cardObject._card_answer = spanSelector[2].innerHTML;
        
    };
    
    let setCardInfo = function(number, question, answer){
        
        cardObject._card_class_number = number;
        cardObject._card_question = question;
        cardObject._card_answer = answer;
        
        return cardObject;
        
    };
    
    let setClassContainerCard = function( classContainer = 'card-item' ) {
        
        cardObject._card_class_container = classContainer;
        return JSON.stringify(cardObject);
        
    };
    
    let cardSpecification = function(){
        let  div_card_item = document.createElement('div');
             div_card_item.className = 'card-item';
        
        let newSpan_number = document.createElement('span');
            newSpan_number.className = 'number';

        let newSpan_question = document.createElement('span');
            newSpan_question.className = 'question';
            
        let newSpan_answer = document.createElement('span');
            newSpan_answer.className = '.answer';
            newSpan_answer.setAttribute("style","visibility: hidden;");

        let btn_showHide = document.createElement('button');
            btn_showHide.className = 'button btncard showhide';
            // btn_showHide.setAttribute('type','submit');
            btn_showHide.innerHTML = 'show Answer';

        let btn_edit = document.createElement('button');
            btn_edit.className = 'button btncard edit';
            // btn_edit.setAttribute('type','submit');
            btn_edit.innerHTML = 'Edit question';

        let btn_delete = document.createElement('button');
            btn_delete.className = 'button btncard delete';
            // btn_delete.setAttribute('type','submit');
            btn_delete.innerHTML = 'delete question';

        let line = document.createElement('hr');
        

        div_card_item.appendChild(newSpan_number);
        div_card_item.appendChild(line);
        div_card_item.appendChild(newSpan_question);
        div_card_item.appendChild(newSpan_answer);
        
        div_card_item.appendChild(btn_showHide);
        div_card_item.appendChild(btn_edit);
        div_card_item.appendChild(btn_delete);

        return [newSpan_number, newSpan_question,newSpan_answer, div_card_item] ;
        
    };
    
    let createCard = function(number, question, answer){
        
        let [newSpan_number, newSpan_question,newSpan_answer, div_card_item] = cardSpecification();
        
        console.log(newSpan_number,newSpan_question,newSpan_answer);

        newSpan_number.innerHTML = '#'.concat(number);
        newSpan_question.innerHTML = question;
        newSpan_answer.innerHTML = answer;
        
        let div_cards = document.getElementsByClassName('card')[0];

        div_cards.appendChild(div_card_item);
               
    };

    let cardSense = function (){
        let card = document.querySelector('.card-item');
        card.addEventListener("mousemove",()=>{
            console.log('Hello');
        });
    };
    

    let toggle = function () {
        let button = document.querySelector(".showhide");
        button.addEventListener("click",()=>{
            let answer = document.querySelector('.answer');
            let hidden = answer.style.display;
            
            if (hidden) {
                answer.removeAttribute("hidden");
                button.innerText = "Hide Span";
            } else {
                answer.setAttribute("visibility", "hidden");
                button.innerText = "Show Span";
            }

        });
    };



    return {
        getCardInfo: getCardInfo,
        cardSpecification: cardSpecification,
        createCard: createCard,
        cardSense:cardSense,
        toggle:toggle
    };

})();

// console.log(cardInfo.getCardInfo());
// cardInfo.createCard(1,'Q: what color is the sky?','A: Blue');


export default cardInfo;