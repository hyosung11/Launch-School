/* 1859. Sorting the Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Constraints:
 * 2 <= s.length <= 200
 * s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
 * The number of words in s is between 1 and 9.
 * The words in s are separated by a single space.
 * s contains no leading or trailing spaces.

## Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

## Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

Problem
- input string
- output string

Rules
- return a new string with words in the sentence in the order of the number attached to each word in the original sentence and remove the number before returning the sentence of words

Algorithm
- input string
- sort by the last element of each word
- remove number from each word
- return `result` string
*/

// function sortSentence(string) {
//   let array = string.split(' ').sort((a, b) => {
//     return a[a.length - 1] - b[b.length - 1];
//   });

//   return array
//     .map((word) => {
//       return word.slice(0, -1);
//     })
//     .join(' ');
// }

// console.log(sortSentence('is2 sentence4 This1 a3') === 'This is a sentence');
// console.log(sortSentence('Myself2 Me1 I4 and3') === 'Me Myself and I');


/* 1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 
Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

P:
- input array
- output boolean

R
- return true if every value in the array occurs a unique number of times

Algo
- input array
- init `result` to {}
- iterate through array elements
  - add to `result` or
  - increment `result`
- init `uniqueValues` to empty array
- iterate through `result`
  - if uniqueValues doesn't include value
    - push value to uniqueValues
  - else return false
- return true
*/

function uniqueOccurrences(array) {
  let count = {};

  array.forEach((num) => {
    count[num] = count[num] + 1 || 1;
  });

  if (Object.values(count).every((item, _, array) => item === array[0])) return false;

  return true;
}

// function uniqueOccurrences(array) {
//   let result = {};

//   array.forEach((num) => {
//     result[num] = result[num] + 1 || 1;
//   });

//   let uniqueValues = [];

//   let values = Object.values(result);

//   for (let value of values) {
//     if (!uniqueValues.includes(value)) {
//       uniqueValues.push(value);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

console.log(uniqueOccurrences([1, 2]) === false)
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]) === true)
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) === true)


/* Laurent's Version */
// function uniqueOccurrences(arr) {
//   const count = array => {
//     let counter = {};

//     for (let index = 0; index < array.length; index += 1) {
//       if (!counter.hasOwnProperty(array[index])) counter[array[index]] = 1;
//       else counter[array[index]] += 1;
//     }

//     return counter;
//   }

//   let countNumbers = count(arr);
//   let countOfCounts = count(Object.values(countNumbers));

//   if (!Object.values(countOfCounts).every(count => count === 1)) return false;
//   return true;
// };

// LeetCode Noob Solution
// var uniqueOccurrences = function (arr) {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
//   }

//   arr = Object.values(map);
//   map = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!map[arr[i]]) {
//       map[arr[i]] = 1;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

// Using an array
// var uniqueOccurrences = function (arr) {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!map[arr[i]]) {
//       map[arr[i]] = 1;
//     } else {
//       map[arr[i]] = map[arr[i]] + 1;
//     }
//   }

//   let uniqueArray = [];

//   for (let key of Object.keys(map)) {
//     if (!uniqueArray.includes(map[key])) {
//       uniqueArray.push(map[key]);
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

// Using `new Set()`
// var uniqueOccurrences = function (arr) {
//   const map = {};

//   for (const number of arr) {
//     if (map[number]) {
//       map[number] += 1;
//     } else {
//       map[number] = 1;
//     }
//   }

//   const frequencies = Object.values(map);
//   const set = new Set(frequencies);

//   return frequencies.length === set.size;
// };

// Using [...new Set()]
// var uniqueOccurrences = function (arr) {
//   let map = {};

//   for (let i of arr) {
//     map[i] ? map[i]++ : (map[i] = 1);
//   }

//   let values = Object.values(map);
//   let uniqueValues = [...new Set(values)];
//   return values.length === uniqueValues.length;
// };