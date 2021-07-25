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

Internationalization

Your calculator program is a hit, and it's being used all over the world! The problem is, not everyone speaks English. You now need to internationalize the messages in your calculator. You've already done the hard work of extracting all the messages to a configuration file. Now, all you have to do is send that configuration file to translators and call the right translation in your code.

Hint

Modify your JSON file to use nested structures; the outermost structure should use a key to identify the language, while the inner structures should contain the messages that pertain to that language.

Solution

First, we must reorganize our JSON configuration a little bit to account for different languages. We'll nest the message keys under a top-level language, thereby organizing all the values. Here's an example:

{
  "en": {
    "welcome": "Welcome to Calculator! Enter your name:",
    "validName": "Make sure to enter a valid name."
  },
  "es": {
    "welcome": "Bienvenido a la calculadora! Entre su nombre:",
    "validName": "Asegúrese de entrar un nombre válido."
  }
}

Note that we're using two top-level keys here to distinguish between English messages and Spanish messages. We could have as many top-level keys as we want to -- one for each language our program supports.

Next, we have to study how this change affects our `MESSAGES` object. If we do a `console.log(MESSAGES)` in our program, we'll see that it's still an object, except it's now a nested one. That means we must use a language key first, then the message. For example, we can get the Spanish welcome message like this:

MESSAGES['es']['welcome'];

Because we'll need the language key every time we reference the message, let's move that to a function that we can call. That way, we can pass in the language to the method, which can then reference the MESSAGES object.

function messages(message, lang='en-us') {
  return MESSAAGES[lang][message];
}

This now means we can do this in our program:

// english
prompt(messages('welcome'));       // => Welcome to Calculator!

// english
prompt(messages('welcome', 'en-us')); // => Welcome to Calculator!

// spanish
prompt(messages('welcome', 'es')); // => Bienvenido a la calculadora!

The last piece is setting a default language for your program.

// top of calculator_practice.js
const LANGUAGE = 'en-us';

*/
const MESSAGES = require('./calculator_practice_messages.json');
const LANGUAGE = 'en-us';
const readline = require('readline-sync');

function messages(message, lang = 'en-us') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// replacec this:
// prompt("Welcome to the Calculator!");

// with this:
prompt('welcome');

while (true) {
  prompt('number1');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('number2');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('operationChoice');
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

  console.log(`The result is ${output}.`);

  prompt('anotherCalculation');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') {
    prompt('thanks');
    break;
  }
}

