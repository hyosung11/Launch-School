/* Reverse Only Letters - LeetCode: https://leetcode.com/problems/reverse-only-letters/

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

PROBLEM
- input string
- output new string with letters reversed

Rules
- return new string with letters reversed
- non-letters remain in the same position as in the original string
- keep letters in the same case as in the input string

EXAMPLES
- 'ab-cd' => 'dc-ba'
- 'Test1ng-Leet=code-Q!' => TestingLeetcodeQ => QedocteeLgnitseT => Qedo1ct-eeLg=ntse-T!

DATA STRUCTURE
- input string
- intermediary: array (split, map?)
- output: new string

ALGORITHM
- input string
- split string into an array of chars
- filter letters from the chars
- iterate through string
  - if char is a letter, pop letter from the `letters` array and push to result array
  - else return char
- join the string
- return the string

charsOnly = ["a"]
["c", "b", "-", "a"]

Iterate over the original string
filter for only letters

*/

// function reverseOnlyLetters(string) {
//   let result = [];

//   let letters = string
//     .split('')
//     .filter(
//       (char) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
//     );
//   // console.log(letters) // ['a', 'b', 'c']

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx]; // 'a'
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//       result.push(letters.pop());
//     } else {
//       result.push(char);
//     }
//   }

//   return result.join('');
// }

// function reverseOnlyLetters(string) {
//   const isLetter = (char) =>
//     (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
//   let letters = string.split('').filter(isLetter);

//   return string
//     .split('')
//     .map((letter) => {
//       if (isLetter(letter)) return letters.pop();
//       else return letter;
//     })
//     .join('');
// }

// function reverseOnlyLetters(string) {
//   // const isLetter = char => char.match(/[a-z]/gi).length === 1
//   const isLetter = (char) =>
//     (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
//   let letters = string.match(/[a-z]/gi);

//   return string
//     .split('')
//     .map((letter) => {
//       if (!!letter.match(/[a-z]/gi)) return letters.pop();
//       else return letter;
//     })
//     .join('');
// }

console.log(reverseOnlyLetters('ab-c')); // "cb-a"
console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"