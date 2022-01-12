// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
	// This function fills the button of the send index
	document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
	confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let term = 0;
const winningState1 = [1, 2, 3];
const winningState2 = [4, 5, 6];
const winningState3 = [7, 8, 9];
const winningState4 = [1, 5, 9];
const winningState5 = [3, 5, 7];
const winningState6 = [1, 4, 7];
const winningState7 = [2, 5, 8];
const winningState8 = [3, 5, 9];

function clickButton(index) {
	console.log(`Button number ${index} is clicked`);
	// Your main code here.
	fillButton(index, checkPlayer());
	checkWinner();
	term++;
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O

function checkPlayer() {
	if (term % 2 === 0) {
		return "x";
	} else {
		return "o";
	}
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */

function checkWinner() {
	let isWin =
		checkWinningState(winningState1) ||
		checkWinningState(winningState2) ||
		checkWinningState(winningState3) ||
		checkWinningState(winningState4) ||
		checkWinningState(winningState5) ||
		checkWinningState(winningState6) ||
		checkWinningState(winningState7) ||
		checkWinningState(winningState8);

	if (isWin) {
		winningAlert(checkPlayer());
		restartGame();
	}
}
function checkWinningState(winningState) {
	const value1 = document.getElementById(winningState[0]).innerHTML;
	const value2 = document.getElementById(winningState[1]).innerHTML;
	const value3 = document.getElementById(winningState[2]).innerHTML;
	return value1 !== "" && value1 === value2 && value2 === value3;
}

// winningState = [1, 2, 3]

function restartGame() {
	for (let i = 1; i <= 9; i++) {
		fillButton(i, "");
	}
	term = -1;
}
