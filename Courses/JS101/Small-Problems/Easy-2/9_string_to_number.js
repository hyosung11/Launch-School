/* JS101 - Small Problems > Easy 2 > 9. Convert a String to a Number!

Convert a String to a Number!

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: string of digits
- output: number

Problem Domain (including implicit requirements)
Make the requirements explicit (clarifying questions)
Identify rules
Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
console.log(stringToInteger("4321")); // === 4321); // logs true
console.log(stringToInteger("570")); // === 570); // logs true

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string
- intermediary: convert string to number
- output: number

ALGORITHM
Steps for converting input to output
- loop through the string
  - convert each character in the string to its numeric value
    - create an object to capture the numeric equivalent of each string's value
  - Account for the place value of the number
  - return the number

CODE
Implementation of Algorithm
- test code while programming */

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = string.split('').map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => value = (10 * value) + digit);
  return value;
}

//  Examples
console.log(stringToInteger("4321")); // === 4321); // logs true
console.log(stringToInteger("570")); // === 570); // logs true
console.log(stringToInteger("225")); // === 570); // logs true

/* Discussion

As usual, this isn't the shortest or even the easiest solution to this problem, but it's straightforward. The big takeaway from this solution is our use of the DIGITS object to convert string digits to their numeric values. This technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.

Keep in mind that the keys of an object are always strings. Thus, on line 3, the 0 to the left of the colon (:) is a string even thought it doesn't look like a string. The 0 to the right is a number. That's a convenient relationship in this problem since we'll use digits stored as strings to look up the corresponding numeric values.

The actual computation of the numeric value of string is mechanical. We take each digit and add it to 10 times the previous value, which yields the desired result in almost no time. For example, if we have 4, 3, and 1, we compute the result as:

10 * 0 + 4 -> 4
10 * 4 + 3 -> 43
10 * 43 + 1 -> 431

Further Exploration

Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

Example: */

// hexadecimalToInteger('4D9f') === 19871;

/* Laurent's Method
"0".charCodeAt();   // 48 - 48 = 0
"1".charCodeAt();   // 49 - 48 = 1
"2".charCodeAt();   // 50 - 48 = 2

{
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9
}

"1" => 1

"11"  => 1 + 1
      => 10 + 1

"111" => 1 + 1 + 1
      => 100 + 10 + 1

string.length - 1 => Units
string.length - 2 => Tens
string.length - 3 => Hundreds
string.length - 4 => Thousands
.... until we hit 0 */

// function stringToInteger(string) {
//   let number = 0;
//   let counterUnit = 1;
//   for (let index = string.length - 1; index >= 0; index -= 1) {
//     let digit = (string[index].charCodeAt() - 48);
//     number += digit * counterUnit;
//     counterUnit *= 10;
//   }

//   return number;
// }
