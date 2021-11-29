/* Duplicate Count

Problem Description
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits. */

// Test Cases
// console.log(duplicateCount("") === 0);
// console.log(duplicateCount("abcde") === 0);
// console.log(duplicateCount("abcdeaa") === 1);
// console.log(duplicateCount("abcdeaB") === 2);
// console.log(duplicateCount("Indivisibilities") === 2);

/* PEDAC
- input: string
- output a number

Rules
- characters are case-insensitive
- count only characters that appear two or more times
- only letters and numbers

Examples

Data Structure
- input: string
- intermediary: array/object?
- output: number

Algorithm
- input string
- initialize an empty object to collect chars
- iterate over the string
  - add char to object
    - if char already in object increase count of char by 1
- count chars in object
- return count of chars greater than 1 */

function duplicateCount(string) {
  let count = {};

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx].toLowerCase();
    count[char] ? count[char] += 1 : count[char] = 1;
  }

  return Object.values(count).filter(letterCount => letterCount > 1).length;
}

// console.log(duplicateCount(''));
// console.log(duplicateCount('abcde'));
console.log(duplicateCount('abcdeaa'));
// console.log(duplicateCount('abcdeaB'));
// console.log(duplicateCount('Indivisibilities'));

// console.log(duplicateCount("") === 0);
// console.log(duplicateCount("abcde") === 0);
// console.log(duplicateCount("abcdeaa") === 1);
// console.log(duplicateCount("abcdeaB") === 2);
// console.log(duplicateCount("Indivisibilities") === 2);

// function duplicateCount(string) {
//   let count = {}

//   for (let idx = 0; idx < string.length; idx += 1) {
//     let char = string[idx].toLowerCase();
//     count[char] ? count[char] += 1 : count[char] = 1;
//   }

//   return Object.values(count).filter(count => count > 1).length;
// }

// with `forEach`
// function duplicateCount(string) {
//   let count = {};

//   string.split('').forEach((char) => {
//     char = char.toLowerCase();
//     count[char] ? (count[char] += 1) : (count[char] = 1);
//   });

//   return Object.values(count).filter((letterCount) => letterCount > 1).length;
// }