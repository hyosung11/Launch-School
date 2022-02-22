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

Input: array
Output: numbers

Rules:
 - empty array, return 0
 - all numbers are negative, return 0

APPROACH 1: find all the subarrays, then find the largest one
declare a function to find all the subarrays
  declare a empty `result` array
  iterate over each element from 0 to end of the array (idx)
    iterate over each element from index + 1 to end (jdx)
      add all the elements from idx to jdx as an array

declare a function to calculate the sum of the array

iterate over all the subarrays and transform them to their sum
return the max value

APPROACH 2: double pointer ?

*/

function maxSequence(array) {
  if (array.length === 0) return 0;
  if (array.every((val) => val < 0)) return 0;

  const subarrays = (array) => {
    let result = [];
    for (let idx = 0; idx < array.length; idx += 1) {
      for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
        result.push(array.slice(idx, jdx));
      }
    }

    return result;
  };

  const sumArray = (array) => array.reduce((acc, val) => acc + val, 0);
  const allSubarrays = subarrays(array);
  const values = allSubarrays.map((sub) => sumArray(sub));

  return Math.max(...values);
}

// Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([5, 11, 5, 12]) === 33); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-1, -32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: Array
Output: Number (sum of the largest subarray)

[-2, 1, -3, 4, -1, 2, 1, -5, 4]

ALGORITHM
declare and initialize a variable with the maxSubarray count
declare and initialize a variable with the currentSubarray count

if current subArray less than current number, it's not worth keeping

*/

function maxSubArray(array) {
  let maxSubarray = - Infinity;
  let currentSubarray = - Infinity;

  for (let index = 0; index < array.length; index += 1) {
    currentSubarray = Math.max(array[index], currentSubarray + array[index]);
    maxSubarray = Math.max(currentSubarray, maxSubarray);
  }

  return maxSubarray;
}

console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([5,4,-1,7,8])); // 23