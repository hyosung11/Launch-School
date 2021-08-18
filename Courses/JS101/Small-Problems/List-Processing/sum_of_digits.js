/* JS101 - Small Problems > List Processing > 1. Sum Of Digits

Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum. */

function sum(number) {
  return String(number)
    .split('')
    .reduce((accum, elem) => accum + Number(elem), 0);
}

// Examples:
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
