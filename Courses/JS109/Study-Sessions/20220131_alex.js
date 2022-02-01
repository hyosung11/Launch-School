/* Kebabize 6 kyu

Modify the kebabize function so that it converts a camel case string into a kebab case.

Notes:
the returned string should only contain lowercase letters

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

PROBLEM
- input string
- output string

Rules
- return a new string of words in kebab case
- all letters in new string are lowercased
- remove nonletters

EXAMPLES
- see above

DATA STRUCTURE
- input string
- intermediary: array
- output: new string

ALGORITHM
- input string
- initialize `result` to empty array
- initialize `tempString` to empty string
- iterate through input string
  - if alphabet doesn't include char, continue
  - if char is lowercase, add it to the tempString
  - if char is uppercase, push tempString to Lower Case to `result` array
    - reassign tempString to char
- push tempString to lower case to array
- join `result` with dashes
*/



console.log(kebabize('myCamelCasedString')); // === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps')); // === 'my-camel-has-humps');

console.log(kebabize('myCamelCasedString') === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps') === 'my-camel-has-humps');

// function kebabize(string) {
//   let result = [];
//   let tempString = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     let char = string[idx];
//     if (!'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
//       continue;
//     }
//     if (char === char.toLowerCase()) tempString += char;
//     if (char === char.toUpperCase()) {
//       result.push(tempString.toLowerCase());
//       tempString = char;
//     }
//   }
//   result.push(tempString.toLowerCase());

//   return result.join('-');
// }