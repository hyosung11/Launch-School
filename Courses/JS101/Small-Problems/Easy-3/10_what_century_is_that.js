/* JS101 - Small Problems > Easy 3 > 10. What Century is That?

What Century is That?

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: number
- output: string

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)

Identify rules
- convert year to century
- add suffix to century number
  - 'st', 'nd', 'rd', or 'th'

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: number
- intermediary: convert number to string
- output: string

ALGORITHM
Steps for converting input to output
- convert number to string
- check century value of string
  - add appropriate suffix
- return string

CODE
Implementation of Algorithm
- test code while programming

The `Math.ceil()` function always rounds a number up to the next largest integer.

Using `Math.ceil` is a bit more straightforward than `Math.floor`. `Math.ceil(year / 100)` gives the desired number without any further messing around. With `Math.floor(year / 100)`, you have to add one to the result unless the year divides evenly by 100. */

// function century(year) {
//   let date = Math.ceil(year / 100);
//   let lastDigit = date % 10;

//   if (date === 11 || date === 12 || date === 13) {
//     return date + 'th';
//   }

//   switch (lastDigit) {
//     case 1: return date + 'st';
//     case 2: return date + 'nd';
//     case 3: return date + 'rd';
//     default: return date + 'th';
//   }
// }

// Edris's Solution
// function century(year) {
//   let date = Math.ceil(year / 100).toFixed(0);
//   let lastDigit = date % 10;

//   if (date === 11 || date === 12 || date === 13) {
//     return date + 'th';
//   }

//   switch (lastDigit) {
//     case 1:
//       return date + 'st';
//     case 2:
//       return date + 'nd';
//     case 3:
//       return date + 'rd';
//     default:
//       return date + 'th';
//   }
// }

// Examples:
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

/* Discussion

First, notice the pattern about a century. It is equal to the current year divided by `100` plus `1`. The exception to this is when the year is a multiple of `100`. In that case, the century is the current year divided by `100`.

Next, notice the suffix to append to the century, the options being: `'th`', `'nd'`, `'rd'`, `'st'`.

With this, the solution decides which suffix to use by checking the last digit of the century. But before doing that, it does one extra check. If the remainder of dividing the century by 100 ends in either `11`, `12`, or `13`, the solution returns `'th'`. Any other time, it returns a suffix determined by the `switch` statement and the value of `centuryNumber % 10`.

Finally, it combines the string representation of the century with the correct suffix, giving us our answer. */


// Launch School Solution - confusing to me
// function century(year) {
//   let centuryNumber = Math.ceil(year / 100)

//   return String(centuryNumber) + centurySuffix(centuryNumber);
// }

// function centurySuffix(centuryNumber) {
//   if (catchWithTh(centuryNumber % 100)) {
//     return 'th';
//   }

//   let lastDigit = centuryNumber % 10;
//   switch (lastDigit) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }

// function catchWithTh(lastTwo) {
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }

/* Jason Aricheta's Solution
Uses:

- Math.ceil method to round up 1901 -> 190.1 -> 200
- array with string array to leverage index-value ordering with 'th', 'st', 'nd', 'rd'
- remainder functionality '% 10'
- implicit type coercion to string with +=
- ternary operation inside bracket notation.

This is NOT as readable as a `switch` statement however! */

// function century(year) {
//   let century = Math.ceil(year / 100);
//   let arrayOfSuffixes = ['th', 'st', 'nd', 'rd'];
//   let condition = (century % 10) <= 3;
//   return century += arrayOfSuffixes[condition ? (century % 10) : 0];
// }

// this doesn't work!
// function century(year) {
//   let century = Math.ceil(year / 100);
//   let arry = ['th', 'st', 'nd', 'rd'];
//   let cond = century % 10 <= 3;
//   return (century += arry[cond ? century % 10 : 0]);
// }

// Bob Rodes Solution Works
// function ordinalSuffix(num) {
//   if ([11, 12, 13].includes(num % 100)) return 'th';

//   switch (num % 10) {
//     case 1:
//       return 'st';
//     case 2:
//       return 'nd';
//     case 3:
//       return 'rd';
//     default:
//       return 'th';
//   }
// }

// function century(num) {
//   let centNum = Math.ceil(num / 100);
//   return `${centNum}${ordinalSuffix(centNum)}`;
// }