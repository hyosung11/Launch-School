/* Courses JS101 > Programming Foundations with JavaScript > Lesson 3: Practice Problems > 5. Practice Problems: Medium 1

Practice Problems: Medium 1 */

/* ========================================================

Question 1

Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
 */

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }

/* ========================================================

Question 2

Starting with the string: */

// let munstersDescription = 'The Munsters are creepy and spooky.';

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase(); 
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

/* ========================================================

Question 3

Alan wrote the following function, which was intended to return all of the factors of number: */

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

/* Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop. */

// console.log(factors(45)); // [ 1, 3, 5, 9, 15, 45 ]
// console.log(factors(0)); FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
// console.log(factors(-1));

// Use a while condition for the loop
function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(0)); // []
console.log(factors(-5)); // []
console.log(factors(27)); // [1, 3, 9, 27]

// How does the result differ if you replace line 3 with `factors.push(divisor);?

console.log(factors(27)); // => [ 27, 9, 3, 1 ]

// Bonus: What is the purpose of `number % divisor === 0` in that code?

// Bonus Answer:
// It determines whether the result of the division is an integer -- if the number has no remainder, the result is an integer, so the number divided by the divisor is a factor.