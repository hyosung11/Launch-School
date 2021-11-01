/* JS101 - Small Problems > Easy 1 > 2. Odd Numbers

Odd Numbers

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Problem
Identify expected input and output
- input numbers
- output odd numbers

Make the requirements explicit
- each number on a separate line

Identify rules
- log odd numbers from 1 to 99 inclusive

Mental model of the problem (optional)

Examples / Test Cases
- edge cases?

Data Structure
- ?

Algorithm
- function declaration
- loop through numbers  1 to 99
- determine if number is odd
- if number is odd return it and log it to the console
- put each odd number on a separate line

Code */

// solution with for loop
// for (let num = 1; num < 100; num += 2) {
//   console.log(num);
// }

// while loop
// let number = 1;

// while (number < 100) {
//   console.log(number);
//   number += 2;
// }

/* Discussion
The program makes use of a for loop to iterate over odd numbers starting from 1. It does this by starting the loop at an odd number (1), and then incrementing it by 2 after every iteration.

If your approach was different from this one, don't worry, since there are a variety of ways to solve this problem.

Further Exploration
Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/

// simple recursive solution
// function oddNumbers(start, end) {
//   if (start >= end) {
//     return;
//   }

//   if (start % 2 === 0) {
//     start += 1;
//   }

//   console.log(start);
//   return oddNumbers(start + 2, end);
// }

// oddNumbers(1, 15)

// Let's use the logical operator &&
// for (let counter = 1; counter <= 99; counter += 1) {
//   // clever but not readable
//   counter % 2 === 1 && console.log(counter);
// }

// reduce - this is cool!
// function logOddNumbers(number) {
//   [number].reduce((accumulator, current) => {
//     while (accumulator < current) {
//       console.log(accumulator);
//       accumulator += 2;
//     }
//   }, 1)
// }

// logOddNumbers(11)