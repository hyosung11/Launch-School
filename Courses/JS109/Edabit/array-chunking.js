/* ===================

edabit - Array Chunking

Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".

Examples
chunk([1, 2, 3, 4], 2) ➞ [
  [1, 2], [3, 4]
]
chunk([1, 2, 3, 4, 5, 6, 7], 3) ➞ [
  [1, 2, 3], [4, 5, 6], [7]
]
chunk([1, 2, 3, 4 ,5], 10) ➞ [
  [1, 2, 3, 4, 5]
]

Notes
- Remember that number of subarrays may not be equal to chunk size.

16:46 start
16:51 algo done
16:53 solved

Problem
- input array and number
- output nested array

Rules
- return a nested array of chunks of input array of size of number

Examples
- [1, 2, 3, 4], 2 => [[1, 2], [3, 4]]

Data Structure
- input array and number for size of chunks
- in-between array
- output nested array of chunks

Algorithm
- declare `chunk` function with `size` parameter
- init `result` to empty array
- while length of array is greater than 0
- splice chunks of array of `size` and push to `result`
- return `result`
*/

function chunk(array, size) {
  let result = [];

  while (array.length > 0) {
    console.log(array);
    result.push(array.splice(0, size));
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // [[ 1, 2, 3, 4, 5]]

// Practice
/* ===================

edabit - Array Chunking

Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".

Examples
chunk([1, 2, 3, 4], 2) ➞ [
  [1, 2], [3, 4]
]
chunk([1, 2, 3, 4, 5, 6, 7], 3) ➞ [
  [1, 2, 3], [4, 5, 6], [7]
]
chunk([1, 2, 3, 4 ,5], 10) ➞ [
  [1, 2, 3, 4, 5]
]

Notes
- Remember that number of subarrays may not be equal to chunk size.


17:02 start
17:08 algo
17:11 code
17:13 solved

Problem
- input array and number
- output an array of arrays

Rules
- return an array of arrays of size of number
- number can be larger than the array length, so return entire array nested
- divide number as many times into the array for chunks and return remainder as final chunk

Examples
- [1, 2, 3, 4], 2 => [[1, 2], [3, 4]]
- [1, 2, 3, 4, 5, 6, 7, 8], 3 => [[1, 2, 3], [4, 5, 6], [7, 8]]

Data Structure
- input array and number
- inside:: array
- output: nested array

Algorithm
- declare `chunk` function with `array` and `size` parameters
- init `result` to empty array
- iterate while array length is greater than 0
  - take chunks of array of `size`
  - push chunks to `result`
- return `result
*/

const chunk = (array, size) => {
  
  let result = [];
  
  while (array.length > 0) {
    result.push(array.splice(0, size));
  }
  
  return result;
}



console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // [[ 1, 2, 3, 4, 5]]
