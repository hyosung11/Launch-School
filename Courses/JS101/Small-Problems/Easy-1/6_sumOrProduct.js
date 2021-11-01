/*JS101 - Small Problems > Easy 1 > 6. Sum or Product of Consecutive Integers

Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

PEDAC

PROBLEM
Identify expected input and output
- input: integer
- output: number

Make the requirements explicit:
- ask user to enter an integer greater than 0
- ask user whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer
- calculate the sum or
- calculate the product
- return the result

Identify rules
- integer
- entered integer, inclusive for the sum or the product

EXAMPLES / TEST CASES
Validate understanding of the problem
Edge Cases?
-----------------------------------------
Example 1

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

------------------------------------------
Example 2

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720
--------------------------------------------------

DATA STRUCTURE
How do we represent the data that we will work with when converting the input to output?
- just working with integers

ALGORITHM
Steps for converting input to output
1. require readlineSync
2. ask user for an integer greater than 0
3. capture integer
4. ask user to compute sum or compute the product
5. capture answer
6. calculate sum
  -initialize var count = Number(integer)
  -initialize var sum = 0;
  -loop while count is greater than zero
    sum += count
    decrement by one each iteration
7. return sum
8. calculate product
  - integer
    initialize var product = 1
    loop while count is greater than 0
    product *= count
    decrement count each iteration
9. return product

CODE
*/
// // require readlineSync
// let readlineSync = require('readline-sync');

// // ask user for an integer greater than 0
// console.log("Please enter an integer greater than 0");
// let number = parseInt(readlineSync.prompt(), 10);

// // ask user to compute the sum or compute the product
// console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
// let operation = readlineSync.prompt();

// // evaluate the user response
// if (operation === 's') {
//   console.log(`The sum of the integers between 1 and ${number} is ${sum(number)}.`);
// } else if (operation === 'p') {
//   console.log(`The product of the integers between 1 and ${number} is ${product(number)}.`);
// } else {
//   console.log("Oops. Unknown operation.");
// }

// function sum(number) {
//   let sum = 0;
//   while (number > 0) {
//     sum += number
//     number -= 1;
//   }
//   return sum;
// }

// function product(number) {
//   let product = 1;
//   while (number > 0) {
//     product *= number;
//     number -= 1;
//   }
//   return product;
// }

// the UX of the input is unclear. What does the prompt want? There's no context.

// LS Solution
// sum function
function computeSum(targetNumber) {
  let total = 0;
  for (let number = 0; number <= targetNumber; number += 1) {
    total += number;
  }

  return total;
}
// product function
function computeProduct(targetNumber) {
  let total = 1;
  for (let number = 1; number <= targetNumber; number += 1) {
    total *= number;
  }

  return total;
}
// require readline-sync
let readlineSync = require('readline-sync');

// ask user for integer
console.log("Please enter an integer greater than 0: ");
let number = parseInt(readlineSync.prompt(), 10);

// ask user for operation
console.log("Enter 's' to compute the sum, or 'p' to compute the product: ");
let operation = readlineSync.prompt();

// follow response to call correct function
if (operation === 's') {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`)
} else if (operation === 'p') {
  let product = computeProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
} else {
  console.log("Sorry, unknown operation. Terminating ...")
}

/*
Discussion
For brevity and simplicity, our solution doesn't try too hard to validate the user input. Your own solution should probably try to validate input and issue error messages as needed.

The solution defines two helper functions: computeSum and computeProduct. Which one will be used depends on the input that is provided by the user ('p' or 's'). Note the starting value for total in both of these functions. It is 1 for computeProduct, instead of 0; otherwise the value returned would always be 0.

Further Exploration
What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method? */

