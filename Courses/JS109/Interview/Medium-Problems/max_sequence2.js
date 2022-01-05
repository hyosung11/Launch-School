/* 1. The maximum sum subarray problem consists in finding the maximum sum
of a contiguous subsequence in an array of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

Easy case is when the array is made up of only positive numbers and
the maximum sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0 instead.
An empty array is considered to have zero greatest sum.
Note that the empty array is also a valid argument array.

PROBLEM
- input: array of integers
- output: number

Rules
- find the max sum of a contiguous subsequence of integers
- if array is only positive numbers, max sum is the sum of the whole array
- if array is only negative numbers, return 0
- an empty array is considered to have 0 greatest sum

EXAMPLES
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
-- should be 6: [4, -1, 2, 1]

DATA STRUCTURE
- input: array
- intermediary: subarrays
- output: number

ALGORITHM
- input an array of integers
- if array is only positive numbers, sum the array and make that maxSum
- if array is only negative numbers, return 0
- if array is empty return 0
- initialize `maxSum` to 0
- initialize `getSubarrays` helper function
  - initialize `subarray` to empty array
  - iterate through the array
    - find all subarrays
- iterate through the subarrays
  - initialize `currentSum` to value of the total of the elements values at the index
  - if `currentSum` is greater than `maxSum` reassign `maxSum` to `currentSum`
return `maxSum` */

// function maxSequence(array) {
//   if (array.every(number => number > 0)) return array.reduce((sum, value) => sum + value, 0);
//   if (array.every(number => number < 0)) return 0;
//   if (array.length === 0) return 0;

//   let maxSum = 0;
//   let subarrays = getSubarrays(array);

//   for (let idx = 0; idx < subarrays.length; idx += 1) {
//     let currentSum = subarrays[idx].reduce((sum, value) => sum + value, 0);
//     if (maxSum < currentSum) maxSum = currentSum;
//   }

//   return maxSum;
// }

// function getSubarrays(array) {
//   let subarrays = [];

//   for (let idx = 0; idx <= array.length; idx += 1) {
//     for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
//       subarrays.push(array.slice(idx, jdx));
//     }
//   }

//   return subarrays;
// }

// Alternative Solution with `slice`
function maxSequence(array) {
  let maxSum = 0;
  if (array.length === 0) return 0;

  for (let start = 0; start < array.length; start += 1) {
    for (let end = start; end < array.length; end += 1) {
      let subarray = array.slice(start, end + 1);
      let sum = subarray.reduce((total, value) => total + value, 0);
      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum;
}
// function maxSequence(arr) {
//   let maxSum = 0;
//   if (arr.length === 0) return 0;

//   for (let start = 0; start < arr.length; start++) {
//     for (let end = start; end < arr.length; end++) {
//       let subarr = arr.slice(start, end + 1);
//       let sum = subarr.reduce((a, b) => a + b);
//       if (sum > maxSum) maxSum = sum;
//     }
//   }

//   return maxSum;
// }

// // Test Cases
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

