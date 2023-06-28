function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoise = Math.floor(Math.random() * choices.length);
    console.log(choices[computerChoise]);
};
getComputerChoice();
