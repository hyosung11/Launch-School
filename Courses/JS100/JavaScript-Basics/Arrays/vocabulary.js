/* JS100 - JavaScript Basics > Arrays > 6. Vocabulary

Vocabulary

We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

Hint

In order to iterate through the vocabulary array and each of its sub-arrays, write two nested loops.

*/

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabIndex = 0; vocabIndex < vocabulary.length; vocabIndex += 1) {
  let words = vocabulary[vocabIndex];

  for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex += 1) {
    console.log(words[wordsIndex]);
  }
}
// Expected output:
// happy;
// cheerful;
// merry;
// glad;
// tired;
// sleepy;
// fatigued;
// drained;
// excited;
// eager;
// enthused;
// animated;