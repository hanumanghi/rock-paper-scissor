
const playerscore = document.querySelector('.presult');
const computerscore = document.querySelector('.cresult');
const playeroptions = document.querySelectorAll('.selection');
const roundText = document.querySelector('.info');

playeroptions.forEach (playeroption => playeroption.addEventListener('click', decision))

function computerPlay(){
    let choices = ['rock', 'paper', 'scissor']
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerRound = 0;
let computerRound = 0;

function playRound(playerSelection, computerSelection){
    if ((playerSelection == 'rock' && computerSelection == 'scissor')
     || (playerSelection == 'paper' && computerSelection == 'rock')
     || (playerSelection == 'scissor' && computerSelection == 'paper'))
       {
           playerscore.textContent = ++playerRound;
           roundText.textContent = 'Nice Job! ' + playerSelection + ' beats ' + computerSelection; 
       }   
    else if (playerSelection == computerSelection){
        roundText.textContent = "It\'s a tie, Try Again!"
    }
    else {
        computerscore.textContent = ++computerRound;
        roundText.textContent = 'Try Again! ' + computerSelection +  ' beats ' + playerSelection;
    }
   
        }

 function decision(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay()
     playRound(playerSelection, computerSelection)
    console.log(playerSelection, computerSelection)
    }
