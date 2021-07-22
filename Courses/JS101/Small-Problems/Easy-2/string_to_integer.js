/* JS101 - Small Problems > Easy 2> 9. Convert a String to a Number!

Convert a String to a Number!

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.



PROBLEM
Input: String of numbers
Output: Number

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
string.length = 4 => thousands
.... until we hit 0

*/


function stringToInteger(string) {
  let number = 0;
  let counterUnit = 1;
  for (let index = string.length - 1; index >= 0; index -= 1) {
    let digit = (string[index].charCodeAt() - 48);
    number += digit * counterUnit;
    counterUnit *= 10;
  }

  return number;
}

//  Examples
console.log(stringToInteger("4321")); // === 4321); // logs true
console.log(stringToInteger("570")); // === 570); // logs true


