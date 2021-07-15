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
- can disregard because don't neet to validate user input

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
// require readlineSync
let readlineSync = require('readline-sync');

// Ask for user input
let length = readlineSync.question('Enter the length of the room in meters: ');

let width = readlineSync.question('Enter the width of the room in meters: ');

// calculat area
let area = length * width;
let areaSquareFeet = area * 10.7639;

// return result
console.log(`The area of the room is ${area} square meters (${areaSquareFeet.toFixed(2)}) square feet.`);