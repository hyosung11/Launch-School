/* 1. Problem Description

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
- input: array
- intermediary: array
- output: string

ALGORITHM
- Declare a variable `prefix` and initialize it to an empty string
- Sort the words in the array by their length (shortest -> longest)
- Declare a variable `substring` and initialize it to an empty string
- Loop over the characters of the shortest word in the array
  - reassign `substring` to the characters of the first word in the array
  - if all words in the array start with `substring`
    - assign `prefix` to the substring
- return `prefix`

CODE
- test code while programming */

// function commonPrefix(words) {
//   let prefix = '';
//   words.sort((a, b) => a.length - b.length);
//   let shortest = words[0];
//   let substring = '';

//   for (let idx = 0; idx < shortest.length; idx += 1) {
//     substring += shortest[idx];
//     if (words.every(word => word.startsWith(substring))) {
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
console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
console.log(commonPrefix(['']) === ''); // true

/* ALGORITHM
declare a result string and initialize with first string
declare an intermediate result string
iterate over all the strings
  compare result to all the letters of the second string, if letters are the same, push it to intermediate result
    once done, copy intermediate to result
    reset intermediateResult to empty string
return result */

function commonPrefix(array) {
  let result = array[0];
  let intermediateResult = '';

  for (let index = 1; index < array.length; index += 1) {
    for (let charIdx = 0; charIdx < array[index].length; charIdx += 1) {
      let char = result[charIdx];
      if (char === array[index][charIdx]) intermediateResult += char;
    }

    result = intermediateResult;
    intermediateResult = '';
  }

  return result;
}
