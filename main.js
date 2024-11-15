"use strict";

let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let humanChoice;

init();

function init() {
  for (let i = 1; i <= 5; i++) {
    console.log(`%c Round Number: ${i}`, `padding: 25px 100px 25px 100px; background-color: teal;`);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    if (humanChoice === null)  break;
    if( i === 5 )  getResult();
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("choose one of these options: Rock, Paper or scissors");
  if (choice === null) return null;
  choice = choice.toLowerCase().trim();
  while (!choices.includes(choice)) {
    choice = prompt("Invalid choice! choose one of these options: Rock, Paper or scissors");
    if (choice === null) return null;
  }
  return choice;
}


function playRound(computerChoice, humanChoice) {
  if (humanChoice === null) {
    console.log("Game Over");
    return;
  }
  console.log(`computer choice: %c ${computerChoice}`, `color: wheat`);
  console.log(`User choice: %c ${humanChoice}`, `color: wheat`);

  if (computerChoice === humanChoice) console.log("%cWe tied!", "font-size: 20px; color: gray");
  if (computerChoice === "rock" && humanChoice !== "rock") {
    if (humanChoice === "scissors") computerWin();
    else humanWin();
  }
  if (computerChoice === "scissors" && humanChoice !== "scissors") {
    if (humanChoice === "paper") computerWin();
    else humanWin();
  }
  if (computerChoice === "paper" && humanChoice !== "paper") {
    if (humanChoice === "rock") computerWin();
    else humanWin();
  }

}


function computerWin() {
  computerScore++;
  console.log(`%cYou lose! %c${computerChoice} beats ${humanChoice}`,`color: orange; font-size: 16px`,`color: white; font-size: 12px`);
  getScores();
}

function humanWin() {
  humanScore++;
  console.log(`%cYou win! %c${humanChoice} beats ${computerChoice}`, `color: lime; font-size: 16px`, `color: white; font-size: 12px` );
  getScores();
}

function getScores() {
  console.group(`The scores are:`);
  if (computerScore > humanScore){
  console.log(`%c Computer: %c ${computerScore}`, `color: lime `, `color: white`);
  console.log(`%c Human: %c ${humanScore}`, `color: orange`, `color: white`);
  }
  else if (computerScore === humanScore){
    console.log(`%c Computer: %c ${computerScore}`, `color: tomato `, `color: white`);
    console.log(`%c Human: %c ${humanScore}`, `color: tomato`, `color: white`);
    }
  else {
    console.log(`%c Computer: %c ${computerScore}`,`color: orange`, `color: white`);
    console.log(`%c Human: %c ${humanScore}`, `color: lime`, `color: white`);
  }
  console.groupEnd();
}

function getResult() {
  console.log(`%c The Game is Over!` , `padding: 25px 100px 25px 100px; background-color: white; color: black` );
  const winner = humanScore > computerScore ? "Congrats! You are the winner" : humanScore < computerScore ?  "the winner is the computer " : "We tied";
  console.log( `%c  ${winner}`, `padding: 25px 50px; font-size: 24px; color:tomato`);
}