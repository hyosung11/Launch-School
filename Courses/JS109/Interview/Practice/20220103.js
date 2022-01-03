/* 1. Accumulate

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

PROBLEM
- input: string
- output: new string

Rules
- input string is limited to letters 'a-z' can be upper or lower case
- each char in input string appears in returned string
- repeat original char as many times as its original index position
  - e.g., "abcd" =>  a-bb-ccc-dddd
- separate different chars by a hyphen
- in repeated sequence of char in the returned string
  - first instance to uppercase
  - subsequent instances to lowercase
- if first char in input string is uppercase, keep it uppercase

EXAMPLES
- "abcd" => "A-Bb-Ccc-Dddd"

DATA STRUCTURE
- input string
- intermediary: array
  - split
  - map
  - join
- output: new string

ALGORITHM
- input string
- split the string at each char
- iterate through chars and track index position
  - uppercase first char
  - lowercase subsequent occurrences of char
    - repeat occurrences of char based on index position
- join chars with hyphen
- return new string */

// function accum(string) {
//   return string
//     .split('')
//     .map((char, idx) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(idx);
//     })
//     .join('-');
// }


// // Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* =================
2. Alphabet Position

Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

PROBLEM
- input: string of letters
- output: new string with letters replaced by their numerical equivalent in the alphabet order

Rules
- replace every letter in the input string with its number position in the alphabet
- 'a' = 1, 'b' = 2, ... 'z' = 26
- if char in input string is not a letter, ignore it and don't return it
- uppercase letter returns same numeric position as its lowercase equivalent

EXAMPLES
- 'abc' => '1 2 3'

DATA STRUCTURE
- input: string
- intermediary: array (split, map, join?)
- output: new string

ALGORITHM
- input string
- initialize `result` array to collect values
- initialize `alphabet` to lowercase letters 'a-z' as lookup for the numbers of the letters in the alphabet
- reassign string to lowercase letters
- split the string at each char
- iterate through the chars
  - if `alphabet` includes the char
    - push the char's index position in the alphabet string into the `result` array
- join the chars at the space
- return new string */

function alphabetPosition(string) {
  let result = [];
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  string = string.toLowerCase();

  string.split('').forEach(char => {
    if (alphabet.includes(char)) result.push(alphabet.indexOf(char));
  })

  return result.join(' ');
}

console.log(alphabetPosition('SungOh')) // '19 21 14 7 15 8'
console.log(alphabetPosition('abc') === '1 2 3'); // true
console.log(
  alphabetPosition("The sunset sets at twelve o' clock.") ===
    '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);