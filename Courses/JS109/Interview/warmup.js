/* Interview Warmup Exercises */

/* =======================
1. Methods to Memorize

Array.prototype.map()
Array.prototype.forEach()
Array.prototype.filter()
Array.prototype.slice()
Array.prototype.splice()
RegExp.prototype.test();
String.prototype.replace();
Object.entries();
for ... in (OBJECTS ONLY!!!)
for loops (procedural iteration)
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
  - else add char to count with value of 1
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

Algorithm
- declare `wave()` with `string` parameter
- init `result` to empty array

- iterate over string
  - if char is a letter
    - slice string from 0, idx plus char to uppercase plus slice of string from idx + 1
    - push slices to `result`
- return `result`
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

/* ===================================================

7. Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Problem
- input string
- output object

Rules
- return an object with the percentages of each type of character
- return percentage as a string to 2 decimal places

*/

function letterPercentages(string) {

  let percentages = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach((char) => {
    if (/[a-z]/.test(char)) {
      percentages.lowercase = percentages.lowercase + 1;
    } else if (/[A-Z]/.test(char)) {
      percentages.uppercase = percentages.uppercase + 1;
    } else {
      percentages.neither = percentages.neither + 1;
    }
  });

  for (let key in percentages) {
    percentages[key] = ((percentages[key] / string.length) * 100).toFixed(2);
  }

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* ===================================================

8. Anagram Difference

Given two words, how many letters do you have to remove from them to make them anagrams?

Example
- First word : c od e w ar s (4 letters removed)
- Second word : ha c k er r a nk (6 letters removed)
- Result : 10

Hints
- A word is an anagram of another word if they have the same letters (usually in a different order).
- Do not worry about case. All inputs will be lowercase.

Algorithm
- declare `anagramDifference()` with `str1` and `str2` parameters
- init `word1` to array of chars from splitting str1
- init `word2` to array of chars from splitting str2

- iterate over str1
  - if word2 includes char
    - splice char from word2 based on indexOf char

- iterate over str2
  - if word1 includes char
    - splice char from word1 based on indexOf char

return word1 length + word2 length
*/

function anagramDifference (str1, str2) {

  let word1 = str1.split('');
  let word2 = str2.split('');

  str1.split('').forEach(char => {
    if (word2.includes(char)) {
      word2.splice(word2.indexOf(char), 1);
    }
  });

  str2.split('').forEach(char => {
    if (word1.includes(char)) {
      word1.splice(word1.indexOf(char), 1);
    }
  });

 return word1.length + word2.length;
}


// console.log(anagramDifference('', '') === 0);
// console.log(anagramDifference('a', '') === 1);
// console.log(anagramDifference('', 'a') === 1);
// console.log(anagramDifference('ab', 'a') === 1);
// console.log(anagramDifference('ab', 'ba') === 0);
// console.log(anagramDifference('ab', 'cd') === 4);
// console.log(anagramDifference('aab', 'a') === 2);
// console.log(anagramDifference('a', 'aab') === 2);
console.log(anagramDifference('codewars', 'hackerrank') === 10);
