/* JS101 - Small Problems > List Processing > Inventory Item Availability

Inventory Item Availability

Building on the previous exercise, write a function that returns `true` or `false` based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

ALGORITHM
1. Invoke the transactionsFor function that takes two parameters, the inventory item ID and an array
2. (This returns a filtered array of the items)
3. declare currentInventory = 0
4. Loop through the filtered array
  - If the movement key === 'in' add the quantity to currentInventory
  - If the movement key === 'out' subtract the quantity from currentInventory
5. return currentInventory > 0


Examples: */

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter((inventory) => inventory.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let filteredArray = transactionsFor(inventoryItem, transactions);
  let currentInventory = 0;

  for (let index = 0; index < filteredArray.length; index += 1) {
    let obj = filteredArray[index];
    if (obj.movement === 'in') {
      currentInventory += obj.quantity;
    } else {
      currentInventory -= obj.quantity;
    }
  }
  return currentInventory > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true