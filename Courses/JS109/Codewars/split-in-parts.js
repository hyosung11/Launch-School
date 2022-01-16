/* Split in Parts - 7 kyu

The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive

Algo
- input string and partLength
- split string at char
- using `reduce`
  - acc, char, idx, ''
  - if idx equals partLength or
  - if idx divided by partLength remainder equals 0 and
  - if idx is not equal to 0
    - increment acc with empty string with a space
    - increment acc with char
  - otherwise increment acc with char only
  - return acc as new string

*/

// function splitInParts(string, partLength) {
//   return string
//     .split('')
//     .reduce((acc, char, idx) => {
//       if (idx === partLength || idx % partLength === 0 && idx !== 0) {
//         acc += ' ';
//         acc += char;
//       } else {
//         acc += char;
//       }
//       return acc;
//     }, '');
// };

/* Algo
- initialize `parts` to empty array
- split the string into array of chars
- loop through array
  - splice array from 0 to partsLength
  - join at char
  - push into `parts` array
- join parts array and return */

// function splitInParts(string, partLength) {
//   let parts = [];
//   let array = string.split('');

//   while (array.length !== 0) {
//     parts.push(array.splice(0, partLength).join(''));
//   }

//   return parts.join(' ');
// }

// console.log(splitInParts('HelloKata', 1)) // === 'H e l l o K a t a');
// console.log(splitInParts('HelloKata', 9)) // === 'HelloKata');
// console.log(splitInParts('supercalifragilisticexpialidocious', 3)) //'sup erc ali fra gil ist ice xpi ali doc iou s'


console.log(splitInParts('HelloKata', 1) === 'H e l l o K a t a');
console.log(splitInParts('HelloKata', 9) === 'HelloKata');
console.log(splitInParts('supercalifragilisticexpialidocious', 3) ===
  'sup erc ali fra gil ist ice xpi ali doc iou s');

// problem with for loop:
// Expected: 'sup erc ali fra gil ist ice xpi ali doc iou s', instead go'sup erc ali fra gil ist ice xpi ali doc iou s                      '
// Test Passed: Value == 'H e l l o K a t a'
// Expected: 'HelloKata'
// , instead 'HelloKata        '