/* JS101 - Small Problems > Easy 5 > 9. How Many?

How Many?

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: array of strings
- output: template literal populated with info from object

Make the requirements explicit (clarifying questions)
- save the number of occurrences

Identify rules
- words are case sensitive

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:

Edge Cases?
- keep capitalization

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: array
- intermediary: object
- output: template literal of vehicle name with number of occurrences

ALGORITHM
Steps for converting input to output
1. Declare the function CountOccurrences that takes an argument of an array of strings
2. Initialize a vehicle object and assign it to an empty object
3. Loop through the array
  - If vehicle object has a key that matches the current element, increment the keys value by 1
  - If the vehicle object does not have a key at the current element create a key with a value of 1 with the name of the current element
4. Return the object

CODE
Implementation of Algorithm
- test code while programming


*/

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

// with Alex, not working yet 
function countOccurrences(array) {
  let vehicleObject = {};

  for (let index = 0; index < array.length; index += 1) {
    if (Object.keys(vehicleObject).includes(array[index])) {
      vehicleObject[array[index]] += 1;
    } else {
      vehicleObject[array[index]] = 1;
    }
  }

  console.log(vehicleObject);

  for (let index = 0; index < Object.keys(vehicleObject).length; index++) {
    console.log(`${Object.keys(vehicleObject)[index]} => ${vehicleObject[Object.keys(vehicleObject)[index]]}`);
  }
}
countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;