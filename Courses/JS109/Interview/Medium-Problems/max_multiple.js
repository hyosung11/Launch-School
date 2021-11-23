/* Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0. */

// Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

/* Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

PEDAC
- input: two numbers
- output: number

Rules
- find the largest number N
  - N is a multiple num1
  - N is smaller num2
  - N is greater than 0

Algorithm
- input num1, num2
- initialize lastNumber
- initialize counter from 1
- looping until reach value of num2
  - multiply num1 by counter
  - if num1 <= num2 
    - assign num1 to lastNumber
- return number */

function maxMultiple(increment, bound) {
  let lastNumber = 0;
  let number = 0;

  do  {
    number = lastNumber + increment
    if (number <= bound) lastNumber = number;
  } while (number <= bound);

  return lastNumber;
}
// Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);
