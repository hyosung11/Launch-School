/* JS101 - Small Problems Easy 1 > 10. Multiples of 3 and 5

Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

PEDAC

PROBLEM
Identify expected input and output
- input: number
- output: number

Make the requirements explicit
We have to add all the multiples of 3 and 5 up the number given as input

Identify rules
- if a number is a multiple of both 3 and 5, just add it once
- assume that the number is an integer greater than 1
- start at 1 through the inputted number

EXAMPLES
Validate understanding of the problem

Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Edge Cases

DATA STRUCTURE
How we represent data that we will work with when converting the input to output
- just numbers

ALGORITHM
Steps for converting input to output

Set variable with the passed-in number
Set a total variable to store the result of the addition
For each integer between 1 and givenNumber
    If integer is a multiple of 3 or 5
      Add the integer to the total

Return the total

CODE
Implementation of Algorithm
*/

// version with Laurent
// function multisum(number) {
//   let total = 0;

//   for (let integer = 0; integer <= number; integer += 1) {
//     if (integer % 3 === 0 || integer % 5 === 0) {
//       total += integer;
//     }

//   }
//   return total;
// }

// LS solution


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

