// Input/ Output Exercises

// 1. Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// $ node greeter.js
// What is your name? Sue
// Hello, Sue!

/*
let readlineSync = require('readline-sync');
let name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);
*/

// 2. Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

// $ node greeter.js
// What is your first name? Sue
// What is your last name? Roberts
// Hello, Sue Roberts!

let readlineSync = require('readline-sync');
let firstName = readlineSync.question('What is your first name? ');
let lastName = readlineSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);