/* JS101 - Small Problems > Easy 5 > After Midnight (Part 1)

After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's `Date` class methods.

Disregard Daylight Savings and Standard Time and other complications.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: integer --> 0
- output: string --> "00:00"

Identify rules
- if number of minutes is positive, it's after midnight
- if number of minutes is negative, the time is before midnight

EXAMPLES / TEST CASES
3000 --> ((3000 / 60 minutes) = 125 minutes)

DATA STRUCTURE

ALGORITHM
- declare constants for minutes/hour, hours/day, and minutes/day
- create function to return leading zero if number < 10
- create function to format the time `00:00`
- check input number
  - if number < 0
  - if number > 0
- calculate hours and minutes
- return formatted time

CODE
Implementation of Algorithm
- test code while programming */

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;


// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return formatTime(hours, minutes);
// }

// Examples:
console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');

// The tests above should log `true`.

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));

/* Discussion

We start out this solution by defining a few useful constants so we don't have a bunch of "magic numbers" in our method. Also, we have defined a helper function `formatTime` that will help us with proper formatting. The body of the method then boils down to 3 operations:

- Ensure the time difference is in the range between 0 and MINUTES_PER_DAY (1440) by using the % operator. For negative numbers we need to add MINUTES_PER_DAY to the remainder.
- We calculate the hours and minutes.
- Format the results with our helpers formatTime() and leadingZero(). leadingZero ensures that we always have at least 2 digits when our numbers are represented as strings.
- Return the formatted string.

Further Exploration

How would you approach this problem if you were allowed to use JavaScript's `Date` class? Suppose you also needed to consider the day of week? (Assume that `deltaMinutes` is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of `Thursday 01:29`.)

==============
Jason Aricheta

Very compressed version. LS Answer is much more readable. But this leverages

- while loop with a long conditional `mins < 0 || (24*60) < mins` to loop until `mins` is at the right range
`+=` with ternary operator to control plus or minus operation
- `parseInt` to cut off at the decimal point
- `padStart` to format the output */

// function timeOfDay(mins) {
//   while (mins < 0 || (24 * 60) < mins) {
//     mins += (24 * 60) * ((mins < 0) ? 1 : -1);
//   }
//   let wholeMins = parseInt(mins / 60);
//   let wholeSeconds = Math.round((mins / 60 - wholeMins) * 60);
//   return `${String(wholeMins).padStart(2, '0')}:${String(wholeSeconds).padStart(2, '0')}`
// }

// Laurent - Further exploration with `Date`
// function formatDateOutput(date) {
//   let days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];

//   let day = String(days[date.getDay()]);
//   let hour = String(date.getHours());
//   let minute = String(date.getMinutes());

//   return `${day} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
// }

// function timeOfDay(number) {
//   const MILLISECONDS_PER_MINUTE = 60000;
//   const REFERENCE_TIME = new Date('August 8, 2021 00:00:00').getTime();

//   let date = new Date(REFERENCE_TIME + number * MILLISECONDS_PER_MINUTE);

//   return formatDateOutput(date);
// }

/* Kowshik Islam

***PEDAC

The time of day can be represented as the number of minutes
before or after midnight. If the number of minutes is positive,
the time is after midnight. If the number of minutes is negative,
the time is before midnight.

Write a function that takes a time using this minute-based
format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's `Date` class methods.

Input: Integer
Output: Time in 24hr format (hr : mi) (mi for minute)
Implicit: can't use date class methods

***Examples
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

***Data Structure and Algorithm
- given integer

- First Case : Positive Integer. Take Midnight as 00 : 00
  - totalHrPassed = integer / 60
    - minutePassed = integer - (hourTotal * 60)
    - hrPassedActual = hourTotal % 24 (discarding multiple days passed)
  - hr24format = (00 + hrPassedActual) : (00 + minutePassed)

- Second Case: Negative Integer. Take Midnight as 23 : 60
  - integer = abs(integer)
  - totalHrPassed = integer / 60
    -minutePassed = integer - (totalHrPassed * 60);
    -hrPassedActual = integer % 24
  - hr24format = (23 - hrPassedActual) : (60 - minutePassed)

- use padding both hour and minute
*/

function timeOfDay(integer) {
  const MINUTE_TO_HOUR = 60;
  const HOUR_IN_DAY = 24;

  let integerAbs = Math.abs(integer);
  let totalHrPassed = Math.floor(integerAbs / MINUTE_TO_HOUR);
  let totMinPassed = integerAbs - (totalHrPassed * MINUTE_TO_HOUR);
  let totalHrPassedActual = totalHrPassed % 24;

  let midnightHour;
  let midnightMinute;
  let twentyFourFormatHr;
  let twentyFourFormatMin;
  if (integer >= 0) {
    midnightHour = 0;
    midnightMinute = 0;
    twentyFourFormatHr = midnightHour + totalHrPassedActual;
    twentyFourFormatMin = midnightMinute + totMinPassed;
  } else {
    midnightHour = 23;
    midnightMinute = 60;
    twentyFourFormatHr = midnightHour - totalHrPassedActual;
    twentyFourFormatMin = midnightMinute - totMinPassed;
  }
  //let testReturn = `${String(twentyFourFormatHr).padStart(2,'0')}:${String(twentyFourFormatMin).padStart(2,'0')}`;

  return (`${String(twentyFourFormatHr).padStart(2,'0')}:${String(twentyFourFormatMin).padStart(2,'0')}`);
}
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
