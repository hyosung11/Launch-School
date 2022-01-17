/* Simple Fun #79: Delete a Digit - 6 kyu

Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
- For n = 152, the output should be 52;
- For n = 1001, the output should be 101.

Input/Output
- [input] integer n
- Constraints: 10 ≤ n ≤ 1000000.
- [output] an integer

/*
input:
output:
Rules / Requirements
- given an integer `n`, find the maximal number you can obtain by deleting exactly one digit of the given number
Examples / Test Cases
- For n = 152, the output should be 52;
- For n = 1001, the output should be 101.
Questions / Implicit Reqs
- will the input always be provided? -- yes
- will the input always be an integer greater than 0? -- yes
Data Structure
- array -- iteration methods, HOF

Algorithm
- create numbers and init to an empty array
- create numString and init to the input number converted to a string
- iterate over the numString and on each round of iteration:
  - create nums and init to converting numString into an array of characters
  - splice the current index from numString
  - join numString into a str, convert it to a number and push it to numbers
- once the loop terminates:
- return the largest number in numbers
*/

function deleteDigit(num) {
  let numbers = [];
  let digits = String(num).split('');

  for (let idx = 0; idx < digits.length; idx++) {
    let arrayOfDigits = digits.slice();
    arrayOfDigits.splice(idx, 1);
    numbers.push(Number(arrayOfDigits.join('')));
  }

  return Math.max(...numbers);
}

function deleteDigit(number) {
  let numbers = [];
  let numString = String(number);

  for (let idx = 0; idx < numString.length; idx++) {
    let nums = numString.split('');
    console.log(nums)
    nums.splice(idx, 1);
    numbers.push(Number(nums.join('')));
    console.log(numbers)
  }

  return Math.max(...numbers);
}

function deleteDigit(number) {
  let possibleNums = [];
  for (let index = 0; index < String(number).length; index++) {
    let currNum = String(number).split('');
    currNum.splice(index, 1);
    possibleNums.push(Number(currNum.join('')));
  }
  return Math.max(...possibleNums);
};

/*
INPUT: number
OUPUT: number

RULES
- find the maximal digit: the maximum digit you can get by deleting exactly 1 number
- you can't change the position of the numbers

EXAMPLE
1001 -> 1001
152  -> 52
385  -> 85

ALGORITHM
- create a variable `numbers` and set to emtpy array
- iterate over the number digits
  - convert the current input number into a string
  - convert the number string into an array of strings
  - remove the number at the current index
  - join the remaning numbers
  - convert the remaining numbers string into a number
  - append the number into the numbers result array
- get the largest number from numbers array
- return the largest number
*/


function deleteDigit(n) {
  const numberString = String(n);

  const numbers = Array.from(numberString).map((_, index) => {
    let digits = numberString.split('')
    digits.splice(index, 1);
    digits = digits.join('')
    return Number(digits)
  });

  return Math.max(...numbers);
}


function deleteDigit(n) {
  // split the input into an array
  let nArray = String(n).split('');
  // declare an array to hold all possible numbers
  let holdingArr = [];

  // iterate over input array
  for (let idx = 0; idx < nArray.length; idx++) {
    // create a shallow copy of the input array
    let copyArr = nArray.slice();
    // splice out the current index
    copyArr.splice(idx, 1);
    // join the number together and push it to the holding array
    holdingArr.push(Number(copyArr.join('')));
  }
  // return the highest value in holding array
  return Math.max(...holdingArr);
}

console.log(deleteDigit(1001)) //=== 101);

// console.log(deleteDigit(152));
// console.log(deleteDigit(152) === 52);
// console.log(deleteDigit(1001) === 101);
// console.log(deleteDigit(10) === 1);

// function deleteDigit(num) {
//   let digits = String(num).split('');
//   digits = digits.map(Number);
//   let min = Math.min(...digits);
//   console.log(min);
//   // console.log(min)
//   // digits = digits.replace(min, '');
//   console.log(digits);
//   // digits = digits.sort((a, b) => a - b);

//   // return Number(digits.slice(0, digits.length - 1).join(''));
// }

function deleteDigit(num) {
  let strOfNum = String(num);
  let holdingArr = [];

  for (let idx = 0; idx < strOfNum.length; idx += 1) {
    let testArr = strOfNum.split('');
    testArr.splice(idx, 1);
    // console.log(testArr);
    holdingArr.push(testArr.join(''));
    // strOfNum = String(num);
  }

  return Number(holdingArr.sort((a, b) => b - a)[0]);
}

function deleteDigit(n) {
  let arr = [];
  n.toString()
    .split('')
    .forEach((e, i) =>
      arr.push(n.toString().slice(0, i) + n.toString().slice(i + 1))
    );
  return Math.max(...arr);
}

function deleteDigit(n) {
  //let r = Array(String(n).length).fill(String(n).split(''));
  return Math.max(
    ...Array(String(n).length)
      .fill(String(n))
      .map((s, i) => Number(s.replace(s[i], '')))
  );
}
