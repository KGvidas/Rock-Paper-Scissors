function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomNumber];
    return computerChoice;
};


function playRound(playerSelection, computerSelection) {
  if (
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
  ){
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    playerWins++;
  } else if (
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")
  ) { 
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    computerWins++;
  } else {
    return console.log("It's a tie!");
  }
}



let playerWins = 0;
let computerWins = 0;

function game() {
  while (playerWins < 5 && computerWins < 5) {
  let playerSelection = prompt("Choose between Rock, Paper and Scissors").toLowerCase();
  console.log("Player choice is: " + playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer choice is: " + computerSelection);

  playRound(playerSelection, computerSelection);
  console.log("Player has: " + playerWins + " wins");
  console.log("Computer has " + computerWins + " wins");
} 
  if (playerWins === 5) {
  alert("Congratz you won!");
} else if (computerWins === 5) {
  alert("Wow you lost!");
}
}
game();
