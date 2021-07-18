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

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- do not mutate original array
- make copy and then relocate first element to last element

Identify rules
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.
- for a non-empty array, slice off the first element and append it to the end of the array

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input
- intermediary
- output

ALGORITHM
Steps for converting input to output
-decare a function with an array input
-if argument is not an array, return undefined
else:
-make a copy of the array
-remove first element
-add removed element to end of array
-return array copy

CODE
Implementation of Algorithm

- test code while programming
*/

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

// LS Solution - no Discussion
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

