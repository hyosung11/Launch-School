/* JS101 - Small Problems > Easy 3 > 9. Clean up the words

Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

============================================================

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

Edge Cases?
- numbers?
- capital letters?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary
- output: string

ALGORITHM
Steps for converting input to output
1. declare a function with one parameter that takes a string argument
2. declare a variable newString and initialize it to an empty string
3. loop through the string argument
  - if the char at the index position is an alphabetic character add it to the newString
  - if character at index + 1 is not in the alphabet, add a ' ' to the newString
4. return newString

if ('abcdefghijklmnopqrstuvwxyz'.includes(string.))

CODE
Implementation of Algorithm
- test code while programming

*/

function cleanUp(string) {
  let newString = '';
  for (let char = 0; char < string.length; char += 1) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(string[char].toLowerCase())) {
      newString += string[char];
    } else {
      if (!('abcdefghijklmnopqrstuvwxyz'
        .includes(string[char + 1]
        .toLowerCase()))) {
          newString += ' ';
      }
    }
  }

  return newString;
}

// Example:
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "