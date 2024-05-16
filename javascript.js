// console.log("Hello World")

let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let stopGame = 0;

function getComputerChoice() {
    let resultPc;
    let choicePc = Math.floor(Math.random()*300);

    console.log(choicePc);

    if (choicePc<100) { 
        resultPc = `rock`;
        // console.log(resultPc)
        return resultPc;
    }

    else if (choicePc>=100 && choicePc<200) {
        resultPc = 'paper';
        // console.log(resultPc)
        return resultPc;
    }
    else if (choicePc>=200){
        resultPc = 'scissors';
        // console.log(resultPc)
        return resultPc;
    };

}


function getHumanChoice() { 
    let humanSelection = prompt('Choose between rock, paper or scissors', '');
    let newHumanSelection = humanSelection.toLowerCase();

    if (newHumanSelection==='paper' || newHumanSelection===`rock` || newHumanSelection===`scissors`) {
        let finalHumanSelection = newHumanSelection;
        return finalHumanSelection;
    }
    else {
        alert('YOU HAVE TO Choose between rock, paper or scissors')
    }
};





function playGame() {


    // console.log(humanSelection);
    // console.log(computerSelection);

    
/*
    if (playerScore === 5) {
        console.log(`player wins all game`)
    } 

    else if(computerScore === 5) {
        console.log(`computer wins all game`)
    }

    while (playerScore<5 && computerScore < 5 && currentRound <10 && stopGame==0) {
        */

        function playRound()
         {    
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            console.log(`player chose: ${humanSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            
            if(humanSelection != `rock` && 
               humanSelection != `paper` && 
               humanSelection != `scissors`)
               {
                console.log(`YOU HAD TO CHOOSE BETWEEN ROCK, PAPER, AND SCISSORS, THE PROGRAM WILL RESET UNTIL YOU CHOOSE CORRECTLY`)
                stopGame = 1;
                return;

            }

            else if (humanSelection===computerSelection) {
                console.log(`draw`)
                currentRound++;
                console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
                return;
            } 
            else if (
                humanSelection===`rock` && computerSelection === `paper` || 
                humanSelection===`paper` && computerSelection === 'scissors' || 
                humanSelection=== `scissors` && computerSelection === `rock`) 
            {
                console.log(`computer wins this round`)
                computerScore++;
                currentRound++;
                console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
                return;
                
            }
            else {
               console.log(`player wins this round`)
               playerScore++;
               currentRound++;
               console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
               return;

            }
        };

        playRound();
        playRound();
        playRound();
        playRound();
        playRound();
        // console.log(computerScore, playerScore);
    }





playGame();


function isPrime(){
    
let numberInput;

 do {
    numberInput = prompt(`choose a number`, `0`)
    for (let index = 2; index <= numberInput/2; ) {
        if (numberInput%index===0){
            alert('not prime')
            break;    
        }
        else if(index===Math.floor(numberInput/2)){
            alert(`prime`);
            break;
        }
        else{
            index++
        };
        
    }
} while (numberInput)

}







