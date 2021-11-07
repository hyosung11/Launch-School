/* JS101 - Small Problems > Easy 5 > 12. After Midnight (Part 2)

After Midnight (Part 2)

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's `Date` class methods.

Disregard Daylight Savings and Standard Time and other irregularities. */

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeString) {
  let [hours, minutes] = timeString.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes'
}

// Examples
console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);

/* The tests above should log true.

Discussion

As with the previous problem, we start with some useful constant definitions.

The `afterMidnight` function splits the time string into hours and minutes, then calculates the result in total minutes. Note that we use array destructuring to unpack values from arrays into the variables `hours` and `minutes`.

In the last statement of `afterMidnight`, we need to use `% MINUTES_PER_DAY` to handle a simple edge case. In the given time format, 00:00 and 24:00 are the same. However, the way we implemented `afterMidnight` calculates these as different times. We use the modulo operator (`%`) and `MINUTES_PER_DAY` to divide the calculated minutes by the number of minutes in a day, then return the remainder, which will be `0` for both `00:00` and `24:00`.

`beforeMidnight` reuses `afterMidnight` by subtracting the return value of `afterMidnight` from `minutesPerDay`. This does have the unfortunate effect of setting deltaMinutes to `1440` when we want 0, so the code within the block of the `if` statement fixes that.

Further Exploration

How would these methods change if you were allowed to use the Date class? */