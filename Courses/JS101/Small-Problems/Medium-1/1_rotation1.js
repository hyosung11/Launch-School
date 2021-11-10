/* JS101 - Small Problems > Medium 1 > 1. Rotation (Part 1)

Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: array
- output: new array

Make the requirements explicit (clarifying questions)
- do not mutate original array
- make copy and then relocate first element to last element

Identify rules
- If the input is not an array, return `undefined`.
- If the input is an empty array, return `[]`.
- for a non-empty array, slice off the first element and append it to the end of the array

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a']);                    // ["a"]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

DATA STRUCTURE
- input: array
- intermediary: new array
- output: new array

ALGORITHM
- if argument is not an array, return undefined
- if argument is an empty array, return an empty array
- make a copy of the array
- remove first element
- add removed element to end of array
- return array copy

CODE
- test code while programming */

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined


// the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// console.log(array); // [1, 2, 3, 4]

// with Alex?
// function rotateArray(array) {
//   if (!(Array.isArray(array))) {
//     return undefined;
//   } else if (array.length === 0) {
//     return array;
//   } else {
//     let newArray = array.slice();
//     newArray.push(newArray.shift());
//     return newArray;
//   }
// }

// Elaine
// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];
//   let copy = array.slice();
//   copy.push(copy.shift());
//   return copy;
// }

// Bob Rodes
// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];

//   return array.slice(1).concat(array[0]);
// }