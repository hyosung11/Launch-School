// Why is the context lost in this situation? Fix it.

let shirt = {
  a: 'Hello',
  b: 'World',
  foo: function () {
    console.log(this.a + this.b);
  },
};

shirt.foo(); //'Hello World'
let someVar = shirt.foo;
someVar(); // ?

shirt.foo(); //'Hello World'
let someVar = shirt.foo.bind(shirt);
someVar.call(shirt); // ?
let newSomeVar = someVar.bind(shirt); // ?
newSomeVar();
someVar();

// someVar.call(shirt)

/* On line 13, `someVar()` is invoked 

We assign `someVar` to shirt.foo's value, a function. When we call this function as
a regular function invocation on the global object, JavaScript will use
the global object as the implicit execution context, therefore `this` references the global object.. As there are no properties 'a' or 'b' on the
global object, we will log'NaN' ('undefined' + 'undefined').*/

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings(); // context is john
let foo = john.greetings; // Strips context
foo();

function MyClass(a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
  this.f = f;
}

let func = new MyClass(1, 2, 3, 4, 5, 6);

console.log(Object.getOwnPropertyNames(func)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(Object.getOwnPropertyNames(MyClass)); // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]

// Why is the context lost in the following situation? Fix it.
function printHello(func) {
  func();
}

let shirt = {
  a : 'Hello',
  b : 'World',
  foo : function (){
    printHello(function () {
      console.log(this.a + this.b)
      })
  }
}

shirt.foo();

/*

We lose the context in this code because we invoke the anonymous function defined on line 10 as a regular function on line 3. Therefore, the execution context is implicitly set to the global object.

On line 16, we invoke `shirt.foo()` defined on line 9. This method then invokes the `printHello`
function which takes a function as an argument (higher-order function). `printHello` will then take the passed-in function and run it, as defined on line 3. The passed-in function is invoked as a regular function, therefore the execution context will be set to the global object, and the `this` keyword in the `console.log` statement will refer to the global object. Because `this.a + this.b` evaluates to `undefined + undefined` this will return `NaN`. */

function printHello(func, context) {
  func.call(context);
}

let shirt = {
  a: 'Hello',
  b: 'World',
  foo: function () {
    printHello(function () {
      console.log(this.a + this.b);
    }, this);
  },
};

shirt.foo();

/* Code Snippets from Elaine

1. What do Snippet 1 and Snippet 2 output to the console, and why? Be precise */

// Snippet 1
// let foo = { bar: 1, xyz: 3 };
// let baz = Object.create(foo);
// baz.qux = "Why not?";

// console.log(Object.keys(baz).toString());

// Snippet 2
let foo = { bar: 1, xyz: 3 };
let baz = Object.create(foo);
baz.qux = "Why not?";

for (let prop in baz) {
  console.log(prop);
}

/* Snippet 1 outputs the string `qux` to the console. Snippet 2 outputs `qux`, `bar`, and `xyz` respectively to the console.

The property `qux` is created on the object that `baz` references. On line 4, `foo` is

*/

// What does this code snippet log to the console? Explain why and be precise. What concept does this demonstrate?

let protoObj = {'a': 1, 'b': 2};
let obj = Object.create(protoObj);
protoObj.b = 5;
console.log(obj.b); // What does this log to the console and why?

/*
This code snippet will log 5 to the console. It illustrates the fact that any change to a prototype object will be reflected on the object.

On line 3, we declare `protoObj`and asign it an objest with the properties `a`and `b`. On line 4, we create a new object and assign its `[[Prototype]]` property to the passed in object, here `protoObj`. Therefore, the object will inherit any subsequent change made to the prototype. On line 5, we change the property `b` of `protoObj` to the value 5 and, on line 6, we log that value 5 that is inherited from the reasignment on line 5.
*/

//An important consideration when dealing with prototypes is that objects hold a reference to their prototype objects. If the object's prototype changes in some way, the changes are observable in the inheriting object as well.

/* 2b. Objects hold a Reference to their Prototype Objects

What will the following code log to the console? Explain why it logs that value. */

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo); // What is logged to the console and why?

/* 
This code is also very similar to problem 1. This time, though, we assign the value 2 to qux.foo. Since baz doesn't have its "own" copy of the foo property, JavaScript uses the prototype chain to look up baz.foo, and it finds the foo property in qux. The result is equivalent to 2 + 2, or 4.

An important consideration when dealing with prototypes is that objects hold a reference to their prototype objects. If the object's prototype changes in some way, the changes are observable in the inheriting object as well.
*/