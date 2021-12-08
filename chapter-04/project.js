
var nameSpace = function(){
    // score control
    let __userScore = document.getElementById('userscore').innerHTML;
    let __computerScore = document.getElementById('computerscore').innerHTML;
    
    // number of movment
    let __numberMove = document.getElementById('numbermove').innerHTML;
    
    // set variable for buttons control
    const __rockBtn = document.getElementById('rock');
    const __paperBtn = document.getElementById('paper');
    const __scisserBtn = document.getElementById('scisser');

    let __whatWon = document.getElementById('whatWon').innerHTML;
    
    // some string tha would be use
    const YOU_WON_THE_GAMR = "Congratulations You Won The Game";
    const YOU_LOST_THE_GAME = "You Lost The Game";
    const GAME_OVER = "Game Over!";


    // Define Public Method
    let displayUserScore = function(score) {
        __userScore = score;
    };

    let displayComputerScore = function(score) {
        __computerScore = score;
    };

    let displayMovement = function(numeral) {
        __numberMove = numeral;
    };

    let displayWhatWon = function(whatWon) {
        __whatWon = whatWon;
    };

    return {
        YOU_WON_THE_GAMR,
        YOU_LOST_THE_GAME,
        GAME_OVER,
        __rockBtn,
        __paperBtn,
        __scisserBtn,
        __whatWon,
        __numberMove,
        __userScore,
        __computerScore,
        displayUserScore: displayUserScore,
        displayComputerScore: displayComputerScore,
        displayMovement: displayMovement,
        displayWhatWon: displayWhatWon
    };

}();

nameSpace.__paperBtn.addEventListener('click', ()=>{
    console.log('Hello');
});