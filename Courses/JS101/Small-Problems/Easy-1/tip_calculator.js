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
- see above example

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
Implementation of Algorithm

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

// require readlineSync
let readlineSync = require('readline-sync');

// prompt for bill amount
console.log('How much is the bill?');
let bill = readlineSync.prompt();
bill = parseInt(bill, 10);

// prompt for tip amount
console.log('What is the tip percentage?');
let tipPercentage = readlineSync.prompt();
tipPercentage = parseInt(tipPercentage, 10);

// calculate tip amount and total
let tipAmount = bill * (tipPercentage / 100);
let total = bill + tipAmount;

// log result to console
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`)




