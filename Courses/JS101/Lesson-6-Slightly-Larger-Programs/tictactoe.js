const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board)
                           .filter(key => board[key] === INITIAL_MARKER);

  while (true) {
    prompt(`Choose a square ${emptySquares.join(', ')}:`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;

    prompt("That's not a valid choice.");

  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board)
                           .filter((key) => board[key] === INITIAL_MARKER);

  let randomIndex = Math.floor(Math.random() * emptySquares.length);
  let square = emptySquares[randomIndex];

  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);
playerChoosesSquare(board);
displayBoard(board);
