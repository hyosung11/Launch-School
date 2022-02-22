/* Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

PROBLEM
input: array (except guard clause cases)
output: new array

rules:
- do not modify original
- return undefined if input is not an array
- return empty array if input length is 0
- return new array in which first element has been removed and appended to end of array

EXAMPLES

DATA STRUCTURES
input: array (except guard clause cases)
intermediary: new array
output: new array

ALGO:
- input an array
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array
- slice array at index position 1
- add first element to the end
- return new array */

// function rotateArray (arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];

//   // let result = arr.slice(1);
//   // result.push(arr[0]);
//   // return result;
//   return arr.slice(1).concat(arr[0])
// }


// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }

//   if (array.length === 0) {
//     return [];
//   }

//   return array.slice(1).concat(array[0]);
// }
// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
// console.log(rotateArray(['a'])); // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray()); // undefined
// console.log(rotateArray(1)); // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// array; // [1, 2, 3, 4]


// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
// console.log(rotateArray(['a'])); // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray()); // undefined
// console.log(rotateArray(1)); // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// array; // [1, 2, 3, 4]

/* Rotation (Part 2)

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

PROBLEM
- input: two numbers
  - the original number
  - last `count` digits to rotate
- output: the rotated number

Rules
- rotate the last `count` (#) digits of the original number
- leave the first digits (not part of the last `count` digits) in the same order
- apply the same rule for the rotation as in the previous exercise: slice off the first of the digits that you want to rotate, and append it to the end of the `number`
- join the first digits with the last `count` rotated digits, and return it as a number

DATA STRUCTURE
- input number and count
- intermediary: turn number into a string to slice
- output: number

ALGORITHM
- convert the original number into a string
- split the string into two parts:
  - the part to remain unchanged
  - the part to be rotated
- join the first part back together with the rotated second part
- convert the string to a number and return it

ALGO:
input: number, count
-turn number into string
- assign variable firstPart to a slice from beginning to numberString.length - count
- assign variable secondPart to a slice from numberString.length - count
- initialize result to firstPart + rotated version of secondPart
- turn result back into number
-return result *

rotateString helper function
- input string
- slice from index position 1
- concat index position 0 */

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

// Examples:
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// function  rotateRightmostDigits(number, count) {
//   let numberString = String(number);
//   let firstPart = numberString.slice(0, numberString.length - count);
//   let secondPart = numberString.slice(numberString.length - count);
//   // let secondPart = numberString.slice(0);
//   console.log(`first part: ${firstPart} && second part: ${secondPart}`);
//   let result = firstPart + rotateString(secondPart); // 735 + rotateString(291)
// // 735912
//   return Number(result);
// }

// function rotateString(number) {
//   return number.slice(1).concat(number[0]); // 291 => 912
// }