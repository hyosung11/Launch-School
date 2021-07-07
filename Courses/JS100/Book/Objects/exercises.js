// Objects Exercises

// 1. Given the following code, how can you access the name of the person?

// let person = {
//   name: 'Bob',
//   occupation: 'web developer',
//   hobbies: 'painting',
// };

// console.log(person.name); // => Bob
// console.log(person['name']); // => Bob

// 2. Which of the following values are valid keys for an object?

// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

// All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.

// 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

// my solution
// let familyArray = {
//   0: 'HyoSung',
//   1: 'Sohee',
//   2: 'Omi',
//   3: 'SungOh',
//   length: 4,
// };

// for (let i = 0; i < familyArray.length; i += 1) {
//   console.log(familyArray[i]);
// }

// // Launch School solution
// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.

// 4. Create an array from the keys of the object `obj` below, with all of the keys converted to uppercase. Your implementation must not mutate `obj`.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let objKeys = Object.keys(obj);
// let upperKeys = objKeys.map((key) => key.toUpperCase());

// console.log(upperKeys); // => [ 'B', 'A', 'C' ]
// console.log(obj); // => { b: 2, a: 1, c: 3 }

// The challenge of this exercise is to figure out how to iterate through the properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). The former involves a bit more work, so we use Object.keys() combined with map() to extract and uppercase the keys into an array.

// We can also use `forEach`, though it requires a bit more effort:

// let upperKeys = [];
// let objKeys = Object.keys(obj);
// objKeys.forEach(function(key) {
//   upperKeys.push(key.toUpperCase());
// });

// console.log(upperKeys); // => [ 'B', 'A', 'C' ]

// 5. Create a new object named `myObj` that uses `myProtoObj` as its prototype.

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// 6. Which of the following values are primitive values? Which are objects? Which are neither?

// "foo" - primitive
// 3.1415 - primitive
// [ 'a', 'b', 'c' ] - object (arrays are objects)
// false - primitive
// foo - identifier (Identifiers are used to name things that have values, such as variables and functions, but they are not values by themselves. Thus, they are neither primitive values nor objects.)
// function bar() { return "bar"; } - object (functions are objects)
// undefined - primitive
// { a: 1, b: 2 } - object

// 7. Add a `qux` property with value `3` to the `myObj` object we created in the previous exercise. Now, examine the following code snippets:

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// myObj.qux = 3;

// console.log(myObj);

// Snippet 1
// Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype. Thus, it logs:

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function (key) {
//   console.log(key);
// });
// => qux

// Snippet 2
// Both snippets iterate over the keys of myObj. However, for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj. Thus, snippet 2 logs:

// for (let key in myObj) {
//   console.log(key);
// }
// => qux
// => foo
// => bar

// We can add a conditional to snippet 2 to get the same output from for..in: all we need to do is check whether the key is myObj's own property:

// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// Solution
// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if(keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }

// console.log(objToCopy);

// I need to study this one a few times to understand it.

// 9. What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // => hi
console.log(qux); // => hello

// Solution
// The program logs 'hi' and 'hello' The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 16 logs hello: the original value of the qux variable.

// 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

[1, 2, ['a', ['b', false]], null, {}];

// Primitive Values
// 1, 2, 'a', 'b', false, null

// Objects
// [1, 2, ['a', ['b', false]], null, {}]
// ['a', ['b', false]]
// ['b', false]
// {}
