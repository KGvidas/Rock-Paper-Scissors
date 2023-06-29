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
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")
  ) { 
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "It's a tie!";
  }
}

 
let playerSelection = prompt("Choose between Rock, Paper and Scissors").toLowerCase();
console.log("Player choice is: " + playerSelection);

const computerSelection = getComputerChoice();
console.log("Computer choice is: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));