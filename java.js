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

// const computerChoice = console.log(getComputerChoice(1, 3));

function computerEnglish(computerChoice) {
    if(computerChoice === 1) {
        return "rock";
    } else if(computerChoice === 2) {
        return "paper";
    } else if(computerChoice === 3) {
        return "scissors"
    }
} 

// Player Input
function getPlayerChoice() {
    playerInput = prompt("Are you playing rock, paper, or scissors?");
    let caseSens = playerInput.toLowerCase();
    return caseSens; 

    // if(caseSens === "rock") {
    //     return 1;

    // } else if(caseSens === "paper") {
    //     return 2;

    // } else if(caseSens === "scissors") {
    //     return 3;
    // }

    // console.log(caseSens);

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

    if(playerChoice === "rock") {
        if(comEnglish === "rock") {
            return "draw";
        } else if(comEnglish === "paper") {
            computerScore++;
            return "loss";
        } else if(comEnglish === "scissors") {
            humanScore++;
            return "victory";
        }
    } else if(playerChoice === "paper") {
        if(comEnglish === "paper") {
            return "draw";
        } else if(comEnglish === "scissors") {
            computerScore++;
            return "loss";
        } else if(comEnglish === "rock") {
            humanScore++;
            return "victory";
        }
    } else if (playerChoice === "scissors") {
        if(comEnglish === "scissors") {
            return "draw";
        } else if(comEnglish === "rock") {
            computerScore++;
            return "loss";
        } else if(comEnglish === "paper") {
            return "victory";
        }
    }

    
}

// function scoreTrack(actualScore) {
//     if(actualScore === "loss") {
//         return ++computerScore;
//     } else if(actualScore === "victory") {
//         return ++humanScore;
//     } else if(actualScore === "draw") {
//         return;  
//     }
// }

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

// const comEnglish = computerEnglish(getComputerChoice(1, 3));
// const playerChoice = getPlayerChoice();
// const round = playRound(playerChoice, comEnglish);


    // if(scoreTrack === "victory") {
    //     console.log(++humanScore);
    // } else if(scoreTrack === "loss") {
    //     console.log(++computerScore);
    // }

function game() {
    const totalRounds = 5;
    for (let i = 0; i < totalRounds; i++) {
        playerChoice = getPlayerChoice();
        comEnglish = computerEnglish(getComputerChoice(1, 3));    
        
        round = playRound(playerChoice, comEnglish);

        sentence = "You played " + playerChoice + " and the computer played " + comEnglish + ". This means for you the round was a " + round + "!"
        console.log(sentence)
        console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`);
    }
    
    console.log("GAME OVER");
    if(humanScore > computerScore) {
        console.log("You win!");  
    } else if(humanScore < computerScore) {
        console.log("Oh no, you lost!");
    } else {
        console.log("The game was a tie.");
    }
    
}

game();
