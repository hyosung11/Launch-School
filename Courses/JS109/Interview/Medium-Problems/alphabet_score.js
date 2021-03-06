/* Alphabet Score

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Examples / Test Cases
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('') === '');

PEDAC
- input: string
- output: string

ALGORITHM
- initialize `alphabet` to lookup table of letters
- split the string
  - iterate through string
    - compute the value of each char
      - sum the value of each word
    compare the sums of the values of each word
- return word with the highest sum value */

// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';

//   let words = string.split(' ')
//   let arrayOfScores = words.map(word => {
//      return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0)
//     });
//   let maxIndex = arrayOfScores.indexOf(Math.max(...arrayOfScores));

//   return words[maxIndex];
// }

// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

// // for loop
// function alphabetScore(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';

//   let words = string.split(' ')
//   let arrayOfScores = words.map(word => {
//      return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0)
//     });

//   let maxIndex = 0;
//   for (let index = 0; index < arrayOfScores.length; index += 1) {
//     if (arrayOfScores[index] > arrayOfScores[maxIndex]) maxIndex = index;
//   }

//   return words[maxIndex];
// }

// console.log(alphabetScore('') === '');
// console.log(alphabetScore('aa') === 'aa');
// console.log(alphabetScore('a z') === 'z');
// console.log(alphabetScore('y z') === 'z');
// console.log(alphabetScore('aa b') === 'aa');
// console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
// console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
// console.log(alphabetScore('take me to semynak') === 'semynak');

// function alphabetScore(string) {
//   if (string === '') return '';

//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let highScore = 0;
//   let highScoreIndex = null;
//   let wordArray = string.split(' ');

//   for (let index = 0; index < wordArray.length; index += 1) {
//     let wordScore = 0;
//     let charArray = wordArray[index].split('');

//     for (let jndex = 0; jndex < charArray.length; jndex += 1) {
//       let char = charArray[jndex];
//       wordScore += alphabet.indexOf(char);
//     }

//     if (wordScore > highScore) {
//       highScore = wordScore;
//       highScoreIndex = index;
//     }
//   }

//   return wordArray[highScoreIndex];
// }

// APPROACH 2: create an array of scores find the max value

// function alphabetScore(string) {
//   if (string === '') return '';

//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let wordArray = string.split(' ');

//   let scoresArray = wordArray
//     .map(word => {
//       return word.split('').reduce((acc, char) => {
//         return acc + alphabet.indexOf(char);
//       }, 0)
//     })

//   let maxIndex = scoresArray.indexOf(Math.max(...scoresArray));

//   return wordArray[maxIndex];
// }

/* Approach with Alex
ALGORITHM
- input string of words
- initialize `wordsArray` to value of splitting string of words into words at each space
- initialize `highest` to '';
- iterate through `wordsArray`
  - call `getWordScore` helper function on each word
  - if word at index has higher score
    - reassign `highest` to word at the index
- return `highest`the word with the highest score

getScore helper function
- input word
- initialize `alphabet` to 'a-z'
- split the word into char
- iterate through chars
  - compute value of each char based on its position in the `alphabet` string
- return score for word */

// function alphabetScore(words) {
//   let highest = '';
//   let wordsArray = words.split(' ');

//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let word = wordsArray[idx];
//     if (getScore(word) > getScore(highest)) highest = word;
//   }

//   return highest;
// }

// function getScore(word) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return word.split('').reduce((total, num) => total + alphabet.indexOf(num), 0);
// }

console.log(alphabetScore('') === '');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(
  alphabetScore('what time are we climbing up the volcano') === 'volcano'
);
console.log(alphabetScore('take me to semynak') === 'semynak');

function alphabetScore(words) {
  let highest = '';
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let word = wordsArray[idx];
    if (getWordScore(word) > getWordScore(highest)) highest = word;
  }

  return highest;
}

function getWordScore(word) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0);
}