/* JS101 - Small Problems > Easy 4 > 7. Running Totals

Running Totals

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: array of numbers
- output: array with same number of elements

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- make the value of each element the running total from the original array

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
[2, 5, 13] ==> [2, 2 + 5, 2 + 5 + 13] ==> [2, 7, 20]

Edge Cases?
- `[]`

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: array
- intermediary: array element transformation
- output: new array

ALGORITHM
Steps for converting input to output
- loop through array
  - 1st iteration return element at index 0
  - 2nd iteration return sum of first element + second element
  - subsequent iteration return total of adding up the elements

CODE
Implementation of Algorithm
- test code while programming */

// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push(sum += array[idx]);
//   }

//   return resultArray;
// }

// Laurent's Version?
// function runningTotal(array) {
//   let returnedArray = [];

//   for (let index = 0; index < array.length; index += 1) {
//     if (index === 0) {
//       returnedArray.push(array[index]);
//     } else if (index > 0) {
//       let sum = returnedArray[index - 1] + array[index];
//       returnedArray.push(sum);
//     }
//   }

//   return returnedArray;
// }

// function runningTotal(array) {
//   let sum = 0;

//   return array.map((number) => {
//     return sum += number;
//   });
// }

// function runningTotal(array) {
//   let total = 0;
//   return array.map((num) => total += num);
// }

function runningTotal(array) {
  let sum = 0;
  return array.map(number => sum += number);
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []

/* Discussion

The solution makes use of an array and a number variable. The array, `resultArray`, stores the values of the running total, while `sum` keeps track of the current value as we move through each item in the original `array` argument. During each iteration, the solution updates the value of `sum`, incrementing it by the value at the current index of the input `array`.

Further Exploration

Can you rewrite the solution using the `Array.prototype.map` method? What types of problems do you think are well-suited for the `Array.prototype.map` method? */