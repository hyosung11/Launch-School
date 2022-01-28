/* 6 kyu - Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

PROBLEM
- input number
- output: number as times it takes to reach a single digit by multiplying iterations of the input number's digits

Rules
- return number as the amount of times it takes to multiply the digits of the input number together in decreasing iterations to get a single digit
- if number is single digit return 0
- assume that multiplying the digits of number together always produces a smaller number?

EXAMPLES
- 39 --> 3 * 9 = 27 (1), 2 * 7 = 14 (2), 1 * 4 = 4 (3) to get to single digit

DATA STRUCTURE
- input number
- intermediary: turn number into string; split string into digits in an array
- output: number

ALGORITHM
- input number
- initialize `count` to 0
- iterate while string version of number is greater than 1
- initialize `digitsArray` to value of
  - converting number to string
  - splitting string into digits
  - mapping each digit to a number version of digit
- reassign number to return value of passing the digitsArray into the multiplyDigits helper function
- increment count by 1
- return `count`

multiplyDigits helper function
- input array of digits
- compute product of digits in the array */

// function persistence(number) {
//   let count = 0;

//   while (String(number).length > 1) {
//     let digitsArray = String(number)
//       .split('')
//       .map(digit => Number(digit));

//     number = multiplyDigits(digitsArray);
//     count += 1;
//   }

//   return count;
// }

// function multiplyDigits(array) {
//   return array.reduce((product, num) => product * num, 1);
// }

// function persistence(num) {
//   for (var idx = 0; num > 9; idx++) {
//     num = String(num).split('').reduce((product, digit) => product * digit, 1);

//   }
//   return idx;
// }

// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num
//       .toString()
//       .split('')
//       .reduce((s, d) => s * d);
//   }
//   return i;
// }

// function persistence(number) {
//   // number = 25
//   let counter = 0; // counter 0

//   while (String(number).length > 1) {
//     // START condition is 2 on the first iteration
//     let digitsArray = String(number)
//       .split('')
//       .map((el) => Number(el)); // digitsArray = [ 2, 5 ]

//     number = multiplyElements(digitsArray); // number = 10
//     counter += 1; // counter = 1 END of the first iteration
//   }

//   return counter;
// }

// const multiplyElements = (array) => {
//     return array.reduce((acc, nb) => acc * nb, 1);
//   }; // return 10

// function persistence(number) {
//   let count = 0;

//   while (String(number).length > 1) {
//     let digitsArray = String(number)
//       .split('')
//       .map((digit) => Number(digit));
//     // console.log(digitsArray) // [2 , 5]

//     number = multiplyElements(digitsArray);
//     // console.log(number) //
//     count += 1;
//   }

//   return count;
// }

// function multiplyElements(array) {
//   return array.reduce((sum, num) => sum * num, 1);
// }

// function persistence(num) {
//   let count = 0;
//   num = String(num).split('');

//   while (num.length > 1) {
//     count += 1;
//     num = String(num.reduce((product, digit) => product * digit, 1)).split('');
//   }

//   return count;
// }
