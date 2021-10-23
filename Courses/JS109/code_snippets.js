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
// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach((firstName) => {
//   console.log(`${firstName} ${name}`);
// });
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

// const ARR = [
//   { one: '1', two: 2 },
//   [{ four: 5, three: 6 }, 'three'],
//   'three',
//   { 2: 'two', 3: 'three' },
// ];

// console.log(ARR[1][0].three); //=> 6
// console.log(ARR[1][0]['three']); // => 6

/* Answer

There is only one object property key named `three`: it occurs inside the array at `ARR[1] as part of the object at `ARR[1][0]`. To retrieve the value associated with that key (`6`), we can write `ARR[1][0]['three']` or ARR[1][0].three`. */

/* ====================================================
Considering the following code, what is the return value of the final line? */

// function evenValues(array) {
//   let evens = [];

//   array.forEach((value) => {
//     if (value % 2 === 0) {
//       evens.push(value);
//     }
//     array.shift();
//   });

//   return evens;
// }

// evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

/* This code will return `[4, 4, 12]`. This example illustrates how a function mutates an array while iterating over it. The `array.shift` method removes the first element from the array during each iteration. Because of the mutation, `value` gets set to `1`, then `4`, then `4` again, then `5`, then `9`, and finally `12`. Of those values, the even numbers are `[4, 4, 12]`. The other values get discarded as we iterate, so we never get to test them. */

/* ==================================================== */
// let a = ['Hello'];

// function changeValue(a) {
//   a[0] = 'Goodbye';
// }

// changeValue(a);
// console.log(a); // => [ 'Goodbye' ]

/* ==================================================== */
// let arr1 = ['h', 'e', 'l', 'l', 'o'];

// console.log(arr1[6]); // => returns undefined
// console.log(arr1[-5]); // => returns undefined
// console.log(arr1[6] = arr1[6] + 1); // => returns NaN -> note that the sum of undefined and a number returns NaN
// console.log(arr1); // => ['h', 'e', 'l', 'l', 'o', <1 empty item>, NaN]

/* ==================================================== */
// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

/* The code logs `Not Empty`. This example illustrates truthiness in JavaScript. Here, function `isArrayEmpty` is declared on line 1 and invoked on line 9 with `[]` passed as an argument to the function. The `if` statement on line 2 accepts the variable `arr` as its condition whose value is `[]` and since an empty array `[]` evaluates as true, the `if` block executes and the `console.log('Not Empty')` method logs `Not Empty` to the console. */

/* ==================================================== */
// let hello = 'Hello, world!';

// function myFunc(hello) {
//   console.log(hello);
// }

// myFunc('goodbye'); // => goodbye

/* The code logs `goodbye`. This example illustrates variable scoping rules, specifically variable shadowing. Here, the global variable `hello` is declared and initialized to the String 'Hello, world!' on line 1. The function `myFunc` is declared on line 3 and invoked on line 7 with the string 'goodbye' passed as an argument. `myFunc` has the parameter `hello` which shares its name with the global variable `hello` on line 1. Because the two `hello` variables share the same name, the global `hello` is shadowed by the parameter `hello` making it inaccessible within `myFunc`. So when `console.log(hello)` is called on line 4, the value passed to it is the string `goodbye` from the call to `myFunc` and that is what gets logged. */

/* ==================================================== */
// [1, 2, 3].forEach((number) => {
//   console.log(number);
//   return 'abc';
// });

/* ==================================================== */
// Variables as Pointers
// let arr = [1, 2, 3];

// let a = arr;

// let b = arr;

// console.log(a);
// console.log(b);

// b[0] = '99';

// console.log(a);
// console.log(b);
// console.log(arr);

/* ==================================================== */
// console.log([0, 1, 4].filter((num) => num));
// => [ 1, 4 ] -> 0 not returned because it's a falsy value

/* ==================================================== */
// console.log(['ant', 'bear'].map((elem) => {
//   if (elem.length > 3) {
//     return elem;
//    }
// })); // => [ undefined, 'bear' ]

/* ==================================================== */
// console.log(['ant', 'bear'].filter((elem) => elem.length > 3));

/* ==================================================== */
// console.log([1, 2, 3].filter((num) => {
//   num + num;
// })); // => []

/* ==================================================== */
// console.log([1, 2, 3].filter((num) => {
//   return num + num;
// })); // => [ 1, 2, 3 ]

/* ==================================================== */
// console.log([1, 2, 3].filter(num => num + num)); // => [ 1, 2, 3 ]

/* ==================================================== */
// let animal = 'dog';

// const speak = (animal) => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak(); // Bark

/* The code logs `Bark`. This example demonstrates a) variable shadowing and b) if no arguments are passed to a function's parameters, the parameters are assigned the default value `undefined`. Here, the global variable `animal` is declared and initialized to the String 'dog' on line 1. The function `speak` is declared on line 3, and `speak` is called on line 11 without an argument. Invoking a function without an argument in JavaScript does not raise an error, instead the default value is `undefined`. On line 3, since the parameter `animal` shares the same name as the global variable `animal` on line 1, the `animal` parameter shadows the global `animal` variable making it inaccessible to `speak`. On line 4, the `if` statement strictly compares the value of `animal` to `undefined` and since `undefined` is the value of `animal` since it was passed to the function from the invocation of `speak` without an argument, it evaluates to true. The `if` block executes and `Bark` is logged to the console.

This program logs 'Bark' to the console. This code snippet demonstrates a) concepts of variable shadowing and b) if no arguments are passed to a function's parameters, the parameters are assigned the default value `undefined`. On line 11 we call the `speak()` function and we do not pass any arguments to the function. The `speak()` function has one parameter, `animal`, however as no arguments are passed to it, `animal` is assigned the default value `undefined`. The function definition of `speak()` creates a new function scope for local variables. Because the local function variable `animal` shares the same name as the global variable `animal` declared on line 1, variable shadowing prevents us from using the outer scoped variable. Therefore, on line 4 since `animal` contains the primitive value `undefined`, this results in the strict equality operator returning `true`, which is a truthy value. The `if` clause is then executed, and "Bark" is logged to the console. */

/* ==================================================== */
// What is logged and returned and why?
// let greeting = 'Hello';

// const test = (str) => {
//   str = str.concat(' World!');
//   return str;
// };

// console.log(test(greeting)); // => Hello World!
// console.log(greeting); // => Hello

/* The code logs `‘Hello’` and returns `‘Hello World!’` from the call to function `test`. This example illustrates that strings are immutable, primitive values that are passed by value into functions. Here, the global variable `greeting` is declared and initialized to the String `‘Hello’` on line 1. The function `test` is declared on line 3 and called on line 7 with the variable `greeting` passed as an argument. Within the function `test` the value of the variable `greeting` is concatenated via `str = str.concat(' World!’)` and the new value of `‘Hello World!’` is returned by the function. On line 9, the `console.log(greeting)` method logs the original value of `greeting` which is `‘Hello’` because the value of the string is immutable and unchanged. */

/* ==================================================== */
let b = 2;

function test(a) {
  a = b;
  return a;
}

console.log(test(5)); // 2
console.log(b); // 2
console.log(a); // ReferenceError: a is not defined