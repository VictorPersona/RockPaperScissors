function computerSelection() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
     let result;
  if (player === computer) {
    result=("Both threw", player, "It is Tie");
  } else if ((player === "rock", "Rock", "ROCK")) {
    if (computer === "Paper") {
      result=("Computer threw", computer, "You lose");
       ++computerScore;
    } else if (computer === "Scissors") {
      result=("Computer threw", computer, "You Won");
       ++playerScore;
    } else if (computer === "Rock") {
      result=("Computer threw", computer, "It is Tie");
    }
  } else if ((player === "Paper", "PAPER", "paper")) {
    if (computer === "Paper") {
      result=("Computer threw", computer, "It is Tie");
    } else if (computer === "Scissors") {
      result=("Computer threw", computer, "You Lost");
       ++computerScore;
    } else if (computer === "Rock") {
      result=("Computer threw", computer, "You Won");
       ++playerScore;
    }
  } else if ((player === "Scissors", "SCISSORS", "scissors")) {
    if (computer === "Paper") {
      result=("Computer threw", computer, "You Won");
       ++playerScore;
    } else if (computer === "Scissors") {
      result=("Computer threw", computer, "It is Tie");
    } else if (computer === "Rock") {
      result=("Computer threw", computer, "You Lost");
       ++computerScore;
    }
}const consoleElement = document.getElementById("consoleElement");
  consoleElement.textContent = result;

  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
var playerScore = 0;
var computerScore = 0;

function game() {
  playRound(playerSelection, computerSelection());
  document.getElementById("scoreBoard").innerHTML = `
  <p>Your Score is ${playerScore}</p>
  <p>Computer's Score is ${computerScore}</p>
  <hr>
`;
}

const container = document.querySelector("#container");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add("content");
rock.textContent = "Rock";
container.appendChild(rock);
rock.addEventListener("click", () => {
  playerSelection = "Rock";
  game();
});

paper.classList.add("content");
paper.textContent = "Paper";
container.appendChild(paper);
paper.addEventListener("click", () => {
  playerSelection = "Paper";
  game();
});

scissors.classList.add("content");
scissors.textContent = "Scissors";
container.appendChild(scissors);
scissors.addEventListener("click", () => {
  playerSelection = "Scissors";
  game();
});



