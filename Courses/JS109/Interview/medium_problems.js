/* JS101 - Small ProblemsMedium 1 > 1. Rotation (Part 1)

Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);  // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);  // ["b", "c", "a"]
rotateArray(['a']); // ["a"]
rotateArray([1, 'a', 3, 'c']); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); / [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: array
- output: new array

Identify rules
- if the input is not an array return undefined
- if the input is an empty array, return an empty array
- do not modify the original array

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: array
- intermediary: array
- output: array

ALGORITHM
- input an array
- if input is not an array return `undefined`
- if input is an empty array, return an empty array
- for a non-empty array
  - slice off the first element
  - append it to the end of the array
- return a new array

CODE
Implementation of Algorithm
- test code while programming */

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];
//   return array.slice(1).concat(array[0]);
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
// console.log(rotateArray(['a'])); // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []
// console.log(rotateArray('')); // undefined

