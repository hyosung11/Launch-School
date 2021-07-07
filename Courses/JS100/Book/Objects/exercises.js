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