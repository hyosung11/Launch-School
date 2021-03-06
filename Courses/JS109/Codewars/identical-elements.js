/* Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements). */


function duplicateElements(array1, array2) {
  return array1.some(num => array2.includes(num));
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]) === true);
console.log(duplicateElements([9, 8, 7], [8, 1, 3]) === true);
console.log(duplicateElements([1, 2, 3, 4, 5], [6, 6, 7, 8, 9]) === false);