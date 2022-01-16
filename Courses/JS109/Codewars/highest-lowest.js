/* Highest and Lowest - 7 kyu

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Notes
- All numbers are valid Int32, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

PROBLEM
- input: string of space separated numbers
- output: string of the highest and lowest numbers in that order

Rules
- return a string of the highest and lowest number from the input of string numbers separated by a space
- numbers can be negative
- numbers in input string are separated by a space

EXAMPLES
- '1 2 3 4 5' => '5 1'
- '1 2 -3 4 5' => '5 -3'

DATA STRUCTURE
- input string of space separated numbers
- intermediary: split string at space into an array of numbers
- output: new string

ALGORITHM
- input string of space separated numbers
- initialize `result` 
  - split string at space into an array of digits
  - iterate over digits convert them to numbers
  - sort numbers in the the array from highest to lowest
- return `result` array at index 0 and `result` array at the last index position */

// my working solution
// function highAndLow(numbers) {
//   let result = numbers.split(' ').map(Number).sort((a, b) => b - a);

//   return `${result[0]} ${result[result.length - 1]}`;
// }

// vyridian - using `Math.max()` and `Math.min()`
// function highAndLow(numbers) {
//   let numbersArray = numbers.split(' ').map(num => Number(num));
//   console.log(numbersArray);
//   // Math.max can't decipher the elements of an array on its own. The elements have to be passed individually using the spread operator
//   let max = Math.max(...numbersArray);
//   // console.log(max)
//   let min = Math.min(...numbersArray);

//   return `${max} ${min}`;
// }

// function highAndLow(numbers) {
//   let numbersArray = numbers.split(' ').map(Number);
//   let max = Math.max(...numbersArray);
//   let min = Math.min(...numbersArray);

//   return `${max} ${min}`;
// }

// function highAndLow(numbers) {
//   let numbersArray = numbers.split(' ').sort((a, b) => b - a);
//   // console.log(numbersArray)
//   return `${numbersArray[0]} ${numbersArray[numbersArray.length - 1]}`;
// }

// Using Math.max and Math.min with the spread operator
function highAndLow(numbers) {
  let digits = numbers.split(' ')
  return `${Math.max(...digits)} ${Math.min(...digits)}`;
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); //=== '42 -9');