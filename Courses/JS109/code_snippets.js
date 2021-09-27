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

let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!';
console.log(str1);