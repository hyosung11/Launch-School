/* Grocery List

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

PROBLEM
- input: a nested array
- output: an array

Rules
- return a one-dimensional array where each fruit name appears as many times as its number in the original array

EXAMPLE
- see below

DATA STRUCTURE
- input: nested array
- intermediary: array
- output: one-dimensional array

ALGORITHM
- input: nested array of names and their values
- initialize `result` to empty array
- iterate through input array
  - initialize `count` to 0
  - while count is less than quantity of fruit (at array[index][1])
    - add fruit name to result array
  - increment count
- return `result` array of names of items as many times as their values in the original nested array */

// function buyFruit(fruitList) {
//   let result = [];

//   for (let idx = 0; idx < fruitList.length; idx++) {
//     let count = 1;
//     while (count <= fruitList[idx][1]) {
//       result.push(fruitList[idx][0]);
//       count += 1;
//     }
//   }

//   return result;
// }
// // Example:
// console.log(
//   buyFruit([
//     ['apple', 3],
//     ['orange', 1],
//     ['banana', 2],
//   ])
// );

// function buyFruit(fruitList) {
//   let result = [];

//   for (let idx = 0; idx < fruitList.length; idx++) {
//     while (fruitList[idx][1] > 0) {
//       result.push(fruitList[idx][0]);
//       fruitList[idx][1] -= 1;
//     }
//   }

//   return result;
// }
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/* Inventory Item Transactions

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

*/

// function transactionsFor(itemID, transactions) {
//   return transactions.filter(obj => obj.id === itemID);
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true

// function transactionsFor(itemID, transactions) {
//   return transactions.filter((obj) => obj.id === itemID);
// }

// function isItemAvailable(itemID, transactions) {
//   let sum = 0;
//   transactionsFor(itemID, transactions).forEach((obj) => {
//     obj.movement === 'in' ? (sum += obj.quantity) : (sum -= obj.quantity);
//   });
//   return sum > 0;
// }

// console.log(isItemAvailable(101, transactions)); // false
// console.log(isItemAvailable(103, transactions)); // false
// console.log(isItemAvailable(105, transactions)); // true

// function isItemAvailable(item, transactions) {
//   let quantity = transactionsFor(item, transactions).reduce(
//     (sum, transaction) => {
//       if (transaction.movement === 'in') {
//         return sum + transaction.quantity;
//       } else {
//         return sum - transaction.quantity;
//       }
//     },
//     0
//   );
//   return quantity > 0;
// }

/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

    the first and last characters remain in original place for each word
    characters between the first and last characters must be sorted alphabetically
    punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

    words are separated by single spaces
    only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia

ALGORITHM
- input string
- intialize `punctuation` to "-',.";
- initialize `result` to empty string
- initialize `noSpecials` string`
- iterate through string
  - if char is included in punctuation string, continue
  - else noSpecials += char
- initialize sortedNoSpecialsSlice to noSpecials.slice(1, noSpecials.length - 1).sort()
- iterate original string
  - if char at first or last index position, return char
  - if char included in the punctuation string return char
  - otherwise, add at in
- return new string

noSpecials[0] + noSpecials.slice(1, noSpecials.length - 1).sort() + noSpecials[noSpecials.length - 1]
*/

console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')
console.log(scrambleWords('i') === 'i') // 'Must handle single character words')
console.log(scrambleWords('me') === 'me'); // 'Must handle 2 character words'
console.log(scrambleWords('you') === 'you'); // 'Must handle 3 character words')
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started'

console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')
console.log(scrambleWords('i') === 'i') // 'Must handle single character words')
console.log(scrambleWords('me') === 'me'); // 'Must handle 2 character words'
console.log(scrambleWords('you') === 'you'); // 'Must handle 3 character words')

console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')
