const TIE = "It's a tie!"
const WIN = "You win!"
const LOSS = "You lose!"
const INVALID = "Invalid input, idiot!";
const NUM_GAMES = 5

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);

    switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    default: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let wlt;

    switch(playerSelection) {
    case "rock":
	switch (computerSelection) {
	case "rock": return wlt = TIE;
	case "paper": return wlt = LOSS;
	case "scissors": return wlt = WIN;
	}
    case "paper":
	switch (computerSelection) {
	case "rock": return wlt = WIN;
	case "paper": return wlt = TIE;
	case "scissors": return wlt = LOSS;
	}
    case "scissors":
	switch (computerSelection) {
	case "rock": return wlt = LOSS;
	case "paper": return wlt = WIN;
	case "scissors": return wlt = TIE;
	}
    default:
	return INVALID;
    }

}

function game() {
    
}

let playerChoice = "";
/*
// Grab buttons
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

// Add event listeners to buttons and record the player's choice when the button is clicked
rockButton.addEventListener('click', function(e) {
    playerChoice = "rock";
    console.log(playerChoice);
});

paperButton.addEventListener('click', function(e) {
    playerChoice = "paper";
    console.log(playerChoice);
});

scissorsButton.addEventListener('click', function(e) {
    playerChoice = "scissors";
    console.log(playerChoice);
});
*/

// Test
const buttons = document.querySelectorAll('.choice');
const playAgain = document.querySelector('#replay');
const picks = document.querySelector('#picks');
const html = document.querySelector('#result');
let computerChoice = "";
let playerPts = 0;
let computerPts = 0;
let result = "";
let resultText = "";

buttons.forEach(button => button.addEventListener('click', function (e) {
    let playerChoice = e.srcElement.getAttribute('data-choice');
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);

    let pickText = "You picked " + playerChoice + ". The computer picked " + computerChoice + ".";
    
    if (result == WIN) {
	playerPts++;
	if (playerPts == 5) {
	    resultText = "Congratulations! You win!\nFinal Score: " + playerPts + "-" + computerPts;
	} else {
	    resultText = "Round Win. Score: " + playerPts + "-" + computerPts;
	}
    } else if (result == LOSS) {
	computerPts++;
	if (computerPts == 5) {
	    resultText = "You lose, you stupid!\nFinal Score: " + playerPts + "-" + computerPts;
	} else {
	    resultText = "Round Loss. Score: " + playerPts + "-" + computerPts;
	}
    } else {
	resultText = "Round Tie. Score: " + playerPts + "-" + computerPts;
    }

    // Disable choice buttons;
    if (playerPts == 5 || computerPts == 5) {
	buttons.forEach(button => button.disabled = true);
	playAgain.removeAttribute('hidden');
    }
    
    picks.innerHTML = pickText;
    html.innerHTML = resultText;
    
}));

playAgain.addEventListener('click', function (e) {
    buttons.forEach(button => button.disabled = false);
    playAgain.setAttribute('hidden', 'hidden');
    playerPts = 0;
    computerPts = 0;
    picks.innerHTML = "";
    html.innerHTML = "";
});

game()
