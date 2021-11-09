/* JS101 - Small Problems > List Processing > 3. Multiply All Pairs

Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
- input: two array arguments
- output: new array

Identify rules
- start with two arrays of numbers
- multiply numbers in first array with numbers in second array
- find all combinations of number pairs between the two arrays
- sort the returned array in ascending numerical order

EXAMPLES / TEST CASES
[2, 4], [4, 3, 1, 2] =>
2 x 1 = 2
2 x 2 = 4
4 x 1 = 4
2 x 3 = 6
2 x 4 = 8
4 x 2 = 8
4 x 3 = 12
4 X 4 = 16

Edge Cases?
- no empty arrays

DATA STRUCTURE
- input: two arrays
- intermediary: array
- output: new array

ALGORITHM
- initialize `result` array to empty array
- iterate through first array
  - iterate through second array
    - multiply elements in first array by elements in the second array
  - push into `result` array
- sort array in ascending numerical order

CODE
Implementation of Algorithm
- test code while programming */

function multiplyAllPairs(array1, array2) {
  let result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

// Example:
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/* Discussion

The solution uses the iteration list processing strategy of because it is an efficient way of performing an action on each element in each array, and then updating the value of the `result` array with the result of each action. Together, the nested `Array.prototype.forEach` loops get all combinations of number pairs from the two arrays. The inner `forEach` loop multiplies the outer `number1` by the inner `number2`, then pushes the product of the pair to the `result` array.

After the iteration finishes, the solution uses the `Array.prototype.sort` method to sort the values of the result array from lowest to highest, then returns the result. */