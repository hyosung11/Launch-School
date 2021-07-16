/* JS101 - Small Problems > Easy 1 > 8. Leap Years (Part 1)

Leap Years (Part 1)

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

PEDAC - process the problem (PEDA) and code with intent (C).

PROBLEM
Identify expected input and output
- input: number > 0
- output: boolean true/false

- Problem Domain (implicit concepts)

Make the requirements explicit
- return true/false whether input year is a leap year

Identify rules
- leap years occur in every year that is evenly divisible by 4
  - unless the  year is also divisible by 100
- if the year is evenly divisible by 100, not a leap year
  - unless the year divisible by 100 is also evenly divisible by 400
- assume this rule is valid for any year greater than 0 - absolute value

Mental model of the problem (optional)
- N/A

EXAMPLES / TEST CASES
Validate understanding of the problem
- Edge Cases

- Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

DATA STRUCTURE
How we represent data that we will work with when converting the input to output.
- boolean true/false value

ALGORITHM
Steps for converting input to output
1. declare function isLeapYear
2. input year > 0 (find absolute value?)
3. compute 
  1. year remainder 4 === 0 as leap year
  2. unless year is divisible by 100 not leap year
  3. unless year divisible by 100 is also evenly divisible by 400
4. return boolean true/false value for year as leap year or not

CODE
Implementation of Algorithm
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
