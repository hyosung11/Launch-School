/* JS101 - Small Problems > List Processing > Inventory Item Transactions

Inventory Item Transactions

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

PEDAC

PROBLEM
- Input: array of objects
- Output: array of fewer objects

Rules
- Filter through the passed array (transactions) for the elements in which the value of the key ID equals the passed ID number

EXAMPLES
- What about an inventory item ID not in the array?

DATA STRUCTURE
- input: array of objects
- output: array of objects

ALGORITHM
- Filter the array transactions for elements for which the ID key equals the ID argument
- Return the resulting array */

// Example:
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

// transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

// console.log(transactions[0]['id']);
console.log(transactionsFor(103, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/* Discussion

The shape of this problem is that of filtering. Given a list of inventory transactions, the solution selects only those that have a particular inventory item ID. The solution gets the relevant transactions by comparing `inventory.id` of each transaction to the value of the `inventoryItem parameter`. It keeps the transaction only if these two values are equal. */