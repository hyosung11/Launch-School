/* Largest Swap

Write a function that takes a two-digit number and determines
if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true

If 27 is our input, we should return false 
because swapping the digits gives us 72, and 72 > 27. 
On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples

largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true

Notes

Numbers with two identical digits (third example)
should yield true (you can't do better).

Algo
- declare `largestSwap` function with `num` parameter
- init `swapped` to num 
  - changed to a string then 
  - split into an array then 
  - reversed
  - then converted back to number
- if swapped is greater than num return false
- if swapped is equal to num return true
- return true;
*/

function largestSwap(num) {
  let swapped = Number(String(num).split('').reverse().join(''));
  if (swapped > num) return false;
  return true;
}

console.log(largestSwap(27) === false); // '27 < 72, so not largest swap.')
console.log(largestSwap(43) === true); // '43 > 34, so largest swap.')
console.log(largestSwap(14) === false); // '14 < 41, so not largest swap.')
console.log(largestSwap(53) === true); // '53 > 35, so largest swap.')
console.log(largestSwap(99) === true); // 'Cannot do better, so largest swap.')
