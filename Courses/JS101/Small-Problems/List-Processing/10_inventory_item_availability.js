/* JS101 - Small Problems > List Processing > 10. Inventory Item Availability

Inventory Item Availability

Building on the previous exercise, write a function that returns `true` or `false` based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory `item` and a list of `transactions`. The function should return `true` only if the sum of the `quantity` values of the `item`'s transactions is greater than zero. Notice that there is a `movement` property in each transaction object. A `movement` value of `'out'` will decrease the `item`'s `quantity`.

You may (and should) use the `transactionsFor` function from the previous exercise.

ALGORITHM
1. Invoke the transactionsFor function that takes two parameters, the inventory item ID and an array
2. (This returns a filtered array of the items)
3. declare currentInventory = 0
4. Loop through the filtered array
  - If the movement key === 'in' add the quantity to currentInventory
  - If the movement key === 'out' subtract the quantity from currentInventory
5. return currentInventory > 0

*/

let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter((inventory) => inventory.id === inventoryItem);
}

// function isItemAvailable(inventoryItem, transactions) {
//   let filteredArray = transactionsFor(inventoryItem, transactions);
//   let currentInventory = 0;

//   for (let idx = 0; idx < filteredArray.length; idx += 1) {
//     let obj = filteredArray[idx];
//     if (obj.movement === 'in') {
//       currentInventory += obj.quantity;
//     } else {
//       currentInventory -= obj.quantity;
//     }
//   }
//   return currentInventory > 0;
// }

// Launch School
function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);
  return quantity > 0;
}


// Examples:
console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true

/* Discussion

The solution first uses the `transactionsFor` function to create a filtered list containing only the transactions related to the specified inventory `item`. The solution then computes the sum by using a reducing strategy.

The callback function passed to the `Array.prototype.reduce` method takes two arguments: a `sum` integer and a `transaction` object. The solution initializes `sum` to `0` because if it weren't it would be implicitly set to the first element, which is an object (i.e., `{ id: 101, movement: 'in', quantity: 5 }`). Consequently, the return value of the callback won't be an accumulation of the quantity values. For each `transaction` object, if the value of movement is `'in'`, the solution increments `sum` by the value of `transaction.quantity`; otherwise, `sum` is decremented by that value.

The solution stores the result of this reduction in the `quantity` variable. If `quantity` is greater than `0`, the `isItemAvailable` function will return `true`; otherwise it will return `false`. */