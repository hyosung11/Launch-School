/* JS101 - Small Problems > Easy 1 > 7. Short Long Short

Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

PROBLEM
Identify expected input and output
- input: two strings
- output: concatenated string

Make the requirements explicit
- input two string arguments
- determine the length of the two strings
- concatenate shorter string + longer string + shorter string
- return concatenated string

Identify rules (problem domain; implicit concepts)
- assume strings are different lengths
- one or more of the strings may be empty
- remember to test code along the way

EXAMPLES / TEST CASES
- Validate understanding of the problem
- Examples:
  shortLongShort('abc', 'defgh');    // "abcdefghabc"
  shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
  shortLongShort('', 'xyz');         // "xyz"
- Edge Cases?

DATA STRUCTURE
How we represent data that we will work with when converting the input to output.
- function with two strings as input
- two variables: shorter string and longer string

ALGORITHM
Steps for converting input to output
1. declare function with two parameters that take string arguments
2. compare the lengths of the two strings
3. concatenate the strings with shorter + longer + shorter
4. return concatenated string

CODE
Implementation of Algorithm
*/

// declare function (same as LS solution)
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"

/* Discussion
This solution takes advantage of the fact that JavaScript automatically coerces string primitives to String objects when needed.

Notice how string1 and string2 can both use the .length property, even though they both reference string primitive values and not String objects. It's as if both values were created using the new String() function (i.e., new String('abc')).
*/

// Eamon O Callaghan
function shortLongShort(string1, string2) {
  return string1.length < string2.length
    ? string1 + string2 + string1
    : string2 + string1 + string2;
}