/* JS101 - Small Problems > Easy 1 > 5. Tip Calculator

Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

PEDAC

PROBLEM
Input: numbers
Output: numbers

Make the requirements explicit:
- prompt for bill amount
- prompt for tip rate
- compute the tip
- log tip and the total amount to the console

Identify Rules:
- ignore input validation
- assume user wil enter numbers

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Edge Cases
- none

DATA STRUCTURE
How we represent data that we will work with when converting the input to output
- not applicable here

ALGORITHM
Steps for converting input to output
1. require readlineSync
2. prompt for bill amount
3. prompt for tip amount
4. compute tip amount
5. compute total amount
6. log tip amount to the console
7. log total amount to the console

CODE
Implementation of Algorithm */

// require readlineSync
// let readlineSync = require('readline-sync');

// // prompt for bill amount
// console.log('How much is the bill?');
// let bill = readlineSync.prompt();
// bill = parseInt(bill, 10);

// // prompt for tip amount
// console.log('What is the tip percentage?');
// let tipPercentage = readlineSync.prompt();
// tipPercentage = parseInt(tipPercentage, 10);

// // calculate tip amount and total
// let tipAmount = bill * (tipPercentage / 100);
// let total = bill + tipAmount;

// // log result to console
// console.log(`The tip is $${tipAmount.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`)

// LS solution
// let readlineSync = require('readline-sync');

// let bill = parseFloat(readlineSync.question("What is the bill?\n"));

// let percentage = parseFloat(readlineSync.question("What is the tip percentage?\n"));

// let tip = bill * (percentage / 100);

// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

/*
Discussion
To explain this example, let's instead look at what would happen if we did not use parseFloat like we did. The program would then look like this:
*/

// let readlineSync = require("readline-sync");

// let bill = readlineSync.question("What is the bill?\n");

// let percentage = readlineSync.question("What is the tip percentage??\n");

// let tip = bill * (percentage / 100);

// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

/*
If we entered values 200 and 15 for bill and percentage the tip would be calculated correctly as 30. The reason for this is that /, * and - operators implicitly coerce string operand to a number. Thus, if you added console.log(typeof tip === 'number') below the tip variable initialization, the output would be true. The value assigned to tip would be a number.

However, if we want to apply the same logic to let total = bill + tip; line, we would encounter a problem. Since bill is a string and since + performs concatenation when either operand is a string, the value assigned to total variable would be the string "20030". Finally, since total is a string it doesn't have a toFixed method and the final line of our program would raise an error. */

// function solution
let rlSync = require('readline-sync');

function tipCalculator() {
  let bill = parseFloat(rlSync.question("What's the bill? "));
  let tipPercentage = parseFloat(
    rlSync.question("What's the tip percentage? ")
  );

  let tip = (bill / 100) * tipPercentage;
  let total = tip + bill;
  console.log(`The tip is $${tip.toFixed(2)}.
The total is $${total.toFixed(2)}.`);
}

tipCalculator();

