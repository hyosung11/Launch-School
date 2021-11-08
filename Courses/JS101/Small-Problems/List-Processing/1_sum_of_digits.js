/* JS101 - Small Problems > List Processing > 1. Sum Of Digits

Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using `for`, `while`, or `do...while` loops - instead, use a series of method calls to perform the sum. */

function sum(number) {
  return String(number)
    .split('')
    .reduce((total, digit) => total + Number(digit), 0);
}

// // Examples:
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/* Discussion

The solution uses a list processing method - `Array.prototype.reduce()` - to get the sum of the digits. It first converts the numerical argument `number` to a string, then splits it using an empty string as a separator to get each character. The elements of the resulting array are then summed using `reduce`. Within the callback function passed to `reduce`, we convert the parameter `digit` to a number using `Number()`. `accum` (the accumulator) will already be a number. */

// `reduce` written with arrow function
// let initialValue = 0;
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce((previousValue, currentValue) => previousValue + currentValue.x, initialValue)

// console.log(sum); // => 6

// Elaine's Versions
// // Function Declaration
// function sum(num) {
//   return String(num).split('').reduce((total, elem) => total + Number(elem), 0);
// }

// // Function Expression
// let sum1 = function(num) {
//   return String(num).split('').reduce((total, elem) => total + Number(elem), 0);
// }

// // Arrow Function
// let sum2 = num => String(num).split('').reduce((total, elem) => total + Number(elem), 0);

