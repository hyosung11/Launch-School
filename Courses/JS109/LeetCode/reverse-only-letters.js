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
- input: string
- output: string

Rules
- return a new string with letters reversed without moving position of the special chars
- keep case of the letters

DATA STRUCTURES
- in: str
- between: arr
- out: str

ALGORITHM
- input string
- initialize `result` to empty array
- iterate through string and filter for the letters
  - append letters to `letters` array
- iterate through string again
  - if char at idx is a letter
    - pop letter from letters and push into `result`
  - else push char to `result` array
- join `result`
- return `result` */

function reverseOnlyLetters(string) {
  let result = [];
  let letters = string.match(/[a-zA-Z]/g) || [];

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (/[a-zA-Z]/.test(char));
      result.push(letters.pop());
    else result.push(char);
  }

  return result.join('');
}

console.log(reverseOnlyLetters('ab-c') === 'cb-a'); // "cb-a"
console.log(reverseOnlyLetters('ab-cd') === 'dc-ba'); // "dc-ba"
console.log(reverseOnlyLetters('a-bC-dEf-ghIj') === 'j-Ih-gfE-dCba'); // "j-Ih-gfE-dCba"
console.log(
  reverseOnlyLetters('Test1ng-Leet=code-Q!') === 'Qedo1ct-eeLg=ntse-T!'
); // "Qedo1ct-eeLg=ntse-T!"


/* ALGO
- input:str
- declare empty string result
- declare empty arr letters
- iterate through string
  - if its an upper or lowercase letter, add to letters
- reverse array
- iterate through original string
  -if upper or lowercase letter
    -add letter at idx[0] of letters to result string
    -remove letter at idx[0]
   -otherwise, add element to result
  return result
    */

// function reverseOnlyLetters(string) {
//   let result = '';
//   let letters = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//       letters.push(char);
//     }
//   }

//   letters = letters.reverse();

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//       result += letters[0];
//       letters.shift();
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }