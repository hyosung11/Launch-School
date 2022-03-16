/* Constructors to make objects

factory functions

// // let object = {
// //   monkey: "yep";

// // }

// const OPERATIONS = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => num1 / num2,
// };

// let getOperation = operation => OPERATIONS[operation];

// let compute = function(operation, num1, num2) {
//   return operation(num1, num2);
// };

// // console.log(compute(getOperation('/', 18, 6)) === 3);
// // console.log(compute(getOperation('/', 18, 6))) //=== 3);

// // console.log(compute(getOperation('+'), 5, 9) === 14);

console.log(global.hasOwnProperty('global'));   // A: true
console.log(global.hasOwnProperty('foo'));      // B: true
console.log(global.hasOwnProperty('isFinite')); // C: true
console.log(global.hasOwnProperty('bar'));      // D: false
console.log(global.hasOwnProperty('xyz'));      // E: true
console.log(global.hasOwnProperty('console'));  // F: true
console.log(global.hasOwnProperty('log'));      // G: false
*/

function foo() {
  return `Hi ${this.a}`;
}

let name = {
  a: 'Michael',
};

console.log(foo.call(name));
