/* JS101 - Small Problems > Medium 2 > 4. Unlucky Days

Unlucky Days

Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: number representing year
- output: number

Identify rules

EXAMPLES / TEST CASES
1986 => 1

DATA STRUCTURE
- input
- intermediary
- output

ALGORITHM
- iterate over all the months of the given year
- for each month, get the day that falls on the 13th
- count the 13ths that fall on a Friday
- return the count

CODE
- test code while programming */

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  console.log(thirteenths);
// [
//   2015-01-13T05:00:00.000Z,
//   2015-02-13T05:00:00.000Z,
//   2015-03-13T04:00:00.000Z,
//   2015-04-13T04:00:00.000Z,
//   2015-05-13T04:00:00.000Z,
//   2015-06-13T04:00:00.000Z,
//   2015-07-13T04:00:00.000Z,
//   2015-08-13T04:00:00.000Z,
//   2015-09-13T04:00:00.000Z,
//   2015-10-13T04:00:00.000Z,
//   2015-11-13T05:00:00.000Z,
//   2015-12-13T05:00:00.000Z
// ]

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

// Examples:
// console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2
// console.log(fridayThe13ths(2022));      // 1

/* Hint: Algorithm

Here is one possible algorithm for solving the problem:

1. Iterate over all the months of the given year.
2. For each month, get the day that falls on the 13th.
3. Count the 13ths that fall on a Friday.
4. Return the count.

Discussion

The solution leverages the `Date` constructor and a `for` loop to build an array of `Date` objects that fall on the 13th of every month. It then uses `Array.prototype.reduce` to get the count of the 13ths that fall on a Friday.

Note that the `Date.prototype.getDay` method returns an integer between 0 (Sunday) and 6 (Saturday). Also note that when passing a month to the `Date` constructor, the value should be an integer between 0 (January) and 11 (December); the range of the day argument, however, starts at 1 (first day of the month) instead of 0 (last day of the previous month).

Further Exploration

Given the solution provided, do you think using the Array.prototype.reduce method was a good choice? Why or why not?
*/

// Liz Fedak
// function fridayThe13ths(year) {
//   let count = 0;
//   for (month = 0; month < 12; month += 1) {
//     if (new Date(year, month, 13).getDay() === 5) {
//       count += 1;
//     };
//   } return count;
// };

/* This solution uses the Date.prototype.getDay() method, which returns a number representation of a day. 0 is Sunday, so 5 is Friday. The Date object represents the months with 0-11. We iterate over each month of the year and create a Date object in each iteration. The Date object can take optional arguments. In the if block we create a new Date object with the optional arguments for the year, month, and day we want, which is always the 13th. Then we use the getDay() method to get the numeric day of the week. If it is equal to 5, we increment our Friday the 13th count variable, then return it. */