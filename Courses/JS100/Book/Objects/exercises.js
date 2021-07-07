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
let familyArray = {
  0: 'HyoSung',
  1: 'Sohee',
  2: 'Omi',
  3: 'SungOh',
  length: 4,
};

for (let i = 0; i < familyArray.length; i += 1) {
  console.log(familyArray[i]);
}

// Launch School solution
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.