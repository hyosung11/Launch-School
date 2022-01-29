/* Anti Array

Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

All tests will include only two different elements.

PROBLEM
- input array1 and array2
- output boolean

Rules
- return a boolean
  - true if swapped elements from array1 are opposites in array2
  - false otherwise
- each array can contain only element a and element b
- if either array contains another element other than a or b, return false
- if element a is in first index position in array1, it must not be in the first index position in array2 and vice versa
- implicit that both arrays must be the same length
- if either array is empty, return false

EXAMPLES
- true --> ['1', '0', '0', '1'] and ['0', '1', '1', '0']
- false --> [3.14, true, 3.14] and [false, 3.14, 3.14]

DATA STRUCTURE
- input two arrays
- intermediary: arrays (map?)
- output: boolean

ALGORITHM
- input array1 and array2
- if array1 length does not equal array2 length, return false
- if array2 length is less than 2, return false
- initialize `a` to first element in array1
- initialize `b` to null
- iterate through array1
  - if element at idx is not equal to `a`
    - reassign `b` to element at idx
- initialize `mappedArray` to transform element a to element b and vice versa
- if every element in array2 is equal to the element at the same index in the mappedArray return true
- return false
*/

function isAntiArray(array1, array2) {
  if (array1.length !== array2.length || array2.length < 2) return false;

  let a = array1[0];
  let b = null;

  for (element in array1) {
    if (array1[element] !== a) b = array1[element];
  }

  let mappedArray = array1.map(el => el === a ? b : a);

  if (array2.every((el, idx) => el === mappedArray[idx])) return true;
  return false;
}

// Guard Clauses Test Cases
console.log(isAntiArray([], []) === false); // true
console.log(isAntiArray([3.14], [3.14]) === false); // true
console.log(isAntiArray([3.14], [false]) === false); // true
console.log(isAntiArray([3.14, true], [3.14]) === false); // true
console.log(isAntiArray([3.14], [3.14, true]) === false); // true

console.log(isAntiArray([3.14, 3.14, 3.14], [true, 3.14, true]) === false); // true

// console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) === true);
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) === true);
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) === false);
console.log(isAntiArray([6.28, true, 6.28], [true, false, true]) === false);
console.log(isAntiArray(['int', 'str'], ['str', 'int']) === true);
console.log(isAntiArray([3.14, true, 3.14], [3.14, true, 3.14]) === false);
console.log(isAntiArray([121, 'float', 'float', 'float', 121, 'float'], ['float', 121, 121, 121, 'float', 121]) === true);

