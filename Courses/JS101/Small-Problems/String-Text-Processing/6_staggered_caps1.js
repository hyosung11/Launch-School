/* JS101 - Small Problems > String and Text Processing > 6. Staggered Caps (Part 1)

Staggered Caps (Part 1)

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

PROBLEM
- input: string
- output: string

Identify rules
- stagger capitalization of letters in a string
  - first char if letter is capitalized
  - second char if letter is lowercase
  - every other char if letter is capitalized
  - non-alphabetic chars stay the same but counted for switch between upper and lower case

EXAMPLES / TEST CASES
'ALL_CAPS' => 'AlL_CaPs'

DATA STRUCTURE
- input: string
- intermediary
- output: string

ALGORITHM
- split string into chars
- iterate through chars
  - check index of char
    - even indexes make upper case
    - odd indexes make lower case
  - join the chars
- return string

CODE
- test code while programming */

function staggeredCase(string) {
  return string
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

// Examples:
console.log(staggeredCase('I Love Launch School!'));       // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                    // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));  // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Discussion

The solution uses a transformation processing strategy to convert each character in the `string` argument to the appropriate case. The `String.prototype.toUpperCase` and `String.prototype.toLowerCase` methods handle both alphabetic and non-alphabetic characters. To determine the appropriate case, the solution uses the `index` value provided by the `Array.prototype.map` method. When the `index` is an even number, the solution changes the character to uppercase; lowercase otherwise. After the transformation, the solution joins the characters back together using the `Array.prototype.join` method, and returns the resulting string. */

// Seaweed
// function staggeredCase(str) {
//   return [...str]
//     .map((char, index) => (index & 1 ? char.toLowerCase() : char.toUpperCase()))
//     .join('');
// }

// Cherri
// function staggeredCase(str) {
//   return [...str]
//     .map((char, idx) => {
//       return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
//     })
//     .join('');
// }