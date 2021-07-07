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

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let objKeys = Object.keys(obj);
// let upperKeys = objKeys.map((key) => key.toUpperCase());

// console.log(upperKeys); // => [ 'B', 'A', 'C' ]
// console.log(obj); // => { b: 2, a: 1, c: 3 }

// The challenge of this exercise is to figure out how to iterate through the properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). The former involves a bit more work, so we use Object.keys() combined with map() to extract and uppercase the keys into an array.

// We can also use `forEach`, though it requires a bit more effort:

let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});

// console.log(upperKeys); // => [ 'B', 'A', 'C' ]

// 5. Create a new object named `myObj` that uses `myProtoObj` as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// 6. Which of the following values are primitive values? Which are objects? Which are neither?

// "foo" - primitive
// 3.1415 - primitive
// [ 'a', 'b', 'c' ] - object (arrays are objects)
// false - primitive
// foo - identifier (Identifiers are used to name things that have values, such as variables and functions, but they are not values by themselves. Thus, they are neither primitive values nor objects.)
// function bar() { return "bar"; } - object (functions are objects)
// undefined - primitive
// { a: 1, b: 2 } - object


