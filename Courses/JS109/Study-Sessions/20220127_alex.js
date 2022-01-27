/* Integer Reduction - 6 kyu

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569, 2) = '12456', because we have removed 8 and 9.

More examples in the test cases.

Good luck!

PROBLEM
in: num, remove
out: string (num)

Rules: 
-Remove `remove` greatest digits from the input num
-return a string of the remaining digits in original order


EXAMPLES
- 123056, 1 --> 12056
- 87511, 1  --> 7511
- 
- '123056', 3 => '056'

DATA STRUCTURE
- input: 
  - `number` to transform and 
  - `remove` number of digits
- intermediary: array 
- output: string of new number

ALGORITHM
- input `number` and `remove`
- initialize `digits` to string of `number` and split into an array of chars
- loop while digits is longer than String(number). length - `remove`
  -intialize temp array
  - iterate through digits
    - initialize digitsCopy
    - for each index position, splice out element at that index
    -push joined and coerced digitsCopy to Number to tempArray
  
  -find smallest number in temp array 
  -set digits equal to SMALLEST COERCED TO A sTRING AND SPLIT INTO AN ARRAY  
-return digits joined and coerced to a num
*/

// doesn't handle zeros
function solve(number, remove) {
  let digits = String(number).split('');
  
  while (digits.length > String(number).length - remove) {
    let tempArray = [];

    for (let idx = 0; idx < digits.length; idx++) {
      let digitsCopy = digits.slice();
      digitsCopy.splice(idx, 1);
      tempArray.push(digitsCopy.join(''));
    }
    digits = String(Math.min(Number(...tempArray)).split('')
    //console.log(digits)
  }

  return digits.join('');
}

console.log(solve(123056, 3)) // === '056');
console.log(solve(123056, 4))// === '05');

// console.log(solve(123056, 1) === '12056');
// console.log(solve(123056, 2) === '1056');
// console.log(solve(123056, 3) === '056');
// console.log(solve(123056, 4) === '05');
// console.log(solve(1284569, 1) === '124569');
// console.log(solve(1284569, 2) === '12456');
// console.log(solve(1284569, 3) === '1245');
// console.log(solve(1284569, 4) === '124');