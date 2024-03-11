let choiceRock = "rock";
let choicePaper = "paper";
let choiceScissors = "scissors";

function getComputerChoice() {
    const pick = [choiceRock, choicePaper, choiceScissors];
    let computerChoice = pick[Math.floor(Math.random() * pick.length)]; 
    return computerChoice;
}

let playerPoints = 0;
let computerPoints = 0;

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please choose Rock, Paper or Scissors").toLowerCase();

    console.log("Player: "+ playerSelection);
    console.log("Computer: "+ computerSelection);

    if (playerSelection === computerSelection) {
        console.log(playerPoints += 0 );
        console.log(computerPoints += 0 );
    } else if ((playerSelection === choicePaper) && (computerSelection === choiceRock)) {
        console.log(playerPoints += 1);
        console.log(computerPoints += 0 );
    } else if ((playerSelection === choiceRock) && (computerSelection === choiceScissors)) {
        console.log(playerPoints += 1); 
        console.log(computerPoints += 0 );
    } else if ((playerSelection === choiceScissors) && (computerSelection === choicePaper)) {
        console.log(playerPoints += 1);
        console.log(computerPoints += 0 );
    } else if ((playerSelection != choicePaper) || (playerSelection != choiceRock) || (playerSelection != choiceScissors)) {
        console.log("Wrong input. Choose again!");
    } else {
        console.log(playerPoints += 0);
        console.log(computerPoints += 1 );
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerPoints > computerPoints) {
        console.log("Player Wins! Score: "+playerPoints+ " : " +computerPoints);
    } else if (playerPoints < computerPoints) {
        console.log("Computer Wins! Score: "+playerPoints+ " : " +computerPoints);
    } else {
        console.log("Its a draw! Score: "+playerPoints+ " : " +computerPoints);
    }
}

playGame();