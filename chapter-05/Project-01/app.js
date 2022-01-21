import cardInfo from './card/card.js';
import boxModule from './box/box.js';

var myFlashcardMoudle = (function(){
    
    boxModule.hideCreateBox();
    boxModule.unhideCreateBox();
    cardInfo.createCard(1,'Q: what color is the sky?','A: Blue');
    // cardInfo.cardSense();
    // cardInfo.toggleShowHideAnswer();
    cardInfo.deleteCard();

})();