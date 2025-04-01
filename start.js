"use strict";
let playerOneScore = 0;  // human
let playerTwoScore = 0;  // pc
const choices = ["rock", "paper", "scissors"];
let playerOneOption;
let playerTwoOption;

const WINNER_GAME_Score = 5;
let roundNum = 0;

const start = document.querySelector("#start-id");
const plyer_one_hand = document.querySelector("#player-one-hand");
const plyer_one_hand_img = document.querySelector("#player-one-hand-img");
const plyer_two_hand = document.querySelector("#player-two-hand");
const plyer_two_hand_img = document.querySelector("#player-two-hand-img");
const options = document.querySelector(".options");
let buttons = document.querySelectorAll(".option");

buttons.forEach(button => button.style.display = "none");

// Get player One option
function getPlayerOneOption() {
  if (playerOneOption === "rock" ||
    playerOneOption === "paper" ||
    playerOneOption === "scissors") {
    return playerOneOption;
  } else {
    console.log("Player didn't click on any option");
    return null;
  }
}

// Get player Two option
function getPlayerTwoOption() {
  return playerTwoOption = choices[Math.floor(Math.random() * 3)];
}

// check who is win
function playRound() {
  if (playerOneOption === playerTwoOption) {
    playersTide();
    console.log('tide');
  }
  else {
    if (playerTwoOption === "rock") {
      if (playerOneOption === "scissors") {
        incrementPlayerTwoScore();
        playerTowWin();
      }
      else {
        incrementPlayerOneScore();
        playerOneWin();
      }
    }
    if (playerTwoOption === "scissors") {
      if (playerOneOption === "paper") {
        incrementPlayerTwoScore();
        playerTowWin();
      }
      else {
        incrementPlayerOneScore();
        playerOneWin();
      }
    }
    if (playerTwoOption === "paper") {
      if (playerOneOption === "rock") {
        incrementPlayerTwoScore();
        playerTowWin();
      }
      else {
        incrementPlayerOneScore();
        playerOneWin();
      }
    }
  }
 
}

// Score
function incrementPlayerOneScore() {
  playerOneScore++;
}

function incrementPlayerTwoScore() {
  playerTwoScore++;
}

function playerOneWin() {
  let ele_1 = document.querySelector(`.player-one-round-${roundNum}`);
  let ele_2 = document.querySelector(`.player-two-round-${roundNum}`);
  ele_1.classList.add('win');
  ele_2.classList.add('lost');
}

function playerTowWin() {
  let ele_1 = document.querySelector(`.player-one-round-${roundNum}`);
  let ele_2 = document.querySelector(`.player-two-round-${roundNum}`);
  ele_1.classList.add('lost');
  ele_2.classList.add('win');
}

function playersTide() {
  let ele_1 = document.querySelector(`.player-one-round-${roundNum}`);
  let ele_2 = document.querySelector(`.player-two-round-${roundNum}`);
  ele_1.classList.add('lost');
  ele_2.classList.add('lost');
}

function getScores() {
  console.log(playerOneScore);
  console.log(playerTwoScore);
}

// Hands
function shakeHand() {
  plyer_one_hand.classList.add('player-one-hand-shake');
  plyer_two_hand.classList.add('player-two-hand-shake');
}
function removeShakeHand() {
  plyer_one_hand.classList.remove('player-one-hand-shake');
  plyer_two_hand.classList.remove('player-two-hand-shake');
}

//  Game Start

options.addEventListener('click', (e) => {
    roundNum++;
    if (roundNum < 6) {
      shakeHand();
      playerOneOption = e.target.id;
      playerOneOption = getPlayerOneOption();
      playerTwoOption = getPlayerTwoOption();
      if (playerOneOption === null) return;
      if (playerTwoOption === null) playerTwoOption = "rock";

      // if(playerOneOption === null || playerTwoOption === null) return;
      setTimeout(() => {
        playRound();
      }, 3000);

    } else {
      console.log("Game End! Show the Scores");
     
    }

    // Prevent the user from clicking during the game.
    buttons.forEach(button => button.disabled = true);
    setTimeout(() => {
      buttons.forEach(button => button.disabled = false);
      removeShakeHand();
      plyer_one_hand_img.src ="../assets/img/" + playerOneOption + "-left.png";
      plyer_two_hand_img.src ="../assets/img/" + playerTwoOption + "-right.png";
      start.style.display = "none";
      if (roundNum == 5) {
        start.style.display = "block";
        buttons.forEach(button => button.style.display = "none");
        getScores();
      }
    }, 3000);
    plyer_one_hand_img.src = "../assets/img/rock-left.png";
    plyer_two_hand_img.src = "../assets/img/rock-right.png";
    
   
})

// Start New Game
function startNewGame() {
  plyer_one_hand_img.src = "../assets/img/rock-left.png";
  plyer_two_hand_img.src = "../assets/img/rock-right.png";
  start.style.display = "none";
  buttons.forEach(button => button.style.display = "block");
  roundNum = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  let rounds = document.querySelectorAll(`.round`);
  rounds.forEach((round) => {
    round.classList.remove('win');
    round.classList.remove('lost');
  })
}

start.addEventListener('click', startNewGame);


