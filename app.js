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
    let playerScore = 0;
    let compScore = 0;

    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("Let's play ".concat(NUM_GAMES, " games."));
    
    for (let i=1; i<=NUM_GAMES; i++) {
	let playerSelection = prompt('Type in "Rock", "Paper", or "Scissors".');
	let computerSelection = getComputerChoice();

	let result = playRound(playerSelection, computerSelection);

	if (result != INVALID) {
	    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
	}
	
	switch(result){
	case WIN:
	    console.log("Round ".concat(i, ": Win. ", playerSelection, " beats ", computerSelection, "."));
	    playerScore += 1;
	    break;
	case LOSS:
	    console.log("Round ".concat(i, ": Loss. ", playerSelection, " does not beat ", computerSelection, "."));
	    compScore += 1;
	    break;
	case TIE:
	    console.log("Round ".concat(i, ": Tie. You both selected ", computerSelection));
	    break;
	default:
	    console.log("Pick a valid input, fucking idiot.");
	    compScore += 1;
	}
    }

    if (playerScore > compScore) {
	console.log("You win!");
    } else if (playerScore < compScore) {
	console.log("You lose!");
    } else {
	console.log("Fuck, it's a tie.");
    }
}

game()
