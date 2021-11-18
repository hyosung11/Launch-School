/* Problem Description

Move Capital Letters to the Front

Create a function that moves all capital letters to the front of a word.

Examples

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

Notes:

Keep the original relative order of the upper and lower case letters the same.

PROBLEM
- input: string
- output: string

EXAMPLES

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt"

DATA STRUCTURE

ALGORITHM
- declare a function that takes one string argument
- split the string into characters
- check the case of each character
  - if the character is lowercase, skip to the next character
  - if the character is a capital letter move it to the beginning of the string
  - if the next character is also a capital letter move it to the beginning of the string to the right of the previous capital letter in the same order
  - join the string
- return string

*/
// function capToFront(string) {
//   string.split('')
// }

// const capToFront = (str) => {
//   return (
//     str
//       .split('')
//       .filter((ch) => ch === ch.toUpperCase())
//       .join('') +
//     str
//       .split('')
//       .filter((ch) => ch === ch.toLowerCase())
//       .join('')
//   );
// };

// function capToFront(string) {
//   let array = string.split('');
//   let upperString = array
//     .filter((char) => char === char.toUpperCase())
//     .join('');
//   let lowerString = array
//     .filter((char) => char === char.toLowerCase())
//     .join('');

//   return upperString + lowerString;
// }

console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshrt"

