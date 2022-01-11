/* Write Number in Expanded Form - 6kyu

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

PROBLEM
- input: number
- output: string of the number in expanded form

Rules
- return input number as a string in expanded form
- all numbers will be whole numbers greater than 0

EXAMPLES
- 12 => '10 + 2'
- 133 => 100 + 30 + 3'
- 1234 =>  '1000 + 200 + 30 + 4'

DATA STRUCTURE
- input number
- intermediary: turn number into a string of digits
- output: string

ALGORITHM
- input number
- convert number to string
- split string into digits
- reverse the digits
- iterate through digits at index position
  - multiply digit by power of 10 at index position
- filter out digit greater than 0
- reverse again
- join with a plus sign
- return `result` string of number in expanded form */

// function expandedForm(number) {
//   return number
//     .toString()
//     .split('')
//     .reverse()
//     .map((digit, idx) => digit * Math.pow(10, idx))
//     .filter(digit => digit > 0)
//     .reverse()
//     .join(' + ');
// }


// function expandedForm(number) { // 12
//   return String(number) // '12'
//     .split('') // ['1', '2']
//     .reverse() // ['2', '1']
//     .map((digit, idx) => digit * Math.pow(10, idx)) // [ '2' 0, '1' 1] => [ '2', '10' ]
//     .filter((digit) => digit > 0) // [ '2' , '10']
//     .reverse() // ['10', '2' ]
//     .join(' + '); // '10 + 2'
// }


// function expandedForm(number) { // 102
//   return String(number) // '102'
//     .split('') // ['1', '0', '2']
//     .reverse() // ['2', '0', '1']
//     .map((digit, idx) => digit * Math.pow(10, idx)) // [ '2', '0', 100]
//     .filter((digit) => digit > 0) // [ '2', '100']
//     .reverse() // ['100', '2' ]
//     .join(' + '); // '100 + 2'
// }

/* ng12356
problem
  input: number
  output: a string in expanded form
  rules: all numbers will be whole numbers greater than 0

examples:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

    two digit number:
      - 29 % 10 ==> 9
      - 29 - 9 = 20
      - 20 % 10 ==> 0
      - [9, 20]
      - [20, 9]
    three digit number
      - 123 % 100 ==> 23
      - 23 % 10 ==> 3 // push
      - 123 - 3 = 120
      - 120 % 100 = 20
      - 200 % 10 === 20 // push
      - 123 - 3 - 20 = 100
      - 100 % 100 ==> 0 // push
      - [3, 20, 100]
      - [100, 20, 3]

data structure: array of numbers, converted to a string and joined with the + operator at the end

algorithm:
  [x] Initialize `power` to empty array to hold the exponent
  [x] Initialize `digits` to an empty array to hold the digit
  [x] Split number into an array of digits
  [x] For each of the digits add the power to the array
  [] For each digit push the digit onto the digits array
  [] Filter the array by selecting all numbers that don't equal 0
  [] Split the array and return a joined string by the ' + ' operator */

// function expandedForm(num) {
//   let power = [];
//   let digits = [];
//   let chars = String(num).split('');

//   for (let idx = 0; idx < chars.length; idx++) {
//     power.unshift(idx);
//   }

//   chars.forEach((num, idx) => {
//     let multiple = parseInt(num);

//     digits.push(multiple * Math.pow(10, power[idx]));
//   });

//   let filtered = digits.filter(digit => digit !== 0);
//   return String(filtered).split(',').join(' + ');
// }

/* Sergio Pichardo

INPUT: number
OUTPUT: string

RULES
- given a number
- return it a string in expanded form

DATA STRUCTURE
- an array

NOTES
- 10 ** 0 = 1
- 10 ** 1 = 10
- 10 ** 2 = 100
- 10 ** 3 = 1000
- 10 ** 4 = 10000


ALGORITHM
- create an emtpy array
- convert the number into a string
- split the numeric string into an array of numbers
- iterate over each digit in the array of digits, starting from last number
  - multiply each digit based on its value place
  - if the product is not 0
    - append the product to result array
- join the result array using a the string " + " as a delimiter
- return the final string
*/

// function expandedForm(num) {
//   let digits = [...String(num)].map(Number);
//   let exponent = digits.length - 1;
//   const expandedNumbers = [];

//   for (let idx = 0; idx < digits.length; idx += 1) {
//     let digit = digits[idx];
//     let product = digit * Math.pow(10, exponent);
//     if (product !== 0) {
//       expandedNumbers.push(product);
//     }
//     exponent--;
//   }

//   return expandedNumbers.join(' + ');
// }

/*
Input: number
Output: string
Rules
- take the input number and return it in expanded form as a string
- all numbers will be whole numbers greater than 0

Algorithm
- create result empty array
- create a loop that runs while the number input is greater than 0
  - within the loop get the remainder of the number modulo 10 and push it to the result array
  - reassign the the number to itself divided by 10 and rounded down
- after the loop has terminated:
  - create zero and set it to an empty string
  - iterate over the result array and append zero to each number
   - increment zero by '0' on each round of iteration
- after iteration fitler out any values that are less than 1
- return the fitlered array joint with ' + '
*/

// function expandedForm(num) {
//   let result = [];
//   while (num > 0) {
//     let remainder = num % 10;
//     result.push(remainder);
//     num = Math.floor(num / 10);
//   }

//   let zero = '';
//   return result.map(num => {
//     num = num + zero;
//     zero += '0';
//     return num;
//   }).filter(num => num > 0).reverse().join(' + ');
// }


// function expandedForm(num) {
//   // declare array to hold our broken-out numbers
//   let numberArr = [];

//   // loop as long as the num is greater than 0. each subsequent iteration adds a 0 to the end of the incrementer
//   for (let incrementer = 10; num > 0; incrementer *= 10) {
//     // find the remainder
//     let remainder = num % incrementer;
//     // if the remainder isn't 0, push it to the array
//     if (remainder) numberArr.push(remainder);
//     // subtract the remainder from num
//     num -= remainder;
//   }
//   // return the reversed array, joined by ' + '
//   return numberArr.reverse().join(' + ');
// }

function expandedForm(num) {
  // declare array to hold our broken-out numbers
  let numberArr = [];

  // loop as long as the num is greater than 0. each subsequent iteration adds a 0 to the end of the incrementer
  for (let incrementer = 10; num > 0; incrementer *= 10) {
    // find the remainder
    let remainder = num % incrementer; // rem = 10 % 10
    // if the remainder isn't 0, push it to the array
    console.log(remainder) // 2, 1
    if (remainder) numberArr.push(remainder); // [ 2, 1 ]
    // subtract the remainder from num
    num -= remainder; // 10
  }
  // return the reversed array, joined by ' + '
  return numberArr.reverse().join(' + '); // [2, 1] => [1, 2]
} 

console.log(expandedForm(12)); // Should return '10 + 2'
// console.log(expandedForm(42)); // Should return '40 + 2'
// console.log(expandedForm(102)); // Should return '100 + 2'
// console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'