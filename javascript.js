let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('.play');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // Get the id of the clicked button
    const computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound function
    
    // Check for game end condition
    if (playerWins === 5) {
      alert("Congrats, you won!");
      gameIsOver();
    } else if (computerWins === 5) {
      alert("Wow, you lost!");
      gameIsOver();
    }
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
  ){   // Outcome box updated
    document.getElementById('outcome').textContent = 'You win!';
    document.getElementById('outcomeExplained').textContent = `${playerSelection} beats ${computerSelection}`;
      // Score box updated 
    playerWins++;
    document.getElementById('playerScore').textContent = `${playerWins}`
      // choice box updated
      document.getElementById('plyrChoice').textContent = `${playerSelection}`
      document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  
  } else if (
  (playerSelection === "Rock" && computerSelection === "Paper") ||
  (playerSelection === "Paper" && computerSelection === "Scissors") ||
  (playerSelection === "Scissors" && computerSelection === "Rock")
  ) { 
    // Outcome box updated
    document.getElementById('outcome').textContent = 'You lose!';
    document.getElementById('outcomeExplained').textContent = `${computerSelection} beats ${playerSelection}`;
    // Score box updated 
    computerWins++;
    document.getElementById('computerScore').textContent = `${computerWins}`
      // choice box updated
      document.getElementById('plyrChoice').textContent = `${playerSelection}`
      document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  } else {
     // Outcome box updated
  document.getElementById('outcome').textContent = "It's a tie!";
  document.getElementById('outcomeExplained').textContent = `${playerSelection} and 
  ${computerSelection}`
    // choice box updated
    document.getElementById('plyrChoice').textContent = `${playerSelection}`
    document.getElementById('cmptrChoice').textContent = `${computerSelection}`
  } 
}

gameOverbtn = document.getElementById('text')
gameOverbtn.addEventListener('click', playAgain);


function gameIsOver() {
  document.getElementById("overlay").style.display = "block";
}

function playAgain() {
  document.getElementById("overlay").style.display = "none";
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
