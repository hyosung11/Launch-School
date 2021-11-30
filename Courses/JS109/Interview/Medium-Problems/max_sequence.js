/* Max Sequence

Problem Description

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

The easy case is when the array is made up of only positive numbers and
the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

==============================================================
# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array of integers
- output: number

Identify rules
- find the maximum sum of a contiguous subsequence in an array of integers
- if array all positive numbers, return sum of the whole array
- if the array is made up only of negative numbers, return 0
- an empty array has zero greatest sum
- an empty array is a valid argument array

EXAMPLES / TEST CASES
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

DATA STRUCTURE
- input: array of integers
- intermediary: array
- output: number representing maximum sum

ALGORITHM
- input an array of integers
- if array is empty return 0
- if array is all positive numbers return sum of adding all the elements of the array
- if array only has negative numbers return 0
- declare `maxSum` variable` to hold current max sum
- initialize `getSubArrays` helper function
  - iterate through array
    - iterate through subarrays
  - return all subarrays
- iterate through the subarrays
  - initialize `currentSum` to hold value of subarray
    - compute value of subarrays
    - if currentSum of subarray is greater than maxSum reassign maxSum to currentSum
- return a number representing the maximum sum

CODE
Implementation of Algorithm
- test code while programming */

function maxSequence(array) {
  if (array.length === 0) return 0;
  if (array.every(number => number > 0)) return array.reduce((sum, value) => sum + value, 0);
  if (array.every(number => number < 0)) return 0;

  let maxSum = 0;
  let subArrays = getSubArrays(array);

  for (let idx = 0; idx < subArrays.length; idx += 1) {
    let currentSum = subArrays[idx].reduce((sum, value) => sum + value, 0);
    if (maxSum < currentSum) maxSum = currentSum;
  }

  return maxSum;
}

function getSubArrays(array) {
  let subArrays = [];

  // nested loops
  for (let idx = 0; idx <= array.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
      subArrays.push(array.slice(idx, jdx));
    }
  }

  return subArrays;
}


// console.log(getSubArrays([1, 2, 3])); // [[1], [1, 2], [1, 2, 3], [2, 3], [3]]
// console.log(maxSequence([11])); // true

// Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([5, 11, 5, 12]) === 33); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-1, -32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

// function maxSequence(array) {
//   if (array.length === 0) return 0;
//   if (array.every(number => number > 0)) return array.reduce((sum, element) => sum + element, 0);
//   if (array.every(number => number < 0)) return 0;

//   let maxSum = 0;
//   let subArrays = getSubArrays(array);

//   for (let idx = 0; idx < subArrays.length; idx += 1) {
//     let currentSum = subArrays[idx].reduce((sum, element) => sum + element, 0);
//     if (maxSum < currentSum) {
//       maxSum = currentSum;
//     }
//   }

//   return maxSum;
// }

// function getSubArrays(array) {
//   let subArrays = [];

//   for (let idx = 0; idx <= array.length; idx += 1) {
//     for (let j = idx + 1; j <= array.length; j += 1) {
//       subArrays.push(array.slice(idx, j));
//     }
//   }

//   return subArrays;
// }

// Abbie's Version
// function maxSequence(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   if (array.every((number) => number > 0)) {
//     return array.reduce((sum, element) => sum + element, 0);
//   }
//   if (array.every((number) => number < 0)) {
//     return 0;
//   }

//   let maxSum = 0;
//   let subArrays = getSubArrays(array);

//   for (let i = 0; i < subArrays.length; i++) {
//     let currSum = subArrays[i].reduce((sum, element) => sum + element, 0);
//     if (maxSum < currSum) {
//       maxSum = currSum;
//     }
//   }

//   return maxSum;
// }

// function getSubArrays(array) {
//   let subArrays = [];
//   for (let i = 0; i <= array.length; i++) {
//     for (let b = i + 1; b <= array.length; b++) {
//       subArrays.push(array.slice(i, b));
//     }
//   }
//   return subArrays;
// }