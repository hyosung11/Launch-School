/* JS101 - Small Problems > Medium 1 > 3. Rotation (Part 3)

Rotation (Part 3)

Take the number `735291` and rotate it by one digit to the left, getting `352917`. Next, keep the first digit fixed in place and rotate the remaining digits to get `329175`. Keep the first two digits fixed in place and rotate again to get `321759`. Keep the first three digits fixed in place and rotate again to get `321597`. Finally, keep the first four digits fixed in place and rotate the final two digits to get `321579`. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the `rotateRightmostDigits` function from the previous exercise.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: original number
- output: number that is the maximum rotation of the original number

Identify rules
123 -> 231 -> 213 (max rotation) => 123 (original number)

EXAMPLES / TEST CASES
* 735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input
- intermediary
- output

ALGORITHM
Steps for converting input to output

CODE
Implementation of Algorithm
- test code while programming */

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

// Examples:
console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845

/* Discussion

With the use of the `rotateRightmostDigits` function from the previous exercise, this solution simply becomes a matter of repeatedly calling that function, passing the `number` and `count` as arguments. The variable `count` — representing the number of digits in the `number` argument — is decremented by `1` at the end of each iteration, all the way down until it reaches a value of `2`. It is not necessary to rotate all the way down to `1` because rotating the rightmost digit has no effect. */