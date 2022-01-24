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
- intermediary: array (split, reduce)
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

/* Alternative Algo
- input string
- initialize `highest` to empty string
- initialize `words` to an array of words by splitting the string at each space
- iterate by word through `words` array
  - call helper function `getScore` on each word and on `highest`
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

// function alphabetScore(string) {
//   let highest = '';
//   let words = string.split(' ');

//   words.forEach(word => {
//     if (getScore(word) > getScore(highest))
//       highest = word;
//   });

//   return highest;
// }

// const getScore = word => {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   return word
//     .split('')
//     .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
// }

// console.log(alphabetScore('aa b')); // 'aa'

// Examples / Test Cases
// console.log(alphabetScore('') === '');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');

// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

/* ==============================
Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

Notes:

Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: new string

Rules
- return a new string where the capital letters are moved to the beginning of the string
- keep the original relative order of the upper and lower case letters the same
- one word?
- just letters?
- empty string?

EXAMPLES
- 'hApPy' => APhpy

DATA STRUCTURE
- input string
- intermediary: split into an array or build a new string?
- output new string

ALGORITHM
- input string of letters
- initialize `upper` to empty string
- initialize `lower` to empty string
- iterate over string by char
  - if char at idx is uppercase and to `upper`
  - if char at idx is lowercase add to `lower`
- concatenate `upper` and lower`
- return new string of letters */

// function capToFront(string) {
//   let upper = '';
//   let lower = '';

//   string.split('').forEach(char => {
//     if (char === char.toUpperCase()) upper += char;
//     else if (char === char.toLowerCase()) lower += char;
//   })

//   return upper + lower;
// }

// function capToFront(string) {
//   return string
//     .split('')
//     .filter(char => char === char.toUpperCase())
//     .join('') +
//     string
//       .split('')
//       .filter(char => char === char.toLowerCase())
//       .join('');
// }

// console.log(capToFront("hApPy")); // "APhpy"
// console.log(capToFront("moveMENT")); // "MENTmove"
// console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"

/* ========
Change Me

Given a string, write a function changeMe which returns the same string but with all the words in it that are palindromes uppercased.

PROBLEM
- input: string of words
- output: new string of words with palindromes capitalized

Rules
- return a string of words with palindromes uppercased
- only letters?
- empty string returns an empty string
- palindromes case-sensitive?
- words are split by space in string

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array (map, split, reverse, join for palindrome check)
- output: string

ALGORITHM
- input string of words
- initialize `words` to array of words by splitting the string at each space
- iterate through words
  - using `isPalindrome` helper function
    - check if word is a palindrome
    - if so return word in all caps
    - otherwise return word as-s
  - join the words and return
*/

// function changeMe(string) {
//   return string
//     .split(' ')
//     .map(word => {
//       if (isPalindrome(word)) return word.toUpperCase();
//       else return word;
//     })
//     .join(' ');
// }

// function isPalindrome(word) {
//   return word === word.split('').reverse().join('');
// }

// console.log(changeMe("We will meet at noon")) // === "We will meet at NOON"); // true
// console.log(changeMe("No palindromes here")) // === "No palindromes here"); // true
// console.log(changeMe("")) // === ""); // true
// console.log(changeMe("I LOVE my mom and dad equally")) // === "I LOVE my MOM and DAD equally"); // true

// // Test Cases
// console.log(changeMe("We will meet at noon") === "We will meet at NOON"); // true
// console.log(changeMe("No palindromes here") === "No palindromes here"); // true
// console.log(changeMe("") === ""); // true
// console.log(changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"); // true

