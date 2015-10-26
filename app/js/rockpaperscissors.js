////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	if (move = null) {
		return getInput();
	}
}

function getComputerMove(move) {
	if (move = null) {
		return randomPlay();
	}
}


function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove = "rock") {
    	if (computerMove = "rock") {
    		winner = "tie";
    	}
   		if (computerMove = "scissors") {
    		winner = "Player";
    	}
    	if (computerMove = "paper") {
    		winner = "Computer"
    	}
    }
	if (playerMove = "paper") {
    	if (computerMove = "rock") {
    		winner = "Player";
    	}
    	if (computerMove = "scissors") {
    		winner = "Computer";
    	}
   		if (computerMove = "paper") {
    		winner = "Tie"
    	}
    }
    if (playerMove = "scissors") {
    	if (computerMove = "rock") {
    		winner = "Computer";
    	}
    	if (computerMove = "scissors") {
    		winner = "Tie";
    	}
    	if (computerMove = "paper") {
    		winner = "Player"
    	}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var move;
    
    while (playerWins < 5 || computerWins < 5) {
    playerMove = getPlayerMove(move);
    computerMove = getComputerMove(move);
    winner = getWinner(playerMove,computerMove);
    if winner = "Computer" {
    	computerWins + 1;
    }
    if winner = "Player" {
    	playerWins + 1;
    }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  	console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');	
  	}
    return [playerWins, computerWins];
}

