/* JS101 - Small Problems > Easy 5 > 11. After Midnight (Part 1)

After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's `Date` class methods. */

// Examples:
console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');

/* The tests above should log `true`. 

Disregard Daylight Savings and Standard Time and other complications. */