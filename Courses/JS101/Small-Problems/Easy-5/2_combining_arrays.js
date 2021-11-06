/* JS101 - Small Problems > Easy 5 > 2. Combining Arrays

Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output
- input: two arrays
- output: single array

Identify rules
- take all original values from two array and put them into a new, single array
- both arguments are arrays

EXAMPLES / TEST CASES

Examples:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Edge Cases?
- []?

DATA STRUCTURE
- input: two arrays
- intermediary: single array
- output: single array

ALGORITHM
Steps for converting input to output
- initialize `resultArray` to copy of array1
- check each element of array2 to see if copy exists in array1, if not add to `resultArray`
- return `resultArray`

CODE
Implementation of Algorithm
- test code while programming */

// function union(arr1, arr2) {
//   let unionArr = arr1.slice();

//   arr2.forEach(elem => {
//     if (!arr1.includes(elem)) {
//       unionArr.push(elem);
//     }
//   });

//   return unionArr;
// }

// Launch School
// Solution 1
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value); // [1, 3, 5, 6, 9]
    }
  });
}

function union(array1, array2) {
  let unionArray = [];
  copyNonDupsTo(unionArray, array1); // [], [1, 3, 5]
  copyNonDupsTo(unionArray, array2); // [], [3, 6, 9]
  return unionArray; // [1, 3, 5, 6, 9]
}

// Solution 2
// function copyNonDupsTo(resultArray, array) {
//   array.forEach(value => {
//     if (!resultArray.includes(value)) {
//       resultArray.push(value);
//     }
//   });
// }

// function union(...args) {
//   const newArray = [];

//   args.forEach(value => copyNonDupsTo(newArray, value));

//   return newArray;
// }

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3], [1, []])); // [ 1, 2, 3, [] ]

/* Discussion

Our solutions use the `copyNonDupsTo` function to copy elements from an array to a result array, without duplication. The two versions are identical. The function loops through the array it is copying, and appends each element to the result array, but only if that element is not already there.

Solution 1 adheres strictly to the exercise description, and constructs a new array from the two argument arrays. We simply call `copyNonDupsTo` for each of the two arrays.

Solution 2 provides a more general solution to the problem: it works properly with two array arguments, but also works with only one array, or with three or more arrays. To accomplish this, it makes use of the `args` rest parameter. The function simply iterates over the `args` array, and calls `copyNonDupsTo` for each element. */

// Alex's Solution
// function union(array1, array2) {
//   let returnedArray = array1.slice();

//   array2.forEach(element => {
//     if (!returnedArray.includes(element)) {
//       returnedArray.push(element);
//     }
//   });

//   return returnedArray;
// }

/* Bob Rodes

ES6's `Set` object makes this problem fairly simple, since its constructor automatically strips duplicate values. You just need to concatenate the two arrays, pass the result into the `Set` constructor, and deconstruct the result into an array. */

// function union(arr1, arr2) {
//   return [...new Set(arr1.concat(arr2))];
// }