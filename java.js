
const playerscore = document.querySelector('.presult');
const computerscore = document.querySelector('.cresult');
const playeroptions = document.querySelectorAll('button');

playeroptions.forEach (playeroption => playeroption.addEventListener('click', e => {
    playerDecision = (e.target.id);
}))

function computerPlay(){
    let choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = computerPlay();
let playerSelection = playerDecision;
let playerRound = 0;
let computerRound = 0;
console.log(playerSelection, computerSelection)
function playRound(playerSelection, computerSelection){
     
    if ((playerSelection == 'rock' && computerSelection == 'scissor')
       || (playerSelection == 'paper' && computerSelection == 'rock')
       || (playerSelection == 'scissor' && computerSelection == 'paper'))
       {
           playerscore.textContent = ++playerRound;
           return "Nice Job!" || "You Won"; 
       }
    else { computerscore.textContent = ++computerRound;
        return  "Try Again!" || "OH NO!"};
       
    if (computerSelection == playerSelection)
         {
          return  "It\'s a tie"
        }

        }
