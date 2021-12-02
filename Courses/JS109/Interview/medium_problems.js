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
// console.log(rotateRightmostDigits(735291, 6)); // 352917

// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

/* ============================
Medium 1 > 3. Rotation (Part 3)

Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: number
- output: new number

Identify rules
- if one digit, return the number
- if two digits, switch the digits or make one rotation
- if three or more digits, make one less rotation than digits

EXAMPLES / TEST CASES
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

DATA STRUCTURE
- input: number
- intermediary: string or array
- output: new number

ALGORITHM
- input a number
- convert number to a string
- if number has one digit, return the number
- if number has two digits, slice the first digit and append it to the end
- if number has three or more digits, slice and append one less time than the number of digits
- return new rotated number

735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

CODE
Implementation of Algorithm
- test code while programming */

// function maxRotation(number) {
//   let numberDigits = String(number).length;
//   for (let count = numberDigits; count >= 2; count -= 1) {
//     number = rotateRightmostDigits(number, count);
//   }
//   return number;
// }


// function rotateRightmostDigits(number, count) {
//   let numberArray = String(number).split('');
//   let element = numberArray.splice(numberArray.length - count, 1);
//   return Number(numberArray.concat(element).join(''));
// }

// // console.log(rotateRightmostDigits(123));

// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

// Medium 1 > 5. Word to Digit
/* # PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: sentence string
- output: sentence string with words changed to their digit character equivalents

Identify rules
- input a string of words as sentence
- change each number word to its digit character
- return new string of words with digits replacing number words

EXAMPLES / TEST CASES
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Edge Cases?
- only single digit numbers?

DATA STRUCTURE
- input: string
- intermediary: object and array
- output: new string

ALGORITHM
- input a string of words as a sentence
- create `NUMBER_WORDS` object lookup table
- split the string at each space
  - iterate through the string as separate words
    - if word is a number convert it to a digit
    - if word is not a number return the word
  - join the words back together
- return new string

CODE
Implementation of Algorithm
- test code while programming */

function wordToDigit(sentence) {
  const NUMBER_WORDS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }

  Object.keys(NUMBER_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUMBER_WORDS[word]);
  })

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

