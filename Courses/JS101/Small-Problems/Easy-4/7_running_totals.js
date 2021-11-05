/* JS101 - Small ProblemsEasy 4Running Totals

Running Totals

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input:
- output:

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input
- intermediary
- output

ALGORITHM
Steps for converting input to output

CODE
Implementation of Algorithm
- test code while programming


*/

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

function runningTotal(array) {
  let sum = 0;
  return array.map(number => {
    sum += number;
    return sum;
  });

}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []