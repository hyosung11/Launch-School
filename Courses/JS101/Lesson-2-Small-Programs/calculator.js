// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for the operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Be user-focused!
// Version 1
// const readline = require('readline-sync');

// console.log("Welcome to the Calculator!");

// console.log("What is the first number?");
// let number1 = readline.question();

// console.log("What is the second number?");
// let number2 = readline.question();

// console.log("What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
// let operation = readline.question();

// let output;

// if (operation === '1') {
//   output = Number(number1) + Number(number2);
// } else if (operation === '2'){
//   output = Number(number1) - Number(number2);
// } else if (operation === '3') {
//   output = Number(number1) * Number(number2);
// } else if (operation === '4') {
//   output = Number(number1) / Number(number2);
// }

// console.log(`The result is ${output}.`);

// ============================================

// Version 2
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`)
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm ... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmmm ... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Please choose 1, 2, 3, or 4.");
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}.`);

