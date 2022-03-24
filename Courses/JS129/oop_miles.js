let pipe = {
  name: 'This is not a Pipe',
  dateCreated: 1929,
  declareName: function() {
    console.log('This is not a Pipe');
  },
};

console.log(pipe.hasOwnProperty('name'));

// let man = {
//   name: 'The Son of Man',
//   dateCreated: 1946,
// }

// console.log(pipe.constructor); // [Function: Object]

// console.log(pipe.__proto__ === Object.prototype); // true
// console.log(Object.getPrototypeOf(pipe) === Object.prototype); // true

// console.log(pipe.hasOwnProperty('constructor')); // false
// console.log(Object.prototype.hasOwnProperty('constructor')); // true

/* Focus on Object.prototype */

// console.log(Object.prototype.hasOwnProperty('constructor')); // true
// console.log(Object.prototype.constructor); // [Function: Object]
// console.log(Object.prototype); // [Object: null prototype] {}

// console.log(Object.getPrototypeOf(Object.prototype) === null); // true
// console.log(Object.getPrototypeOf(Object) === Function.prototype); // true

// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); //true
// console.log(Object.getPrototypeOf(Function) === Function.prototype); //true

// console.log(Function.prototype.constructor); // [Function: Function]