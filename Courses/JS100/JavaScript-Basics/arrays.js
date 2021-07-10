// First Element
// Write a function that returns the first element of an input array. For Example:

function first(array) {
  return array[0]
}

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

// What would you return if the input array was empty?
// console.log(first([])) // undefined

// Last Element
// Write a function that returns the last element of an input array. For example:

function last(array) {
  return array[array.length - 1];
}

// console.log(last(['Earth', 'Moon', 'Mars'])) // 'Mars'

// As in the previous exercise, `last` returns `undefined` if the input array is empty.
// console.log(last([]));

// Add + Delete
// We are given the following array of energy sources.
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// console.log(energy.shift()) // fossil
// console.log(energy.push('geothermal'));


// console.log(energy) // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]

// Alphabet
// Split the string `alphabet` into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// console.log(alphabet.split(''))

// [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]

// Filter
// Count the number of elements in `scores` that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

// console.log(count); // 3

// Vocabulary
// We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for(let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}

// Expected output:
// happy
// cheerful
// merry
// etc...

// Equality

// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false