/* 06:03 starting without Alex

/* 1180. Count Substrings with Only One Distinct Letter

Given a string s, return the number of substrings that have only one distinct letter.

EXAMPLES
- 'aaaba' => 8

Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8

Constraints:
  1 <= s.length <= 1000
  s[i] consists of only lowercase English letters.

Problem
- input string
- output number

Rules
- return the number of substrings with only one distinct letter

Algorithm
- declare function `countLetters` with the parameter `string`
- init `count` to 0
- get all substrings from string helper function
- iterate through substrings array
  - if every char in substring is equal to the char at idx 0
    - increment count
- return `count`

`getSubstrings` helper function
- input string
- init `substring` = []
- outer loop
  - inner loop
    - slice string at idx jdx
    - append substring to `substring` array
- return `substring` array */

// function countLetters(string) {
//   let count = 0;

//   let substrings = getSubstrings(string);

//   substrings.forEach((substring, idx) => {
//     if (isUnique(substrings[idx])) count += 1;
//   });

//   return count;
// }

// function isUnique(str) {
//   let arr = str.split('')
//   return arr.every(char => char === arr[0]);
// }

// function getSubstrings(string) {
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       substrings.push(string.slice(idx, jdx));
//     }
//   }

//   return substrings;
// }

// console.log(countLetters('')); // 0
// console.log(countLetters('a')); // 1   1
// console.log(countLetters('ab')); // 2
// console.log(countLetters('aa')); // 3   1 + 2
// console.log(countLetters('aaa')); // 6    1 + 2 + 3
// console.log(countLetters('aab')); // 4
// console.log(countLetters('aaaa')); // 10    1 + 2 + 3 + 4
// console.log(countLetters('aaaba')); // 8
// console.log(countLetters('aaaaaaaaaa')); // 55


// function countLetters(string) {
//   let substrings = getSubstrings(string);
//   let results = substrings.filter((substring) => {
//     let arr = substring.split('');
//     return arr.every((char) => char === arr[0]);
//   });
//   return results.length;
// }

// function getSubstrings(string) {
//   let substrings = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     for (let jdx = idx + 1; jdx <= string.length; jdx++) {
//       substrings.push(string.slice(idx, jdx));
//     }
//   }

//   return substrings;
// }

/* PROBLEM - 02
Substring Instance Count
Return the number of times a search-string is found within the given searchable string.
Assume that both inputs will only be strings.
Assume that all characters are important.
Assume the searchable string will always be provided as an argument.
Return `-1` if the search-string is empty or missing.
Solve without using Regex.

PROBLEM
in: str, substr
out: num (occurrences of substr within str)

Rules:
- if substr is falsy return -1
- count number of times substr appears withhin str and return that num
- if occurrences = 0, return -1

ALGO
- in: str, substr
- if (!substring) return -1
- init count = 0
- iterate through str
  if a slice from the current idx to the idx + length of th if substr === substr:
    -count += 1
    -idx+= substr.length
-if count = 0, return -1
- return count */

function countSubstring(string, substring) {
  if (string.length === 0) return 0;
  if (!substring) return -1;

  let count = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (string.slice(idx, idx + substring.length) === substring) {
      count += 1;
      idx += substring.length;
    }
  }

  return count;
}

// Tests
console.log(countSubstring('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring('', 'abbb') === 0);
console.log(countSubstring('aaaaa', '') === -1);
console.log(countSubstring('aaaaa') === -1);
console.log(countSubstring('bbAaaaA', 'Aa') === 1);