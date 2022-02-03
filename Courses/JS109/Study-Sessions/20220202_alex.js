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
-output: string

Rules
- return a new string with letters reversed without moving position of the special chars
- keep case of the letters

DATA STRUCTURES
-in: str
between: arr
out: str

ALGO
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

// console.log(reverseOnlyLetters('ab-c')); // "cb-a"
// console.log(reverseOnlyLetters('ab-cd')); // "dc-ba"
// console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // "j-Ih-gfE-dCba"
// console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // "Qedo1ct-eeLg=ntse-T!"

/* ===================

Decipher This - 6 kyu

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g., Hello becomes Holle)
- the character code is replaced by its letter (e.g., 72 becomes H)

Note: there are no special characters used, only letters and spaces

EXAMPLES

1) "72olle" -> 72, "o", "l", "l", "e"
2) "72olle" -> H, "o", "l", "l", "e"
3) "72olle" -> H, "e", "l", "l", "o" 

PROBLEM
in: str
out: str

Rules:
- transform leading number into letter with that char code
- swap letters at index 1 and index length - 1
- str contains only letters and spaces

DATA STRUCTURES
in: str
between: arr
out: arr

ALGO

-split str and then map another array using helper function below
-return mapped arr joined by spaces

helper function:
- split into arr
- declare num variable
- iterate through arr
  -if '123456789' includes element,
    -increment num by element
-splice off 0 to length of num
-add fromCharCode to beginning of array

-return arr[o] + last char + slice from 2 to last + slice(1)
*/

function decipherThis(string) {
  return string
    .split(' ')
    .map(word => fix(word))
    .join(' ');
} 

function fix(word) {
  let array = word.split('');
  let num = '';
  
  for (let idx = 0; idx < array.length; idx++) {
    let char = array[idx];
    if ('0123456789'.includes(char)) num += char;
  }
  
  array.splice(0, num.length);
  array.unshift(String.fromCharCode(Number(num)));

  if (array.length <= 2) return array.join('');
  
  return array[0] + array[array.length - 1] + array.slice(2, array.length -1).join('') + array[1];
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
); // 'Have a go at this and see how you do')
