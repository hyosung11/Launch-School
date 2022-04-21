// What is a collaborator object
// A collaborator object is an object that connects different objects together. In OOP, it allows classes to communicate with each other

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }
// }

// class Shelter {
//   constructor() {
//     this.pets = [];
//   }
// }

// let laurent = new Person('Laurent');
// let shelter = new Shelter();
// laurent.pets.push(new Cat('Plunky'));
// shelter.pets.push(new Cat('Fluffy'));

// laurent.pets.push(shelter.pets.splice(0, 1));

// console.log(laurent.pets);
// console.log(shelter.pets);

// let a = { foo: 1, };
// let b = { foo: 2, };

// Object.setPrototypeOf(b, a); 
// let c = Object.create(b);    

// c.foo = 3;
// b;                       // Explain why this line returns { foo: 2 } instead of { foo: 3 }
// console.log(c.hasOwnProperty('foo')); // What does this line return and why?

// // What does Line 8 and Line 9 return? Why? What concept does this illustrate?

// /* What will the following code log to the console? Explain why it logs that value. */
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

// console.log(baz.foo + qux.foo);

// // What will the following code output? What concept does this code snippet demonstrate?

// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName);

// // If you said it log `NaN`, you're correct. It is tempting to say that the code will log "Rick Sanchez" to the console, but that's not correct. 

// Anywhere outside a function, the keyword `this` is bound to the global object. If the keyword is used inside a function, then its value depends on how the function was invoked.

// Since `window.firstName` and `window.lastName` (if you're using a browser) are not defined, the operation being performed here is `undefined + undefined` which results in `fullName` having the value `NaN`.

// What will the following code output?

// message = 'Hello from the global scope!';
function deliverMessage() { console.log(this.message) };
// deliverMessage();

let foo = { message: 'Hello from the function scope!' };
foo.deliverMessage = deliverMessage;
console.log(foo);
foo.deliverMessage();

// What does `line 3` log to the console? Explain with precision and sufficient detail, paying attention to explain how the `call()` method works.

function logNum() { 
  console.log(this.num);
}

let obj = { 
  num: 42,
};

logNum.call(obj); // logs ?

// Take a look at the following code snippet. What does line 9 and line 10 log to the console?

let foo = { a: 1, b: 2 };

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add(foo)); // 'abcdef'

console.log(bar.add.call(foo)); // 3

let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs? 42

// What does the following code log to the console?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

let args = [arg1, arg2, arg3, arg4];

foo.apply(obj, args);
foo.call(obj, arg1, arg2, arg3, arg4);

// What will the following code output?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);
console.log(foo()); // NaN
console.log(bar()); // 5

let positivity = { message: 'JavaScript makes sense!' };
let negativity = { message: 'JavaScript makes no sense!' };

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

/* This code will log `JavaScript makes sense!`. The invocation of `negativity.logMessage()` on line 11 references the variable `bar` whose return value is the `foo` function whose explicit execution context is bound to the `positivity` object. */

// Explain why line 17 logs 'Good morning!' whereas line 18 logs 'undefined'? What concepts does this code snippet demonstrate?

let greeter = {
  'early': 'Good morning!',
  'late': 'Good night.',

  morning: function() {
    let morningGreet = () => {
      console.log(this.early);
    }
    morningGreet();
  },

  night: () => {
    console.log(this.late);
  },
};
  
greeter.morning(); // logs 'Good morning!'
greeter.night();   // logs 'undefined'

/* 

Arrow functions take the context of the surrounding function. So when `greeter.morning` is invoked, `this.early` references the `early` property on the `greeter` object. 

When an arrow function is used as a method on an object it's surrounding context is the global object. So when `greeter.night` is called, the `night` method looks for the `late` property on the global object but since it doesn't exist there, it returns `undefined`.

*/

// What does this code output and why?

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/* This code outputs a `undefined undefined is a undefined`. */