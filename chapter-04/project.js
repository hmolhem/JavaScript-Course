
var rpsModule = function(){

    // Caching DOM
    var userScore = document.getElementById('userscore');
    var computerScore = document.getElementById('computerscore');
    var numberMove = document.getElementById('numbermove');
    
    // 1: set variable for buttons control
    var rockBtn = document.getElementById('rock');
    var paperBtn = document.getElementById('paper');
    var scisserBtn = document.getElementById('scisser');

    var whatWon = document.getElementById('whatWon');
    
    // some string tha would be use
    const usefulString = {
        YOU_WON_THE_GAMR: "Congratulations You Won The Game",
        YOU_LOST_THE_GAME: "You Lost The Game",
        GAME_OVER: "Game Over!",
        USER_WIN: 'Player Won',
        COMPUTER_WIN: 'Computer Won',
        TIE: 'Tie'
    };

    const RPS = {
        '1':'rock',
        '2':'paper',
        '3':'scisser'
    };

    //define private function
    rockBtn.addEventListener('click', function(){
        let computer = computerGenerate();
        let user = [1, 'rock'.toLocaleLowerCase()];
        let key = whoWon(user[0],computer[0]);
                console.log(key);
        switch (key) {
            case 1:
                // user win 
                setWhoWon(usefulString.USER_WIN);
                break;
            case 2:
                // computer win 
                setWhoWon(usefulString.COMPUTER_WIN);
                break;
            case 3:
                // Tie
                setWhoWon(usefulString.TIE);
        }

    });
    paperBtn.addEventListener('click', function(){

    });

    scisserBtn.addEventListener('click', function(){

    });

    function setUserScore (score) {
        userScore.innerHTML = score;
    }
    
    function setComputerScore(score) {
        computerScore.innerHTML = score;
    }
    
    function setMovement(neumeral) {
        numberMove.innerHTML = 'Number of movements'.concat(' : ',neumeral);
    }

    function setWhoWon(str){
        whatWon.innerHTML = str;
    }

    function rnd(){
        return 1 + Math.floor(Math.random() * 3);
    }

    function computerGenerate (){
        let  keyRPS = rnd();
        return [keyRPS, RPS[keyRPS].toLocaleLowerCase()];
    }

    function whoWon(u,c){
        if (u > c ){
            key = 1;
        } else if (u < c){
            key = 2;
        }else {
            key = 3;
        }
        return key;
    }
    // Define Public Method
    
    return {

    };

}();

