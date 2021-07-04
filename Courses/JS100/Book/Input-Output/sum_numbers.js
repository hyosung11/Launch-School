// Example: Add Two Numbers Together

/*
let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

$ node sum_numbers.js
Enter the first number
2
Enter the second number
3
The numbers 2 and 3 add to 23
*/

// Hmm. Something isn't right. The program reports that the result is 23, not 5 like we want. Where do you think the problem lies? If you said that question returns strings so + performs concatenation, you're right! Since number1 and number2 both hold string values instead of numbers, the + operator concatenates them instead of adding them. If you want to add two variables arithmetically, both variables must have the Number data type. //

let rlSync = require("readline-sync");

let number1 = Number(rlSync.question("Enter the first number\n"));
let number2 = Number(rlSync.question("Enter the second number\n"));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

/* 
Enter the first number
2
Enter the second number
3
The numbers 2 and 3 add to 5 
*/