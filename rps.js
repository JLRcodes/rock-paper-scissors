const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

//const prompt = require("prompt-sync")();

// const options = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   // Generate a random number between 0 and 2
//   const choice = options[Math.floor(Math.random() * options.length)];
//   return choice;
// }

// function checkWinner(playerSelection, computerSelection) {
//   if (playerSelection == computerSelection) {
//     return "Tie";
//   } else if (
//     (playerSelection == "rock" && computerSelection == "scissors") ||
//     (playerSelection == "paper" && computerSelection == "rock") ||
//     (playerSelection == "scissors" && computerSelection == "paper")
//   ) {
//     return "Player";
//   } else {
//     return "Computer";
//   }
// }

// function playRound(playerSelection, computerSelection) {
//   const result = checkWinner(playerSelection, computerSelection);
//   if (result == "Tie") {
//     return "It's a Tie!";
//   } else if (result == "Player") {
//     return `You Win! ${playerSelection} beats ${computerSelection}`;
//   } else {
//     return `You Lose! ${computerSelection} beats ${playerSelection}`;
//   }
// }

// function getPlayerChoice() {
//   let validatedInput = false;
//   while (validatedInput == false) {
//     //const choice = prompt("Rock Paper Scissors: ");
//     if (choice == null) {
//       continue;
//     }
//     const choiceInLower = choice.toLowerCase();
//     if (options.includes(choiceInLower)) {
//       validatedInput = true;
//       return choiceInLower;
//     }
//   }
// }

// function playGame() {
//   let scorePlayer = 0;
//   let scoreComputer = 0;
//   console.log("Welcome");
//   /*for(let i = 0; i < 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice()
//     console.log(playRound(playerSelection, computerSelection))
//     console.log("---------")
//     if(checkWinner(playerSelection,computerSelection) == "Player"){
//       scorePlayer++;
//     }
//     else if (checkWinner(playerSelection, computerSelection) == "Computer") {
//       scoreComputer++;
//     }
//   }
//   */

//   console.log("Game Over");
//   if (scorePlayer > scoreComputer) {
//     console.log("Player is the winner");
//   } else if (scorePlayer < scoreComputer) {
//     console.log("Computer is the winner");
//   } else {
//     console.log("We have a tie");
//   }
// }

// playGame();

// let button = document.getElementsByClassName(".btn");
// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//   e.preventDefault();
//   console.log("hello");
// }
