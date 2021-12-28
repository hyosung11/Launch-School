/* Given a non-empty string, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.

Example 1:
- input: 'abab'
- output: true
- explanation: It's the substring 'ab' twice.

Example 2:
- input: 'aba'
- output: false

PROBLEM
-input: string
output: boolean

rules: return true if input string is comprised multiple repetitions of a substring
-all lowercase letters
-non-empty string
-question: can the substring be comprised of a single letter? ex aaaaaaaaaa
-what if the string length is only 1?

DATA STRUCTURES
-input: string
-intermediary: array substrings
-output: boolean

ALGORITHM
- input string
- loop through length of input string
  - slice input string into progressively larger substrings
  - initialize `testString` to empty string
  - initialize `reps` to 1
  - while length of `testString` is less than or equal to the input string
    - set `testString` to substring repeated by `reps` value
    - if `testString` equals input string return true
    - otherwise increment `reps` by 1
- return false */

// console.log('test');

// This does not work!
function repeatedSubstringPattern(string) {
  for (let idx = 0; idx < string.length; idx += 1) {
    let substring = string.slice(0, idx + 1);
    let testString = '';
    let reps = 0;

    while (testString.length <= string.length) {
      testString = substring.repeat(reps);
      console.log(testString);
      if (testString === string) return true;
      reps += 1;
    }
  }
  return false;
}

// console.log(repeatedSubstringPattern('abab')); // true
// console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('aabaaba')); // false
// console.log(repeatedSubstringPattern('abaababaab')); // true
// console.log(repeatedSubstringPattern('abcabcabcabc')); // true

// function repeatedSubstringPattern(string) {
//   let substring = '';
//   let midString = Math.floor(string.length / 2);

//   for (let idx = 0; idx < midString; idx += 1) {
//     substring = string.slice(0, idx + 1);

//     while (substring.length < string.length) {
//       substring += substring;
//     }

//     if (substring === string) return true;
//   }

//   return false;
// }

// console.log(repeatedSubstringPattern('abab') === true); // true
// console.log(repeatedSubstringPattern('aba') === false); // true
// console.log(repeatedSubstringPattern('aabaaba') === false); // true
// console.log(repeatedSubstringPattern('abaababaab') === true); // true
// console.log(repeatedSubstringPattern('abcabcabcabc') === true); // true
