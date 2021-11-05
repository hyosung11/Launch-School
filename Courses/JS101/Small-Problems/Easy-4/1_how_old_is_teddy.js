/* JS101 - Small Problems > Easy 4 > 1. How old is Teddy?

How old is Teddy?

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Find code to generate random numbers.

Example Output: */
// Teddy is 69 years old!

// My second working version
// function randomAgeGenerator(min, max) {
//   let age = (Math.floor(Math.random() * (max - min + 1)) + min);
//   console.log(`Teddy is ${age} years old!`);
// }

// randomAgeGenerator(6, 53);

/* Launch School

Approach/Algorithm

Hint:

- The `Math` object has a `random()` method that might be useful. Check out the documentation on MDN.
- How many possible numbers can be generated?
- How can you make sure that the numbers generated won't go below the minimum value?

Launch School Solution - no side-effects */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old`);
// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let age = randomBetween(20, 120);
// console.log(`Teddy is ${age} years old!`);

/* Discussion

The solution makes use of the random() method of the Math object. The random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). To have the random number be between 20 and 120, the solution uses the function randomBetween. It takes a min and a max value as arguments.

The first part of the return statement in the randomBetween function, Math.floor(Math.random() * (max - min + 1)), generates a number based on the range (distance) between the max and the min. If the arguments passed are 20 and 120, there are 101 possible values, starting from 0 up to 100.

The second part, + min;, which completes the return statement, offsets the current value so that the number returned falls within the range of the arguments passed.

Finally, the Math.floor() method turns the generated number into an integer. The method takes a number and reduces it to the next lower integer, effectively truncating any digits following the decimal point.

Further Exploration

The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead?

Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?

=========

Bob Rodes
9 months ago
Further Exploration

It would make a difference if Math.round is used. First, you wouldn't add 1 to max - min, or the range would be one number too high. But even then, since half the numbers get rounded down and half up, the two ends of the range will only occur half as often as the others.

I put a little test together to show this: */

// function randomBetween(min, max) {
//   return Math.round(Math.random() * (max - min) + 1) + min;
// }

// let results = Array(15).fill(0);
// for (let i = 0; i < 10000; i++) {
//   results[randomBetween(1, 10)] += 1;
// }

// console.log(results);

// > [
//      0,    0,  531, 1083,
//   1108, 1104, 1124, 1123,
//   1139, 1165, 1068,  555,
//      0,    0,    0
// ]

// To guard against the user transposing the inputs, we can add a line of code to sort and reassign the arguments:

// function randomBetween(min, max) {
//   [min, max] = [min, max].sort((a, b) => a - b);
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// }

/* laurentstaub
3 months ago

Nice, I don't think you need the +1 in the randomBetween function though. As you mentioned, numbers get rounded up and down, so the +1 is not necessary. That is why, though you pass 1 and 10 to the function, the results array get filled from 2 to 11.

Bob Rodes
3 months ago

Yeah, looks like I forgot to pull it out (after carefully explaining why you don't need it) when using round instead of floor. Good catch! I'll leave it in so people will know what we're talking about. */
