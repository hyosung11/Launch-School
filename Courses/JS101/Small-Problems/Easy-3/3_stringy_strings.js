/* JS101 - Small Problems > Easy 3 > 3. Stringy Strings

Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: number
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- return of length number that alternates between 1 and 0 for the entire length of the string, starting with 1

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary
- output: string

ALGORITHM
Steps for converting input to output
1. declare a function with one parameter that takes a string argument
2. initialize variable string for an empty string
3. loop number times
  - if index % 2 === 0, string += '1'
  - else add 0 to string
4. return numeric string

CODE
Implementation of Algorithm
- test code while programming */

// function stringy(integer) {
//   let numberString = '';

//   for (let index = 0; index < integer; index += 1) {
//     if (index % 2 === 0) {
//       numberString += '1';
//     } else {
//       numberString += '0';
//     }
//   }

//   return numberString;
// }

// LS solution
function stringy(size) {
  let result = '';
  for (let index = 0; index < size; index += 1) {
    let number = ((index % 2) === 0) ? 1 : 0;
    result += number;
  }

  return result;
}

console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(6));    // "101010"
console.log(stringy(7));    // "1010101"

/* Discussion

The solution makes use of a `for` loop to incrementally build the `result` string. At every iteration of the loop, the solution checks to see if the index position is even. If so, the solution appends a `'1'` to the initially empty result string, or `'0'` otherwise. */
