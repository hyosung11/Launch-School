/* Evens Times Last - 7 kyu

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

You probably misinterpreted what an "even index" is. It's about even positions in the array, and not even values. */

// function evenLast(numbers) {
//   if (numbers.length === 0) return 0;
//   let evenIndexNums = [];

//   numbers.forEach((number, idx) => {
//     if (idx % 2 === 0) evenIndexNums.push(number);
//   })

//   return evenIndexNums.reduce((sum, num) => sum + num, 0) * numbers[numbers.length - 1];
// }

function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx += 2) {
    sum += numbers[idx];
  }

  return sum * numbers[numbers.length - 1];
}

function evenLast(numbers) {
  if (numbers.length === 0) return 0;

  let evenIdxs = numbers.filter((num, idx) => idx % 2 === 0);
  let sum = evenIdxs.reduce((sum, num) => sum + num, 0);

  return sum * numbers[numbers.length - 1];
}
// console.log(evenLast([8]) === 8);
// console.log(1, 3, 5, 7, 8)
console.log(evenLast([]) === 0);
console.log(evenLast([2, 2, 2, 2]) === 8);
console.log(evenLast([2, 3, 4, 5]) === 30);
console.log(evenLast([2, 3, 4, 5, 6, 7]) === 84);