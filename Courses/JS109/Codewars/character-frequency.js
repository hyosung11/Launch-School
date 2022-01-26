/* Character Frequency - 6 kyu

Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically.

For example:
- letterFrequency('aaAabb dddDD hhcc')
- returns => [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]

Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.

PROBLEM
- input string
- output: nested array of letters and their frequency in the string

Rules
- return a nested array of the letter frequency count of the string
  in descending order of frequency first and in alphabetical order second
- exclude numbers, space and punctuation
- upper and lower case letters are equivalent
- return letters in lowercase

EXAMPLES
- 'aaAbb dddDD hhcc' => [['d', 5], ['a', 4], ['b', 2], ['c', 2], ['h', 2]]

DATA STRUCTURE
- input: text as a string
- intermediary: array
- output: nested array

ALGORITHM
- input text as a string
- initialize `result` to empty array
- reassign string to all lowercase
- initialize `count` to empty object
- iterate through string by letter
  - add letter to `count`
  - if letter in count increment value of letter
  - ignore non-letters
- iterate through `count`
  - append `count` key-value pairs as an array to `result`;
- sort `result` by values
- return `result` as nested array */

// function letterFrequency(text) {
//   text = text.toLowerCase();
//   let result = [];
//   let count = {};

//   text.split('').forEach((char) => {
//     if (char >= 'a' && char <= 'z') {
//       count[char] = count[char] + 1 || 1;
//     }
//   });

//   for (let letter in count) {
//     result.push([letter, count[letter]]);
//   }

//   // console.log(count);
//   // { w: 2, k: 1, l: 2, v: 5, d: 2, h: 4, f: 1, u: 1, p: 1, j: 1 }

//   // console.log(result);
// // [
// //   [ 'w', 2 ], [ 'k', 1 ],
// //   [ 'l', 2 ], [ 'v', 5 ],
// //   [ 'd', 2 ], [ 'h', 4 ],
// //   [ 'f', 1 ], [ 'u', 1 ],
// //   [ 'p', 1 ], [ 'j', 1 ]
// // ]

//   return result.sort((a, b) => {
//     // sort descending order
//     if (a[1] > b[1]) return -1; // a before b
//     if (a[1] < b[1]) return 1;  // b before a
//     // sort ascending order
//     else if (a[0] > b[0]) return 1; // b before a
//     return -1; // a before b
//   });
// }

// console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'));
// expected = [['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]];

// console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."));
// expected = [["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]];

// console.log(letterFrequency('IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI.'));
// expected = [["t", 12], ["i", 7], ["h", 6], ["a", 5], ["g", 5], ["p", 5], ["x", 5], ["d", 4], ["s", 4], ["u", 4], ["e", 3], ["r", 3], ["b", 2], ["c", 2], ["l", 2], ["n", 1], ["w", 1], ["z", 1]];


// Dana Chen
// function letterFrequency(text) {
//   text = text.toLowerCase().replace(/[^a-z]/gi, '');
//   var arrObj = {};
//   var arr = [];
//   for (var i = 0; i < text.length; i++) {
//     if (arrObj[text[i]]) {
//       arrObj[text[i]] += 1;
//     } else {
//       arrObj[text[i]] = 1;
//     }
//   }
//   Object.keys(arrObj).forEach(function (key) {
//     arr.push([key, arrObj[key]]);
//   });

//   return arr.sort(function (a, b) {
//     if (a[1] < b[1]) {
//       return 1;
//     } else if (a[1] > b[1]) {
//       return -1;
//     } else {
//       if (a[0] < b[0]) {
//         return -1;
//       } else {
//         return 1;
//       }
//     }
//   });
// }

// Codewars Solution
// const letterFrequency = (text) => {
//   let obj = {};
//   let result = [];

//   text = text.replace(/[^a-z]/gi, '').toLowerCase();

//   for (let char of text) {
//     obj[char] ? obj[char]++ : (obj[char] = 1);
//   }

//   for (let k in obj) {
//     result.push([k, obj[k]]);
//   }
//   return result.sort(([pl, pv], [nl, nv]) => nv - pv || pl.localeCompare(nl));
// };

// refactored Codewars Solution
const letterFrequency = (text) => {
  let count = {};
  let result = [];

  text = text.replace(/[^a-z]/gi, '').toLowerCase();

  for (let letter of text) {
    count[letter] = count[letter] + 1 || 1;
  }

  for (let letter in count) {
    result.push([letter, count[letter]]);
  }

  return result.sort(([previousLetter, previousValue], [nextLetter, nextValue]) => nextValue - previousValue || previousLetter.localeCompare(nextLetter));
};

console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'));
// expected = [['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]];

// console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."));
// expected = [["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]];

// console.log(letterFrequency('IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI.'));
// expected = [["t", 12], ["i", 7], ["h", 6], ["a", 5], ["g", 5], ["p", 5], ["x", 5], ["d", 4], ["s", 4], ["u", 4], ["e", 3], ["r", 3], ["b", 2], ["c", 2], ["l", 2], ["n", 1], ["w", 1], ["z", 1]];