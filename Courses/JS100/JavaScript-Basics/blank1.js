/* JS100 - JavaScript Basics Strings > 7. Blank? Version 1

Blank? Version 1

Write a function that checks whether a string is empty or not. For example:
*/

// function isBlank(string) {
//   if (string.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isBlank(string) {
//   return string.length === 0;
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true


/* JS100 - JavaScript Basics > Strings > Blank? Version 2

Blank? Version 2

Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:
*/

function isBlank(string) {
  return string.trim().length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true


