/* Algorithm Writing Clinic

Introductions
- Katarina
- Antonina
- Sulaimon
- Adhitiani
- Therese, Ruby 101
- Shane
- Marc
- H
- Dana
- Jason D.

===================
Problem Description

Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

Notes:

Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: string

EXAMPLES

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

DATA STRUCTURE

ALGORITHM
- declare a function that takes one string argument
- split the string into characters
- check the case of each character
  - if the character is lowercase, skip to the next character
  - if the character is a capital letter move it to the beginning of the string
  - if the next character is also a capital letter move it to the beginning of the string to the right of the previous capital letter in the same order
  - join the string
- return string

*/
// function capToFront(string) {
//   string.split('')
// }

// const capToFront = (str) => {
//   return (
//     str
//       .split('')
//       .filter((ch) => ch === ch.toUpperCase())
//       .join('') +
//     str
//       .split('')
//       .filter((ch) => ch === ch.toLowerCase())
//       .join('')
//   );
// };

// function capToFront(string) {
//   let array = string.split('');
//   let upperString = array
//     .filter((char) => char === char.toUpperCase())
//     .join('');
//   let lowerString = array
//     .filter((char) => char === char.toLowerCase())
//     .join('');

//   return upperString + lowerString;
// }

/*
Problem

Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

PEDA
Input: two lists of numbers sorted in ascending order
Output:array of numbers that are common to both input arrays

Rules/notes:
Lists are sorted
Try doing this problem with O(n + m) time complexity.
Numbers can be negative
There can be more than one number of each in each input array
Returned array shall only have one of each number
If no common numbers, return empty array

Examples/test cases:
common_elements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

common_elements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

common_elements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

common_elements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Questions
What if one or both input lists are empty? -> return empty array
Need to validate input? -> Assume no
Data Structure:
Array

Algorithm:
Given two lists of numbers, list1 and list2
Create an empty array, results, to hold the common values of list1 and list2.
Loop through list1 one item at a time.
For each item, check if there is a common item in list2.
If there is a common item, check if it already exists in the results array
If the item does not exist in the results array, add it to the array
When the loop ends, return the results array. */

function commonElements(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr2.length; i += 1) {
    for (let j = 0; j < arr1.length; j += 1) {
      if (arr2[i] === arr1[j]) {
        result.push(arr2[i])
      }
    }
  }
  return result;
}

// Examples/test cases:
console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]

console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

/* with Laurent 20211117

PROBLEM
Create a function that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.

Returned array shall only have one of each number
If no common numbers, return empty array

Input: 2 arrays of numbers
Output:

ALGORITHM
- input two number array
- initialize `result` array to an empty array
- iterate through first array
  - check value of element at index i
    - iterate through the second array
      - check if element at index i is the same as element at index j
        - if it is a match, we add it to the `result` array
- return an array of numbers common to both */

function commonElements(array1, array2) {
  let result = [];
  let lastPushed = null;

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j+= 1) {
      if (array1[i] === array2[j]) {
        if (array1[i] === lastPushed) continue;
        result.push(array1[i]);
        lastPushed = array1[i];
      }
    }
  }

  return result;
};

// Laurent's version
function commonElements(array1, array2) {
  let lastPushed = null;

  return array1.filter((number) => {
    if (number === lastPushed) return false;
    lastPushed = number;
    return array2.includes(number);
  });
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])) //  ➞ [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])) // ➞ [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])) // ➞ [1, 2, 4, 5]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2])) // ➞ [1, 2]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])) // ➞ []

