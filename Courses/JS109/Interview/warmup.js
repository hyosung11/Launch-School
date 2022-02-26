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

Given a string, write a function that returns an array of all its substrings.

*/

// Test case:
console.log(findSubstrings('hey')); // ['h', 'he', 'hey', 'e', 'ey', 'y'];



/* ===============================================================

3. Array Indexing

Given an array, return an array of all even indexed elements at every even indexed subarray.

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


/* ===================================================

5. Second to Last Capitalized

Given a string of words or a single word
return the string with the second to last occurrence of each letter capitalized.

Examples:
'hownowbrncow' => howNOWbrncow
'chickenbiscuits' => chiCkenbIScuits
'aabab' => 'aABab' 


Algorithm
- declare `secondToLastCap()` with `string` parameter
- init `result` to split string into an array of chars
- init `count` to empty object
- iterate in reverse over array
  - if char in count increment count by 1
  - else add char to count
  - if count char value equals 2
    - uppercase char

- join array and return
*/

function secondToLastCap (string) {

  let result = string.split('');
  let count = {};

  for (let idx = result.length - 1; idx >= 0; idx -= 1) {
    let char = result[idx];
    count[char] = count[char] + 1 || 1;
    if (count[char] === 2) {
      result[idx] = char.toUpperCase();
    }
  }

  return result.join('');
}

console.log(secondToLastCap('aaa') === 'aAa'); // aAa
console.log(secondToLastCap('aabaa') === 'aabAa'); // aabAa
console.log(secondToLastCap('aabab') === 'aABab'); // aABab
console.log(secondToLastCap('chicken biscuits') === 'chiCken bIScuits'); // chiCken bIScuits
console.log(secondToLastCap('how now brncow') === 'how NOW brncow');  // how NOW brncow

/* ===================================================

6. Mexican Wave

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules

1. The input string will always be lower case but maybe empty.

2. If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
- wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/

function wave(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[a-z]/.test(string[idx])) {
      result.push(
        string.slice(0, idx) + string[idx].toUpperCase() + string.slice(idx + 1)
      );
    }
  }

  return result;
}


console.log(wave("")); // [];
console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "];
