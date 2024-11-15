"use strict";

init();

function init() {
 console.log(getComputerChoice());
}


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

