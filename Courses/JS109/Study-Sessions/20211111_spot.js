/* SPOT Study Session with Miles Abbason

Introductions
- Miles
- Manny
- Mary, Montreal, tortilla
- H,

Interview Assessment Problem
1. The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array
- output: nested arrays

Identify rules
- check numbers in an array for pairs of numbers that have a difference of 2
- put pairs in a nested array
- sort arrays in ascending order
- no duplicate numbers

EXAMPLES / TEST CASES
See below

DATA STRUCTURE
- input: array
- intermediary:
- output: nested arrays of two elements in each array

ALGORITHM
- initialize result array to empty array
- sort the input array from highest to lowest [1, 2, 3, 5, 6, 7, 8, 9]
- iterate through the array
  - compare values two at a time
    - if difference in values is 2
      - push values to result array
  - sort subarrays in ascending order
- return result array

CODE
Implementation of Algorithm
- test code while programming */

// function pairedNums(array) {
//   let result = [];

//   let sortedArray = array.sort((a, b) => b - a);
//   // [ 9, 8, 7, 6, 5, 3, 2, 1 ]

//   for (let idx = 0; idx < sortedArray.length; idx += 1) {
//     for (let j = 1; j < sortedArray[idx].length; j += 1) {
//       if (sortedArray[idx] - sortedArray[j] === 2) {
//         result.push(sortedArray[idx], sortedArray[j]);
//       } else {
//         continue;
//       }
//     }
//   }

//   return result;
// }

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7]));  // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27]));  // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

/* Miles's Algorithm
P - understand problem
  Input: simple array
  Output: Nested array(s)

  Rules:
  - Difference of 2
  - Sorted in ascending with Nesting based on nestedArr[0]
  - Unique elements outputted

E - Examples and tests

D - Data Structure
Array, nested array

A - Algorithm
- copy array
- init resultArray to be returned
- iterate through copy array
  - see if any are difference of two
  - push into a new array

- return resultArray

C - Code with Intent */

function pairedNums(array) {
  let result = [];
  let sortedArray = array.sort((a, b) => a - b);

  while (sortedArray.length !== 0) {
    let plusTwo = sortedArray.filter((number) => number === sortedArray[0] + 2);

    if (plusTwo.length > 0) {
      result.push([sortedArray[0]].concat(plusTwo));
      sortedArray.splice(sortedArray.indexOf(plusTwo[0]), 1);
    }
    sortedArray.shift();
  }

  return result;
}

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7]));  // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27]));  // ==> [ [ 20, 22 ]