function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
};
console.log("Computer choice is: " + getComputerChoice());
