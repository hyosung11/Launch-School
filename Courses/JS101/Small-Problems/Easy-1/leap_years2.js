/* JS101 - Small Problems > Easy 1 > 9. Leap Years (Part 2)

Leap Years (Part 2)

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
--------------------------------------------------------
PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: number
- output: number

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- return boolean true/false if leap year
- Julian Calendar from 0 to 1752
- Gregorian Calendar from 1753 - beyond

Identify rules
- leap year is any year divisible by four from 0 to 1752
- 1753 and beyond leap years
  - divisible by four
  - not if divisible by 100 unless also divisible by 400

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.
- return boolean true/false value

ALGORITHM
Steps for converting input to output
1. declare function isLeapYear
2. input year > 0 (find absolute value?)
3. compute
  1. year remainder 4 === 0 as leap year from 0 to 1752
  2. from 1753 every four years unless year is divisible by 100 not leap year
  3. unless year divisible by 100 is also evenly divisible by 400
4. return boolean true/false value for year as leap year or not

CODE
Implementation of Algorithm
*/
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }
}

// Examples:
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

/*
Discussion:
The change to the original isLeapYear function is small: just an additional if clause at the beginning of the function.

Further Exploration:
Find a web page that talks about leap years or the different calendar systems, and talk about the interesting information you learned. For instance, how was the change from the Julian calendar to the Gregorian calendar handled in your ancestral lands? Do they even use these calendar systems? If you live someplace that doesn't use the Gregorian calendar, tell us about your calendar system.
*/
