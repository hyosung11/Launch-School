/* JS101 - Small ProblemsEasy 5 > 1. Cute Angles

Cute Angles

Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (`˚`) to represent degrees, a single quote (`) to represent minutes, and a double quote (`) to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: floating point number
- output: string

Identify rules
- convert floating point number to degrees, minutes, and seconds

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input
- intermediary
- output

ALGORITHM
Steps for converting input to output

CODE
Implementation of Algorithm
- test code while programming */

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) *
      SECONDS_PER_DEGREE
  );

  return (
    String(degreesInt) +
    DEGREE +
    padZeroes(minutes) +
    "'" +
    padZeroes(seconds) +
    '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? '0' + numString : numString;
}

// Examples:
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/* Discussion

The tricky part with this exercise is the mathematical component. That said, there are websites that provide details on how to compute this.

This solution computes the `degreesInt` component by flooring the input to remove the decimal component. It computes the `minutes` component by subtracting from the input the `degreesInt` component, and then multiplying the result by `MINUTES_PER_DEGREE`. Lastly, it computes the `seconds` component by subtracting from the input the `degreesInt` and `minutes` divided by `MINUTES_PER_DEGREE`, and then multiplying the result by `SECONDS_PER_DEGREE`. For both the `minutes` and `seconds` components, the solution subtracts from the input to get the value of the decimal components, which it multiplies with their respective conversion factors.

The next part, which is more programmatic in nature, is the formatting of the string output. The solution uses a helper function to pad a zero to the left of any single-digit numbers. The return value of the `dms` function is a string that includes single and double quote characters, rendered as `"'"` and `'"'` respectively, as well as the `DEGREE` variable. The `DEGREE` variable holds the hexadecimal escape sequence representing the degree symbol.

Further Exploration

The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive). Can you refactor it so that it works with any positive or negative number?

Our solution returns the following results for inputs outside the range 0-360: */

dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"

/* Since degrees are normally restricted to the range 0-360, can you modify the code so it returns a value in the appropriate range when the input is less than 0 or greater than 360? */

/* Kowshik Islam

I am trying to get into the habit of using PEDAC. The first go was not as good as I did not spend that much time on understanding the problem. But it all turned out good in the end.

*****Understand the *****
Explicit Requirements
- Input: Number
- Output: String
- Take a floating point number which represents an angle (between 0 and 360) and return a string
representing that angle in degrees, minutes, and seconds.
Use various symbols for degree, minutes and seconds

Implicit Requirements
- 360 degree = 0
- How do we deal with negative degrees and abs(angle) > 360

- So we have a floating point number. The whole number part of the floating point
is in degrees. The decimal portion is what we need to express in minutes and seconds

*****Example*****:

76.73 --> 76 degrees, 43 minutes, 48 seconds

We have 60 minutes in one degree and 60 seconds in one second

here is how we obtain the minutes and seconds
0.73 * 60 = 43.8 ---> 43 minutes
0.8 * 60 = 48 ---> seconds

*****Data Structure*****
- we can just number to hold the decimal portion and then add result of x to final output

*****Algorithms*****
- Create a variable to hold decimal part of a number
  -Need to deal with negative numbers and abs(number) > 360
- With the initial floating point number, the whole part is degrees
- Get the decimal from first floating point number * 60 ---> a new number. The whole number is minutes
- Take the decimal portion from last step * 60 ---> seconds
- Concatenate all to a string */

function dms(angle) {
  const ANGLE_TO_MINUTE = 60;
  const MINUTE_TO_SECOND = 60;

  //get correct angle
  let degreesFull = transformAngle(angle);

  let degreesOnly =  Number.parseInt(degreesFull);
  let degreesDecimal = degreesFull - degreesOnly;

  let minutesFull = degreesDecimal * ANGLE_TO_MINUTE;
  let minutesOnly = Number.parseInt(minutesFull);
  let minutesDecimal = minutesFull - minutesOnly;

  let seconds = Math.floor(minutesDecimal * MINUTE_TO_SECOND); //use floor  based on test case #3

  return `${degreesOnly}˚${String(minutesOnly).padStart(2,'0')}'${String(seconds).padStart(2,'0')}"`
}

//Assumes no empty argument
function zeroPadder(number) {
  return String(number).length < 2? '0' + String(number) : String(number);
}

function transformAngle(angle) {
  const MIN_DEGREE = 0;
  const MAX_DEGREE = 360;

  //get the number of decimal places we need to return (sometime we may not have decimals)
  const NUM_DECIMALS = String(angle).split('.').length > 1 ? String(angle).split('.')[1].length : 0

  /* Case 1: 0 to < 360 ---> don't do anything
  Case 2: >= 360 ---> angle = angle % 360
  Case 3: <0 and =< -360 ---> angle = angle + 360
  Case 4: <-360 ---> (Abs(Angle) % 360) * -1 + 360 */

  if (angle >= MIN_DEGREE && angle < MAX_DEGREE) return angle;
  if (angle >= MAX_DEGREE) return (angle % MAX_DEGREE).toFixed(NUM_DECIMALS);
  if (angle < MIN_DEGREE && angle >= -MAX_DEGREE) return (angle + MAX_DEGREE).toFixed(NUM_DECIMALS);
  if (angle < -MAX_DEGREE) return (-(Math.abs(angle) % MAX_DEGREE) + MAX_DEGREE).toFixed(NUM_DECIMALS);
}

// //test angle transformer
// console.log(transformAngle(25.5));    //25.5
// console.log(transformAngle(420.23));  //60.23
// console.log(transformAngle(-445.10)); //274.9
// console.log(transformAngle(-85.10125)); //274.89875

// //test the padder
// console.log(zeroPadder(10));
// console.log(zeroPadder(0))
// console.log(zeroPadder(-12));

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-445.10))       //274˚53'59"
console.log(dms(-85.10125))     //274˚53'55"

