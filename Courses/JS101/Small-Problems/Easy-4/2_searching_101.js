/* JS101 - Small Problems > Easy 4 > 2. Searching 101

Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: numbers
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- get six numbers from user
- determine if last number appears in list of first five numbers
- log result to console

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?
- range of numbers allowed?
- validate user input if not a number?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input
- intermediary
- output

ALGORITHM
Steps for converting input to output
- require `readline-sync`
- prompt user for six numbers
- check if last number was also one of the first five numbers
- return message with result

CODE
Implementation of Algorithm
- test code while programming */

// let readlineSync = require('readline-sync');

// let numbers = [];

// console.log("Enter the 1st number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log('Enter the 2nd number:');
// numbers.push(Number(readlineSync.prompt()));
// console.log('Enter the 3rd number:');
// numbers.push(Number(readlineSync.prompt()));
// console.log('Enter the 4th number:');
// numbers.push(Number(readlineSync.prompt()));
// console.log('Enter the 5th number:');
// numbers.push(Number(readlineSync.prompt()));
// console.log('Enter the last number:');
// const lastNumber = Number(readlineSync.prompt());

// if (numbers.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in ${numbers}`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in ${numbers}`);
// }

/* Discussion

The solution repeatedly asks the user for a number and pushes it into the `numbers` array declared at the top. The solution uses Array methods. Notice, in particular, the use of the Array.prototype.includes method to test whether a number is included in the set of numbers. Be sure to check out the documentation to have a better understanding of the available methods.

Further Exploration

What if the problem was looking for a number that satisfies some condition (e.g., a number greater than 25), instead of a specific number? Would the current solution still work? Why or why not? Think about this first before scrolling down.

Possible Solution:

function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}

Explore the Array.prototype.some method, and see if you can change the possible solution shown above to make use of that method instead. */

/* Antonina's Solution

I'm only posting the first part of the exercise to show the use of readline-sync's method .questionInt() which eluded me till now, and I think it's very useful for a lot of other exercises we've done so far, as well.

This method is like invoking parseInt() on the solution, and if the provided input cannot be parsed into an integer, it prints a default message to the user and asks for valid input. */

const rlSync = require('readline-sync');
let numbers = [];
let firstNumber = rlSync.questionInt('Enter the 1st number: ');
let secondNumber = rlSync.questionInt('Enter the 2nd number: ');
let thirdNumber = rlSync.questionInt('Enter the 3rd number: ');
let fourthNumber = rlSync.questionInt('Enter the 4th number: ');
let fifthNumber = rlSync.questionInt('Enter the 5th number: ');
let lastNumber = rlSync.questionInt('Enter the last number: ');

numbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
console.log(
  numbers.includes(lastNumber)
    ? `The number ${lastNumber} appears in ${numbers.join(', ')}.`
    : `The number ${lastNumber} does not appear in ${numbers.join(', ')}.`
);

