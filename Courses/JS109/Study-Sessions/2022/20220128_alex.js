/* Solution to Integer Reduction - 6 kyu */

// function solve(number, size) {
//   let digits = String(number).split('');

//   while (digits.length > String(number).length - size) {
//     let tempArray = [];

//     for (let idx = 0; idx < digits.length; idx++) {
//       let digitsCopy = digits.slice();
//       digitsCopy.splice(idx, 1);
//       tempArray.push(digitsCopy.join(''));
//     }

//     let lowest = tempArray[0];

//     for (let idx = 0; idx < tempArray.length; idx++) {
//       if (Number(tempArray[idx]) < Number(lowest)) lowest = tempArray[idx];
//     }

//     digits = lowest.split('');
//   }

//   return digits.join('');
// }

// console.log(solve(123056, 3)); // === '056');
// console.log(solve(123056, 4)); // === '05');

// console.log(solve(123056, 1) === '12056');
// console.log(solve(123056, 2) === '1056');
// console.log(solve(123056, 3) === '056');
// console.log(solve(123056, 4) === '05');
// console.log(solve(1284569, 1) === '124569');
// console.log(solve(1284569, 2) === '12456');
// console.log(solve(1284569, 3) === '1245');
// console.log(solve(1284569, 4) === '124');

/* Anti Array Edabit

Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

All tests will include only two different elements.

Examples

isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true

isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true

isAntiArray([3.14, True, 3.14], [3.14, False, 3.14]) ➞ false

PROBLEM
- input two arrays
- output: boolean

Rules
- return true if two arrays are opposites
- return false if not
- each array must contain the same two unique elements
- occurrences of a are swapped with b in the opposite array
- if either input array is empty return false
- the array's must be the same length and greater than 1

EXAMPLES
- done

DATA STRUCTURE
- input two arrays
- intermediary; array
- output boolean

ALGORITHM
- input array1 and array2
- if length of array2 does not equal length of array1 or the length of array2 is less than 2, return false
- initialize `a` to the first element in array1
- if every element in array1 === a, return false
- initialize `b` to null
- iterate through array1
  - if element at idx does not equal `a`
    `b` equals element
- map array1 so that a is replaced by b and b is replaced by a
-iterate through array2 - if value of element at every index equals value of mapped array at every index, return true */

// function isAntiArray(array1, array2) {
//   if (array2.length !== array1.length || array2.length < 2) return false;

//   let a = array1[0];

//   if (array1.every(el => el === a)) return false;
//   let b = null;

//   for (let idx = 0; idx < array1.length; idx++) {
//     if (array1[idx] !== a) b = array1[idx];
//   }

//   let mappedArray = array1.map(el => el === a ? b : a);

//   if (array2.every((el, idx) => el === mappedArray[idx])) return true;
//   return false;
// }


console.log(isAntiArray([6.28, true, 6.28], [true, false, true])); // false
console.log(isAntiArray([3.14, true, 3.14], [true, '3.14', true])); // false
console.log(isAntiArray(['1', '0', '0', '1'], ['0', '1', '1', '0'])); // true
console.log(isAntiArray(['apples', 'bananas', 'bananas'], ['bananas', 'apples', 'apples'])); // true
console.log(isAntiArray([3.14, true, 3.14], [false, 3.14, 3.14])); // false
console.log(isAntiArray([3.14, true, 3.14], [true, 3.14, true])); // true
console.log(isAntiArray([3.14, true, 3.14], [true, '3.14', true])); // false
console.log(isAntiArray([], [])); // false
console.log(isAntiArray([3.14], [3.14])); // false
console.log(isAntiArray([3.14], [false])); // false
console.log(isAntiArray([3.14, true], [3.14])); // false
console.log(isAntiArray([3.14], [3.14, true])); // false
console.log(isAntiArray([6.28, true, 6.28], [true, false, true])); // false
console.log(isAntiArray(['int', 'str'], ['str', 'int'])); // true
console.log(isAntiArray([3.14, true, 3.14], [3.14, true, 3.14])); // false);
console.log(isAntiArray([121, 'float', 'float', 'float', 121, 'float'], ['float', 121, 121, 121, 'float', 121])); // true