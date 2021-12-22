/* =========================================================
1. Accum - Problem Description

Given the string of alphabetic characters limited to a-z, do as in the sample cases.

Each character in the string argument should appear in the returned string. The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)

The repeated sequences of a character should be separated by a hyphen in the returned string.

In the repeated sequences of a character included in the returned string, the first instance of the character should be uppercase. Subsequent instances of the character should be lowercase.

PROBLEM
- input: string
- output: new string

Rules
- input string is alphabetic characters
- each character in input string appears in the returned string
- repeat character as many times as its index position in original string
- separate sequences of characters with a hyphen
- uppercase first instance of character
- lowercase subsequent instances of the character

EXAMPLES
'abcd' => 'A-Bb-Ccc-Dddd

DATA STRUCTURE
- input: string
- intermediary: array
- output: new string

ALGORITHM
- input string
- split string into chars
- iterate over chars
  - repeat char as many times as index position
  - uppercase the first instance of the char
  - lowercase the rest of the instances of char
- join chars with a hyphen between instances of the chars */

// function accum(string) {
//   return string
//     .split('')
//     .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
//     .join('-');
// }
// // Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

/* =========================================================
2. Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PROBLEM
- input a string of words
- output: string (representing highest scoring word)

Rules
- find the highest scoring word
- word is a group of contiguous characters separated by a space
- each letter of the word scores points according to its position in the alphabet
- if two words score the same, return the word that appears earliest in the original string
- all letters will be lowercase
- all inputs will be valid
- an empty string returns an empty string
- if only one word in the string, return that word
- single letter words are valid

EXAMPLES
'a z' returns 'z' because a = 1 and z = 26

DATA STRUCTURE
- input: string
- intermediary: array
- output: string

ALGORITHM
- input string of words
- initialize `alphabet` to letters a-z as lookup table
- initialize `words` to split string at each space
- initialize `arrayOfScores` and iterate (map(word)) through words
  - split each word into chars
  - iterate (reduce()) through chars of each word
    - compute the value of each char in the word based on its `alphabet` position
    - sum the values of the chars in each word
- initialize `maxIndex` to find the index position (indexOf()) of the word with the highest score (Math.max()) in the `arrayOfScores`
- return word at index position with the highest sum */

// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let words = string.split(' ');
//   let arrayOfScores = words.map(word => {
//     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//   });
//   let maxIndex = arrayOfScores.indexOf(Math.max(...arrayOfScores));
//   return words[maxIndex];
// }

// Examples / Test Cases
// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

/* =========================================================
3. Cap to Front

Create a function that moves all capital letters to the front of a word.

Notes:
Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: new string

Rules
- move all capital letters to the front of a word
- keep the original relative order of the upper and lower case letters the same

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: string / array?
- output: string

ALGORITHM
- input string
- initialize `upperCaseChars` to empty string
- initialize `lowerCaseChars` to empty string
- iterate through input string
  - if char at idx is uppercase
    - add to `upperCaseChars
  - if char at idx is lowercase
    - add to `lowerCaseChars
- concatenate `upperCaseChars` with `lowerCaseChars`
- return new string */

// function capToFront(word) {
//   let upperCaseChars = '';
//   let lowerCaseChars = '';

//   for (let idx = 0; idx < word.length; idx += 1) {
//     let char = word[idx];
//     if (char === char.toUpperCase()) upperCaseChars += char;
//     if (char === char.toLowerCase()) lowerCaseChars += char;
//   }

//   return upperCaseChars + lowerCaseChars;
// }

const capToFront = (string) => {
  return (
    string
      .split('')
      .filter((char) => char === char.toUpperCase())
      .join('') +
    string
      .split('')
      .filter((char) => char === char.toLowerCase())
      .join('')
  );
}

console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"