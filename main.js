let playerScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
  // array of the three choices: rock, paper and scissors
  // random nr between 0-2
  // return array of that index

  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  // check logic who wins
  // rock > scissors
  // scissors > paper
  // paper > rock
  
  let result = "";

  // player input rock
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result = "It's a tie!";
    }
    else if (computerSelection === "scissors") {
      result = "You win! Rock beats Scissors";
      playerScore++;
    }
    else if (computerSelection === "paper") {
      result = "You lose! Paper beats Rock";
      computerScore++;
    }
  }

  //  player input scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats Scissors";
      computerScore++;
    }
    else if (computerSelection === "scissors") {
      result = "It's a tie!";
    }
    else if (computerSelection === "paper") {
      result = "You win! Scissors beats Paper";
      playerScore++;
    }
  }

  // player input paper
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win! Paper beats Rock";
      playerScore++;
    }
    else if (computerSelection === "scissors") {
      result = "You lose! Scissors beats Paper";
      computerScore++;
    }
    else if (computerSelection === "paper") {
      result = "It's a tie!";
    }
  }

  return result;
}

function playGame() {
  // loop 5 times
  // keep count of player and computer score
  // report winner & loser after loop
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Which choice do you want to make? (Rock/Paper/Scissors)").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Current score: player - " + playerScore + " vs computer - " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("You are the winner!!!")
  }
  else if (player < computerScore) {
    console.log("Computer is the winner")
  }
  else {
    console.log("It's a tie")
  }
}