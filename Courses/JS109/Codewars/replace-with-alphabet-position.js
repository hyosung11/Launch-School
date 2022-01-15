/* Replace with Alphabet Position - 6kyu

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset sets at twelve o' clock.") // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

PROBLEM
- input a string
- output new string

Rules
- return new string that replaces every letter with its position in the alphabet
- capitalization doesn't matter for the alphabet position
- ignore any non-letters

EXAMPLES
- see below

DATA STRUCTURE
- input string
- intermediary: array (map)
- output: new string

ALGORITHM
- input string
- initialize `alphabet` to lowercase 'a-z'
- convert string to lowercase
- split string at each char
- iterate through each char of string
  - if char is in the alphabet return its index position
  - else return char
- filter out the '0's from string that represent spaces
- join the string
- return the string
*/


// function alphabetPosition(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   string
//     .toLowerCase()
//     .split('')
//     .forEach(char => {
//       if (alphabet.includes(char)) {
//         result.push(alphabet.indexOf(char));
//     }
//   })

//   return result.filter(elem => elem !== '0').join(' ');
// }

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // => '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';

console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

console.log(alphabetPosition("The narwhal bacons at midnight.") === "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

// works on the examples below but misses some test cases in Codewars
// function alphabetPosition(string) {
//   let alphabet = '_abcdefghijklmnopqrstuvwxyz';
//   let result = [];

//   string
//     .toLowerCase()
//     .split('')
//     .forEach(char => {
//       if (alphabet.includes(char)) {
//         result.push(alphabet.indexOf(char));
//     }
//   })

//   return result.join(' ');
// }

// function alphabetPosition(text) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   return text
//     .toLowerCase()
//     .split(' ')
//     .map((word) =>
//       word
//         .split('')
//         .map((char) => ALPHABET.indexOf(char) + 1)
//         .join(' ')
//     )
//     .join(' ')
//     .split(' ')
//     .filter((elem) => elem !== '0')
//     .join(' ');
// }

// building up a string with a helper function
// function alphabetPosition(str) {
//   const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
//   let charPositions = '';

//   for (let idx = 0; idx < str.length; idx += 1) {
//     let char = str[idx];
//     if (isAlphaLetter(char.toLowerCase())) {
//       charPositions += ALPHA.indexOf(char.toLowerCase()) + 1 + ' ';
//     }
//   }
//   return charPositions.trim();
// }

// function isAlphaLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function alphabetPosition(text) {
//   text = text.toLowerCase();

//   return text
//     .split('')
//     .filter((ele) => ele >= 'a' && ele <= 'z')
//     .map((ele) => convertUTF(ele.charCodeAt()))
//     .join(' ');
// }

// function convertUTF(charCode) {
//   return charCode - 96;
// }

// my refactoring of the above code
function alphabetPosition(text) {
  const ALPHABET = '_abcdefghijklmnopqrstuvwxyz';

  return text
    .toLowerCase()
    .split('')
    .filter((ele) => ele >= 'a' && ele <= 'z')
    .map((char) => ALPHABET.indexOf(char))
    .join(' ');
}
