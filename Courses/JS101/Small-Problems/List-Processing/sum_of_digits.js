/* JS101 - Small Problems > List Processing > 1. Sum Of Digits

Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using `for`, `while`, or `do...while` loops - instead, use a series of method calls to perform the sum. */

function sum(number) {
  return String(number)
    .split('')
    .reduce((accum, digit) => accum + Number(digit), 0);

}

// Examples:
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/* Discussion

The solution uses a list processing method - `Array.prototype.reduce()` - to get the sum of the digits. It first converts the numerical argument `number` to a string, then splits it using an empty string as a separator to get each character. The elements of the resulting array are then summed using `reduce`. Within the callback function passed to `reduce`, we convert the parameter `digit` to a number using `Number()`. `accum` (the accumulator) will already be a number.
*/