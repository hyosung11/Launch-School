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

// function xor(value1, value2) {
//   if (Boolean(value1) === true && Boolean(value2) === false) {
//     return true;
//   } else if (Boolean(value1) === false && Boolean(value2) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// LS solution is great!
// function xor(value1, value2) {
//   if ((value1 && !value2) || (value2 && !value1)) {
//     return true;
//   }
//   return false;
// }

// LS shorter version
function xor(value1, value2) {
  return!!((value1 && value2) || (value2 && !value1));
}

console.log(xor(5, 0)); // true
console.log(xor(false, true)); // true
console.log(xor(1, 1)); // false
console.log(xor(true, true)); // false
console.log(xor(null, true)); // true
console.log(xor(NaN, true)); // true

/*
Discussion
This implementation is straight forward; it simply returns `true` if exactly one of the values is truthy; otherwise, it returns `false`.
*/

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

/* This is more idiomatic than the first solution, but it does take a little more effort to figure out what is going on. Note that this solution requires `!!` to force the return value to a boolean.

Some of you may be tempted to use the `^` operator for this exercise. The ^ operator is a bit-wise operator for performing exclusive-or bit operations. In some cases, you can use `^` as an exclusive-or operator. However, it only works properly when both values are numeric or both are boolean -- anything else may lead to unexpected results. For instance, you might expect the following expression to return a truthy value:
*/

// 'a' ^ false;

/*
It doesn't. Instead, it returns a falsy value (`0`).

Further Exploration

Can you think of a situation in which a boolean `xor` function would be useful? Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the light can be turned on or off using either the switch at the bottom of the stairs or the switch at the top of the stairs. This is an xor configuration, and it can be modeled in JavaScript using the xor function. Think of some additional examples.

`||` and `&&` are so-called short circuit operators in that the second operand is not evaluated if its value is not needed. Does the `xor` function perform short-circuit evaluation of its operands? Why or why not? Does short-circuit evaluation in `xor` operations even make sense?
*/