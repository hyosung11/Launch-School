/* Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1


Problem
input: number
output: number

rules:
for a given number, return the next highest number that is comprised of all of the digits of the original number but in a different order
-if the input number is that largest possible combination of those digits, return -1
-single digit numbers always return -1
-if all digits are the same number, return -1

Examples
-covered

Data Structures
-number
-string/array
-num

ALGO
-input: num
-assign variable arr to num converted to string and split into array
-use helper function to iterate through array to generate all possible permutations - sort into descending order
-if input num equals first element in array, return -1
-otherwise, return element at the [input number - 1] index position

helper function:
-input array

513

513 531 135 153 

ALGO
-find the largest combo w a helper function
-while the incremented number is less than or equal to the largest combo of the original number:
  -starting at number + 1, increment by 1 until the largest combo equals the largest combo of original number
*/

function nextBiggerNum(number) {
  let testNumber = number + 1;

  while (testNumber <= largest(number)) {
    if (largest(testNumber) === largest(number)) return testNumber;
    testNumber += 1;
  }

  return -1;
}

function largest(digits) {
  return Number(
    String(digits)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true

// function nextBiggerNum(123) {
//   let testInt = number + 1; // 124
//   let maxNumber = getLargest(number); // 321

//   while (testInt <= maxNumber) { // 124 < 321
//     let maxTestInt = getLargest(testInt) // 421
//     if (maxTestInt === maxNumber) return // 31 21
//     testInt;
//     testInt += 1; // 14
//   }

//   return -1;
// }
