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

function alphabetScore(string) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  let words = string.split(' ')
  let arrayOfScores = words.map(word => {
     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0)
    });
  let maxIndex = arrayOfScores.indexOf(Math.max(...arrayOfScores));

  return words[maxIndex];
}

console.log(alphabetScore('') === '');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');

// for loop
function alphabetScore(string) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';

  let words = string.split(' ')
  let arrayOfScores = words.map(word => {
     return word.split('').reduce((sum, char) => sum + alphabet.indexOf(char), 0)
    });

  let maxIndex = 0;
  for (let index = 0; index < arrayOfScores.length; index += 1) {
    if (arrayOfScores[index] > arrayOfScores[maxIndex]) maxIndex = index;
  }

  return words[maxIndex];
}

console.log(alphabetScore('') === '');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');