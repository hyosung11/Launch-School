/* Walk-through: Rock Paper Scissors - Video Version

Pseudocode
1. Ask the user for their move.
2. Computer chooses it's move.
3. Display who won/the result.
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice. Choose again:");
  choice = readline.question();
}

let randomIndex = (Math.floor(Math.random() * VALID_CHOICES.length));
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}. The Computer chose ${computerChoice}.`);
