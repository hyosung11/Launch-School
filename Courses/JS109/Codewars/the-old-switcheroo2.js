/* The old switcheroo 2

This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)

that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

Examples:
encode('abc') == '123'   // a is 1st in English alphabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'

Algo
- input string
- initialize `result` to empty string
- initialize `alphabet` to '_a-z'
- iterate through chars of string
  - if char is a letter
    - add the index of the char in `alphabet` to result
  - otherwise, add char to `result`
- return `result`
*/

// function encode(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let result = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx].toLowerCase();
//     if (alphabet.includes(char)) result += alphabet.indexOf(char);
//     else result += char;
//   }

//   return result;
// }

// reduce
function encode(string) {
  let alphabet = '_abcdefghijklmnopqrstuvwxyz';
  return string
    .split('')
    .reduce((acc, char) => {
      char = char.toLowerCase();
      if (alphabet.includes(char)) acc += alphabet.indexOf(char);
      else acc += char;
      return acc;
    }, '');
}

console.log(encode('ABCD')); // '1234'
console.log(encode('ZzzzZ')) // '2626262626'

// console.log(encode('abc') === '123');
// console.log(encode('ABCD') === '1234');
// console.log(encode('ZzzzZ') === '2626262626');
// console.log(encode('abc-#@5') === '123-#@5');