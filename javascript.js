let playerWins = 0;
let computerWins = 0;


let roundWinner;
let playerScore =  document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let outcome = document.getElementById('outcome')
let outcomeExplained =  document.getElementById('outcomeExplained')

const buttons = document.querySelectorAll('.play');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // Get the id of the clicked button
    const computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound function
    checkForGameOver(); 
    UpdateOutcomeSection(playerSelection, computerSelection); // Pass both selections here
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
      // choice box updated
      document.getElementById('plyrChoice').textContent = `${playerSelection}`
      document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  } else if (
  (playerSelection === "Rock" && computerSelection === "Paper") ||
  (playerSelection === "Paper" && computerSelection === "Scissors") ||
  (playerSelection === "Scissors" && computerSelection === "Rock")
  ) { 
    roundWinner = "computer";
    computerWins++;
      // choice box updated
      document.getElementById('plyrChoice').textContent = `${playerSelection}`
      document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  } else {
    roundWinner = "tie";
    // choice box updated
    document.getElementById('plyrChoice').textContent = `${playerSelection}`
    document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  } 
}

restartGamebtn = document.getElementById('restartGame')
restartGamebtn.addEventListener('click', playAgain);


function gameIsOver() {
  document.getElementById("overlay").style.display = "block";
}

function playAgain() {
  document.getElementById("overlay").style.display = "none";
  outcome.textContent = "Choose your weapon";
  outcomeExplained.textContent = "First to score 5 points wins the game";
  playerWins = 0; 
  computerWins = 0; 
  playerScore.textContent = '0';
  computerScore.textContent = '0';
}

function checkForGameOver(){
  if (playerWins === 5 || computerWins === 5) {
    gameIsOver()
  }
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




// Improving Code Organization:
// Consider improving the organization of your code by separating the game logic from the UI updates. You could have separate functions for updating the scores, displaying choices, and displaying the outcome. This would make your code more modular and easier to understand.

// Using HTML to Display Game Information:
// You might want to use HTML to display game information rather than using alerts. For example, you could have a separate element on your webpage to display the game status, such as who won and the current score. This would provide a better user experience.

// Minor Code Simplifications:
// You could simplify the way you update the text content by using a single function for updating both player and computer choices, as well as the outcome explanations.

//mobile layout

//responsivness

//img

// let: roundWinner , func (updateRoundOutcome); func (gameOver); func (declareWinner)
