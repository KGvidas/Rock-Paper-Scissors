// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     let randomNumber = Math.floor(Math.random() * choices.length);
//     let computerChoice = choices[randomNumber];
//     return computerChoice;
// };

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//   button.addEventListener('click', playerSelection);
// });

// // const btnRock = document.getElementById('rock');
// // btnRock.addEventListener('click', () => {
// //     console.log(btnRock.id);
// // });

// function playerSelection () {
// let playerChoice = buttons.id;
// return console.log(playerChoice);
// }




// function playRound(playerSelection, getComputerChoice) {
//   if (
//   (playerSelection === "rock" && computerSelection === "scissors") ||
//   (playerSelection === "paper" && computerSelection === "rock") ||
//   (playerSelection === "scissors" && computerSelection === "paper")
//   ){
//     console.log("You win! " + playerSelection + " beats " + computerSelection);
//     playerWins++;
//   } else if (
//   (playerSelection === "rock" && computerSelection === "paper") ||
//   (playerSelection === "paper" && computerSelection === "scissors") ||
//   (playerSelection === "scissors" && computerSelection === "rock")
//   ) { 
//     console.log("You lose! " + computerSelection + " beats " + playerSelection);
//     computerWins++;
//   } else {
//     return console.log("It's a tie!" + "" + playerSelection);
//   }
// }


// // function game() {
// //   while (playerWins < 5 && computerWins < 5) {
// //     let playerSelection = prompt("Choose between Rock, Paper and Scissors").toLowerCase();
// //     console.log("Player choice is: " + playerSelection);
// //     let computerSelection = getComputerChoice();
// //     console.log("Computer choice is: " + computerSelection);

// //     playRound(playerSelection, computerSelection);
// //     console.log("Player has: " + playerWins + " wins");
// //     console.log("Computer has " + computerWins + " wins");
// //   }  
  
// //   if (playerWins === 5) {
// //   alert("Congratz you won!");
// //   } else if (computerWins === 5) {
// //   alert("Wow you lost!");
// //   }
// // }
// // game();


let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // Get the id of the clicked button
    const computerSelection = getComputerChoice(); // Get computer's choice
    playRound(playerSelection, computerSelection); // Call playRound function
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNumber];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if ( 
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
  ){   // Outcome box updated
    document.getElementById('outcome').textContent = 'You win!';
    document.getElementById('outcomeExplained').textContent = `${playerSelection} beats ${computerSelection}`;
      // Score box updated 
    playerWins++;
    document.getElementById('playerScore').textContent = `${playerWins}`
  } else if (
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")
  ) { 
    // Outcome box updated
    document.getElementById('outcome').textContent = 'You lose!';
    document.getElementById('outcomeExplained').textContent = `${computerSelection} beats ${playerSelection}`;
    // Score box updated 
    computerWins++;
    document.getElementById('computerScore').textContent = `${computerWins}`
  } else {
     // Outcome box updated
  document.getElementById('outcome').textContent = "It's a tie!";
  document.getElementById('outcomeExplained').textContent = `${playerSelection} and 
  ${computerSelection}`
  } 
}
