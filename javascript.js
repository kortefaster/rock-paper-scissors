// console.log("Hello World")

let playerScore = 0;
let computerScore = 0;
let draw = 0;
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

let menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    let target = event.target;
    // console.log(event.target);

switch(target.id){

    case `buttonRock`:
        playRound(`rock`)
        break;

    case `buttonPaper`:
        playRound(`paper`)
        break;

    case `buttonScissors`:
        playRound(`scissors`)
        break;

}


});

let winner = document.querySelector(`#winner`);
let score = document.querySelector(`#score`);
let selection = document.querySelector(`#selection`);
let finalWinner = document.querySelector(`#finalWinner`);






function getHumanChoice(a) { 
    let humanSelection = `${a}`;
        return humanSelection;
    }
   





function playRound(choice)
{    

    if (computerScore === 5) {
        finalWinner.textContent = `COMPUTER WON EVERYTHING`;
        return;
       }
       else if (playerScore === 5) {
        finalWinner.textContent = `PLAYER WON EVERYTHING`;
        return;
       }


   
   let humanSelection = getHumanChoice(choice);
   let computerSelection = getComputerChoice();

//    console.log(`player chose: ${humanSelection}`);
   selection.textContent = (`Player chose: ${humanSelection} || Computer chose: ${computerSelection}`);
//    console.log(`computer chose: ${computerSelection}`);
  

   if (humanSelection===computerSelection) {
    //    console.log(`draw`);
       currentRound++;
       draw++;
       winner.textContent = `draw`;
       score.textContent = (`Computer Score: ${computerScore}, Player Score: ${playerScore}, Draws: ${draw} Current Round: ${currentRound}`);
    //    console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
       return;
   } 
   else if (
       humanSelection===`rock` && computerSelection === `paper` || 
       humanSelection===`paper` && computerSelection === 'scissors' || 
       humanSelection=== `scissors` && computerSelection === `rock`) 
   {
    //    console.log(`computer wins this round`)
       
       computerScore++;
       currentRound++;
       winner.textContent = `computer won this round`;
       score.textContent = (`Computer Score: ${computerScore}, Player Score: ${playerScore}, Draws: ${draw} Current Round: ${currentRound}`);
       if (computerScore === 5) {
        finalWinner.textContent = `COMPUTER WON EVERYTHING`;
        return;
       }
       else if (playerScore === 5) {
        finalWinner.textContent = `PLAYER WON EVERYTHING`;
        return;
       }
    //    console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
       return;
       
   }
   else {
    //   console.log(`player wins this round`)
      playerScore++;
      currentRound++;
      winner.textContent = `player won this round`;
      score.textContent = (`Computer Score: ${computerScore}, Player Score: ${playerScore}, Draws: ${draw} Current Round: ${currentRound}`);
      if (computerScore === 5) {
        finalWinner.textContent = `COMPUTER WON EVERYTHING`;
        return;
       }
       else if (playerScore === 5) {
        finalWinner.textContent = `PLAYER WON EVERYTHING`;
        return;
       }
    //   console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}, Current Round: ${currentRound}`);
    
      return;

   }

   
};




// playRound();









