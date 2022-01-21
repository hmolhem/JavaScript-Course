import cardInfo from '../Card/Card.js';
var boxModule = (function (){
    
    let hideCreateBox = function(){
        const closeButton = document.querySelector('.close');
        closeButton.addEventListener("click", hideBox);
    };

    let hideBox = function () {
        let box = document.querySelector('.box');
        box.setAttribute("style","visibility:hidden; height:10px");
    };
    
    
    let unhideCreateBox = function(){
        const newCardButton = document.querySelector('.newcard');
        newCardButton.addEventListener("click", unhideBox);
    };

    let unhideBox = function () {
        let box = document.querySelector('.box');
        box.setAttribute("style","");
    };


    let saveCard = function () {
        const saveButton = document.querySelector('.save');
        saveButton.addEventListener("click", saveQuestion);        
    };

    let saveQuestion = () =>{
        console.log('I am in Save Question');
    };

    return {
        hideCreateBox: hideCreateBox,
        unhideCreateBox:unhideCreateBox,
        saveCard:saveCard
    };

})();

// boxModule.saveCard();
// boxModule.hideCreateBox();
export default boxModule;

