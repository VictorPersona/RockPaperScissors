function playerSelection(){
     var choices =["Rock", "Paper", "Scissors"];
     let move =  choices[Math.floor((Math.random())*choices.length)];
     return prompt("Throw Your Move",move);
}

function computerSelection(){
     const choices =["Rock", "Paper", "Scissors"];
    return choices[Math.floor((Math.random())*3)];
}

function playRound(player,computer){
if(player === computer){
     console.log("Both threw",player,"It is Tie")
}
else if(player === "rock", "Rock", "ROCK"){
          if (computer === "Paper"){
               console.log("Computer threw",computer,"You lose");
               return ++computerScore
          }
          else if (computer === "Scissors"){
               console.log("Computer threw",computer,"You Won");
               return ++playerScore
          }
          else if (computer === "Rock"){
               console.log("Computer threw",computer,"It is Tie");
          }
     }
 else if(player ===  "Paper", "PAPER", "paper"){
          if (computer === "Paper"){
               console.log("Computer threw",computer,"It is Tie");
          }
          else if (computer === "Scissors"){
               console.log("Computer threw",computer,"You Lost");
               return ++computerScore
               
          }
          else if (computer === "Rock"){
               console.log("Computer threw",computer,"You Won");
               return ++playerScore
          }
}
else if(player === "Scissors", "SCISSORS", "scissors"){
     if (computer === "Paper"){
          console.log("Computer threw",computer,"You Won");
          return ++playerScore
     }
     else if (computer === "Scissors"){
          console.log("Computer threw",computer,"It is Tie");
     }
     else if (computer === "Rock"){
          console.log("Computer threw",computer,"You Lost");
          return ++computerScore
     }
}
}
var playerScore = 0;
var computerScore = 0;

function game(){
     for (let i = 0; i < 5; i++) {
          playRound(playerSelection(),computerSelection())
          console.log("Your Score is ",playerScore,"Computer's Score is",computerScore );
          console.log("----------------------------------------------");
       }
}

console.log(game());