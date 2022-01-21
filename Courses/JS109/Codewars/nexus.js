/* Find the Nexus of the Codewars Universe - 6 kyu

Not to brag, but I recently became the nexus of the Codewars universe! My honor and my rank were the same number. I cried a little.

Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is closest or equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

Example:

         rank    honor
users = {  1  =>  93,
          10  =>  55,
          15  =>  30,
          20  =>  19,    <--- nexus
          23  =>  11,
          30  =>   2 }

PROBLEM
- input: object
- output: number

Rules
- return the rank of the user whose rank is closest or equal to his honor
- if no exact user has a rank/honor match return the rank of the user who comes closet
- if several users come closest, return the one with the lowest rank

EXAMPLES
- {"1":3,"3":3,"5":3} => 3


DATA STRUCTURE
-in: object
-between: Object.keys(arr), number
-out: key name (number string)


ALGO
input: object
-create `sorted variable and set equal to Object.keys(obj), but sort in descending order of key coerced to number
-create nexus variable and set to sorted[0]
-iterate through keys
  -if (Math.abs(Number(key) - obj[key]) <=  Math.abs(Number(nexus) - obj[nexus])), nexus = key
-return nexus
*/

// function nexus(obj) {
//   let sorted = Object.keys(obj).sort((a, b) => Number(b) - Number(a));
//   let nexus = sorted[0];

//   for (idx in sorted) { // ['5', '3', '1']
//     let key = sorted[idx];
//     if (Math.abs(Number(key) - obj[key]) <=  Math.abs(Number(nexus) - obj[nexus])) {
//       nexus = key;
//     }
//   }
//   return Number(nexus);
// }

// console.log(nexus({ 1: 3, 3: 3, 5: 3 })); // === 3);
// console.log(nexus({ 1: 3, 3: 3, 5: 3 }) === 3);

// // Elaine's Version
// function nexus(users) {
//   const ranks = Object.keys(users);
//   const honors = Object.values(users);
//   const diffArr = [];
//   for (let i = 0; i < ranks.length; i++) {
//     diffArr.push(Math.abs(ranks[i] - honors[i]));
//   }
//   const smallest = Math.min(...diffArr);
//   return Number(ranks[diffArr.indexOf(smallest)]);
// }

/* Algo
- input object
- initialize `sorted` to an array of the return values of sorting the keys of the object in descending order
- create `nexus` variable and set it to the first index position of `sorted`
- iterate through `sorted`
  - if value at the idx - object's value at key is less than or equal to nexus - object's value at the nexus
    - reassign nexus to value at the idx
- return nexus

*/
// function nexus(users) {
//   let sorted = Object.keys(users).sort((a, b) => Number(b) - Number(a));
//   // console.log(sorted) => [ '5', '3', '1' ]
//   let nexus = sorted[0];

//   for (let idx = 0; idx < sorted.length; idx++) {
//     if (Math.abs(Number(sorted[idx]) - users[sorted[idx]]) <= Math.abs(Number(nexus)) - users[nexus]) {
//       nexus = sorted[idx];
//     }
//   }

//   return Number(nexus);
// }

/* Algo
- input `users` object
- create `ranks` array from the keys of `users`
- create `honors` array from values of `users`
- create diffArr and set to empty array
- iterate through `ranks`
  - append the difference between ranks and honors to `diffArr`
- find the smallest difference in `diffArr`
- return the rank from `ranks` of the user with the smallest difference from `diffArr` */

function nexus(users) {
  let ranks = Object.keys(users);
  console.log(ranks);
  let honors = Object.values(users);
  let differences = [];

  // `for..in` iterates over the indexes => in as in indexes
  // `for..of` iterates over the values => of as in of values
  for (let idx in ranks) {
    differences.push(Math.abs(ranks[idx] - honors[idx]));
  }

  let smallest = Math.min(...differences);
  return Number(ranks[differences.indexOf(smallest)]);
}

console.log(nexus({ 1: 3, 3: 3, 5: 3 })); // === 3);
console.log(nexus({ 1: 3, 3: 3, 5: 3 }) === 3);