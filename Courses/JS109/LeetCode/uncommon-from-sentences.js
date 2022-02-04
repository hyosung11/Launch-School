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

function uncommonFromSentences(str1, str2) {
  let result = [];
  let array = [...str1.split(' '), ...str2.split(` `)]
  let count = {};

  // array.forEach(word => {
  //   count[word] = count[word] + 1 || 1;
  // });

  for (let word of array) {
    count[word] = count[word] + 1 || 1;
  }

  result = Object.keys(count).filter(key => count[key] === 1);
  return result;
}

console.log(uncommonFromSentences('apple apple', 'banana'));
// // Output: ["banana"]

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
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

// function uncommonFromSentences(string1, string2) {
//   let result = [];
//   // let array1 = string1.split(' ');
//   // let array2 = string2.split(' ');
//   let combinedArrays = (string1 + ' ' + string2).split(' ');
//   let count = {};

//   combinedArrays.forEach((word) => {
//     count[word] = count[word] + 1 || 1;
//   });

//   result = Object.keys(count).filter((key) => count[key] === 1);
//   return result;
// }

// function uncommonFromSentences(string1, string2) {
//   let result = [];
//   let array1 = string1.split(' ');
//   let array2 = string2.split(' ');
//   let combinedArrays = array1.concat(array2);
//   let count = {};

//   combinedArrays.forEach((word) => {
//     count[word] = count[word] + 1 || 1;
//   });

//   result = Object.keys(count).filter((key) => count[key] === 1);
//   return result;
// }