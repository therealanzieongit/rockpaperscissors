// console.log("Hey world");

// Computer Decision, random generation
function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

    // math.random to return rock, paper, or scissors
        // numbers 1, 2 or 3
        // return number
}

const computerChoice = console.log(getComputerChoice(1, 3));

// Player Input
function getPlayerChoice() {
    playerInput = prompt("Are you playing rock, paper, or scissors?");
    caseSens = playerInput.toLowerCase();

    if(caseSens === "rock") {
        return 1;

    } else if(caseSens === "paper") {
        return 2;

    } else if(caseSens === "scissors") {
        return 3;
    }

    // get input from player PROMPT
    // print input log
    // if input 1 = rock, 2 = paper, 3 = scissors
        // player input rock = 1, paper = 2, scissors = 3
        // return player input as a number
}  

// Score Tracking
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    // DRAW CONDITIONS
    // IF getPlayerChoice is rock/1 and getComputerChoice is rock/1.
    // or IF getPlayerChoice is paper/2 and getComputerChoice is paper/2,
    // or IF getPlayerChoice is scissors/3 and getComputerChoice is scissors/3
        // print draw

    // WIN CONDITIONS
    // IF getPlayerChoice is rock/1 and getComputerChoice is scissors/3.
    // or IF getPlayerChoice is paper/2 and getComputerChoice is rock/1,
    // or IF getPlayerChoice is scissors/3 and getComputerChoice is paper/2,
        // print win
        // ++humanScore

    // LOSE CONDItiONS
    // IF getPlayerChoice is rock/1 and getComputerChoice is paper/2,
    // or IF getPlayerChoice is paper/2 and getComputerChoice is scissors/3,
    // or IF getPlayerChoice is scissors/3 and getComputerChoice is rock/1,
        // print lose
        // ++computerScore
}