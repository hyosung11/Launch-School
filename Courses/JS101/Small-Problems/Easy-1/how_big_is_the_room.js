/* JS101 - Small Problems > Easy 1 > 4. How big is the room?

How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

PEDAC

PROBLEM
input:
  two numbers

output:
  number

Make the requirements explicit:
- need two numbers from the user
- numbers in meters
- return value in square meters
- return value in square feet to two decimal places

Identify rules:
- no need to validate the input (absolute value, etc.)
- use readlineSync prompt to gather user input

Edge Cases:
- can disregard because don't need to validate user input

EXAMPLES
- see above in problem description

DATA STRUCTURE
- just returning a number to two decimal places, so a float

ALGORITHM
1. require readlineSync
2. prompt user for a number for length of the room
3. prompt user for a number for width of the room
4. multiply numbers together
5. return value in square meters
6. return value in square feet

CODE
*/

// // require readlineSync
// let readlineSync = require('readline-sync');

// // Ask for user input
// let length = readlineSync.question('Enter the length of the room in meters: ');

// let width = readlineSync.question('Enter the width of the room in meters: ');

// // calculat area
// let area = (length * width);
// let areaSquareFeet = (area * 10.7639);

// // return result
// console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)}) square feet.`);

// Enter the length of the room in meters: 5
// Enter the width of the room in meters: 4
// The area of the room is 20.00 square meters (215.28) square feet.

// LS Solution
let readlineSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)}) square feet.`)

/*
Discussion

The approach is straightforward. It makes use of two readlineSync.prompt calls to get the length and width respectively, performs the computation, and then logs the results to the console. The solution does not check if the user input appropriate values.

Some key things to note:

- Notice that the constant, SQMETERS_TO_SQFEET, is written in ALL_CAPS. This follows the idiomatic naming convention for constants.
- The readlineSync.prompt method returns a string. The parseInt function converts that string to an integer with radix 10.
- The Number.prototype.toFixed method returns a string. You can read more about this method here. Essentially, toFixed() method formats a number. An argument can be also passed to the method call (we passed number 2 in our example) and that signifies the number of digits to appear after the decimal point. This argument is optional, and if it is omitted, it is treated as 0.

Further Exploration

Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

// Eamon O Callaghan solution

// let rlSync = require('readline-sync');
// const SQMETERS_TO_SQFEET = 10.7639;

// function howBig() {
//   let length = rlSync.question("What's the length of the room? ");
//   let width = rlSync.question("What's the width of the room? ");
//   let type = rlSync.question('Are you using meters or feet? ');

//   let area = length * width;

//   if (type.toLowerCase() !== 'feet' && type.toLowerCase() !== 'meters') {
//     type = rlSync.question(
//       'Are you using meters or feet? Please type either meters or feet. '
//     );
//   }

//   if (type.toLowerCase() === 'meters') {
//     let areaInFeet = area * SQMETERS_TO_SQFEET;
//     console.log(
//       `The area of the room is ${area.toFixed(
//         2
//       )} square meters (${areaInFeet.toFixed(2)} square feet).`
//     );
//   } else if (type.toLowerCase() === 'feet') {
//     let areaInFeet = area / SQMETERS_TO_SQFEET;
//     console.log(
//       `The area of the room is ${area.toFixed(
//         2
//       )} square feet (${areaInFeet.toFixed(2)} square meters).`
//     );
//   }
// }

// howBig();