// Input/ Output Exercises

// 1. Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

// $ node greeter.js
// What is your name? Sue
// Hello, Sue!

let readlineSync = require('readline-sync');
let name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);

// 2. 