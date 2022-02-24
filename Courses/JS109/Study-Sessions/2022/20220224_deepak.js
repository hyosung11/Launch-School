/* Warmup Exercises

Given a string, count all the letters that occur 2 times.

return an array of letters

Algo
- declare `twoCounter()` with `string` parameter

- init `result` array to `[]`
- init `count` object to `{}`

- iterate over the string
  - if string at idx is not in count add to count with value of 1
  - else increment value of string at idx

- iterate over `count`
  - if value equals 2
    - push count's key to `result` array

- return `result`

*/

function twoCounter(string) {
  let result = [];
  let count = {};

  string.split('').forEach((char) => {
    count[char] = count[char] + 1 || 1;
  });

  for (let letter in count) {
    if (count[letter] === 2) {
      result.push(letter);
    }
  }

  return result;
}

console.log(twoCounter('aabbccddefghhijilll')); // [a, b, c, d, h, i]

/*

Given a string, count all the letters that occur 2 times.

return an array of letters

Algo
- declare `twoCounter()` with `string` parameter

- init `result` array to `[]`
- init `count` object to `{}`

- iterate over the string
  - if string at idx is not in count add to count with value of 1
  - else increment value of string at idx

- iterate over `count`
  - if value equals 2
    - push count's key to `result` array

- return `result`

*/

function twoCounter (string) {

  let result = [];
  let count = {};

  string.split('').forEach(char => {

    count[char] = count[char] + 1 || 1;
  });

  let keyValues = Object.entries(count);
  // console.log(keyValues[1]);

  /*
  [
  [ 'a', 2 ], [ 'b', 2 ],
  [ 'c', 2 ], [ 'd', 2 ],
  [ 'e', 1 ], [ 'f', 1 ],
  [ 'g', 1 ], [ 'h', 2 ],
  [ 'i', 2 ], [ 'j', 1 ],
  [ 'l', 3 ]
]
  */


  return keyValues.filter(array => array[1] === 2).map(array => array[0]);

  // Array.prototype.filter()
  // Array.prototype.map()
  // filter out elements whose value is 2 which is the second element of each subarray
  let values = keyValues.filter(element => element[1] === 2);

  /*
  [
  [ 'a', 2 ],
  [ 'b', 2 ],
  [ 'c', 2 ],
  [ 'd', 2 ],
  [ 'h', 2 ],
  [ 'i', 2 ]
]
  */

  result = values.map(char => {
    return char[0];
  })

  // console.log(values)

  return result;
}

console.log(twoCounter('aabbccddefghhijilll')); // [a, b, c, d, h, i]

// let b = ['a', 2];
// console.log(b[1]);

/*
1. getSubstrings
2. array indexing
3. objects */

/* ===========

Practice

/*

Given a string, write a function that returns an array of all its substrings

*/

// Test cases:
findSubstrings('hey'); // ['h', 'he', 'hey', 'e', 'ey', 'y'];


/*

Given an array, return an array of all even indexed elements at every even indexed array

*/

// Test cases:
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

findEvens(a) // [1, 3, 7, 9]

/*

Given a string, return an array of all the letters that occur 2 times.

*/

// Test cases:
console.log(twoCounter('aabbccddefghhijilll')); // [a, b, c, d, h, i]

// Array.prototype.map()
// Array.prototype.forEach()
// Array.prototype.filter()
// RegExp.prototype.test();
// String.prototype.replace();
// Object.entries();
// for...in (OBJECTS ONLY!!!)
// for loops (procedural iteration)
// Array.prototype.slice()