/* Common Prefix

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

Problem
- input array
- output string

Rules
- return the longest common prefix from an array of words
- all given inputs in lowercase letters 'a-z'
- if no common prefix, return an empty string

Algorithm
- input array of words
- initialize `prefix` to empty string
- sort the array of words by length from shortest to longest
- initialize `substring` to empty string
- iterate through shortest word
  - increment `substring` by letters of shortest word
  - if every word starts with substring
    - reassign prefix to substring
- return prefix */

// function commonPrefix(words) {
//   let prefix = '';
//   let shortest = words.sort((a, b) => a.length - b.length)[0];

//   // console.log(shortest);
//   let substring = '';

//   for (let idx = 0; idx < shortest.length; idx++) {
//     substring += shortest[idx];
//     if (words.every(word => word.startsWith(substring)))
//       prefix = substring;
//   }

//   return prefix;
// }
// // Test Cases
// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
// console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
// console.log(
//   commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'
// ); // true
// console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
// console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
// console.log(commonPrefix(['']) === ''); // true

/* 2. Problem Description

Given an array of strings, return a boolean indicating whether at least three of the elements in the array have digits whose sum is divisible by 3.

Elements of the argument array will be strings containing only string digits 0-9.

For example:
In the array ['35', '01110', '126', '57', '13'],
the sum of the digits of each element will be: [8, 3, 9, 12, 4]
from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
so our function would return true.  See the below test cases for more examples

Problem
- input array
- output boolean

Rules
- return boolean true if 3 or more elements of the input array's string digits can be summed and divided by 3 with a remainder of 0
- only string digits 0-9

Algorithm
- input array of string numbers
- iterate through array
  - split numbers into digits
    - compute the sum of digits
- filter numbers divided by 3 with a remainder of 0
- if 3 or more elements have a remainder 0 return true
- return false */

function threeByThree(array) {
  return array
    .map(string => {
      return string
        .split('')
        .reduce((sum, num) => sum + Number(num), 0);
    })
    .filter(num => num % 3 === 0)
    .length > 2;
}
// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true