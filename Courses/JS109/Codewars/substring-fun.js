/* Substring Fun - 7 kyu

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2

Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

PROBLEM
- input: array of words
- output: string representing a word that takes a letter from each word of the input string based from its index position in the array

Rules
- return a new word that takes the nth letter from each word of the array to construct a new word
- word will have as many letters as elements in the array

EXAMPLES
- ['yoda', 'best', 'has'] => 'yes' => 'y'[0], 'e'[1]. 's'[2]

DATA STRUCTURE
- input array of words
- intermediary: array
- output: string

ALGORITHM
- input array of words
- initialize `result` to empty string
- iterate through array of words
  - add the char from the chars index position with the words index position
- return `result` string */

// function nthChar(words) {
//   let result = '';

//   for (let idx = 0; idx < words.length; idx++) {
//     result += words[idx][idx];
//     // console.log(result)
//   }

//   return result;
// }

console.log(nthChar(['yoda', 'best', 'has']));

console.log(nthChar(['yoda', 'best', 'has']) === 'yes');
console.log(nthChar([]) === '');
console.log(nthChar(['X-ray']) === 'X');
console.log(nthChar(['No','No']) ==='No');
console.log(nthChar(['Chad','Morocco','India','Algeria','Botswana','Bahamas','Ecuador','Micronesia']) === 'Codewars');

// function nthChar(words) {
//   return words.reduce((string, word, index) => string + word[index], '');
// }

// function nthChar(words) {
//   let result = '';

//   words.forEach((word, idx)=> {
//     result += word[idx]
//   })

//   return result;
// }

// function nthChar(words) {
//   let newWord = '';

//   words.map((word, idx) => {
//     newWord += word[idx];
//   })

//   return newWord;
// }

/*
Input: array
Output: string
Rules
- take an array of words and concatenate the nth letter from each word to construct a new word which should be returned as 
a string where n is the position of the word in the list
- test cases only contain valid input -- a string array or an empty array and each array will have enough letters

Algorithm
- create index and initialize it to 0
- iterate over the input array and for each word return the letter in the word at the current index 
- increment index by 1 on each round of iteration
- return the word as a joined string
*/

// function nthChar(words){
//   return words.map((word, idx) => word.split('')[idx]).join('');
// }

// function nthChar(words) {
//   // declare empty string
//   let result = '';

//   // iterate over words, concatenate each word's current index char to the `result` string
//   for (let idx = 0; idx < words.length; idx++) {
//     // result = result.concat(words[idx][idx]);
//     result += words[idx][idx];
//   }

//   return result;
// }