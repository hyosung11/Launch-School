/* Format for answer
1. tell us what was logged
2. describe the concept
3. explain why with details */

/* What does this code log and why? */

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john
let foo = john.greetings; // Strips context
// console.log(foo) // [Function: greetings]
foo(); // context is now the global object

/* This code logs `hello, undefined undefined`.

One line 14, since we invoke `foo()` as a function, that sets the implicit execution context to the global object.

On line 11, we use method invocation on `greetings` which sets the implicit execution context to the calling object `john`. Then the value `hello, John Doe` will be logged to the console.

On line 12, we declare the `foo` variable and assign it to`john.greetings`. When we do this, we strip the execution context from the calling `john`.

Thus, when we call `foo` as a function on line 14, the `this` keyword is bound to the global object. The properties `firstName` and `lastName` do not exist on the global object.

/* Fix the code so that `foo()` logs `hello, John Doe`. Why does this work?*/

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

// john.greetings();         // context is john
let foo = john.greetings; // Strips context
// foo.call(john); 
console.log(foo)

/*
In order to set `john` as the explicit execution context,we invoke the `call` method and pass the `john` object as an argument in `foo.call(john)`.
*/

/* What is logged and why? */

function repeatThreeTimes(func, context) {
  func.call(context); 
  func.call(context);
  func.call(context);
}

function foo() { // --> runs through to line 18
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john); // goes to line 3
}

foo(); // --> line 9

/* This code logs

=> hello, undefined undefined
=> hello, undefined undefined
=> hello, undefined undefined

because the implicit execution context is the global object.

On line 18, we pass the greeting method defined on the john object into the function invocation of repeatThreeTimes and we assign the greeting method to the parameter func. Inside the body of repeatThreeTimes, we invoke func as a function which will now set the implicit execution context to be the global obect. When we invoke func as a function, the global object will look for properties firstName and lastName, which in turn will return both undefined. Thus logging, ...

hello, undefined undefined
hello, undefined undefined
hello, undefined undefined

In this example, we defined a new arguemnt, `context`,  in repeatThreeTimes. When we invoke repeatThreeTimes and pass the greeting method, and the john object, both values will be assgined to `func` and `context`. We can call the method `call` on the value stored in `func` and pass in the value stored in `context` which is the object john.

*/

 /* Describe polymorphism through inheritance and polymorphism through duck typing? */


class Animal {
  move() {}
}

class Fish extends Animal {
  move() {
    console.log("swimming");
  }
}

class Cat extends Animal {
  move() {
    console.log("walking");
  }
}

// Sponges and Corals don't have a separate move method - they don't move
class Sponge extends Animal {}
class Coral extends Animal {}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move());

/* 
For `Fish` objects, we call the `move` method from the `Fish` class, which enables a fish to swim. Likewise, a `Cat` object walks when we tell it to `move`. This is a simple example of polymorphism in which two different object types can respond to the same method call simply by **overriding** a method inherited from a superclass. In a sense, overriding methods like this is similar to duck-typing, a concept that we'll meet shortly. However, overriding is generally treated as an aspect of inheritance, so this is polymorphism through inheritance.
*/

let str = "abcde";
let arr = ["a", "b", "c", "d", "e"];

console.log(str.indexOf("c")); // 2
console.log(arr.indexOf("c")); // 2

/*
Duck typing is just a particular form of polymorphism — it's the ability for objects of completely unrelated types to respond to the same method invocation. A simple example of this in JS are Strings and Arrays. These types are unrelated(*), yet they can both respond to, say, the indexOf method:

overriding - same type different implementation of same method invocation

Inheritance-based polymorphism is the other form of polymorphism. It's exactly the same, but the objects are related through inheritance:

duck typing - different types responde to same method invocation
*/