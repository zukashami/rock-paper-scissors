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
let playerSelection;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        playRound();
    })
})

function playRound() {
    let computerSelection = getComputerChoice();

    const result = document.querySelector("#result");

    const playerSelectionView = document.createElement("h3");
    playerSelectionView.textContent = "Player's choice: "+ playerSelection;
    const computerSelectionView = document.createElement("h3");
    computerSelectionView.textContent = "Computer's choice: "+ computerSelection;

    result.appendChild(playerSelectionView);
    result.appendChild(computerSelectionView);
    //console.log("Player: "+ playerSelection);
    //console.log("Computer: "+ computerSelection);

    const points = document.createElement("h2");
    
    if (playerSelection === computerSelection) {
        points.textContent = ("Player's points: "+(playerPoints += 0)+ " Computer's points: " +(computerPoints += 0));
    } else if ((playerSelection === choicePaper) && (computerSelection === choiceRock)) {
        points.textContent = ("Player's points: "+(playerPoints += 1)+ " Computer's points: " +(computerPoints += 0));
    } else if ((playerSelection === choiceRock) && (computerSelection === choiceScissors)) {
        points.textContent = ("Player's points: "+(playerPoints += 1)+ " Computer's points: " +(computerPoints += 0));
    } else if ((playerSelection === choiceScissors) && (computerSelection === choicePaper)) {
        points.textContent = ("Player's points: "+(playerPoints += 1)+ " Computer's points: " +(computerPoints += 0));
    } else {
        points.textContent = ("Player's points: "+(playerPoints += 0)+ " Computer's points: " +(computerPoints += 1));
    }

    const gameOutput = document.createElement("h1");

    if (playerPoints === 5) {
        gameOutput.textContent = "Player Wins! Score: "+playerPoints+ " : " +computerPoints;
    } else if (computerPoints === 5) {
        gameOutput.textContent = "Computer Wins! Score: "+playerPoints+ " : " +computerPoints;
    } else {
        gameOutput.textContent = "";
    }

    result.appendChild(points);
    result.appendChild(gameOutput);
}

// function playGame() {

//     let i = 0;

//     while (i < Infinity) {
//         if ((playerPoints === 5) || (computerPoints === 5)) {
//             break;
//         }
//         playRound();
//         i++;
//     } 
        

//         const gameOutput = document.createElement("h1");

//         if (playerPoints > computerPoints) {
//             gameOutput.textContent = "Player Wins! Score: "+playerPoints+ " : " +computerPoints;
//         } else if (playerPoints < computerPoints) {
//             gameOutput.textContent = "Computer Wins! Score: "+playerPoints+ " : " +computerPoints;
//         } else {
//             gameOutput.textContent = "Its a draw! Score: "+playerPoints+ " : " +computerPoints;
//         }

//     result.appendChild(gameOutput);
// }


