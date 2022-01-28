/* Number of Boomerangs

Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]

Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

Examples

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

Notes

[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last. */

function countBoomerangs(array) {
  let boomerangs = 0;

  for (let idx = 0; idx < array.length; idx++) {
    let first = (array[idx] + array[idx + 1]);
    let second = (array[idx + 1] + array[idx + 2]);
    if (first === second && array[idx] !== array[idx + 1]) boomerangs += 1;

  // }

  // array.forEach((num, idx) => {
  //   if (num[idx] + num[idx + 1] === num[idx + 1] + num[idx + 2] && num[idx] !== num[idx + 1]) boomerangs += 1;
  // });

  return boomerangs;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) //=== 2);

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])  === 2);
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]) === 1);
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]) === 0);
console.log(countBoomerangs([5, 9, 5, 9, 5]) === 3);
console.log(countBoomerangs([4, 4, 4, 8, 4, 8, 4]) === 3);
console.log(countBoomerangs([2, 2, 2, 2, 2, 2, 3]) === 0);
console.log(countBoomerangs([2, 2, 2, 2, 3, 2, 3]) === 2);
console.log(countBoomerangs([1, 2, 1, 1, 1, 2, 1]) === 2);
console.log(countBoomerangs([5, 1, 1, 1, 1, 4, 1]) === 1);
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) === 3);
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]) === 5);
console.log(countBoomerangs([5, 5, 5]) === 0);