/* Pseudocode
ask the user for the first number
ask the user for the second number
perform the operation
display the result of the operation

*/
const readline = require('readline-sync');

// add a calculator emoji?
console.log("Welcome to the Calculator!\n");

console.log("What is the first number?");
let number1 = readline.question();

console.log("\nWhat is the second number?");
let number2 = readline.question();

console.log("\nWhat operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;

if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`\nThe result is ${output}.\n`);
