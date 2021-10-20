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

// for (let i = 0; i < 5; i += 1) {
//   greeting = "Hello";
//   break;
// }

// console.log(greeting); // Hello

// Example 1 - Variable Shadowing
// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo); // => logs 'bar'

// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"

// console.log(str.substring(5, 3));
//  => 'il'

// Comparing Arguments and Parameters
// function add(left, right) { // left & right are parameters here
//   let sum = left + right;   // left & right are arguments here
//   return sum;
// }

// let sum = add(3, 6); // 3 and 6 are arguments
// console.log(sum);    // logs 9 to the console

// function say(words) {
//   // function body
//   console.log(words)
// }

// say("hello"); // => logs 'hello'

/* ======================= */
// let greeting = ['Hello'];

// const test = (arr) => {
//   // console.log(arr);
//   arr = ['ByeBye'];
//   arr.push('World');
//   return arr;
// };

// console.log(test(greeting));
// console.log(greeting);

/* ======================= */
// let name = 'nina';

// function outer() {
//   let name = 'jill';

//   function inner() {
//     return name[0].toUpperCase() + name.slice(1);
//   }

//   return inner();
// }

// console.log(outer()); // => 'Jill'
// console.log(name); // => 'nina'

/* ======================= */
// let a = 1;

// function doit(a) {
//   console.log(a);
// }

// doit(3); // => 3
// console.log(a); // => 1

/* ======================= */
// let firstName = 'John';

// const getName = (name) => {
//   console.log(name.concat(' Doe'));
//   console.log(name = name.toLowerCase());
//   return name;
// };

// console.log(getName(firstName));
// console.log(firstName); // => John

/* ======================= */
// let name = 'nina';

// function outer() {
//   let name = 'jill';

//   function inner() {
//     return name[0].toUpperCase() + name.slice(1);
//     console.log(name);
//   }

//   return inner();
// }

// console.log(outer()); // => Jill
// console.log(name); // => nina

/* ======================= */
// function changeName(name) {
//   name = "bob";
// }

// function anotherFunction() {
//   let name = "jim";
//   changeName(name);
//   console.log(name); //=> jim
// }

// console.log(anotherFunction()); // => undefined

/* ======================= */
// let animal = "dog";

// const speak = animal => {
//   console.log(animal); // => undefined
//   if (animal) {
//     console.log("Bark");
//   } else {
//     console.log("Meow"); // => Meow
//   }
// };

// speak();

/* ======================= */
// let numArray = [1, [2], 3];

// function passByValue(arr) { /*This line we have pass-by-reference, b/c an array is passed in when called*/

//   arr.forEach(num => { /*This line we have pass-by-value for index 0, pass-by-reference for index 1, then back to pass-by-value for index 2*/
//     typeof num === 'object' ? num[0] += 1 : num += 1;
//     console.log(num);
//   });
// }

// passByValue(numArray); // => logs 2, [3], 4 respectively

// console.log(numArray); // => [1, [3], 3]

/* ======================= */
// let a = 1; // outer scope variable

// function logA() {
//   console.log(a); // => 1
//   a += 1; // a is reassigned to a new value
// }

// logA(); // => returns `undefined`
// console.log(a) // => 2 because 'a' was reassigned in the inner scope

/* ======================= */
// function aFunc() {
//   let a = 1;
// }

// console.log(aFunc()); // => returns `undefined`
// console.log(a); // ReferenceError: a is not defined

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

/* This code logs `Not Empty`. This example illustrates truthiness in JavaScript. Here, the function `isArrayEmpty()` is called on line 9 with an empty array `[]` as an argument. The empty array is passed into the `if` statement and is evaluated as a truthy value. Thus, the `if` block executes and `Not Empty` is logged to the console. */

// What will be printed to the console and why?
// ['kim', 'joe', 'sam'].forEach((name) => {
//   console.log(`${name} ${name}`);
// });

// variable shadowing
// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach((name) => {
//   console.log(`${name} ${name}`);
// });

