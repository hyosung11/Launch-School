/* Interview Warmup Exercises Practice

Methods to Memorize

Array.prototype.map()
- The `map(element, index, array)` method creates a new array populated with the results of calling a provided function on every element in element in the calling array.

Array.prototype.forEach()
- The `forEach(element, index, array) method executes a provided function once for each array element.

Array.prototype.filter()
- The `filter(element, index, array)` method creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.slice()
- The slice(start, end) method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

Array.prototype.splice()
- The splice(start, deleteCount, item1, item2, itemN) method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

RegExp.prototype.test();
- The test(string) method executes a search for a match between a regular expression and a specified string. Returns true or false.

String.prototype.replace();
-  The replace(regexp, newSubstring) method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

Object.entries(object);
-  The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

for...in (OBJECTS ONLY!!!)
- The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

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
