/* Bouncing Balls - 6 kyu

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1

(Condition 2) not fulfilled).

PROBLEM
- input
  - height of the floor
  - bounce height
  - window height
- output
  - number of times ball is seen at the window
  - return -1 if conditions not fulfilled

Rules
- return number of times ball passes window
- Float parameter "h" in meters must be greater than 0
- Float parameter "bounce" must be greater than 0 and less than 1
- Float parameter "window" must be less than h.
- if conditions not met return -1
- The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

EXAMPLES
- height = 3, bounce = 0.66, window = 1.5 => 3 (once on the way down: 3 > 1.5), once on the bounce up: 3 % 0.66 = 1.98 > 1.5) and the third time going back down (1.98 > 1.5) then ball falls to 1.3 < 1.5

DATA STRUCTURE
- input three numbers
- intermediary numbers
- output number

ALGORITHM
- input `height`, `bounce` and `window`
- initialize `count` to 1
- if `height` is less than or equal to 0, return -1
- if `bounce` is less than 0 or greater than 1, return -1
- if `window` is greater than height, return - 1
- reassign `height` to *= bounce
- while height is greater than window
  - reassign height again to *= bounce'
  - increment count by 2 (down and up past window)
- return `count`
*/

// function bouncingBall(height, bounce, window) {
//   if (height <= 0) return -1;
//   if (bounce < 0 || bounce > 1) return -1
//   if (window >= height) return -1;

//   let count = 1;
//   // let value = height;
//   // console.log(value)
//   height = height * bounce; // 1.98

//   while (height > window) { // 1.98 > 1.5
//     // count += 1;
//     height = height * bounce; // 1.3 = 1.98 * .66
//     // console.log(height)
//     // if (height > window)
//     count += 2; // 3
//     // 1.98 = 3 * .66
//     // value = value * bounce; // 1.3
//   }

//   return count; // 3
// }

console.log(bouncingBall(3.0, 0.66, 1.5)) // === 3);
// console.log(bouncingBall(3.0, 0.66, 1.5)) // === 3);
console.log(bouncingBall(30.0, 0.66, 1.5)) // === 15);

// console.log(bouncingBall(3.0, 0.66, 1.5) === 3);
// console.log(bouncingBall(30.0, 0.66, 1.5) === 15);

/*
Input: 3 numbers
Output: number
Rules
- take the heigh of the floor, the bounce (0.66 of the height) amd the window's height (1.5 meters) off the ground
- return how many times the ball will be seen from the window, including the initial drop
- conditions
  - the height must be greater than 0
  - the bounce must be greater than 0 and less than 1
  - the window must be less than the height
  - if all three conditions are fullfiled, return a positive integer representing the amount of times the ball is see
  - if not return -1
- note: the ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter

Algorithm
- if the height is less than 0, the bounce is less than 0 ir greater than 1, or the window is greater than the height, return -1
- otherwise: 
- create `seen` variable and set it to 0
- while the height is greater than the window, multiply height by bounce and store the value in height'
  - during each iteration if height is greater than window increment seen by 1
- after the loop has terminated, return seen
*/

function bouncingBall(height, bounce, window) {
  if (height <= 0 || bounce <= 0 || bounce >= 1 || window >= height) return -1;
  let seen = 0;
  while (height > window) {
    seen++;
    height *= bounce;
    if (height > window) seen++;
  }
  return seen;
}