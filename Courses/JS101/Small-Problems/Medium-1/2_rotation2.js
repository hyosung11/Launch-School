/* JS101 - Small Problems > Medium 1 > 2. Rotation (Part 2)

Rotation (Part 2)

Write a function that rotates the last `count` digits of a `number`. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

PROBLEM
- input: two numbers
  - the original `number`
  - last `count` digits to rotate
- output: the rotated number

Identify rules
- rotate the last `count` digits of the original number
- leave the first digits (not part of the last `count` digits) in the same order
- apply the same rules for the rotation as in the previous exercise: slice off the first of the digits that you want to rotate, and append it to the end of the `number`
- join the first digits with the last `count` rotated digits, and return it as a number

EXAMPLES / TEST CASES
735291, 1 => returns same number
735291, 2 => 735219

Edge Cases?
- negative numbers
- zero
- NaN
- number < second argument

DATA STRUCTURE
- input: two numbers
- intermediary: array or string
- output: number

ALGORITHM
- convert the original `number` to a string
- split the string into two parts: the part to remain unchanged and the part to be rotated
- rotate the second part
- join the first part back together with the rotated second part
- convert the string to a number and return it

CODE
- test code while programming */

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/* Discussion

For this exercise, the critical part of the problem solving process is breaking down the problem and writing out the rules to carry us from the input to the output, then recognizing that the best data structure to operate on is `String`. We can then focus on using `String.prototype.slice` as the core part of the algorithm. We could also use S`tring.prototype.substr` or `String.prototype.substring`, which would lead to different mental models, but similar algorithms.*/

/* Version 2
- declare function with two parameters: number and count
- convert number to string
- concatenate a slice of the string from the beginning to the string length minus count with a slice of the string from the element after string length minus count; */

// I need to come back to this again. Worked on it with Alex on 20210719, but he did the coding.

// function rotateRightmostDigits(number, count) {
//   let str = String(number);

//   let newStr =
//     str.slice(0, str.length - count) +
//     str.slice(str.length - count + 1) +
//     str.slice(str.length - count, str.length - count + 1);

//   return Number(newStr);
// }