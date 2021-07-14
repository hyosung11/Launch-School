/*
Isn't it Odd?

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

PEDAC
-----

Problem
Identify expected input and output
- input one integer argument
- output true/false

Make the requirements explicit
- integer can be positive, negative, or zero
- argument is a valid integer

Identify rules
- return true if number's absolute value is odd

Mental model of the problem (optional)

remainder 0 === 1

Examples/Test Cases
- see examples below

Data Structure
- is there a data structure for this one?

Algorithm
- declare the function
- evaluate the integer argument
  - remainder 0 === 1
- return true or false value

Code
-17
*/

// my solution
// function isOdd(integer) {
//   if (Math.abs(integer) % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// LS solution
// function isOdd(number) {
//   return Math.abs(number) % 2 === 1;
// }

// another solution
// const isOdd = integer => !!(integer % 2);
/* The double bang !! operator coerces the result to a boolean value and is not affected by negative integers so it does not need Math.abs()
*/


// and another using the ternary operator
function isOdd(num) {
  return (Math.abs(num) % 2 !== 0) ? true : false;
}

// Examples
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
console.log(isOdd(-3)); // => true

/*
Discussion
In JavaScript, the remainder operator returns negative results if the number on the left is negative. For that reason, we need to call Math.abs() function and pass the number as the argument, to convert it to a positive value. Then, we can check whether dividing that number by 2 results in a remainder 1 or not.
*/
