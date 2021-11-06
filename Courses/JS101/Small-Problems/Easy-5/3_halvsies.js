/* JS101 - Small Problems > Easy 5 > 3. Halvsies

Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array
- output: nested array [[1, 2], [1, 2]]

Identify rules
- start with an array of elements
- return an array that has two elements which are both arrays
  - put the first half of the original array elements in the first nested array
  - put the second half of the elements in the second nested array
  - if odd number of elements in original array, put the middle element in the first nested array

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
[1, 2, 3, 4] => [[1, 2], [3, 4]]
[1, 2, 3, 4, 5] => [[1, 2, 3], [4, 5]]
[5] => [ [5], [] ]

Edge Cases?
[] => [[], []]

DATA STRUCTURE
- input: array
- intermediary: array
- output: array with two nested arrays

ALGORITHM
- find middle of array
- find first half of array
- find second half of array
- return first and second half of array

CODE
Implementation of Algorithm
- test code while programming */

function halvsies(array) {
  let middle = Math.ceil(array.length / 2);
  let leftHalf = array.slice(0, middle);
  let rightHalf = array.slice(middle);
  return [leftHalf, rightHalf];
}

// Examples:
console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]

/* Discussion

The basic task is to split the `array` argument into two pieces: a first and a second half. The solution gets the size of the first half by dividing the `array` argument's `length` by `2`. If the `length` is odd, the `Math.ceil` method will account for it, making the first half larger than the second by `1`. It creates the second half based on the size of the first half. It uses the `Array.prototype.slice` method to create both halves. Finally, it returns the `halvsies` array composed of the f`irstHalf` and `secondHalf` as elements. */

// Alex's Version?
// function halvsies(arr) {
//   let mid = Math.ceil(arr.length / 2);
//   return [arr.slice(0, mid), arr.slice(mid, arr.length)];
// }