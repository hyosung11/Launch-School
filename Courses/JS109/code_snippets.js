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
// function first(array) {
//   return array[0];
// }

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// console.log(first([])); // undefined
// console.log(first()); // TypeError: Cannot read property '0' of undefined

/* ==================================================== */
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2); // => false

/* ==================================================== */
// let str1 = 'hello';
// let str2 = 'hello';

// console.log(str1 === str2); // => true

/* ==================================================== */
// let array1 = [2, 6, 4];
// let array2 = array1;

// console.log(array1 === array2); // => true

/* ==================================================== */
// let sum = add(3, 6); // 3 and 6 are arguments

// function add(left, right) { // left & right are parameters here
//   let sum = left + right;   // left & right are arguments here
//   return sum;
// }


// console.log(sum);

/* ==================================================== */
// let greeting = 'Hello';

// const test = (str) => {
//   str = str.concat(' World!');
//   return str;
// };

// console.log(test(greeting)); // => Hello World!
// console.log(greeting); // => Hello

/* ==================================================== */
// let greeting = ['Hello'];

// const test = (arr) => {
//   arr = arr.concat('World!');
//   return arr;
// };

// console.log(test(greeting)); // => [ 'Hello', 'World!' ]
// console.log(greeting); // => [ 'Hello' ]

/* ==================================================== */

// Q3 - Ainaa
// let array = [1, 2, undefined, {1:2}, , , null]
// console.log(array.length); // What will this line return and why?

/* ==================================================== */
// Q7 -Jeff
// What is the output and what concept is demonstrated?
// let animal = 'dog';

// const speak = (animal) => {
//   if (animal) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak();

/* The code logs `'Meow'`. This example illustrates variable shadowing, and that if no argument is passed to a function invocation, the default value is `undefined`. Here, the global variable `animal` is declared and initialized to the value of the string `'dog'` on line 1. On line 3, the function `speak` is declared with the parameter `animal` and the function `speak` is called on line 11 but does not pass an argument. The parameter `animal` shadows the global `animal` variable on line 1 making it inaccessible to the function `speak`. Since `speak` does not pass an argument, the value of the variable `animal` inside the function is `undefined`. When the `if` statement evaluates its condition with the value of `animal` it returns a falsy value of `undefined`. Thus, the `else` block executes and `'Meow'` is logged. */

/* ==================================================== */

/* Q9 - Kris */
// console.log(['ant', 'bear'].map((elem) => {
//   if (elem.length > 3) {
//     return elem;
//   }
// }));

/* Discussion

The code returns `[ undefined, 'bear' ]`. This example illustrates
implicit return value for the callback will be undefined
map gives you an array that is the same length as the array that called it
map transforms the calling array
how map works in general
- takes a callback
- passes each element as a callback
*/

/* ==================================================== */

// let dog = 'Bark';

// function dogCall() {
// 	dog = dog + dog;
// }

// console.log(dogCall(dog)); // => undefined
// console.log(dog); // BarkBark

/* The code logs `'BarkBark'`. This example illustrates variable scope, specifically that inner scope has access to outer scoped variables. Here, on line 1, the global variable `dog` is initialized to the string `'Bark'`. On line 3, the function `dogCall` is declared without a parameter and without a `return` statement. This means the function will return `undefined`. Meanwhile, the function `dogCall` is called on line 7 with the argument `dog` passed to the function. Within function `dogCall` the variable `dog` is reassigned via `dog = dog + dog` and its value is concatenated to the new value `'BarkBark'` and this is what's logged by `console.log(dog)` on the last line. */

/* ==================================================== */

// let dog = 'Bark';

// function dogCall(dog) {
// 	dog = dog + dog;
// }

// console.log(dogCall(dog)); // => undefined
// console.log(dog); // Bark

/* The code logs `'Bark``. This example illustrates variable scope and variable shadowing. Here, the global variable `dog` is declared and initialized to the string `'Bark'` on line 1. The function `dogCall` is declared with the parameter `dog` on line 3. The parameter `dog` shadows the global variable `dog` making it inaccessible within the function. Since the function `dogCall` does not have an explicit `return` statement, it will return `undefined` when called on line 7. On the last line, the `console.log(dog)` method only has access to the global variable `dog` on line 1, and its value `'Bark'` is logged. */

