/* Reverse Only Letters for Michael

Mean Square Error - 5 kyu

Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.


[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

[10, 20, 10, 2]
[10, 25, 5, -2]
[0, 5, 5, 4] => [0, 25, 25, 16] / 4 = 16.5

PROBLEM
- input array1 and array2 of integers
- output number

Rules
- return a number that represents the average of squaring the difference between the values at the respective indexes of each array
- find the absolute difference between the values of the element at the index position in each array
- square those values
- sum those squared values
- divide by the length of the array

EXAMPLES
- see above

DATA STRUCTURE
- input two arrays
- intermediary: array (reduce)
- output: number

ALGORITHM
- input array1 and array2
- initialize `result` array to empty array
- iterate through array1
  - find the absolute difference between element at idx and the element at the same index in array2
  - append this value to result
- iterate through result array
  - square each element
  - sum the squares
  - divide by length of the array
- return `result` as a number

*/

function solution(array1, array2) {
  let result = [];

  for (let idx = 0; idx < array1.length; idx++) {
    result.push(Math.abs(array1[idx] - array2[idx])); // 1 - 4 => 3
  }

  return (
    result.map((num) => num * num).reduce((sum, num) => sum + num, 0) /
    result.length
  );

  //return result;
}

console.log(solution([1, 2, 3], [4, 5, 6])); //, 9)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); //, 16.5)
console.log(solution([0, -1], [-1, 0])); //, 1)
