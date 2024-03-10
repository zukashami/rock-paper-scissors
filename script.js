let choiceRock = "Rock";
let choicePaper = "Paper";
let choiceScissors = "Scissors";

let choice;

let number = Math.random();

function getComputerChoice(choice) {
    if (number > 0.66) {
        return choice = choiceRock;
    } else if (number <= 0.66 && number >= 0.33) {
        return choice = choicePaper;
    } else {
        return choice = choiceScissors;
    }
}

// console.log(getComputerChoice(choice));

let computerSelection = getComputerChoice(choice);
let playerSelection = choiceScissors;
let message;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === choicePaper) && (computerSelection === choiceRock)) {
        return message = "You Win! Paper beats Rock";
    } else if ((playerSelection === choicePaper) && (computerSelection === choicePaper)) {
        return message = "Its a Draw!";
    } else if ((playerSelection === choicePaper) && (computerSelection === choiceScissors)) {
        return message = "You Lose! Scissors beats Paper";

    } else if ((playerSelection === choiceRock) && (computerSelection === choiceScissors)) {
        return message = "You Win! Rock beats Scissors"; 
    } else if ((playerSelection === choiceRock) && (computerSelection === choiceRock)) {
        return message = "Its a Draw!"; 
    } else if ((playerSelection === choiceRock) && (computerSelection === choicePaper)) {
        return message = "You Lose! Paper beats Rock";  

    } else if ((playerSelection === choiceScissors) && (computerSelection === choicePaper)) {
        return message = "You Win! Scissors beats Paper";
    } else if ((playerSelection === choiceScissors) && (computerSelection === choiceScissors)) {
        return message = "Its a draw!";
    } else {
        return message = "You Lose! Rock beats Scissors";
    }
}

//console.log(playRound(playerSelection, computerSelection));
