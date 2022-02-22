/* Create a function that takes a positive integer and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

PROBLEM
- input: integer
- output: number

Rule
- find the next largest number using the same digits of the input number
- if no bigger number can be composed, return -1;
- if digits all the same, return -1
if digits to left are bigger than digits to the right, return -1

DATA STRUCTURE
- input: number
- intermediary: string or array
- output: number

ALGORITHM

Approach 1
if number digits are in ascending order => smallest 135
S  M  L 135
S  L  M 153
M  S  L 315
M  L  S 351
L  S  M 513
L  M  S 531 
if number digits are in descending order => largest 531

0 1 2 7
0 1 7 2
0 2 1 7
0 2 7 1
0 7 1 2
0 7 2 1
1 0 2 7
1 0 7 2

- input a number
- convert number to string
- split `numberString` into digits
  - ['5', '1', '3'] => ['1', '3', '5']
  - initialize `compareDigits` to empty numberString
  - find all substrings in digits
  - sort substrings 
  - find the first substring greater than the input number
  - if that substring is greater than input number return the substring 
- return -1

Approach 2
Move small digit down
Move large digits up

Start from the right
  If last digit > one on the left, we switch
    If there are numbers on the right, we need to reorder them in ascending order

Approach 3
We add 1 to the number
Check if the number has the same digits as the original one
  ['1', '2']   ['2', '1']
  sort both arrays and see if their values are the same
  12 === 12

Examples
function nextBiggerNum(number) {
  let numberString = String(number).split('');
  let substrings = [];

  for (let idx = 0; idx < numberString.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= numberString.length; jdx += 1) {
      substrings.push(numberString.slice(idx, jdx))
    }
  }
}
*/

function nextBiggerNum(number) {
  // const getLargest = (digits) => {
  //   return Number(
  //     String(digits)
  //       .split('')
  //       .sort((a, b) => b - a)
  //       .join('')
  //   );
  // };

  let testInt = number + 1;
  let maxNumber = getLargest(number);

  while (testInt <= maxNumber) {
    // console.log(nextInt);
    let maxTestInt = getLargest(testInt);
    if (maxTestInt === maxNumber) return testInt;
    testInt += 1;
  }

  return -1;
}

function getLargest(digits) {
    return Number(
      String(digits)
        .split('')
        .sort((a, b) => b - a)
        .join('')
    );
  };

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true
