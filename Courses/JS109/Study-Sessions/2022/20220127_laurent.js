/* Integer Reduction - 6 kyu

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569, 2) = '12456', because we have removed 8 and 9.

More examples in the test cases.

PROBLEM
Input: 2 numbers (digits, chars to `remove`)
Output: string (of length digits length - removed chars)

Rules:
  - remove chars
  - find the lowest number

EXAMPLES

ALGORITHM
Input: number, removedChars
Get the number as string
Declare a variable `lowest` and initialize to - Infinity
Declare a variable `lowestString` and initialize to null

Iterate over the string number with remaining chars
  length of leftChars number length - removed char
  Check if the number version of the remaining string is larger than `lowest`
    If it is,
      Assign the value as a number to `lowest`
      Assign the value as a string to `lowestString`
    Else we do nothing

Return `lowestString`
*/

// function solve(number, removedChars) {
//   let numberString = String(number);
//   let lowest = + Infinity;
//   let lowestString = null;

//   for (let index = 0; index < numberString.length; index += 1) {
//     let slicedString = numberString.slice(0, index) + numberString.slice(index + removedChars);

//     let slicedNumber = Number(slicedString);

//     if (slicedNumber < lowest) {
//       lowest = slicedNumber;
//       lowestString = slicedString;
//     }
//   }

//     for (let index = 0; index < numberString.length; index += 1) {
//     let remainingchars = numberString.length - removedChars;
//     let slicedString = numberString.slice(index, index + remainingchars);
//     let slicedNumber = Number(slicedString);

//     if (slicedString.length !== remainingchars) continue;
//     if (slicedNumber < lowest) {
//       lowest = slicedNumber;
//       lowestString = slicedString;
//     }
//   }

//   return lowestString;
// }

//console.log(solve(123, 1)) // === '12');
//console.log(solve(123, 2)) // === '1');
// console.log(solve(4231, 2) === '21');
// 21 ? remove 4 and 3
// console.log(solve(504162, 3) === '012');
// console.log(solve(40231, 2)) // === '01');
//console.log(solve(123056, 1) === '12056'); // 6 iterations

// console.log(solve(123056, 2) === '1056');
// console.log(solve(123056, 3) === '056'); // 4 iterations
// console.log(solve(123056, 4)); // 3 iterations
// console.log(solve(1284569, 1)=== '124569');
// console.log(solve(1284569, 2)) // === '12456');
// console.log(solve(1284569, 3)) //=== '1245');
// console.log(solve(1284569, 4)) // === '124');

// function solve(n, k) {

//   n = n.toString();
//   if (!k) return n;

//   for (let i = 0; i < n.length - 1; i++)
//     if (n[i] > n[i + 1])
//       return solve(n.slice(0, i) + n.slice(i + 1), k - 1);

//   return n.slice(0, n.length - k);

// };

// Another Solution
function solve(digit, integer) {
  // 4231, 2
  let lowestNum = digit.toString(); // '4231'
  let digitSplit = lowestNum.split(''); // ['4', '2', '3', '1']  //

  for (let idx = 0; idx < integer; idx++) {
    // iterate up to removed chars
    for (let jdx = 0; jdx < digitSplit.length; jdx++) {
      // number length // 0 // 1
      let tempNum = digitSplit.slice(); // copy the array
      tempNum.splice(jdx, 1); // remove '4' ['2', '3', '1']

      if (lowestNum > tempNum.join('')) {
        // '4231' > '231'
        lowestNum = tempNum.join(''); // lowestNum = '231'
      }
    }
    digitSplit = lowestNum.split(''); //
  }

  return lowestNum;
}

console.log(solve(4231, 2) === '21');
