/* Pseudocode
ask the user for the first number
ask the user for the second number
perform the operation
display the result of the operation

Extract messages in the program to a configuration file.

There are several messages sprinkled throughout the program. Can we move them into some configuration file and access them by key? That would let us manage the messages more easily, and we could even internationalize the messages.

Hints
- Use the JSON format to store messages in a file called `calculator_practice_messages.json`
- Use `require('./calculator_practice_messages.json`) to load the file into your program as an object.
- Access the messages from the object with object property access syntax.

Solution

First, we need to extract the messages into a configuration file. We can use any format, from plain text files to YAML to CSV. Npm has libraries that can help with parsing those formats, but we're not yet ready to tackle npm libraries. Most JavaScript developers prefer the JSON format, so we'll use that. We'll extract our messages into a file named `calculator_practice_messages.json. Make sure this file is in the same directory as your calculator program.

As you can see, our JSON configuration is just a list of key/value pairs like a JavaScript object. We only show two key-value pairs, but you can add more. Just be sure to follow the syntax shown.

calculator_practice_messages.json

{
  "welcome": "Welcome to Calculator!",
  "firstNumber": "What is the first number?"
}

load `calculator_practice_messages` into the program at the top of the file
This line will load the contents of the calculator_messages.json file in the form of an object and assign it to the MESSAGES constant. Since it's an ordinary object, we don't have to do anything before we use it. We can just start accessing its properties as needed:

*/
const MESSAGES = require('./calculator_practice_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// replacec this:
// prompt("Welcome to the Calculator!");

// with this:
prompt(MESSAGES['welcome']);

while (true) {
  prompt(MESSAGES['number1']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGES['number2']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGES['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['operationChoice']);
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

  prompt(MESSAGES['anotherCalculation']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y')
    prompt(MESSAGES['thanks']);
    break;
}