/* ==================================================== */

//Breakdown this function.

// function penultimate(words) {
//   let wordsArray = words.split(" ");
//   console.log(wordsArray)
//   return wordsArray[wordsArray.length - 2];
// };

// console.log(penultimate("I have three pairs of green soccer shoes."));

/* The function `penultimate` accepts one parameter `words`. Within `penultimate` the local variable `wordsArray` is declared and initialized to the value of `words.split(" ")` which converts `words` into an array of elements separated by the space delimiter. Finally, the line `return wordsArray[wordsArray.length - 2]` returns the second to last element of `wordsArray` because of zero-based indexing. */

/* ==================================================== */

// function func(number) {
//   console.log(number);
// }

// let test = 5;

// func(test);

/* The code logs `5`. This example illustrates pass by value of a primitive numeric value into a function. Here, the function `func` is declared on line 1 with the parameter `number`. `func` is called on line 6 with the variable `test` passed as an argument. On line 5 the global variable `test` is declared and initialized to the number `5`. The `console.log(number)` method on line 2 logs the value of `test` which is `5`. */

/* ==================================================== */

// function func(arr) {
//   console.log(arr)
// }

// let test = ['hello'];

// func(test);

/* The code logs `['hello']`. This example illustrates pass by reference. Here, the function `func` is declared with the parameter `arr` on line 1. The global variable `test` is declared and initialized to reference the array `['hello']`. The function `func` is called on line 7 and passes in `test` as it argument. At this point `test` and `arr` point to the same array in memory. Thus when the `console.log(arr)` method runs on line 2, it logs `['hello']`.

/* ==================================================== */

// What will happen when we run this code?
// let a = 'Hello';

// function changeValue(a) {
//   // `a` local variable to changeValue
//   a = 'Goodbye';
// }

// console.log(changeValue(a)); // => undefined
// console.log(a); // => 'Hello'

/* This code logs `'Hello'`. This example illustrates variable scoping rules and variable shadowing in JavaScript. Here, the global variable `a` is declared and initialized to the string `'Hello'` on line 1. The function `changeValue` is declared with the parameter `a` on line 3. The parameter `a` shadows the global variable `a` because they share the same name and makes the global variable `a` inaccessible within the function. `changeValue` is called on line 6 with the `a` passed as an argument, but because `changeValue` lacks a `return` statement, the function returns `undefined`. The `console.log(a)` method only has access to the global variable `a` and it is this variable's value that is logged which is `'Hello'`.

/* ==================================================== */

// What will happen when we run this code?
// let a = ['Hello'];

// function changeValue(a) {
//   a[0] = 'Goodbye';
// }

// console.log(changeValue(a)); // => undefined
// console.log(a); // => [ 'Goodbye' ]

// let a = ['Hello'];

// function changeValue(a) {
//   a[0] = 'Goodbye';
// }

// changeValue(a);
// console.log(a);

/* The code logs `[ 'Goodbye' ]`. This example illustrates pass by reference. Here, the global variable `a` is declared and initialized to reference the array `['Hello']` which is an object value on line 1. The function `changeValue` is declared on line 3 with the parameter `a`. The function `changeValue` is called and `a` is passed as an argument on line 6. When `a` is passed to `changeValue` it is passed as a reference to `[‘Hello’]`, so within function `changeValue` when the value of `a` is reassigned via `a[0] = 'Goodbye'` the array referenced by the global variable `a` is mutated. Thus, when the `console.log(a)` method executes on the last line it logs `[ 'Goodbye' ]` instead of `[ 'Hello' ]`.

Because `a` references an array which is an object value it is passed by reference. So within function `changeValue` when the value of `a` is changed via `a[0] = 'Goodbye'' this mutates the array referenced by the global `a`. Thus, when the `console.log(a)` method executes on the last line it logs `['Goodbye']` instead of `['Hello']`.

/* ==================================================== */

// function change(param) {
//   param += ' greeting';
//   console.log(param);
//   return param;
// }

// let greeting = 'hello';
// change(greeting);

// console.log(greeting);

/* ==================================================== */

console.log([0, 1, 4].filter((num) => num)); // => [ 1, 4 ]