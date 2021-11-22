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