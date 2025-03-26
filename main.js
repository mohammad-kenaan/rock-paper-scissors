"use strict";

let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let humanChoice;
const GAME_ROUNDS = 5;

init();

function init() {

  //playGame(GAME_ROUNDS);
}

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log(`%c Round ${i}`, `
      padding: 25px 100px 25px 100px; background-color: teal;`);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === null) {
      console.log("Game Over");
      return;
    }
    playRound(computerChoice, humanChoice);
  }
  getResult();
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Choose one of these options: Rock, Paper or Scissors");

  while (true) {
    if (choice === null) return null;
    choice = choice.toLowerCase().trim();
    if (choices.includes(choice)) break;
    choice = prompt("Invalid choice! choose one of these options: Rock, Paper or Scissors");
  }
  return choice;
}


function playRound(computerChoice, humanChoice) {

  console.log(`Computer choice: %c ${computerChoice}`, `color: wheat`);
  console.log(`User choice: %c ${humanChoice}`, `color: wheat`);

  if (computerChoice === humanChoice) console.log("%cWe tied!", "font-size: 20px; color: gray");
  else {
    if (computerChoice === "rock") {
      if (humanChoice === "scissors") incrementComputerScore();
      else incrementHumanScore();
    }
    if (computerChoice === "scissors") {
      if (humanChoice === "paper") incrementComputerScore();
      else incrementHumanScore();
    }
    if (computerChoice === "paper") {
      if (humanChoice === "rock") incrementComputerScore();
      else incrementHumanScore();
    }
  }
  getScores();
}


function incrementComputerScore() {
  computerScore++;
  console.log(`%cYou lose this round! %c${computerChoice} beats ${humanChoice}`, `color: orange; font-size: 16px`, `color: white; font-size: 12px`);
}

function incrementHumanScore() {
  humanScore++;
  console.log(`%cYou win this round! %c${humanChoice} beats ${computerChoice}`, `color: lime; font-size: 16px`, `color: white; font-size: 12px`);
}

function getScores() {
  console.group(`The scores are:`);
  console.log(`Computer: ${computerScore}`);
  console.log(`Human: ${humanScore}`);
  console.groupEnd();
}

function getResult() {
  console.log(`%c The Game is Over!`, `padding: 10px 65px; background-color: gray; color: black`);
  const winner = humanScore > computerScore ? "Congrats! You won the game" : humanScore < computerScore ? "You lost the game" : "We tied";
  console.log(`%c${winner}`, ` font-size: 24px; color:tomato`);
}

