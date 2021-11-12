/* JS109 Study Group with Antonina

Introductions
- Antonina, lives in Greece, in JS180, TA now
- Daniel Garcia, Phoenix, JS101 L3
- Ryan, LA, JS109 prepping for written assessment
- H
- Manny, CA, JS101 L6, reviewing lessons
- Michael, Italy, preparing for JS109 Written

Interview Assessment Problems

1. Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: array of strings
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- find the longest common prefix string amongst an array of strings
- all given inputs are in lowercase letters
- if there is no common prefix, return an empty string ""

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Edge Cases?
- empty array?
- identical strings in the array?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.
- input: array
- intermediary:
- output: string

ALGORITHM
Steps for converting input to output
- initialize empty string to store result
- compare first element in the array with second element
  - loop through characters in first element
    - compare with character in second element at same index position
    - compare with next character in the second element at same index position
    - if there's a match
      - add character to result
- return result

CODE
Implementation of Algorithm
- test code while programming

// My attempt during the study session
// function commonPrefix(array) {
//   let result = '';

//   for (let index = 0; index < array.length; index += 1) {
//     for (let j = 0; j < array[index].length; j += 1) {
//       if (array[0] === array[1]) {
//         result += array;
//       }
//     }
//   }

//   return result;
// }

Notes
- check the length of words
- iterate over one word
- loop over the rest of the array and see if there's a match */

/* Antonina's Algorithm (edited by me)
- Declare a variable `prefix` and initialize it to an empty string
- Sort the words in the array by their length (shortest -> longest)
- Declare a variable `substring` and initialize it to an empty string
- Loop over the characters of the first string
  - initialize a variable `substring` to the first character of the string
    - if all the strings in the array start with `substring`
      - assign `prefix` to that character
    - concatenate `substring` with the next character
- Return `prefix` */

function commonPrefix(words) {
  let prefix = '';
  words.sort((a, b) => a.length - b.length);

  let substring = '';

  for (let index = 0; index < words[0].length; index += 1) {
    substring += words[0][index];
    if (words.every((word) => word.startsWith(substring))) {
      prefix = substring;
    }
  }
  return prefix;
}

// function commonPrefix(words) {
//   let prefix = '';
//   words.sort((a, b) => a.length - b.length);

//   let substring = '';

//   for (let index = 0; index < words[0].length; index += 1) {
//     substring += words[0][index];
//     if (words.every((word) => word.startsWith(substring))) {
//       prefix = substring;
//     }
//   }

//   return prefix;
// }

// Antonina's Solution
// function commonPrefix(words) {
//   let prefix = '';
//   words.sort((a, b) => a.length - b.length);

//   let substring = '';

//   for (let idx = 0; idx < words[0].length; idx += 1) {
//     substring += words[0][idx];
//     if (words.every((word) => word.startsWith(substring))) {
//       prefix = substring;
//     }
//   }

//   return prefix;
// }

// Test Cases
console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
console.log(commonPrefix(["interspecies","interstellar","interstate"]) === "inters"); // true
console.log(commonPrefix(["throne","dungeon"]) === ""); // true
console.log(commonPrefix(["throne","throne"]) === "throne"); // true
console.log(commonPrefix([""]) === ""); // true

/* 2. Problem Description

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples */

// Test Cases
// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// // true
// console.log(threeByThree(['01112', '2043', '12043']));
// // false
// console.log(threeByThree(['01112', '2043']));
// // false
// console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

function threeByThree(array) {
  let arrayOfThrees = array
    .map((string) => string.split(''))
    .map((subArray) => subArray.reduce((acc, nb) => acc + Number(nb), 0))
    .filter((nb) => nb % 3 === 0);

  if (arrayOfThrees.length >= 3) return true;
  return false;
}