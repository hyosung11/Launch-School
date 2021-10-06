// 1.
// function appendTo(str, otherStr) {
//   for (let index = 0; index < otherStr.length; ++index) {
//     str += otherStr[index];
//   }

//   return str;
// }

// console.log(appendTo('Omi ', 'SungOh'));

// 2.
// function appendTo(str, otherStr) {
//   return str + otherStr;
// }

// console.log(appendTo('Omi & ', 'SungOh'));

// 3.
// let a = 'Hello';

// if (a) {
//   console.log('Hello is truthy');
// } else {
//   console.log('Hello is falsy');
// }

// let person = {
//   name: 'SungOh',
//   age: 6,
//   height: '46 inches',
// };

// for (let prop in person) {
//   console.log(person[prop]);
// }

// let person = {
//   name: 'Bob',
//   age: 30,
//   height: '6 ft',
// };

// let personKeys = Object.keys(person);
// console.log(personKeys); // => [ 'name', 'age', 'height' ]
// personKeys.forEach((key) => {
//   console.log(person[key]);
// });

// let person = { name: 'Bob', age: 30, height: '6ft' };

// console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// What will the following code output?

// let str1 = 'hello there';
// let str2 = str1;
// str2 = 'goodbye!';
// console.log(str1);

// let str1 = 'Hello';
// let str2 = 'World!'
// console.log(str1.concat(' Beautiful ', 'Strange ', str2)); // => Hello Beautiful Strange World!

// function capitalize(str) {
//  return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capitalize('pete')); // => 'Pete'

// let a = 1; // outer scope variable

// function logA() {
//   console.log(a); // => 1
//   a += 1; // a is reassigned to a new value
// }

// console.log(logA()); // undefined
// console.log(a); // => 2 'a' was reassigned in the inner scope

// Examples:

// 1. outer blocks cannot access variables from inner scope
// if (true) {
//   let a = 'foo'
// }

// console.log(a); // ReferenceError: a is not defined

// 2. inner blocks can access variables from outer scope
// let a = 'foo';

// if (true) {
//   console.log(a); // => 'foo'
// }

// // 3.
// function aFunc() {
//   let a = 'foo';

//   if (true) {
//     let b = 'bar';
//     console.log(a); // => 'foo'

//     if (true) {
//       let c = 'baz';
//     }

//     console.log(a); // => 'foo'
//     console.log(b); // => 'bar'
//     console.log(c); // => ReferenceError: c is not defined
//   }

//   console.log(a); // => 'foo'
//   console.log(b); // ReferenceError
//   console.log(c); // ReferenceError
// }

// aFunc();

// let obj = { a: 1 };
// obj = { b: 2 };
// console.log(obj.c = 3);
// console.log(obj);

// let greeting = ['Hello'];

// const test = arr => {
//   arr = ['ByeBye'];
//   arr.push('World');
//   return arr;
// };

// console.log(test(greeting)); // => [ 'ByeBye', 'World' ]
// console.log(greeting); // => [ 'Hello' ]

for (let i = 0; i < 5; i += 1) {
  greeting = "Hello";
  break;
}

console.log(greeting); // Hello