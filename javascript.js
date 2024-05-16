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

let menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    let target = event.target;
    // console.log(event.target);

switch(target.id){

    case `buttonRock`:
        console.log(`buttonRock was clicked`);
        break;
    case `buttonPaper`:
        console.log(`buttonPaper was clicked`);
        break;
    case `buttonScissors`:
        console.log(`buttonScissors was clicked`);
        break;

}


});










function getHumanChoice() { 
    let humanSelection = prompt('Choose between rock, paper or scissors', '');

    let newHumanSelection = humanSelection.toLowerCase();

    if (newHumanSelection==='paper' || newHumanSelection===`rock` || newHumanSelection===`scissors`) {
        let finalHumanSelection = newHumanSelection;
        return finalHumanSelection;
    }
   

    else {
        alert('YOU HAVE TO Choose between rock, paper or scissors');
    }
};




function playRound()
{    


   
   let humanSelection = getHumanChoice();
   if (humanSelection === null){
       return;   
}
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
// playRound();









