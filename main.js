const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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
  const playerChoice = playerSelection.toLowerCase();
  let result = "";

  // player input rock
  if (playerChoice === "rock") {
    if (computerSelection === "rock") {
      result = "It's a tie!";
    }
    else if (computerSelection === "scissors") {
      result = "You win! Rock beats Scissors";
    }
    else if (computerSelection === "paper") {
      result = "You lose! Paper beats Rock";
    }
  }

  //  player input scissors
  if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats Scissors";
    }
    else if (computerSelection === "scissors") {
      result = "It's a tie!";
    }
    else if (computerSelection === "paper") {
      result = "You win! Scissors beats Paper";
    }
  }

  // player input paper
  if (playerChoice === "Paper") {
    if (computerSelection === "rock") {
      result = "You win! Paper beats Rock";
    }
    else if (computerSelection === "scissors") {
      result = "You lose! Scissors beats Paper";
    }
    else if (computerSelection === "paper") {
      result = "It's a tie!";
    }
  }

  return result;
}