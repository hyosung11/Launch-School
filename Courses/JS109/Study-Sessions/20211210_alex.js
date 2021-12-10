/* Given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

PROBLEM
- input: string
- output: numbers

Rules
- replace every letter with its numerical position in the alphabet
- ignore anything that's not a letter

EXAMPLES

DATA STRUCTURE
- input: string
- intermediary: string
- output: numbers

ALGORITHM
- input string
- reassign string to all lowercase letters
- initialize `alphabet` to letters of the alphabet
- initialize `result` array
- iterate through the input string
    - if char at current index position is in alphabet string, add that characters index position in the alphabet string to the result array
- join result array by spaces
- return numbers */

function alphabetPosition(string) {
  string = string.toLowerCase();
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (alphabet.includes(char)) {
      result.push(alphabet.indexOf(char));
    }
  }

  return result.join(' ');
}

// function alphabetPosition(string) {
//   string = string.toLowerCase();
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (alphabet.includes(string[idx])) {
//       result.push(alphabet.indexOf(string[idx]));
//     }
//   }
//   return result.join(' ');
// }

// console.log(alphabetPosition('abc'));
console.log(
  alphabetPosition("The sunset sets at twelve o' clock.") ===
    '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);


/* 1. Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

Problem
input: string
output: new string

rules:
-each character will be repeated as many times as its index position + 1
-the first repetition will be uppercase; subsequent will be lowercase(whether or not original char is lower or uppercase)
-the group of same characters will be separated from other groups by a hyphen

EXAMPLES

DATA STRUCTURES
input: string
intermediary: array
output: string

ALGO
-input: string
-split string into array by empty string
-create a new array in which each char is transformed into a string comprising its uppercase version concatenated to its lowercase version repeated the number of times of its index in the original string
-join array separated by hyphen
*/

// function accum (string) {
//   let arr = string.split('');

//   let newArr = arr.map((char, index) => {
//     return char.toUpperCase() + char.toLowerCase().repeat(index)
//   })

//   return newArr.join('-');
// }

// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"