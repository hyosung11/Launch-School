/* JS101 - Small Problems > Easy 5 > 2. Combining Arrays

Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays. */

// Alex's Solution
function union(array1, array2) {
  let returnedArray = array1.slice();

  array2.forEach(element => {
    if (!returnedArray.includes(element)) {
      returnedArray.push(element);
    }
  })

  return returnedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]