/* 19. Next Bigger Number

Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

PROBLEM
- input number
- output number

Rules
- return the next bigger number formed by the same digits as the input number
- if no bigger number can be found, return -1
- single digit input number returns -1
- if all digits same, returns -1
- if from left to right digits descend in value, return -1
- what about negative numbers?

EXAMPLES
- 513 => 531 rotates 13 => 31
- 2017 => 2071 => 17 becomes 71

DATA STRUCTURE
- input number
- intermediary: turn number into string to check digits
- output number

ALGORITHM
- input number
- turn number into a string of digits
- initialize `
- return new number
- return -1 because not found
*/

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(13) === 31); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true