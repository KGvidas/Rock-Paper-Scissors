function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoise = Math.floor(Math.random() * choices.length);
    return choices[computerChoise];
};
console.log("Computer choice is: " + getComputerChoice());
