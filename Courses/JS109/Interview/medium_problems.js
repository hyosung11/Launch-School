/* JS101 - Small Problems > Medium 1 > 1. Rotation (Part 1)

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

/* ============================
Medium 1 > 2. Rotation (Part 2)

Rotation (Part 2)

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: number and count
- output: new number

Identify rules
- Rotate the last `count` digits of the original `number`.
- Leave the first digits (not part of the last `count` digits) in the same order.
- Slice off the first of the digits to rotate and append it to the end of the `number`.
- Join the first digits with the last `count` rotated digits, and return it as a number.

EXAMPLES / TEST CASES
Validate understanding of the problem

DATA STRUCTURE
- input: two numbers
  - the original `number`
  - last `count` digits to rotate
- intermediary: string
- output: new rotated number

ALGORITHM
- input original `number` to be changed and `count` number of digits to rotate
- convert the original `number` to a string
- split the string into two parts: the part to remain unchanged and the part to be rotated
- rotate the second part
- join the first part back together with the rotated second part
- convert the string to a number and return it

CODE
Implementation of Algorithm
- test code while programming */

// function rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let leftPart = numberString.slice(0, numberString.length - count);
//   let rightPart = numberString.slice(numberString.length - count);
//   let resultString = leftPart + rotateString(rightPart);
//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1).concat(string[0]);
// }

// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

// Examples:
// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917

// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

/* ============================
Medium 1 > 3. Rotation (Part 3)

Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

*/