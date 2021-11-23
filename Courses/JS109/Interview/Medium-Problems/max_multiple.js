/* Max Multiple Problem Description

Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0. */

// Test Cases
// console.log(maxMultiple(2, 7) === 6);
// console.log(maxMultiple(3, 10) === 9);
// console.log(maxMultiple(7, 17) === 14);
// console.log(maxMultiple(10, 50) === 50);
// console.log(maxMultiple(37, 200) === 185);
// console.log(maxMultiple(7, 100) === 98);

/* PEDAC
- input: two numbers
- output: number

Rules
- find the largest number N
  - N is a multiple of the divisor (N is divisible by the divisor)
  - N is less than or equal to the bound
  - N is greater than 0

Algorithm
- input two numbers as arguments: `increment` and `bound`
- initialize `lastNumber`
- initialize `currentNumber` to hold temporary value
- loop until reach value of bound
  - assign `currentNumber` to value of `lastNumber` plus `increment`
  - if currentNumber <= bound
    - assign currentNumber to lastNumber
- return lastNumber */

function maxMultiple(increment, bound) {
  let lastNumber = 0;
  let currentNumber = 0;

  do {
    currentNumber = lastNumber + increment;
    if (currentNumber <= bound) lastNumber = currentNumber;
  } while (currentNumber <= bound);

  return lastNumber;
}

// Test Cases
// console.log(maxMultiple(2, 7));
// // console.log(maxMultiple(3, 10));
// // console.log(maxMultiple(7, 17));
// // console.log(maxMultiple(10, 50));
// // console.log(maxMultiple(37, 200));
// // console.log(maxMultiple(7, 100));

console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

// function maxMultiple(increment, bound) {
//   let lastNumber = 0;

//   for (let currentNumber = 0; currentNumber <= bound; currentNumber += increment) {
//     if (currentNumber <= bound) lastNumber = currentNumber;
//   }

//   return lastNumber;
// }

// function maxMultiple(increment, bound) {
//   let lastNumber = 0;
//   let currentNumber = 0;

//   do {
//     currentNumber = lastNumber + increment;
//     if (currentNumber <= bound) lastNumber = currentNumber;
//   } while (currentNumber <= bound);

//   return lastNumber;
// }