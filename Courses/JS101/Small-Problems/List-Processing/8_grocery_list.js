/* JS101 - Small Problems > List Processing > 8. Grocery List

Grocery List

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas. */

function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }
  return result;
}

// Example:
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/* Discussion

To get the expected result, the solution makes use of two list processing strategies. The first is to transform the array elements into the expanded grocery list with each item repeated based on the quantity value (second element of each subarray). The second strategy is to flatten the array of arrays using a folding strategy, which flattens the array by consecutively concatenating each subarray together. The solution also makes use of a `repeat` helper function to facilitate the transformation of the original array's elements. */

// Emma Story
// function buyFruit(fruitList) {
//   return fruitList.reduce((list, [fruit, count]) => {
//     return list.concat(Array(count).fill(fruit));
//   }, []);
// }

// Bob Rodes
// const buyFruit = (fruitList) => {
//   return fruitList.map(([fruit, count]) => Array(count).fill(fruit)).flat();
// };

/* The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. */