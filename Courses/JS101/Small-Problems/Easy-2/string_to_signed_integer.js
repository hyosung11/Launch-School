/* JS101 - Small Problems > Easy 2 > 10. Convert a String to a Signed Number!

Convert a String to a Signed Number!

In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

*/

function stringToSignedInteger(string) {
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
    '+': '+',
    '-': '-'
  };

  let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
  let negative = '';

  if (arrayOfDigits[0] === '-') {
    arrayOfDigits.shift();
    negative = 'yes';
  } else if (arrayOfDigits[0] === '+') {
    arrayOfDigits.shift();
  }
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
  if (negative === 'yes') {
    value *= -1;
  }
  return value;
}



// Examples

console.log(stringToSignedInteger("4321")); // 4321
console.log(stringToSignedInteger("-570")); // -570
console.log(stringToSignedInteger("+100")); // 100