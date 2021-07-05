function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// let sum = add(20, 45);
// console.log(sum); // => 65

// let difference = subtract(80, 10);
// console.log(difference); // => 70

// console.log(add(20, 45)); // => 65
// console.log(subtract(80, 10)); // => 70

function times(num1, num2) {
  return num1 * num2;
}

// console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// // 4550 == ((20 + 45) * (80 - 10))

// function times(num1, num2) {
//   return num1 * num2;
// }

// console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))

// verbose code

// let sum = add(20, 45);
// let difference = subtract(80, 10);
// let result = times(sum, difference);
// console.log(result);


add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560

console.log(add(subtract(80, 10), times(subtract(20, 6), add(30, 5))));