// fix variable shadowing
let name = 'johnson';

['kim', 'joe', 'sam'].forEach((firstName) => {
  console.log(`${firstName} ${name}`);
});
/* ======================= */
// let arr = [1, 2, 3, 4, 5, 6, 7];
// //arr.forEach(elem => console.log(elem)); // 1, 2, 3, 4, 5, 6, 7
// // arr.forEach(elem => {
// //   if (elem < 3) {
// //     arr.push(100);
// //   }
// //   console.log(elem);
// // }); //
// arr.forEach(elem => {
//   arr.splice(0, 1);
//   console.log(elem);
// }); // 1, 3, 5, 7

/* ======================= */
// let result = ['a', 'b', 'c'].filter(function(item) {
//   console.log(item);
// });

// console.log(result); // []

// let result = ['a', 'b', 'c'].filter(item => {
//   console.log(item);
// });

// console.log(result); // []

/* ======================= */
// let result = [1, 2, 3, 4, 5].forEach(num => num + 1);
// console.log(result); // undefined

// `filter` returns the elements (doesn't change them)
// let result = [1, 2, 3, 4, 5].filter(num => num + 1);
// console.log(result); // [1, 2, 3, 4, 5]

// let result = [1, 2, 3, 4, 5].map(num => num + 1);
// console.log(result); // [2, 3, 4, 5, 6]

/* ======================= */
// let colors = ['green', 'blue', 'red'];
// let result = colors.forEach(word => word.toUpperCase());
// console.log(result); // undefined

// let colors = ['green', 'blue', 'red'];
// let result = colors.filter(word => word.toUpperCase());
// console.log(result); // [ 'green', 'blue', 'red' ]

// let colors = ['green', 'blue', 'red'];
// let result = colors.map(word => word.toUpperCase());
// console.log(result); // ['GREEN', 'BLUE', 'RED']

/* ======================= */
// const obj = { a: 'able', b: 'baker', c: 'charley' };
// let result = Object.values(obj).map(value => value.toUpperCase());
// console.log(result);// => [ 'ABLE', 'BAKER', 'CHARLEY' ]

/* Discussion

`Object.keys` returns an array that contains all the key values from the object passed as an argument.

`Object.values` returns an array that contains all of the property values from the object as an argument.

`Object.entries` returns an array of arrays where each sub-array contains one of the key/value pairs from the object.

Only `Object.values` returns the correct array needed by map. */

/* ================================== */
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

/* ================================== */
// let arr = [340, 15, 1, 3400];

// console.log(arr.sort()); // => [ 1, 15, 340, 3400 ]

/* Answer
`Array.prototype.sort` arranges the values in the array by comparing the values of each element as strings. The resulting array contains all of the elements arranged in ascending lexicographic order based on UTF-16 codepoints.  If two strings have the same value up to the length of the shorter string, `sort` positions the shorter string before the longer one. */

/* ====================================================
Given the following code, select the code snippets that return the value for the object property key `three`. */

const ARR = [
  { one: '1', two: 2 },
  [{ four: 5, three: 6 }, 'three'],
  'three',
  { 2: 'two', 3: 'three' },
];

console.log(ARR[1][0].three); //=> 6
console.log(ARR[1][0]['three']); // => 6

/* Answer

There is only one object property key named `three`: it occurs inside the array at `ARR[1] as part of the object at `ARR[1][0]`. To retrieve the value associated with that key (`6`), we can write `ARR[1][0]['three']` or ARR[1][0].three`. */

/* ====================================================
Considering the following code, what is the return value of the final line? */

function evenValues(array) {
  let evens = [];

  array.forEach((value) => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

/* This code will return `[4, 4, 12]`. This example illustrates how a function mutates an array while iterating over it. The `array.shift` method removes the first element from the array during each iteration. Because of the mutation, `value` gets set to `1`, then `4`, then `4` again, then `5`, then `9`, and finally `12`. Of those values, the even numbers are `[4, 4, 12]`. The other values get discarded as we iterate, so we never get to test them. */
