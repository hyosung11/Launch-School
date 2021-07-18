/* JS101 -Small Problems > Easy 2  > 2. Greeting a user

Greeting a user
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

---
PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: user's name as a string
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- get user's name
- greet the user
  - return standard greeting or
  - return screaming greeting

Identify rules

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary: string to ALL CAPS
- output: string

ALGORITHM
Steps for converting input to output
install readline-sync
-ask user for name
-capture user input as var name
if name ends with '!', log Hello name, why are we screaming in all caps
else, just log Hello name

CODE
Implementation of Algorithm

- test code while programming

*/

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

// name.endsWith('1')