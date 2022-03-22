/* JS120 - Object Oriented JavaScript > OO Basics: Classes > Name the Constructor

Name the Constructor

Update the following code so that, instead of logging the values, each statement logs the name of the constructor to which it belongs. */

// console.log('Hello');
// console.log([1, 2, 3]);
// console.log({ name: 'Srdjan' });

// Expected output:

// String;
// Array;
// Object;

// Solution

// console.log('Hello'.constructor.name);
// console.log([1, 2, 3].constructor.name);
// console.log({ name: 'Srdjan' }.constructor.name);

/* Discussion

The `constructor` property returns a reference to the `Object` constructor function that created the instance object. This constructor function has access to the `name` property which returns the function's name as specified when it was created. */

let printConstructor = (value) => value.constructor.name;

console.log(printConstructor('Hello'));
console.log(printConstructor([1, 2, 3]));
console.log(printConstructor({ name: 'Srdjan' }));
console.log(printConstructor(1)); // Number