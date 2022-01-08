/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer. */

// function largestPairSum(numbers) {
//   let sum = 0;

//   for (let idx = 0; idx < numbers.length; idx++) {
//     for (let jdx = idx + 1; jdx <= numbers.length; jdx++) {
//       let num1 = numbers[idx];
//       let num2 = numbers[jdx];
//       let testNum = num1 + num2;
//       // console.log(testNum)
//       if (testNum > sum) sum = testNum;
//     }
//   }
//   console.log(sum)
//   return sum;
// }

// function largestPairSum(numbers) {
//   numbers.sort((a, b) => b - a);
//   return numbers[0] + numbers[1];
// }

function largestPairSum(numbers) {
  let [num1, num2] = numbers.sort((a, b) => b - a);
  return num1 + num2;
}
console.log(largestPairSum([10, 14, 2, 23, 19]) === 42);
console.log(largestPairSum([-100, -29, -24, -19, 19]) === 0);
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]) === 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]) === -18);