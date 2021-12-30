/* JS100/101 Study Session: PEDAC

Introductions
- Antonina, still a student and TA, Greece
- Jeff, NY, written assessment study, then the interview
- Adhitiani, Indonesia living in Budapest
- H, NJ, interview
- Brian, Seattle, WA, starting JS109
- Gianni, Germany, JS109 written exam

PEDAC Process

Understand the Problem
- understand the problem you're being asked to solve
- understand the rules, the boundaries, etc.

Examples/Test Cases
- understand more about the problem
- test our assumptions
- consider edge cases
- identify implicit requirements

Data Structure
- what we choose closely linked to the algorithm

Algorithm
- write out high-level steps to solve the given problem
- language agnostic

Coding with Intent

PROBLEM DESCRIPTION

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. The result array should be sorted in ascending order of values. Assume there are no duplicate numbers in the array. The order of the numbers in the input array should not matter.

Problem
  Input: An unsorted, flat array of unique, positive integer numbers
  Output: A nested array of number pairs

  Questions:

  - Can we assume that the input will ONLY contain numbers?
  - Are there negative numbers?
  - Can we assume 'integers only'? (no floats or other number weirdness)
  - If we're sorting pairs, is it the pairs that should be sorted?  or the array of pairs? and on which values? - Maybe not important if numbers are 'unique'

  Rules/Assumptions:

  - Input is order-independent
  - Numbers will be unique (input & output)
  - Output Sort order is numerically ascending (order dependent)
  -numbers that don't have a difference of two with any other number from the input array are ignored
  -if no numbers have a difference of two, return an empty array
  -each pair should be sorted as well as the outer output array
  -a number might appear in two pairs

Examples

Data Structure
- input array
- intermediary: sort
- output: nested arrays

ALGORITHM
- input array of integers
- initialize `result` to an empty array
- sort the input array in ascending order
- iterate through sorted array
  - iterate through elements
    - if element at higher index position minus the element at adjacent lower index position equals 2, push both elements to `result` array
- return nested arrays of paired numbers */

// function differenceOfTwo(array) {
//   let result = [];
//   let sortedArray = array.sort((a, b) => a - b);
//   for (let idx = 0; idx < sortedArray.length; idx += 1) {
//     for (let jdx = idx + 1; jdx <= sortedArray.length; jdx += 1) {
//       if (sortedArray[jdx] - sortedArray[idx] === 2) {
//         result.push([sortedArray[idx], sortedArray[jdx]])
//       }
//     }
//   }
//   return result;
// }

/* Antonina's Version

Algorithm:
- initialize `result` array to an empty array
- sort the input array
- for each number in the array
  - loop over the rest of the array
    - if the difference between that number and the current number is 2
    - create an array of the two numbers and push it to `result`

Revised Algorithm
- input an array of numbers
- initialize `result` to an empty array
- sort the input array in ascending order
- for each number in the array
  - loop over the rest of the numbers in the array
    - if the difference between that number and the current number is 2
    - create an array of the two numbers and push it to `result`
- return `result` array */


function differenceOfTwo(nums) {
  let result = [];
  let sortedNums = nums.slice(0).sort((a, b) => a - b);

  sortedNums.forEach((num, idx) => {
    sortedNums.slice(idx).forEach(nextNum => {
      if (nextNum - num === 2) result.push([num, nextNum]);
    })
  })

  return result;
}

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

// function differenceOfTwo(nums) {
//   let sortedNums = nums.slice().sort((a, b) => a - b);
//   let result = [];

//   sortedNums.forEach((num, idx) => {
//     sortedNums.slice(idx).forEach((nextNum) => {
//       if (nextNum - num === 2) result.push([num, nextNum]);
//     });
//   });

//   return result;
// }
