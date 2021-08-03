// First Element
// Write a function that returns the first element of an input array. For Example:

function first(array) {
  return array[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

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

// for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
//   let synonyms = vocabulary[vocabularyIdx];

//   for(let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
//     console.log(synonyms[synonymIdx]);
//   }
// }

// Expected output:
// happy
// cheerful
// merry
// etc...

// Equality

// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

// console.log(array1 === array2); // false

// Type
// How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  // Is input an array?
}

// input.isArray()

let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

// console.log(Array.isArray(someValue1)); // true
// console.log(Array.isArray(someValue2)); // false

// Travel
// The `destinations` array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome','Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination is included within `destinations`, without using the built-in method `Array.prototype.includes()`.

// For example: When checking whether `'Barcelona'` is contained in destinations, the expected output is `true`, whereas the expected output for `'Nashville'` is `false`.

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

// More concise version
function contains(element, list) {
  list.indexOf(element) >= 0;
}

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false

// Passcode
// We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (`-`).


let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// console.log(passcode.join('-'));

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let joinedPasscode = '';

// for (let i = 0; i < passcode.length; i += 1) {
//   if (i > 0) {
//     joinedPasscode += '-';
//   }

//   joinedPasscode += passcode[i];
// }

// console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

// Checking items off the grocery list
// We have made a grocery list, and as we check off items on that list, we would like to remove them.

// Write code that removes the items from `'groceryList'` one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);

  // logs:
  // paprika
  // tofu
  // garlic
  // quinoa
  // carrots
  // broccoli
  // hummus
}

console.log(groceryList); // []


