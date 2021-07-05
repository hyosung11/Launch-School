// Functions Exercises

// 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// function getName(prompt) {
//   let readlineSync = require("readline-sync");
//   let name = readlineSync.question(prompt);
//   return name;
// }

// let firstName = getName("What is your first name? ");
// let lastName = getName("What is your last name? ");
// console.log(`Hello, ${firstName} ${lastName}!`);

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt))
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);