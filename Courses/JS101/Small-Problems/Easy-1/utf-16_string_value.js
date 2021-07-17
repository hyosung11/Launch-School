/* JS101 - Small Problems > Easy 1 > 11. UTF-16 String Value

Write a function that determines and returns the UTF-16 string value of a string 
passed in as an argument. The UTF-16 string value is the sum of the UTF-16 
values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a 
character.)


PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: string
- output: number

Make the requirements explicit (clarifying questions)
- input a string and return the sum of the values of each character in the 
string as a UTF-16 string value

Identify rules
- use String.prototype.charCodeAt() for the value of a character

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0


The next three lines demonstrate that the code
works with non-ASCII characters from the UTF-16
character set.

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to 
output.
- string into number

ALGORITHM
Steps for converting input to output
1. declare function
2. input string
3. declare variable to store total value
4. loop through the characters in the string
  - convert character to utf-16 value
  - add character's value to total value
5. return total value

CODE
Implementation of Algorithm
*/
function utf16Value(string) {
  let totalValue = 0;
  for (let character = 0; character < string.length; character += 1) {
    let characterValue = string[character].charCodeAt();
    totalValue += characterValue;
  }
  return totalValue;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0