/* ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
input - string
output - string

Make the requirements explicit (clarifying questions)
- no duplicate characters

Identify rules
- if char doesn't equal the char after it, add it to the new string
- if string is empty return an empty string

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Edge Cases?
- none

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary
- output: string

ALGORITHM
Steps for converting input to output
1. declare a function with one parameter that takes a string argument
2. check if string is empty / string length is zero
  - if empty return an empty string
3. initialize variable for the string to return as an empty string
4. loop through the string
  - if char doesnt equal the char after it, add it to the new string
  - go to the next character
5. return new string

CODE
Implementation of Algorithm

- test code while programming

*/
function crunch(string) {
  if (string.length === 0) return '';

  let result = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) {
      result += string[index];
    }
  }

  return result;
}

// Examples:
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""