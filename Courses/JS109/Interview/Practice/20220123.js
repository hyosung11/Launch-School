/* Alphabet Position

Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

Algo
- input string
- initialize `result` to empty array
- initialize `alphabet` to '_a-z'
- reassign string to lowercase
- split the string into an array of chars
- iterate through array by char
  - if char is in `alphabet`
    - append the char's index position in `alphabet` to `result` array
- join the array of chars into a string of numbers
- return `result` string of numbers  */

// function alphabetPosition(string) {
//   let result = [];
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   // string = string.toLowerCase();

//   string.toLowerCase().split('').forEach(char => {
//     if (alphabet.includes(char)) result.push(alphabet.indexOf(char));
//   })

//   return result.join(' ');
// }

// console.log(alphabetPosition('abc')) // '1 2 3'); // true
// console.log(alphabetPosition('abc') === '1 2 3'); // true

// console.log(
//   alphabetPosition("The sunset sets at twelve o' clock.")) // === '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';

// console.log(
//   alphabetPosition("The sunset sets at twelve o' clock.") ===
//     '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
// );

/* ===========
Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PROBLEM
- input: string of words
- output: string as word with the highest score based on its letters values in the alphabet

Rules
- return the highest scoring word from a string of words
- words are separated in the string by a space
- each letter scores points based on its position in the alphabet => a = 1, z = 26
- all letters lowercase
- if two words score the same, return the word that first appears in the input string

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array
- output: word

ALGORITHM
- input string of words
- initialize `alphabet` to '_a-z'
- initialize `words` to string split into an array of words at the space
- initialize `wordScores` to return value as follows
  - iterate through array of words
  - split each word into chars
    - iterate through chars
      - compute sum of value of chars in each word by their index position in `alphabet`
- initialize `maxIndex` to 0
- iterate through `wordScores` array
  - if value at idx is greater than the value at `maxIndex`
    - reassign `maxIndex` to idx
- return the word in `words` at the maxIndex` */

// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let words = string.split(' ');
//   let wordScores = words.map(word => {
//     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//   });

//   let maxIndex = wordScores.indexOf(Math.max(...wordScores));
//   return words[maxIndex];
// }

/* Algo
- input string
- initialize `highest` to empty string
- initialize `words` to an array of words by splitting the string at each space
- iterate by word through `words` array
  - call helper function `getScore` on each word
  - if score of word at index is greater than score of `highest`
    - reassign `highest` to word at index
- return `highest`

getScore helper function
- input word
- initialize `alphabet` to '_a-z'
- split word into chars
  - iterate by char
    - compute sum of word by each char's value based on index position in `alphabet`
- return word's score
*/

function alphabetScore(string) {
  let highest = '';
  let words = string.split(' ');

  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    if (getScore(word) > getScore(highest))
      highest = word;
  }

  return highest;
}

function getScore(word) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  return word
    .split('')
    .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
}

// Examples / Test Cases
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('') === '');