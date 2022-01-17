/* Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

PROBLEM
- input: string of words
- output: array of same words sorted

Rules
- return an array of words sorted alphabetically by the last char in each word
- if two words have the same last letter, return the words in the array in the order they appeared in the input string
- looks like all char are in lowercase
- implicit that words are separated by spaces

EXAMPLES
- 'at the zoo' => ['the', 'zoo', 'at']

DATA STRUCTURE
- input a string of words
- intermediary: array(split, sort)
- output: array

ALGORITHM
- input string of words
- initialize `wordArray to return value of the split string that create array of words separated at space
- sort word by last char
  - if last char of first word is greater than last char of second word, return 1
  - if last char of first word is less than last char of second word return -1
  - if last char of first word equals last char of second word return 0
- return wordArray */

// function last(words) {
//   let wordArray = words.split(' ');

//   return wordArray.sort((first, second) => {
//     if (first[first.length - 1] > second[second.length - 1]) return 1;
//     if (first[first.length - 1] < second[second.length - 1]) return -1;
//     if (first[first.length - 1] === second[second.length - 1]) return 0;
//   })
// }

// function last(string) {
//   return string
//     .split(' ')
//     .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }

console.log(last('omi sungoh sohee hyosung')); // === ['sohee', 'hyosung', 'sungoh', 'omi']);

console.log(last('take me to semynak')) // => ['take', 'me', 'semynak', 'to']);

// console.log(last('man i need a taxi up to ubud')) // =>['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);

// console.log(last('what time are we climbing up the volcano')) // ['time', 'are', 'we', 'the', 'climbing','volcano', 'up', 'what']);

