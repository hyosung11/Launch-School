/* Remove Vowels

Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Problem
- input string
- output new string without vowels

Algorithm
- input string
- init `result` to empty string
- iterate through string
  - if char is a vowel continue
  - else add char to `result`
- return `result`
*/

// function removeVowels(string) {
//   let result = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     if ('aeiou'.includes(string[idx])) continue;
//     result += string[idx];
//   }

//   return result;
// }

// console.log(removeVowels('ae')); // ''
// console.log(removeVowels('leetcodeisacommunityforcoders')); // "ltcdscmmntyfrcdrs"

/* 1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

Problem
- input string
- output new string

Rules
- see above

Examples
- see below

Algo
- input string
- init `result` to ''
- init `alphabet` to 'a-z'
- while idx < string.length
  - init `digits` to ''
  - iterate over string
    - if char at [idx + 2] === '#`
      - reassign `digits` to char at idx + char at idx + 1
      - increment `result` with value of alphabet at `digits`
      - increment idx += digits.length + 1
    - else
      - increment result by value of alphabet at idx
      - increment idx += 1
- return `result`
*/

function freqAlphabets(string) {
  let result = '';
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  let idx = 0;

  while (idx < string.length) {
    let tempString = '';
    if (string[idx + 2] === '#') {
      tempString = string[idx] + string[idx + 1]; // 10
      result += alphabet[tempString];
      idx += tempString.length + 1;
    } else {
      result += alphabet[string[idx]];
      idx += 1;
    }
  }

  return result;
}

console.log(freqAlphabets("10#11#12"));  // "jkab"
console.log(freqAlphabets("1326#"));  // "acz"

function freqAlphabets(string) {
  let result = '';
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  let idx = 0;

  while (idx < string.length) {
    let digits = '';
    if (string[idx + 2] === '#') {
      digits = string[idx] + string[idx + 1];
      result += alphabet[digits];
      idx += 3;
    } else {
      result += alphabet[string[idx]];
      idx += 1;
    }
  }

  return result;
}