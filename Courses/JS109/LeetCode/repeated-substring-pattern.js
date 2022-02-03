/* 459. Repeated Substring Pattern - Easy

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

Constraints:
- 1 <= s.length <= 104
- s consists of lowercase English letters.

ALGORITHM
- input string
- initialize `substring` to empty string
- initialize `middle` to middle of input string using Math.floor and dividing length of input string by 2
- iterate to `middle` of string
  - reassign substring to increasing slices of string
  - while substring's length is less than the string length
    - increment substring by substring
    - if substring equals the string
      - return true
- return false */

// passes test cases here, but not accepted by LeetCode
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

function repeatedSubstringPattern(string) {
  return string.repeat(2).slice(1, -1).includes(string);
}

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('aabaaba')); // false
console.log(repeatedSubstringPattern('abaababaab')); // true
console.log(repeatedSubstringPattern('abcabcabcabc')); // true