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
- initialize `indexes` to empty array
- iterate through string
  - if string element at idx equals the char
    - append string element's idx to `charIndexes` => [3, 5, 6, 11]
- iterate through string again
  - iterate through `indexes`
  - initialize `differences` to return value of the difference between the idx and `indexes` index
    - append values to `differences` array
  - append the lowest value to `result` array
- return `result` array */

function shortestToChar(string, letter) {
  let result = [];
  let indexes = [];

  string.split('').forEach((char, idx) => {
    if (char === letter) indexes.push(idx)
  });

  for (let idx = 0; idx < string.length; idx++) {
    let differences = indexes.map(index => Math.abs(index - idx));
    result.push(Math.min(...differences));
  }

  return result;
}

console.log(shortestToChar('aaab', 'b'));
// Ouput: [ 3, 2, 1, 0 ]

console.log(shortestToChar('aaabaab', 'b'));
// Output: [3, 2, 1, 0, 1, 1, 0]

console.log(shortestToChar('loveleetcode', 'e'));
//  Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1 ,0]


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
