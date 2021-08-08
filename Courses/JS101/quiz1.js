// a = 3;
// leta = 3;

 /* Question 3

The following code runs to completion, but it doesn't always work right. It should display the message on line 6 roughly half the time you run the program, and the message on line 8 the other half. However, as written, it always shows the message on line 6.
*/

// let a = 2;
// let b = Math.floor(Math.random() * 2);
// console.log(b);
// a *= b;

// if ((a = 2)) {
//   console.log('The value of `a` is two.');
// } else {
//   console.log('The value of `a` is NOT two.');
// }

 /* Question 7

Given the following pseudocode, which code implementation below most closely matches it? Note that all of the code snippets solve the problem as stated correctly, though not necessarily with identical results. We're looking for the solution that most closely matches the pseudocode.
*/

// Question 9

// let string = '1.23a'

// let num1 = Number(string);
// let num2 = parseInt(string);

// console.log(num1);

// Question 10

// let n = 1;
// console.log(n == '1');
// n === '1';
// n = '1';

// console.log(n);

// Q 11

// Q 19
// let foo = 1;
// function bar() {
//   let xyz = 3;
//   const qux = 5;
//   return qux;
// }

// const yam = function () {};
// bar();
// console.log('Done');

// Q 20
// let foo = 1;

// function bar() {
//   let foo = 2;
//   console.log(foo); // logs 2
// }

// bar();

// Q 21
// function bar() {
//   let foo = 2;
//   console.log(foo); // logs 2
// }

// let foo = 1;
// bar();

// Q 23
// function foo1(a) {
//   return 2 * a;
// }

// let foo2 = function (a) {
//   return 2 * a;
// };

// const foo3 = (a) => 2 * a;

// // create a random integer between 0 and 9
// let randomNumber = Math.floor(10 * Math.random());

// console.log(foo1(randomNumber));
// console.log(foo2(randomNumber));
// console.log(foo3(randomNumber));

//  Q 26
// function volume(height, width, depth) {
//   let result = height * width * depth;
//   console.log(result);
//   return result;
// }

// console.log(volume(1, 2, 3));

// function foo() {
//   return { qux: 'xyzzy' };
// }

// console.log(foo());

//  Q24
// function foo(a) {
//   return [a, a, a];
// }

// console.log(foo(5));

function foo() {
  return [1, 2, 3];
}

console.log(foo());