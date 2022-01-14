/* Mean Square Error - 5 kyu

Complete the function that
- accepts two integer arrays of equal length
- compares the value each member in one array to the corresponding member in the other
- squares the absolute value difference between those two values
- and returns the average of those squared absolute value difference between each member pair.

Examples:
[1, 2, 3], [4, 5, 6] -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]  -->   1   because (1 + 1) / 2

PROBLEM
- input: array1 and array2
- output: number

Rules
- input two arrays of integers of equal length
- compare the value of each number at the same index position in the other array
- square the absolute value difference between the two values
- return the average of those squared absolute value differences between each pair
- number can be negative

EXAMPLES
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4

DATA STRUCTURE
- input: two arrays
- intermediary: arrays
- output: number

ALGORITHM
- input two arrays
- find the absolute difference between values of the numbers at the same index position in each array
- square this value
- divide this value by the length of the array
- return number */

function solution(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx] - array2[idx])
  }

  // console.log(result);
  result = result.map(num => num * num).reduce((total, num) => total + num, 0) / array1.length;
  return result;
}

// console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])) // 16.5)
// console.log(solution([1, 2, 3], [4, 5, 6]));

console.log(solution([1, 2, 3], [4, 5, 6]) === 9);
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]) === 16.5);
console.log(solution([0, -1], [-1, 0]) === 1);

function solution(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx] - array2[idx]);
  }

  return (
    result.map((num) => num * num).reduce((total, num) => total + num, 0) /
    array1.length
  );
};

// input: two arrays of integers
// output: number
// problem: the number to return is the average of the absolute difference between
// each pair
// assumption: both input arrays are of the same length
// algorithm:
// LOOP through each element and calculate the difference,
// square the difference
// sum the differences
// divide by the length of the array

var solution = function(firstArray, secondArray) {
  return firstArray.map((num, idx) => {
    return (num - secondArray[idx])**2;
  }).reduce((acc, val) => acc + val) / secondArray.length;
}


var solution = function (firstArray, secondArray) {
  // get a new array by mapping one of the input arrays with values based on the the differences, squared
  // absolute value isn't necessary since squaring will always return a positive number in this case
  let squaredDiffs = firstArray.map((num, idx) => {
    return (num - secondArray[idx]) ** 2;
  });

  // reduce the mapped array to a sum total and divide it by the array length to get the avg
  return (
    squaredDiffs.reduce((total, current) => total + current) /
    squaredDiffs.length
  );
};

/*
input: 2 arrays of integers ( same length )
output: integer 

overview:
- iterate over the array (either)
- at each corresponding index, find the difference between index in arr 1 and 2. square it.

-- take the squares, sum them / divide by the total number of values (length of 1 of the arrays)

*/

function solution(firstArray, secondArray) {
  return (
    firstArray
      .map((num, idx) => {
        return Math.abs(num - secondArray[idx]) ** 2;
      })
      .reduce((acc, sum) => acc + sum) / firstArray.length
  );
}