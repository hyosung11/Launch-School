/* Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

Problem
- input array
- output phrase

Rules
- return 'Boom!' if the digit 7 appears in the array
- return 'there is no 7 in the array' if not
- 7 can be one digit in a number containing a 7 like 76 or 37

Examples
- reviewed

Data Structure
- input array
- turn numbers into strings
- output: string phrase

Algorithm
- input array of integers
- if 7 test of array is true
    - return 'Boom!'
  else
    - return 'there is no 7 in the array'
*/

/* peeked at solution using `test` */
// function sevenBoom (array) {
//   if (/7/.test(array)) return 'Boom!';
//   else return 'there is no 7 in the array';
// }

// function sevenBoom (array) {
//   return /7/.test(array) ? 'Boom!' : 'there is no 7 in the array';
// }

// function sevenBoom(array) {
//   console.log(array.join(''))
//   return array.join().includes('7') ? 'Boom!' : 'there is no 7 in the array';
// }

// console.log(sevenBoom([2, 6, 7, 9, 3])) // === 'Boom!');
// console.log(sevenBoom([2, 6, 7, 9, 3]) === "Boom!");
// console.log(sevenBoom([33, 68, 400, 5]) === "there is no 7 in the array");
// console.log(sevenBoom([86, 48, 100, 66]) === "there is no 7 in the array");
// console.log(sevenBoom([76, 55, 44, 32]) === "Boom!");
// console.log(sevenBoom([35, 4, 9, 37]) === "Boom!");

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
*/

// const chunk = (array, size) => {
//   const res = [];
//   for (let i = 0; i < array.length; i += size)
//     res.push(array.slice(i, i + size));
//   return res;
// };

// function chunk (array, size) {

//   let result = [];

//   for (let idx = 0; idx < array.length; idx += size) {
//     result.push(array.splice(0, size))
//   }
//   return result;
// }

// with `splice`

function chunk (array, size) {
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


/* ==============

Pyramid Arrays

Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, containing its length as the elements.

Examples

pyramidArrays(1) ➞ [[1]]

pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

Notes

n will be a positive integer.

17:19 start
17:23 algo
17:28 code
17:37 peeked at solutions!

Problem
- input number
- output array 

Rule
- return a nested array of arrays of incrementing size from 1 to number inclusive
- number is a positive integer

Examples
- 3 => [[1], [2, 2], [3, 3, 3]]

Data Structure
- input number
- inside array
- output nested array

Algorithm
- input number
- init `result` to empty array
- iterate from 1 to number
  - add an array with the number repeated as many times as its value
  - push array to `result`

- return `result`
*/

// function pyramidArrays (number) {

//   let result = [];

//   for (let idx = 1; idx <= number; idx += 1) {
//     result.push(Array(idx).fill(idx));
//   }

//   return result;
// }

/* Alternative
Algorithm
- declare `pyramidArray` function with `number` parameter
- init `result` to empty array

- iterate outer loop from 1 to number
  - init `array` to empty array

  - iterate inner loop from 1 to idx
    - push idx to `array`

  - push `array` to `result`

- return `result`
*/

function pyramidArrays (number) {

  let result = [];

  for (let idx = 1; idx <= number; idx += 1) {
    let array = []

    for (let jdx = 1; jdx <= idx; jdx += 1) {
      array.push(idx);
    }

    result.push(array)
  }

  return result;
}

console.log(pyramidArrays(1)); // => [[1]])
console.log(pyramidArrays(2)); // => [[1], [2, 2]])
console.log(pyramidArrays(3)); // => [[1], [2, 2], [3, 3, 3]])
console.log(pyramidArrays(4)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]])
console.log(pyramidArrays(5)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]])

console.log(pyramidArrays(6)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6]];
console.log(pyramidArrays(7)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7]])
console.log(pyramidArrays(8)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8]])
console.log(pyramidArrays(9)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9]])
console.log(pyramidArrays(10)); // => [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])

