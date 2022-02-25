/* Interview Warmup Exercises

=======================
1. Methods to Memorize

Array.prototype.map()
Array.prototype.forEach()
Array.prototype.filter()
RegExp.prototype.test();
String.prototype.replace();
Object.entries();
for ... in (OBJECTS ONLY!!!)
for loops (procedural iteration)1
Array.prototype.slice()
Array.prototype.splice()
*/

/* ===============================================================

2. Find Substrings

Given a string, write a function that returns an array of all its substrings

*/

// Test case:
console.log(findSubstrings('hey')); // ['h', 'he', 'hey', 'e', 'ey', 'y'];



/* ===============================================================

3. Array Indexing

Given an array, return an array of all even indexed elements at every even indexed array

*/

// Test case:
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(findEvens(a)) // [1, 3, 7, 9]

/* ===============================================================

4. Object Manipulation

Given a string, return an array of all the letters that occur 2 times.

*/

// Test cases:
console.log(twoCounter('aabbccddefghhijilll')); // [a, b, c, d, h, i]
