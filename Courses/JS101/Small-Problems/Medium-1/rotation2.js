/* JS101 - Small Problems > Medium 1 > 2. Rotation (Part 2)

Rotation (Part 2)

Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: two numbers
- output: number

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- rotate the last count digits of a number
- move the first of the digits that you want to rotate to the end
- shift the remaining digits to the left

Identify rules
does it need to be a number?
can it be a negative number?
can it be zero?
what if number.length < second argument?

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Edge Cases?
- negative numbers
- zero
- NaN
- number < second argument

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: two numbers
- intermediary: array or string
- output: number

ALGORITHM
Steps for converting input to output
- declare function with two parameters: number and count
-convert number to string
-split string into array
- extract first character at [number.length - count] and push to end of array
-join array
- convert string to number
-return number


Version 2
- declare function with two parameters: number and count
-convert number to string
- concatenate a slice of the string from the beginning to the string length minus count;
  with a slice of the string from the element after string length minus count; 
CODE
Implementation of Algorithm

- test code while programming

*/

function rotateRightmostDigits (number, count) {
  let str = String(number);
  
  let newStr = str.slice(0, str.length - count) + str.slice(str.length - count + 1) + str.slice(str.length - count, str.length - count + 1);
  console.log(newStr)

  return Number(newStr);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

// I need to come back to this again. Worked on it with Alex on 20210719, but he did the coding.