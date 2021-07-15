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
1. -----------------------------------------
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

2. ------------------------------------------
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
7. return sum
8. calculate product
8. return product

CODE
*/
// require readlineSync
let readlineSync = require('readline-sync');

// ask user for an integer greater than 0
console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

// ask user to compute the sum or compute the product
console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let operation = readlineSync.prompt();

// evaluate the user response
if (operation === 's')