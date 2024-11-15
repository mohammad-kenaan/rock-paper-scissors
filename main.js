"use strict";

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

init();

function init() {
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
if (humanChoice === null) console.log("Game End");

}


function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("choose one of these options: Rock, Paper or scissors");
  if (choice === null) return null;
  choice = choice.toLowerCase().trim();
  while(!choices.includes(choice)){
     choice = prompt("Invalid choice! choose one of these options: Rock, Paper or scissors");
     if (choice === null) return null;
  }
  return choice;
}