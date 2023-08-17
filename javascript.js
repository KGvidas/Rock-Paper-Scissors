let playerWins = 0;
let computerWins = 0;


let roundWinner;
let playerScore =  document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let outcome = document.getElementById('outcome');
let outcomeExplained =  document.getElementById('outcomeExplained');
let playerChose = document.getElementById('plyrChoice');
let computerChose =  document.getElementById('cmptrChoice');


const buttons = document.querySelectorAll('.play');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // Get the id of the clicked button
    const computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound function
    updateUI(playerSelection, computerSelection)
    checkForGameOver(); 
  });
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNumber];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if ( 
  (playerSelection === "Rock" && computerSelection === "Scissors") ||
  (playerSelection === "Paper" && computerSelection === "Rock") ||
  (playerSelection === "Scissors" && computerSelection === "Paper")
  ){  
    roundWinner = "player";
    playerWins++;
  } else if (
  (playerSelection === "Rock" && computerSelection === "Paper") ||
  (playerSelection === "Paper" && computerSelection === "Scissors") ||
  (playerSelection === "Scissors" && computerSelection === "Rock")
  ) { 
    roundWinner = "computer";
    computerWins++;
  } else {
    roundWinner = "tie";
  } 
}

function checkForGameOver(){
  if (playerWins === 5 || computerWins === 5) {
    gameIsOver()
  }
};

function gameIsOver() {
  document.getElementById("overlay").style.display = "block";
}

restartGamebtn = document.getElementById('restartGame')
restartGamebtn.addEventListener('click', playAgain);

function playAgain() {
  document.getElementById("overlay").style.display = "none";
  outcome.textContent = "Choose your weapon";
  outcomeExplained.textContent = "First to score 5 points wins the game";
  playerWins = 0; 
  computerWins = 0; 
  playerScore.textContent = '0';
  computerScore.textContent = '0';
}

// UI UPDATE FUNCTIONS 
function updateUI(playerSelection, computerSelection) {
  UpdateOutcomeSection(playerSelection, computerSelection);
  UpdateChoiceSection(playerSelection, computerSelection);
};

function UpdateOutcomeSection(playerSelection, computerSelection) {
  if (roundWinner == "player") {
    outcome.textContent = 'You win!';
    outcomeExplained.textContent = `${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = `${playerWins}`;
  } else if (roundWinner == "computer") {
    outcome.textContent = 'You lose!';
    outcomeExplained.textContent = `${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = `${computerWins}`;
  } else {
    outcome.textContent = "It's a tie!";
    outcomeExplained.textContent = `${playerSelection} and ${computerSelection}`;
  }
}

function UpdateChoiceSection(playerSelection, computerSelection){
  playerChose.textContent = `${playerSelection}`
  computerChose.textContent = `${computerSelection}`
}
