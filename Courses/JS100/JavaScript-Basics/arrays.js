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

console.log(count); // 3