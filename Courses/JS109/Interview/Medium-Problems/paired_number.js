/* Interview Assessment Problem

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in either the input or output arrays. The order of the numbers in the input array should not matter.

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
- sort the input array from lowest to highest [1, 2, 3, 5, 6, 7, 8, 9]
- iterate through the array
  - compare values two at a time
    - if difference in values is 2
      - push values to result array
  - sort subarrays in ascending order
- return result array

CODE
Implementation of Algorithm
- test code while programming */

function pairedNums(array) {
  let result = [];
  sortedArray = array.sort((a, b) => a - b);

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

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]


// Solution with Laurent
// function pairedNums(array) {
//   let result = [];
//   let sortedArray = array.sort((a, b) => a - b);

//   while (sortedArray.length !== 0) {
//     let plusTwo = sortedArray.filter((number) => number === sortedArray[0] + 2);

//     if (plusTwo.length > 0) {
//       result.push([sortedArray[0]].concat(plusTwo));
//       sortedArray.splice(sortedArray.indexOf(plusTwo[0]), 1);
//     }
//     sortedArray.shift();
//   }

//   return result;
// }


