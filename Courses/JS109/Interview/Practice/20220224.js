/* Interview Warmup Exercises Practice

Methods to Memorize

Array.prototype.map()
- The `map(element, index, array)` method creates a new array populated with the results of calling a provided function on every element in element in the calling array.

Array.prototype.forEach()
- The `forEach(element, index, array) method executes a provided function once for each array element.

Array.prototype.filter()
- The `filter(element, index, array)` method creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.slice()
Array.prototype.splice()

RegExp.prototype.test();
String.prototype.replace();

Object.entries();
for...in (OBJECTS ONLY!!!)
for loops (procedural iteration)




1. Get Substrings

Given a string, write a function that returns an array of all its substrings

Algorithm

- declare `getSubstrings()` with `string` parameter
- init `result` to empty array

- iterate over string outer loop from 0 to string's length
  - iterate over string inner loop from idx + 1 through string's length
    - slice string at idx, jdx
    - push slice to `result`

- return `result`

*/

function getSubstrings(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      result.push(string.slice(idx, jdx));
    }
  }

  return result;
}

// Test cases:
// console.log(getSubstrings('hey')); // ['h', 'he', 'hey', 'e', 'ey', 'y'];

/* Array Indexing

Given an array, return an array of all even indexed elements at every even indexed subarray.

Algorithm
- declare `findEvens()` with `array` parameter
- init `result` to empty array

- iterate over array outer loop
  - if array idx divided by 2 equals 0
    - iterate over array inner loop
      - if jdx of element divided by 2 equals 0
        - push element of array[idx][jdx] to `result`

- return `result`

*/

// Test cases:
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

function findEvens(array) {
  let result = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx % 2 === 0) {
      for (let jdx = 0; jdx < array[idx].length; jdx += 1) {
        if (jdx % 2 === 0) {
          result.push(array[idx][jdx]);
        }
      }
    }
  }

  return result;
}

// console.log(findEvens(a)); // [1, 3, 7, 9]

/*

Object Manipulation

Given a string, return an array of all the letters that occur 2 times.

Algorithm
- declare `twoCounter()` with `string` parameter
- init `result` to empty array
- init `count` to empty object

- iterate over string
  - if count includes letter increment value by 1
  - else create key and value of 1 for the letter
  
- iterate over `count`
  - if value of letter equals 2
    - push letter to `result`

- return `result`

*/

function twoCounter(string) {
  // let result = [];
  let count = {};

  string.split('').forEach((char) => {
    count[char] = count[char] + 1 || 1;
  });

  return Object.keys(count).filter((value) => count[value] === 2);

  // return result;
}

// Test case:
console.log(twoCounter('aabbccddefghhijilll')); // [a, b, c, d, h, i]
