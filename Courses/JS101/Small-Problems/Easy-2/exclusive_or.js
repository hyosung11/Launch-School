/* JS101 - Small Problems > Easy 2 > 7. Exclusive Or

Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Exapmples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: two operands of any data type
- output: boolean true/false

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- take two arguments of any type
- return true if exactly one of the arguments is truthy
- return false otherwise

Identify rules
- truthy / truthy => false
- truthy / falsy  => true
- falsy / turthy  => true
- falsy / falsy   => false

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: two operands of any type
- intermediary
- output: boolean true/false

ALGORITHM
Steps for converting input to output
1. if operand1 is falsy, operand2 must be truthy to return true
Or
2. if operand1 is truthy, operand2 must be falsy to return true

CODE
Implementation of Algorithm
- test code while programming

*/

function xor(operand1, operand2) {
  if (Boolean(operand1) === false && Boolean(operand2) === true) {
    return true;
  } else if (Boolean(operand1) === true && Boolean(operand2) === false) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0)); // true
console.log(xor(false, true)); // true
console.log(xor(1, 1)); // false
console.log(xor(true, true)); // false