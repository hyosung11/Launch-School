/* 6 kyu Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
- [7] should return 7, because it occurs 1 time (which is odd).
- [0] should return 0, because it occurs 1 time (which is odd).
- [1,1,2] should return 2, because it occurs 1 time (which is odd).
- [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
- [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

PROBLEM
- input: array of integers
- output: number of the integer that appears an odd number of times in the array

Rules
- return the integer that occurs an odd number of times in the input array

EXAMPLES
- [10] => 10 it occurs once (and only number)
- [1, 2, 3, 3, 2] =>  1

DATA STRUCTURE
- input: array of integers
- intermediary: object to collect integers and occurrences
- output: number of the integer that occurs an odd number of times

ALGORITHM
- input array of integers
- initialize `result` to empty object
- iterate through array
  - add number to array
  - if present in `result` increment value of number in `result` object
- iterate over the keys of `result` object
  - if value at the key is odd => `result[key]`
- return key as a number
*/

// function findOdd(numbers) {
//   let result = {};

//   numbers.forEach((number) => {
//     result[number] ? (result[number] += 1) : (result[number] = 1);
//   });

//   let oddCount = Object.entries(result).filter((keyVal) => {
//     if (keyVal[1] % 2 === 1) return keyVal;
//     // console.log(keyVal)
//   });
//   // console.log(oddCount); // [['5', 3]]
//   return Number(oddCount[0][0]);
// }

// function findOdd(numbers) {
//   let result = {};

//   numbers.forEach(num => {
//     result[num] ? result[num] += 1 : result[num] = 1;
//   });

//   for (let prop in result) {
//     // console.log(result);
//     // console.log(prop)
//     // console.log(result[prop])
//     if (result[prop] % 2 === 1) return Number(prop);
//   }
// }

// function findOdd(numbers) {
//   let result = {};

//   numbers.forEach(number => {
//     result[number] = result[number] + 1 || 1;
//   });

//   for (key in result) {
//     if (result[key] % 2 !== 0) return Number(key);
//   }
// }

// function findOdd(numbers) {
//   return numbers.find(item => numbers.filter(num => num === item).length % 2)
// }

// function findOdd(numbers) {
//   let result = {};

//   numbers.forEach(num => {
//     result[num] = result[num] + 1 || 1;
//   });

//   for (key in result) {
//     if (result[key] % 2 === 1) return Number(key);
//   }
// }

// function findOdd(numbers) {
//   numbers.sort();
//   console.log(numbers) 
//   if (numbers[0] !== numbers[1]) return numbers[0];
//   else {
//     numbers.splice(0, 2);
//   }
//   return findOdd(numbers);
// }

// function findOdd(numbers) {
//   let count = {};
//   numbers.map(num => count[num] ? count[num] += 1 : count[num] = 1);

//   return +(Object.keys(count).filter(num => count[num] % 2 === 1).join(''));
// }

function findOdd(numbers) {
  for (let int of numbers) {
    // console.log(int);
    // 5; 2
    // 4; 2
    // 3; 2
    // 2; 2
    // 1; 1
    // 5; 2
    // 4; 2
    // 3; 2
    // 2; 2
    // 10; 2
    // 10; 2
    let count = numbers.filter((num) => num === int).length;
    // console.log(count)

    if (count % 2 !== 0) return int;
  }
}

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]) === 1);
console.log(findOdd([10]) === 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]) === 10);
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) === 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) === -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) === 5);

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]) === 1);
