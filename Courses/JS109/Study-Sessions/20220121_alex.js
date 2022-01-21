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

/* Triple Trouble - 6 kyu

Write a function

tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 

PROBLEM
input: nums
output: 1 or 0(Boolean)

rules:
- if num1 has three consec identical num and num2 has 2 consec identical of the same num, return 1
-otherwise, return false

EXAMPLES
- 1112, 122 => false 
- 666789, 12345667 => 666 66 => true

DATA STRUCTURE
- input two numbers
- intermediary: string
- output

ALGORITHM
- input num1, num2
- coerce num1 and num2 to strings
- iterate through num1
  - if char at idx is equal to idx + 1 AND char at idx is equal to idx + 2
    - iterate through num2
      - if char at jdx is equal to char at idx AND char at jdx + 1 is equal to char at idx, return `1`
  - otherwise return `0`
*/

function tripledouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  for (let idx = 0; idx < num1.length; idx++) {
    if (num1[idx] === num1[idx + 1] && num1[idx] === num1[idx + 2])

    for (let jdx = 0; jdx < num2.length; jdx++) {
      if (num2[jdx] === num1[idx] && num2[jdx + 1] === num1[idx]) return 1
    }
  }
  return 0
}

// console.log(tripledouble(451999277, 41177722899)) // === 1);
// console.log(tripledouble(1222345, 12345)) // === 0);
// console.log(tripledouble(12345, 12345)) // === 0);
// console.log(tripledouble(666789, 12345667)) // === 1);
// console.log(tripledouble(10560002, 100)) // === 1);
// console.log(tripledouble(1112, 122)) // === 0);

console.log(tripledouble(451999277, 41177722899) === 1);
console.log(tripledouble(1222345, 12345) === 0);
console.log(tripledouble(12345, 12345) === 0);
console.log(tripledouble(666789, 12345667) === 1);
console.log(tripledouble(10560002, 100) === 1);
console.log(tripledouble(1112, 122) === 0);

function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  for (let i = 0; i < num1.length; i++) {
    if (
      num1.match(num1[i] + num1[i] + num1[i]) &&
      num2.match(num1[i] + num1[i])
    ) {
      return 1;
    }
  }

  return 0;
}