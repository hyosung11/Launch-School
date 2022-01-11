/* Detect Pangram - 6 kyu

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// My version that worked upon changing from an object to an array
// function isPangram(string) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   string.split('').forEach(char => {
//     char = char.toLowerCase();
//     if (alphabet.includes(char) && (!result.includes(char))) result.push(char);
//   });

//   return result.length >= 26
// }

console.log(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.log(isPangram('This is not a pangram.') === false);

// function isPangram(string) {
//   string = string.toLowerCase();
//   let alphabet = {};
//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if (char >= 'a' && char <= 'z') {
//       alphabet[char] = alphabet[char] + 1 || 1;
//     }
//   }

//   return Object.values(alphabet).length === 26;
// }

// problem
//   input: a string sentence containing various words
//   output: true or false depending on whether the string is a pangram
//   rules: 
//     -  pangram is a sentence that contains every single letter of the alphabet at least once
//     -  case is irrelavent
//     -  ignore numbers and punctuation
// example: 
//   "The quick brown fox jumps over the lazy dog" ==> true
// data structure: object which holds the letters as keys and the number of times the letter has appeared as a value.
// algorithm:
//   [x]  initialize an empty object
//   [x]  iterate over each character of the sentence.
//   [x]  if the character is a letter, 
//       [x] if the letter doesn't exist as a property on the object yet, set it as a property with the value of 1
//       [x] if the letter does exist, increment the property's value by 1
//   [x]  see if each letter of the alphabet is present on the object
//   [x] if every letter of the alphabet is present on the object return true; otherwise return false;

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isPangram(string) {
//   let alphabet = {};

//   let chars = string.split('');

//   chars.forEach((char) => {
//     char = char.toLowerCase();
//     if (isLetter(char)) {
//        alphabet[char] = alphabet[char] + 1 || 1;
//     }
//   })

//   return Object.entries(alphabet).length === 26;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isPangram(string) {
//   let alphabet = {};
//   string = string.toLowerCase();

//   for (let char of string) {
//     if (isLetter(char)) {
//       alphabet[char] = alphabet[char] + 1 || 1;
//     }
//   }

//   return Object.keys(alphabet).length === 26;
// }

/*
RULES
- A pangram is a sentence that contains every single letter of the alphabet at least once.
- given a string, detect whether it is a pangram or not
- return true if it is, and false otherwise
- ignore numbers and puctuation

ALGORITHM
- lowercase the input string
- extract all alphabetic letters from the input string
- get all the unique letters
- if the length of all unique letters is 26
  - return true
- otherwise
  - return false
*/

function isPangram(string){
  const ALPHABET_COUNT = 26;
  const alphabeticRegex = /[a-z]/g;

  const letters = string.toLowerCase().match(alphabeticRegex) || [];
  const uniqueLetters = [...new Set(letters)]
  return uniqueLetters.length === ALPHABET_COUNT;
}