/* JS101 - Small Problems > String and Text Processing > 5. Swap Case

Swap Case

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

ALGORITHM
- split string into chars
- check each char
  - transform letters to either uppercase or lowercase
  - join the letters
- return string */

// function swapCase(string) {
//   return string
//     .split('')
//     .map(char => {
//       if ((char >= 'a') && (char <= 'z')) {
//         return char.toUpperCase();
//       } else if ((char >= 'A') && (char <= 'Z')) {
//         return char.toLowerCase();
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }

// Examples:
// console.log(swapCase('CamelCase'));
// // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));
// // "tONIGHT ON xyz-tv"

/* Discussion

The solution uses a transformation strategy for swapping the case of the `string` argument. If the character is a lowercase letter, it is changed to uppercase; if the character is an uppercase letter, it is changed to lowercase. All other characters are left unchanged. Finally, the solution joins the characters together into a new string and returns it. */

// for loop version
// function swapCase(string) {
//   string = string.split('');
//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (string[idx] === string[idx].toLowerCase()) {
//       string[idx] = string[idx].toUpperCase();
//     } else {
//       string[idx] = string[idx].toLowerCase();
//     }
//   }
//   return string.join('');
// }

// Liz Fredak - without an array
// function swapCase(string) {
//   let result = '';
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx].toUpperCase() === string[idx]) {
//       result = result + string[idx].toLowerCase();
//     } else {
//       result = result + string[idx].toUpperCase();
//     }
//   }
//   return result;
// }

// Bob Rodes
const swapCase = (str) => [...str].map(char => {
  return /[a-z]/g.test(char) ? char.toUpperCase() :char.toLowerCase();
}).join('');

// Examples:
console.log(swapCase('CamelCase'));
// "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));
// "tONIGHT ON xyz-tv"