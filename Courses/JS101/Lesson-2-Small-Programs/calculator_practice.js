/* Pseudocode
ask the user for the first number
ask the user for the second number
perform the operation
display the result of the operation

*/
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the Calculator!");

while (true) {
  prompt('What is the first number?');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Not a valid number. Please try again.");
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Not a valid number. Please try again.");
    number2 = readline.question();
  }

  prompt(
    'What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
  );
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Please choose 1, 2, 3 or 4.');
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

  prompt("Do you want to perform another calculation? (y/n");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}
