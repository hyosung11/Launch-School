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

// function pairedNums(array) {
//   let result = [];
//   let sortedArray = array.sort((a, b) => a - b);
//   // console.log(sortedArray); // [1, 2, 3, 5, 6, 7, 8, 9];

//   while (sortedArray.length !== 0) {
//     let plusTwo = sortedArray.filter((number) => number === sortedArray[0] + 2);
//     // console.log(plusTwo); // [ 3 ], [], [ 7 ], [ 8 ], []

//     if (plusTwo.length > 0) {
//       result.push([sortedArray[0]].concat(plusTwo));
//       sortedArray.splice(sortedArray.indexOf(plusTwo[0]), 1);
//     }
//     sortedArray.shift();
//   }

//   return result;
// }

// console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
// console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]


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

// Miles's Version
// function pairedNums(arr) {
//   let arrSorted = arr.sort();
//   let allPairs = [];

//   for (let outerIdx = 0; outerIdx < arrSorted.length; outerIdx += 1) {
//     for (let innerIdx = outerIdx + 1; innerIdx < arrSorted.length;
//       innerIdx += 1) {
//       let pair = [arrSorted[outerIdx], arrSorted[innerIdx]];

//       if (pair[1] - pair[0] === 2) {
//         if (allPairs.length === 0) {
//           allPairs.push(pair);
//         } else if (!includesNested(allPairs, pair)) {
//           allPairs.push(pair);
//         }
//       }
//     }
//   }

//   return allPairs;
// }

// function includesNested(arr, nested) {
//   let result = false;

//   arr.forEach((subArr) =>
//     subArr.forEach((val) => {
//       if (nested.includes(val)) {
//         result = true;
//       }
//     })
//   );

//   return result;
// }

/* Version with Alex on 20211207

P:
input: array of numbers
output: array of arrays number pairs)

rules:
- return array of all pairs (in array form) that have a difference of 2
- sort by ascending order - must take place before selection of pairs
- there are no duplicate numbers

data structures:
- input: array
- intermediary: array
- output: array of arrays

algo:
-create empty array of arrays
-sort array in ascending order
-loop through the array
  -if array includes array[index] + 2 and is not already there (helper function):
    -add [array[index], array[index] + 2]] to array of arrays
-return array of arrays

helper function:
result does not include array[index] as the second element of one of its subarrays */

function pairedNums(array) {
  let result = [];

  array.sort((a, b) => a - b);

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array.includes(array[idx] + 2) && !isAlreadyThere(array[idx], result)) {
      result.push([array[idx], array[idx] + 2]);
    }
  }

  return result;
}

function isAlreadyThere(number, arr) {
  if (arr.length === 0) return false;
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx][1] === number) return true;
  }
  return false;
}

// function pairedNums(array) {
//   let result = [];
//   array.sort((a, b) => a - b);

//   while (array.length !== 0) {
//     let plusTwo = array.filter((number) => number === array[0] + 2);

//     if (plusTwo.length > 0) {
//       result.push([array[0]].concat(plusTwo));
//       array.splice(array.indexOf(plusTwo[0]), 1);
//     }
//     array.shift();
//   }

//   return result;
// }

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7])); // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27])); // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]