// [1, 2, 3].forEach((number) => {
//   console.log(number);
// });

// // 1
// // 2
// // 3

// [1, 2, 3].forEach((number, idx) => {
//   console.log(`${idx}: ${number}`);
// });

// logs
// 0: 1
// 1: 2
// 2: 3

// 'abcd'.split('').forEach(char => {
//   console.log(char);
// });

// logs
// a
// b
// c
// d

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// let produceValues = Object.values(produce);

// produceValues.forEach(value => {
//   console.log(value);
// });
// logs
// Fruit
// Vegetable
// Fruit
// Vegetable

// let produceKey = Object.keys(produce);
// produceKey.forEach(key => {
//   console.log(key);
// });

// apple
// carrot
// pear
// broccoli

// let produceKeyValues = Object.entries(produce);

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;

//   console.log(`${key} is a ${value}`);
// });

// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

// Array.prototype.filter

// let numbers = [1, 2, 3];
// let oddNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 === 1) {
//     oddNumbers.push(numbers[index]);
//   }
// }

// console.log(oddNumbers); // => [1, 3]

let oddNumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

console.log(oddNumbers); // => [1, 3]