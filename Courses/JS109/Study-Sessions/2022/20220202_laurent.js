/* 821. Shortest Distance to a Character - Leetcode

Given a string s and a character c that occurs in s, return an array of integers `answer` where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.

The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.

For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

Input: s = "aaab", c = "b"
Output: [3, 2, 1, 0]

1 <= s.length <= 104
s[i] and c are lowercase English letters.
It is guaranteed that c occurs at least once in s.

PROBLEM
- input a string and a char
- output: an array of numbers representing distance from char in the input string

Rules
- return an array of numbers representing the distance by index position the char at that index position is from the nearest char in the string
- array will contain the same amount of numbers as the length of the string
- implied that if the char at the string index is the char itself, the value of the number is 0
-the char occurs at least once in the input string

EXAMPLES
- Input: s = "loveleetcode", c = "e"
- Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

Input: string = "aaab", char = "b"
Output: [3, 2, 1, 0]

'a' => 5
[3, 6] => 3

5 - 6 || 5 - 3 => 1

DATA STRUCTURE
- input string and char
- intermediary: array
- output: array

ALGORITHM
- input string and char
- initialize `result` array to empty array
- initialize `charIndexes` to empty array
- iterate through string
  - if string element at idx equals the char
    - append string element's idx to `charIndexes` => [3, 5, 6, 11]
- iterate through string again
  - iterate through `charIndexes`
  - initialize `differences` to return value of the difference between the idx and charIndex index
    - append values to `differences` array
  - append the lowest value to `result` array
- return `result` array */

// function shortestToChar(string, char) {
//   let result = [];
//   let charIndexes = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === char) charIndexes.push(idx);
//   }

//   for (let idx = 0; idx < string.length; idx++) {
//     let differences = [];

//     for (let jdx = 0; jdx < charIndexes.length; jdx++) {
//       differences.push(Math.abs(idx - charIndexes[jdx]))
//     }

//     result.push(Math.min(...differences));
//   }

//   return result;
// }

// console.log(shortestToChar('aaab', 'b'));
// // Ouput: [ 3, 2, 1, 0 ]

// console.log(shortestToChar('aaabaab', 'b'));
// // Output: [3, 2, 1, 0, 1, 1, 0]

// console.log(shortestToChar('loveleetcode', 'e'));
// //  Output: [3,2,1,0,1,0,0,1,2,2,1,0]

/* ALGORITHM
- input string and char
- initialize `result` array to empty array
- initialize charIndexes to empty array
- iterate through string
  - if string at idx equals the char
    - append idx to `charIndexes` => [3, 5, 6, 11]
- iterate through string again
  - initialize `diffs` to an empty array
  - iterate through `charIndexes`
    - append the difference between the letter's idx position and the
    charIndexes value
  - append the lowest value from `diffs` to `result` array
- return `result` array */

// function shortestToChar(string, char) {
//   let result = [];
//   let charIndexes = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === char) charIndexes.push(idx);
//   }

//   for (let idx = 0; idx < string.length; idx++) {
//     let differences = [];

//     for (let jdx = 0; jdx < charIndexes.length; jdx++) {
//       differences.push(Math.abs(charIndexes[jdx] - idx));
//     }

//     result.push(Math.min(...differences));
//   }

//   return result;
// }


// function shortestToChar(string, char) {
//   let result = [];
//   let charIndexes = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === char) charIndexes.push(idx);
//   }

//   for (let idx = 0; idx < string.length; idx++) { // 'a'
//     let diffs = [];

//     for (let jdx = 0; jdx < charIndexes.length; jdx++) {
//       diffs.push(Math.abs(idx - charIndexes[jdx]));
//     }

//     result.push(Math.min(...diffs));
//     // let diffs = charIndexes.map(index => Math.abs(idx - index));
//     // result.push(Math.min(...diffs)); // 2
//   }

//   return result;
// }

// function shortestToChar(string, char) {
//   let result = [];
//   let charIndexes = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === char) charIndexes.push(idx);
//   }

//   for (let idx = 0; idx < string.length; idx++) {
//     let diffs = charIndexes.map((index) => Math.abs(idx - index));
//     result.push(Math.min(...diffs)); // 2
//   }

//   return result;
// }

// console.log(shortestToChar("aaabaab","b"));
// // Output: [3, 2, 1, 0, 1, 1, 0]

// console.log(shortestToChar("loveleetcode", "e"));
// //  Output: [3,2,1,0,1,0,0,1,2,2,1,0]

/* =============================================

884. Uncommon Word from Two Sentences - Leetcode

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:

1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.

PROBLEM
- input two strings
- output array

Rules
- return an array with a unique word or words
  - a unique word occurs only once in either string
- only lowercase English letters and spaces
- words separated by spaces

EXAMPLES

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

DATA STRUCTURE
- input two strings of words
- intermediary: arrays
- output: array

ALGORITHM
- input two strings of words
- initialize `result` to an empty array
- split string1 into an array of words at the spaces
- split string2 into an array of words at the spaces
- initialize combinedArrays to concat array1 and array2
- initialize `count` to an empty object
- iterate through `combinedArrays`
  - add word to `count` or
  - increment `count` for word
- iterate over the keys in `count` and filter and return the values that equal 1
- return `result` of unique words or a unique word

*/

function uncommonFromSentences(string1, string2) {
  let result = [];
  let array1 = string1.split(' ');
  let array2 = string2.split(' ');
  let combinedArrays = array1.concat(array2);
  let count = {};

  combinedArrays.forEach(word => {
    count[word] = count[word] + 1 || 1;
  });

  result = Object.keys(count).filter(key => count[key] === 1);
  return result;
}

console.log(uncommonFromSentences("apple apple", "banana"));
// // Output: ["banana"]

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// // //  Output: ["sweet","sour"]

// const uncommonFromSentences = (s1, s2) => {
//   const wordArr1 = s1.split(' ');
//   const wordArr2 = s2.split(' ');
//   let result = [];

//   let obj = {};

//   wordArr1.forEach((word) => {
//     if (obj[word]) {
//       obj[word] += 1;
//     } else {
//       obj[word] = 1;
//     }
//   });

//   wordArr2.forEach((word) => {
//     if (obj[word]) {
//       obj[word] += 1;
//     } else {
//       obj[word] = 1;
//     }
//   });

//   result = Object.keys(obj).filter((key) => obj[key] === 1);

//   return result;
// };

// const uncommonFromSentences = function (s1, s2) {
//   let s1s2 = [...s1.split(` `), ...s2.split(` `)];
//   let ans = [];

//   for (let word of s1s2) {
//     if (s1s2.indexOf(word) == s1s2.lastIndexOf(word)) ans.push(word);
//   }
//   return ans;
// };

function uncommonFromSentences(string1, string2) {
  let result = [];
  // let array1 = string1.split(' ');
  // let array2 = string2.split(' ');
  let combinedArrays = (string1 + ' ' + string2).split(' ');
  let count = {};

  combinedArrays.forEach((word) => {
    count[word] = count[word] + 1 || 1;
  });

  result = Object.keys(count).filter((key) => count[key] === 1);
  return result;
}