/* JS101 - Small Problems > Easy 2 > 5. Arithmetic Integer

Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:

> 23n ** 17n    // 141050039560662968926103n

---

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: two positive integers
- output: return equations

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
We have 2 numbers and we want to perform:
- Addition
- Substraction
- Multiplication
- Division
- Remainder
- Exponent

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:

> 23n ** 17n    // 141050039560662968926103n

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: two integers
- intermediary:
- output: string

ALGORITHM
Steps for converting input to output
1. require readline-sync
2. Get first number
3. Get second number
4. Operations on the numbers:
- Addition
- Substraction
- Multiplication
- Division
- Remainder
- Exponent
5. Return string of results of all operations including the input numbers and the final calculation

CODE
Implementation of Algorithm

- test code while programming

*/
// const readline = require('readline-sync');

// let firstNumber = Number(readline.question('==> Enter the first number: \n'));
// let secondNumber = Number(readline.question('==> Enter the second number: \n'));

// console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

// LS solution
const readlineSync = require('readline-sync');

console.log('Enter the first number:');
let firstNumber = Number(readlineSync.prompt());
console.log('Enter the second number:');
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(
  `${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`
);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);

/*
Discussion

There's an edge case that we're ignoring in this exercise -- division by 0 in JavaScript returns either Infinity, -Infinity, or NaN depending on whether the first number is positive, negative, or zero.

*/
