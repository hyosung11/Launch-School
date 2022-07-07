/* Why is the context lost in the following situation? Fix it. */
function printHello(func) {
  func();
}

let shirt = {
  a: 'Hello',
  b: 'World',
  foo: function () {
    printHello(function () {
      console.log(this.a + this.b);
    });
  },
};

shirt.foo();

/* Describe the following object creation pattern and give an example: Factory function / object factories */

// A factory function is a function that returns a new object with a copy of all its states and behaviors.

function createCat(name) {
  return {
    name,
    miaouw () { console.log("Miaouw!!")},
  }
}

let fluffy = createCat("Fluffy");
fluffy.miaouw();
console.log(fluffy);

/* Describe the following object creation pattern and give an example: Constructors with prototypes (Pseudo-classical pattern) */

// The constructor pattern returns a new object using the `new` keyword; the use of the `new` keyword will set the prototype of the returned object to the constructor function prototype property. We will use this prototype property to store the object inherited methods.

function Cat(name) {
  this.name = name;
}

Cat.prototype.miaouw = function() {
  console.log("Miaouw!!!");
}

Cat.legs = 4;

Cat.printLegs = function() {
  console.log(`I have ${this.legs} legs.`);
}

let fluffy = new Cat("Fluffy");
fluffy.miaouw();
Cat.printLegs();
console.log(fluffy)

// Create a class named Greeting that has a single method named greet. The method should take a string argument, and it should print that argument to the console.

class Greeting {
  greet(string) {
    console.log(string);
  }
}

let greeter = new Greeting();
greeter.greet("Morning");

// Now, create two more classes that inherit from Greeting: one named Hello, and the other Goodbye. The Hello class should have a hi method that takes no arguments and logs "Hello". The Goodbye class should have a bye method that logs "Goodbye". Use the greet method from the Greeting class when implementing Hello and Goodbye; don't call console.log from either Hello or Goodbye. */

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

let sayHi = new Hello();
sayHi.hi();

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}

let sayBye = new Goodbye();
sayBye.bye();

// Create a class named Greeting that has a single method named greet. The method should take a string argument, and it should print that argument to the console.

class Greeting {
  greet(string) {
    console.log(string);
  }
}

let greeter = new Greeting();
greeter.greet("Morning");

// Now, create two more classes that inherit from Greeting: one named Hello, and the other Goodbye. The Hello class should have a hi method that takes no arguments and logs "Hello". The Goodbye class should have a bye method that logs "Goodbye". Use the greet method from the Greeting class when implementing Hello and Goodbye; don't call console.log from either Hello or Goodbye. */

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

let sayHi = new Hello();
sayHi.hi();

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}

let sayBye = new Goodbye();
sayBye.bye();

/* Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown: */

function assignProperty(obj, objProp, value) {
  // look for the property on the object
  // Object.keys(), for let in
  while (obj !== null) {
    if (obj.hasOwnProperty(objProp)) {
      obj[objProp] = value;
      return;
    } else {
      obj = Object.getPrototypeOf(obj);
    }
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

/*
assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
*/

/* What are scope safe constructors? Create one. */

// If a constructor function is used without the new keyword, it adds some property on the global scope. To prevent this, we can use a scope safe constructor that will correctly call the constructor in any situation (with or without the `new` keyword)

function Cat(name) {
  if (this === global) {
    return new Cat(name);
  }

  this.name = name;
}

let fluffy = new Cat("Fluffy");
console.log(fluffy);
let clunky = Cat("Clunky"); // creates a global.name property
console.log(clunky);

/* 11. Let say we want to have a `dog` object. We want `dog` to be able to have access to method `makeSound()` (`makeSound(){console.log('sound')}`), but we don't want to declare it on `dog`. How many ways do you know that can make it possible?
    
Use this to test your code:

// Constructor
function Dog() {}

Dog.prototype.makeSound = function () {
  console.log('sound');
}

let dog = new Dog();

// Class
class Dog {
  makeSound() {
    console.log('sound');
  }
}

let dog = new Dog();


let dogPrototype = {
  makeSound() {
    console.log('sound');
  },

  init() {
    return this;
  }
}
let dog = Object.create(dogPrototype).init();
*/

let dogPrototype = {
  makeSound() {
    console.log('sound');
  },
}

function createDog() {
  return Object.create(dogPrototype);
}

let dog = createDog();
dog.makeSound(); // sound
console.log(dog.hasOwnProperty('makeSound')); // false


///*  What is a mixin? What would we use it for?
// A mixin is the process of copying the methods from an object to another object. We use it because JavaScript doesn't allow multiple inheritance; objects can only inherit from one prototype. In cases where we want an object to inherit from several objects, we use mixins in JavaScript.

// class of birds, most of them fly but not all. All of them inherit from a class named Animal. For each type of bird, depending on the bird subtype, we would need to copy methods for the flying birds ("flyable" object)

class Animal {}

class Bird extends Animal {}

class Parrot extends Bird {}

let flyable = {
  flying() {
    console.log("I am flying!");
  }
}

Object.assign(Parrot.prototype, flyable);

let coco = new Parrot();
coco.flying();