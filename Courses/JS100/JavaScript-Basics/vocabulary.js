/* Arrays: Vocabulary
We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

PEDAC

Problem:
words are nested in a two-dimensional array
need to log each word to the console

Examples:
input: array
output: list of words out of the array

given the vocabulary array below

Data Structure
array

Algorithm
- iterate through the array
  - loop
  - return something
- iterate through the sub-arrays
  - loop
  - return something
- log list of words

*/

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIndex = 0; vocabularyIndex < vocabulary.length; vocabularyIndex++) {
  let synonyms = vocabulary[vocabularyIndex];

  for (let synonymIndex = 0; synonymIndex < synonyms.length; synonymIndex++) {
    console.log(synonyms[synonymIndex]);
  }
}

// Expected output:
// happy
// cheerful
// merry
// glad
// tired
// sleepy
// fatigued
// drained
// excited
// eager
// enthused
// animated