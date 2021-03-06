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

// Version 2 via video
// const readline = require('readline-sync');

// function prompt(msg) {
//   console.log(`==> ${msg}`)
// }

// function invalidNumber(num) {
//   return num.trimStart() === '' || Number.isNaN(Number(num));
// }

// prompt('Welcome to the Calculator!');

// prompt('What is the first number?');
// let number1 = readline.question();

// while (invalidNumber(number1)) {
//   prompt("Hmmm ... that doesn't look like a valid number.");
//   number1 = readline.question();
// }

// prompt('What is the second number?');
// let number2 = readline.question();

// while (invalidNumber(number2)) {
//   prompt("Hmmm ... that doesn't look like a valid number.");
//   number2 = readline.question();
// }

// prompt('What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
// );
// let operation = readline.question();

// while (!['1', '2', '3', '4'].includes(operation)) {
//   prompt("Please choose 1, 2, 3, or 4.");
//   operation = readline.question();
// }

// let output;

// switch (operation) {
//   case '1':
//     output = Number(number1) + Number(number2);
//     break;
//   case '2':
//     output = Number(number1) - Number(number2);
//     break;
//   case '3':
//     output = Number(number1) * Number(number2);
//     break;
//   case '4':
//     output = Number(number1) / Number(number2);
//     break;
// }

// prompt(`The result is ${output}.`);

// =============================================

// Version 3 via book
// const readline = require('readline-sync');

// function invalidNumber(number) {
//   return number.trimStart() === '' || Number.isNaN(Number(number));
// }

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// prompt("Welcome to Calculator!");

// prompt("What's the first number?");
// let number1 = readline.question();

// while (invalidNumber(number1)) {
//   prompt("Hmm ... that doesn't look like a valid first number.");
//   number1 = readline.question();
// }

// prompt("What's the second number?");
// let number2 = readline.question();

// while (invalidNumber(number2)) {
//   prompt("Hmm ... that doesn't look like a valid second number.");
//   number2 = readline.question();
// }

// prompt("What operation do you want to perform?\n1) Add 2) Subtract
// 3) Multiply 4) Divide");
// let operation = readline.question();

// while (!['1', '2', '3', '4'].includes(operation)) {
//   prompt("Please choose 1, 2, 3, or 4");
//   operation = readline.question();
// }

// let output;

// switch (operation) {
//   case '1':
//     output = Number(number1) + Number(number2);
//     break;
//   case '2':
//     output = Number(number1) - Number(number2);
//     break;
//   case '3':
//     output = Number(number1) * Number(number2);
//     break;
//   case '4':
//     output = Number(number1) / Number(number2);
//     break;
// }

// prompt(`The result is ${output}.`);

/*
 Asking for another calculation

Currently, our calculator asks the user for two numbers and an operation and
then exits after displaying the result. Wouldn't it be nice if we could ask
the user if they wanted to perform another calculation and start a new
calculation when they respond with yes?
*/

// ================================================

// Version 4
// const readline = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function invalidNumber(number) {
//   return number.trimStart() === '' || Number.isNaN(Number(number));
// }

// prompt('Welcome to Calculator!');

// while (true) {
//   // ask for two numbers
//   // ask for operation
//   // perform operation and display results

//   prompt("What's the first number?");
//   let number1 = readline.question();

//   while (invalidNumber(number1)) {
//     prompt("Hmm ... that doesn't look like a valid first number.");
//     number1 = readline.question();
//   }

//   prompt("What's the second number?");
//   let number2 = readline.question();

//   while (invalidNumber(number2)) {
//     prompt("Hmm ... that doesn't look like a valid second number.");
//     number2 = readline.question();
//   }

//   prompt(
//     'What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
//   );
//   let operation = readline.question();

//   while (!['1', '2', '3', '4'].includes(operation)) {
//     prompt('Please choose 1, 2, 3, or 4');
//     operation = readline.question();
//   }

//   let output;

//   switch (operation) {
//     case '1':
//       output = Number(number1) + Number(number2);
//       break;
//     case '2':
//       output = Number(number1) - Number(number2);
//       break;
//     case '3':
//       output = Number(number1) * Number(number2);
//       break;
//     case '4':
//       output = Number(number1) / Number(number2);
//       break;
//   }

//   prompt(`The result is ${output}.`);

//   prompt('Do you want to perform another operation? (y/n)');
//   let answer = readline.question();

//   if (answer[0].toLowerCase() !== 'y') break;
// }

// ==============================

// Version 5 - Configuration File

// at the top of the file
// const MESSAGES = require('./calculator_messages.json');

// const readline = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function invalidNumber(number) {
//   return number.trimStart() === '' || Number.isNaN(Number(number));
// }

// prompt(MESSAGES['welcome']);

// while (true) {
//   // ask for two numbers
//   // ask for operation
//   // perform operation and display results

//   prompt(MESSAGES['firstNumber']);
//   let number1 = readline.question();

//   while (invalidNumber(number1)) {
//     prompt("Hmm ... that doesn't look like a valid first number.");
//     number1 = readline.question();
//   }

//   prompt(MESSAGES['secondNumber']);
//   let number2 = readline.question();

//   while (invalidNumber(number2)) {
//     prompt("Hmm ... that doesn't look like a valid second number.");
//     number2 = readline.question();
//   }

//   prompt(
//     'What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
//   );
//   let operation = readline.question();

//   while (!['1', '2', '3', '4'].includes(operation)) {
//     prompt('Please choose 1, 2, 3, or 4');
//     operation = readline.question();
//   }

//   let output;

//   switch (operation) {
//     case '1':
//       output = Number(number1) + Number(number2);
//       break;
//     case '2':
//       output = Number(number1) - Number(number2);
//       break;
//     case '3':
//       output = Number(number1) * Number(number2);
//       break;
//     case '4':
//       output = Number(number1) / Number(number2);
//       break;
//   }

//   prompt(`The result is ${output}.\n`);

//   prompt('Do you want to perform another operation? (y/n)');
//   let answer = readline.question();

//   if (answer[0].toLowerCase() !== 'y') break;
// }

// ==============================

// Version 6 Internationalization

// at the top of the file
const MESSAGES = require('./calculator_messages.json');

// top of calculator.js
const LANGUAGE = 'en';

const readline = require('readline-sync');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

prompt('welcome');
// english
// prompt(messages('welcome')); // => Welcome to Calculator! Enter your name:

// english
// prompt(messages('welcome', 'en')); // => Welcome to Calculator! Enter your name:

// spanish
// prompt(messages('welcome', 'es')); // => Bienvenido a la calculadora! Entre su nombre:

// prompt(messages('welcome', LANGUAGE));

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// prompt(MESSAGES['welcome']);


while (true) {

  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm ... that doesn't look like a valid first number.");
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm ... that doesn't look like a valid second number.");
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Please choose 1, 2, 3, or 4');
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

  console.log(`==> The result is ${output}.`);

  prompt("anotherOperation");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}