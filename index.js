// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
	// This function fills the button of the send index
	document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
	setTimeout(() => {
		if (confirm(`Horraaay, ${winner} wins!`)) {
			restartGame();
		}
	}, 100);
}
function drawAlert() {
	setTimeout(() => {
		if (confirm("No one wins!")) {
			restartGame();
		}
	}, 100);
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

let counter = 0;
let g = ["", "", "", "", "", "", "", "", ""];
function clickButton(index) {
	// Your main code here.
	// counter % 2 == 0 ? fillButton(index, "x") : fillButton(index, "o");
	if (g[index - 1] === "") {
		const currPlayer = counter % 2 == 0 ? "x" : "o";
		if (currPlayer === "x") {
			document.getElementById(index).classList.add("green");
		} else {
			document.getElementById(index).classList.add("red");
		}
		fillButton(index, currPlayer);
		g[index - 1] = currPlayer;
		checkWinner(currPlayer);
		counter++;
		console.log(`
		Button number ${index} is clicked
		Counter: ${counter}
		Grid: ${g}
		`);
	}
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O

function checkPlayer(index) {}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */

function checkWinner(p) {
	const r1 = [g[0], g[1], g[2]].join("") === [p, p, p].join("");
	const r2 = [g[3], g[4], g[5]].join("") === [p, p, p].join("");
	const r3 = [g[6], g[7], g[8]].join("") === [p, p, p].join("");
	const c1 = [g[0], g[3], g[6]].join("") === [p, p, p].join("");
	const c2 = [g[1], g[4], g[7]].join("") === [p, p, p].join("");
	const c3 = [g[2], g[5], g[8]].join("") === [p, p, p].join("");
	const d1 = [g[0], g[4], g[8]].join("") === [p, p, p].join("");
	const d2 = [g[2], g[4], g[6]].join("") === [p, p, p].join("");

	if (r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2) {
		winningAlert(p);
	}
}

function restartGame() {
	counter = 0;
	g = ["", "", "", "", "", "", "", "", ""];
	for (let i = 1; i < 10; i++) {
		fillButton(i, "");
	}
}
