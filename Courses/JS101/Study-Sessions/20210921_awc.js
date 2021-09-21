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

