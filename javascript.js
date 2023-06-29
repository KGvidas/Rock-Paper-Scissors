function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomNumber];
    return computerChoice;
};
console.log("Computer choice is: " + getComputerChoice());
