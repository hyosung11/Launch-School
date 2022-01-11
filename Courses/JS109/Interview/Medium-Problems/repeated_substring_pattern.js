/* Given a non-empty string, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.

Example 1:
- input: 'abab'
- output: true
- explanation: It's the substring 'ab' twice.

Example 2:
- input: 'aba'
- output: false

PROBLEM
- input string
- return boolean

Rules
- if copies of substrings of string can be concatenated to equal the input string return true
- if not return false

EXAMPLES
abcabcabcabc = abc + abc + abc + abc => true

DATA STRUCTURE
- input: string
- intermediary: substrings
- output: boolean

ALGORITHM
- input string
- initialize `substring` to empty string
- initialize `middle` to find the middle of the string
- iterate to middle of input string
  - find substrings of string
  - iterate through substrings to length of string
    - increment the substring
    - if substring equals string return true
- return false */


function repeatedSubstringPattern(string) {
  let substring = '';
  let midString = Math.floor(string.length / 2);

  for (let index = 0; index < midString; index++) {
    substring = string.slice(0, index + 1);

    while (substring.length < string.length) {
      substring += substring;
      if (substring === string) return true;
    }
  }

  return false;
}

// Refactored
function repeatedSubstringPattern(string) {
  let substring = '';
  let maxIdx = Math.floor(string.length / 2);

  for (let idx = 0; idx < maxIdx; idx += 1) {
    substring = string.slice(0, idx + 1);
    let substringLength = idx + 1;

    if (substring.repeat(string.length / substringLength) === string) {
      return true;
    }
  }
  return false;
}

console.log(repeatedSubstringPattern('abab') === true); // true
console.log(repeatedSubstringPattern('aba') === false); // true
console.log(repeatedSubstringPattern('aabaaba') === false); // true
console.log(repeatedSubstringPattern('abaababaab') === true); // true
console.log(repeatedSubstringPattern('abcabcabcabc') === true); // true