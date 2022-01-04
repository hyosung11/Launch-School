/* Count Matching Indices - Problem Description

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

For example,
countMatchingIndices(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

========
Problem
- input: array of strings
- output: array of numbers (with the same number of elements as the input array)

Rules:
- a letter corresponds to a number
- to each string corresponds a SamePositionCount
- case doesn't matter
- no spaces in the strings
- no special characters => only alphabet letters

What's a same position count?
- for each letter in a word, we need to compare the letter's position in the word and in the alphabet. If they match, the "return count" increases by 1.

Examples
rules:
- alphabet position: starts at 1 => can we make it start at 0?
- word position: starts at 0

Data Structure
- input: array of strings
- intermediary steps: array
- output: array of integers

Algorithm
- input an array of strings
- initialize `alphabet` to the lowercase alphabet
- initialize `resultArray` to an empty array
- loop through the collection of strings one by one
  - set a counter to 0
  - check the char in the string at the current index with the char in the alphabet at the current index
    - if chars match, increment the counter
  - after iterating through each string, push counter result to resultArray
- return resultArray as an array of numbers */

function countMatchingIndices(words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return words.map(word => {
    return word
      .toLowerCase()
      .split('')
      .filter((char, idx) => alphabet.indexOf(char) === idx).length;
  });
}

console.log(countMatchingIndices(['abode', 'ABc', 'xyzD'])); // [4, 3, 1]
console.log(countMatchingIndices(['abide', 'ABc', 'xyz'])); // [4, 3, 0]
console.log(
  countMatchingIndices(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])
); // [6, 5, 7]
console.log(countMatchingIndices(['encode', 'abc', 'xyzD', 'ABmD'])); // [1, 3, 1, 3]
console.log(countMatchingIndices([])); // []


// Version 1
// function countMatchingIndices(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     let count = 0;
//     let word = array[index];

//     for (let stringIndex = 0; stringIndex < word.length; stringIndex++) {
//       if (word[stringIndex].toLowerCase() === alphabet[stringIndex]) {
//         count += 1;
//       }
//     }
//     resultArray.push(count);
//   }

//   return resultArray;
// }

// Version 2 with filter and map
// function countMatchingIndices(arr) {
//   return arr.map((str) => solve(str));
// }

// function solve(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return str.split('').filter((char, idx) => {
//     return alphabet.indexOf(char.toLowerCase()) === idx;
//   }).length;
// }

// refactored
// function countMatchingIndices(arr) {
//   return arr.map((str) => solve(str));
// }

// function solve(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return str
//     .toLowerCase()
//     .split('')
//     .filter((char, idx) => alphabet.indexOf(char) === idx).length;
// }

// Laurent's Version
// function countMatchingIndices(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return array.map((string) => {
//     let count = 0;

//     string
//       .toLowerCase()
//       .split('')
//       .forEach((char, index) => {
//         if (alphabet.indexOf(char) === index) count += 1;
//       });

//     return count;
//   });
// }

// using `map` and `filter`
// function countMatchingIndices(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   return array.map((word) => {
//     return word
//       .toLowerCase()
//       .split('')
//       .filter((char, idx) => alphabet.indexOf(char) === idx).length;
//   });
// }