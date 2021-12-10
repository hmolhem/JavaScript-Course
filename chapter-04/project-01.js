
var rpsModule = function(){

    // Caching DOM
    var playerScore = document.getElementById('playerscore');
    var computerScore = document.getElementById('computerscore');
    var numberMove = document.getElementById('numbermove');
    var counter = document.getElementById('counter');
    
    // 1: set variable for buttons control
    var rockBtn = document.getElementById('rock');
    var paperBtn = document.getElementById('paper');
    var scisserBtn = document.getElementById('scisser');

    var whoWonText = document.getElementById('whatWon');
    

    // some string tha would be use
    const usefullString = {
        PLAYER_WON_MESSAGE: "Congratulations You Won The Game",
        PLAYER_LOSE_MESSAGE: "Sorry, You Lose The Game",
        PLAYER_WON: 'Player Won',
        GAME_OVER: "Game is Over!",
        COMPUTER_WON: 'Computer Won',
        COMPUTER_WON_MESSAGE: 'Oh shit!',
        TIE: 'Tie',
        TIE_MSSAGE: 'No Lose, No Won.!'
    };
    
    const RPS = {
        '1':'rock',
        '2':'paper',
        '3':'scisser'
    };

    let counterScore = {
        'PLAYER': 0,
        'COMPUTER':0,
        'MAXIMUM_PLAY': Math.floor(Math.random() * (10-3+1)+3),
        'COUNTER': 0
    };

    //define private function
    window.addEventListener('load', ()=>{
        setMovement(counterScore.MAXIMUM_PLAY);
        displayCounter();
    });

    rockBtn.addEventListener('click', function(){
        let computer = computerGenerate();
        let player = 'rock'.toLocaleLowerCase();
        if (isTerminate()){
            setWhoWon(scoreGame());
            terminate();
            btnsDisabled();
        }else{
            let key = whoWon(player,computer);
            switch (key) {
                case 'player':
                        // player won 
                        updateCounter();
                        updatePlayerScore();
                        setWhoWon(usefullString.PLAYER_WON);
                        setPlayerScore(counterScore.PLAYER);
                        displayCounter();
                    break;
                    case 'computer':
                        // computer won 
                        updateCounter();
                        updateComputerScore();
                        setWhoWon(usefullString.COMPUTER_WON);
                        setComputerScore(counterScore.COMPUTER);
                        displayCounter();
                    break;
                    case 'tie':
                        // Tie
                        updateCounter();
                        setWhoWon(usefullString.TIE);
                        displayCounter();
            }
        }

    });
    paperBtn.addEventListener('click', function(){
        let computer = computerGenerate();
        let player = 'paper'.toLocaleLowerCase();
        if (isTerminate()){
            setWhoWon(scoreGame());
            terminate();
            btnsDisabled();
        }else{
            let key = whoWon(player,computer);
            switch (key) {
                case 'player':
                        // player won 
                        updateCounter();
                        updatePlayerScore();
                        setWhoWon(usefullString.PLAYER_WON);
                        setPlayerScore(counterScore.PLAYER);
                        displayCounter();
                    break;
                    case 'computer':
                        // computer won 
                        updateCounter();
                        updateComputerScore();
                        setWhoWon(usefullString.COMPUTER_WON);
                        setComputerScore(counterScore.COMPUTER);
                        displayCounter();
                    break;
                    case 'tie':
                        // Tie
                        updateCounter();
                        setWhoWon(usefullString.TIE);
                        displayCounter();
            }
        }
    });
    scisserBtn.addEventListener('click', function(){
        let computer = computerGenerate();
        let player = 'scisser'.toLocaleLowerCase();
        if (isTerminate()){
            setWhoWon(scoreGame());
            terminate();
            btnsDisabled();
        }else{
            let key = whoWon(player,computer);
            switch (key) {
                case 'player':
                        // player won 
                        updateCounter();
                        updatePlayerScore();
                        setWhoWon(usefullString.PLAYER_WON);
                        setPlayerScore(counterScore.PLAYER);
                        displayCounter();
                    break;
                    case 'computer':
                        // computer won 
                        updateCounter();
                        updateComputerScore();
                        setWhoWon(usefullString.COMPUTER_WON);
                        setComputerScore(counterScore.COMPUTER);
                        displayCounter();
                    break;
                    case 'tie':
                        // Tie
                        updateCounter();
                        setWhoWon(usefullString.TIE);
                        displayCounter();
            }
        }
    });

    function setPlayerScore (score) {
        playerScore.innerHTML = score;
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
        return RPS[keyRPS].toLocaleLowerCase();
    }

    function whoWon(p,c){
        // p = player & c = computer
        if (p == 'rock'){
            if (c == 'rock'){
                return 'tie';
            }else if (c == 'paper'){
                return 'computer';
            }else if (c == 'scisser'){
                return 'player';
            }
        }else if (p == 'paper'){
            if (c == 'rock'){
                return 'player';
            }else if (c == 'paper'){
                return 'tie';
            }else if (c == 'scisser'){
                return 'computer';
            }
        }else if (p == 'scisser'){
            if (c == 'rock'){
                return 'computer';
            }else if (c == 'paper'){
                return 'player';
            }else if (c == 'scisser'){
                return 'tie';
            }
        }
    }


    function updatePlayerScore(){
        setPlayerScore(counterScore.PLAYER++);
    }
    
    function updateComputerScore(){
        setComputerScore(counterScore.COMPUTER++);
    }
    
    function updateCounter(){
        counterScore.COUNTER++;
    }

    function displayCounter(){
        counter.innerHTML = 'Counter'.concat(' : ',counterScore.COUNTER);
    }

    function isTerminate(){
        return (counterScore.COUNTER == counterScore.MAXIMUM_PLAY) ? true : false;
    }

    function terminate(){
		if (confirm(scoreGame().concat('   ', "Do you want paly agin?")) == true) {
			location.reload();
		}
    }

    function scoreGame(){
        if (counterScore.PLAYER > counterScore.COMPUTER){
            return usefullString.PLAYER_WON_MESSAGE;
        }else if(counterScore.PLAYER < counterScore.COMPUTER){
            return usefullString.PLAYER_LOSE_MESSAGE;
        }else if (counterScore.PLAYER == counterScore.COMPUTER){
            return usefullString.TIE_MSSAGE;
        }
    }
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

    function setUserScore (score) {
        userScore.innerHTML = score;
    }

    function btnsDisabled () {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scisserBtn.disabled = true;
    }

    
    

    // Define Public Method
    
    return {

    };

}();

