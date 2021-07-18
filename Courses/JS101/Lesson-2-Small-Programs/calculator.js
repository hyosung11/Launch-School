// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for the operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Be user-focused!
const readlineSync = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log("What is the first number?");
let number1 = readlineSync.question();

console.log("What is the second number?");
let number2 = readlineSync.question();

console.log("What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readlineSync.question();

let output;

if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2'){
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is ${output}.`);