# JS129 Assessment: Object Oriented Programming > Specific Topics of Interest > Study Guide Version 2.0

## Overview

1. You should understand the different ways to create objects in JavaScript, including object literals, object factories, constructors and prototypes (the pseudo-classical approach), the OLOO pattern (prototypal inheritance), and ES6 classes. You should be able to compare and contrast the different ways of creating objects.
2. You should understand encapsulation, polymorphism, and inheritance in a JavaScript context. In particular, you should understand prototypal inheritance.
3. You should understand the difference between inheritance, collaboration, and mix-ins.
4. You should understand the execution context in JavaScript. In particular, you should be intimately familiar with how JavaScript determines execution context, how it can lose that context, and how you can prevent context loss.
5. You should understand both the syntactical and behavioral differences between function declarations, function expressions, arrow functions, and the compact method syntax used in classes and objects.
6. You should know how to use both instance and static properties and methods.

## Checklist

- [ ] Write down everything you know on every topic in this study guide.
- [ ] Write out examples for every topic.
- [ ] Make code snippets.
- [ ] Write explanations for the code snippets.

## Specific Topics of Interest

1. Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
2. Methods and properties; instance and static methods and properties
3. Prototypal and pseudo-classical inheritance
4. Encapsulation
5. Polymorphism
6. Collaborator objects
7. Single vs multiple inheritance
8. Mix-ins; mix-ins vs. inheritance
9. Methods and functions; method invocation vs. function invocation
10. Higher-order functions
11. The global object
12. Method and property lookup sequence
13. Function execution context and this
14. Implicit and explicit execution context
15. Dealing with context loss
16. `call`, `apply`, and `bind`
17. `Object.assign` and `Object.create`
18. Built-in constructors like `Array`, `Object`, `String` and `Number`
19. Reading OO code

## OOP Introduction

Object Oriented Programming is a programming paradigm in which we think about problems in terms of using objects to organize our program. In OOP the idea is to model a program based on how objects in the real world interact. A real-world object like a car, for example, has **state** -- *properties* -- like color, number of doors and fuel-level amongst others. It also has **behavior**; it can be started, driven, steered, or parked. That's precisely how we think about problems in OOP: as a set of objects with state and behavior. OOP is about *combining data and behavior* into an object.

The Four Pillars of OOP are APIE: Abstraction, Polymorphism, Inheritance, and Encapsulation.

### Advantages and Disadvantages of OOP

- Advantages
  - It lets programmers think about a problem at a higher-level of abstraction, which helps them break down and solve the problem.
  - OOP helps programmers write programs that reduce the *dependencies* in a program, which makes maintenance easier.
  - Done right, OOP makes code flexible, easy to understand, and easy to change.

- Disadvantages
  - OOP programs are often much larger than the equivalent procedural program.
  - OOP may lead to less efficient code; OO programs may require more memory, disk space, and computing power.

## 1. Objects, Object Factories (Factory Functions), Constructors and Prototypes, OLOO, and ES6 Classes

### 1.1 Objects

The simplest way to create a JavaScript object is to use the **object literal** syntax: a pair of opening and closing curly braces. Adding methods to an objects is as simple as adding a function as the value of a property.

#### 1.1.1 Encapsulating the data and functionality of a race car into an object

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine: function() {
    raceCar.engineOn = true;
  },

  drive: function() {
    raceCar.fuelLevel -= 0.1;
  },

  stopEngine() { // <-- compact method syntax that omits the `:` and the `function` keyword
    raceCar.engineOn = false;
  },

  refuel: function(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },
};

raceCar.refuel(30); // Use dot-notation to call a method.
```

This code bundles the data and operations related to a car into an object. The structure of the object is essentially the same as the objects we've encountered so far. The chief difference is that *some of the property values are functions*. When object properties have function values, we call them **methods**. The methods here are responsible for changing the state of the `raceCar` object.

Note that JavaScript won't stop you from changing the `fuelLevel` property directly instead of calling the `refuel` method. That's a limitation of JavaScript. The OO style strongly discourages changing property values directly. Instead, it encourages using methods to interface with the object. We can see why that is by looking at the implementation for `refuel`. The `fuelLevel` property should be a number that's a fraction of 1. The `refuel` method ensures that it never exceeds that value. If you only use `refuel` to increase the `fuelLevel` of the car, it'll never exceed 1. If you directly access and change `fuelLevel`, though, you may end up violating that restriction.

#### 1.1.2 Property Access

When dealing with objects, we are basically doing either one of two things: *setting a property* or *accessing a property*. We do both operations through the property key by using bracket notation or dot notation.

```js
myObject["foo"] = "bar";
myObject.foo              // "bar"
myObject["foo"]           // "bar"
```

Dot notation is also called **member access notation**, while bracket notation is called **computed member access notation**. The main difference between the two is that bracket notation can take any UTF-8-compatible string as the key, while member access notation requires valid variable names. Most importantly, computed member access notation can be computed on the fly -- *any expression between the brackets gets evaluated as a string and used to reference the property*.

```js
myObject["a-key"] = 'four';

myObject.a-key // SyntaxError (a-key is not a valid variable name)
myObject["a-key"] // 'four'
myObject["a" + "-" + "key"] // 'four'
```

#### 1.1.3 Property Existence

What happens if we access a non-existent property on an object? We get `undefined`. However, we also get the same value when we try to access a property that is explicitly set to `undefined`.

```js
Object.keys(myObject)  //  [ '7', 'false', '1,2,3', 'a-key' ]
myObject[undefinedKey] = undefined

myObject.undefinedKey // undefined
myObject.missingKey  // undefined
```

That’s a dilemma. How do we distinguish one from the other? There are two ways to do that:

- `in` operator
- `hasOwnProperty`

Both methods check if a property exists in an object. If it does, `true` is returned, and `false` otherwise.

```js
Object.keys(myObject)  //  [ '7', 'false', '1,2,3', 'a-key' ]

"false" in myObject // true
"true" in myObject // false

myObject.hasOwnProperty('7') // true
myObject.hasOwnProperty('8') // false
```

If they both do the same thing, why the need for duplication? They are not exactly identical. There is a difference but it’s something we have to cover in future assignments. What’s important to note for now is that both `in` operator as well as `hasOwnProperty()` allows us to check for property existence in an object.

Another indirect way of checking for property existence is to enumerate the properties of an object via `Object.keys` or `Object.getOwnPropertyNames`. Both return an array of the object’s properties. The difference is that `Object.keys` returns an array of enumerable properties while `Object.getOwnPropertyNames` returns all properties regardless if they’re enumerable or not.

```js
Object.keys(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
Object.getOwnPropertyNames(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
```

### 1.2 Object Factories / Factory Functions

One way to *automate the creation of objects* is to use the **factory function pattern**. A factory function returns an object with a particular set of methods and properties. The methods remain the same across the objects, while the property values can be customized by providing them as arguments. Factory functions instantiate and return a new object in the function body. They let us create new objects based on a predefined template.

An object factory serves two purposes:

1. It returns objects that represent data of a specific type.
2. It reuses code.

However, they have two significant downsides:

1. There is no way to inspect an object and learn whether we created it with a factory function. That effectively *makes it impossible to identify the specific "type" of the object*; at best, you can only determine that an object has some specific characteristics.
2. Every object created with a factory function has a full copy of all the methods. That's **redundant**, and it can place a heavy load on system memory.

#### 1.2.1 Factory Function Example 1 - `createCar`

```js
function createCar(make, model, year) {
  return {
    make,         // Same as "make: make"
    model,        // Same as "model: model"
    year,         // Same as "year: year"
    started: false,

    start() {     // Same as "start: function() {"
      this.started = true;
    },

    stop() {      // Same as "stop: function() {"
      this.started = false;
    },
  };
}

let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);

// my addition
let car3 = createCar('Tesla', 'Model X', 2022);
```

The `createCar` function takes three arguments and returns a car object with four properties and two methods. With this `createCar` **object factory**, you can create as many car objects as your program needs. In this case, `createCar` handles the similarities, while each invocation specifies the differences with arguments.

Factory functions give us the ability to create objects of the same type by merely calling a function. Entities that are common to multiple objects, such as the `start` and `stop` methods, get declared in one place. On the other hand, *arguments are passed to the factory function* to distinguish one object from another, such as the make, model, and year. Some entities, like `started`, don't fall easily into either category, but that's not important here.

**Compact Method Syntax** - omits the `:` and the `function` keyword and uses parenthesis to denote a method.

#### 1.2.1 Factory Function Example 2 - `createPerson`

```js
function createPerson(firstName, lastName = '') {
  let person = {};

  person.firstName = firstName;
  person.lastName = lastName;

  person.fullName = function() {
    return `${this.firstName} ${this.lastName}`.trim();
  };

  return person;
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

john.fullName(); // => 'John Doe'
jane.fullName(); // => 'Jane'
```

We can simplify that somewhat by *returning an object literal*:

```js
function createPerson(firstName, lastName = '') {
  return {
    firstName: firstName,
    lastName: lastName,

    fullName: function() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  };
}
```

#### 1.2.1 Factory Function Example 3

```js
function createRectangle(width, length) {
  return {
    width: width, // width,
    length: length, // length,

    getWidth() {
      return this.width;
    },

    getLength() {
      return this.length;
    },

    getArea() {
      return this.width * this.length;
    },
  };
}

let rectangle = createRectangle(4, 5);

// console.log(rectangle.getWidth()); // 4
// console.log(rectangle.getLength()); // 5
// console.log(rectangle.getArea()); // 20
```

## 1.3 Constructors and Prototypes

### Object Constructors / Constructors

**Object constructors**, or **constructors** are another way to create objects in JavaScript. You can think of a constructor as a little factory that can create an endless number of objects of the same type. If that sounds a bit like a factory function, that's okay -- there are some differences, but the basic idea is the same. Superficially, a constructor looks and acts a lot like a factory function: you define a constructor once then invoke it each time you want to create an object of that type. As we'll see soon, though, there's a little extra that goes into a constructor.

Constructor functions are meant to be invoked with the `new` operator. They instantiate a new object behind the scenes and let the developer manipulate it through the `this` keyword. A typical constructor uses the following pattern:

1. The constructor is invoked with `new`.
2. The JS runtime creates a new object that inherits from the constructor's prototype object.
3. The new object is assigned to `this` within the function body.
4. The code in the function body is executed.
5. The function returns the object referenced by `this` unless the function returns an explicit object.

### Prototypes

Every function has a `prototype` property that points to an object that contains a `constructor` property. The `constructor` property points back to the function itself. Thus, if `Kumquat` is a construction function, then `Kumquat.prototype.constructor === Kumquat`.

If the function is used as a constructor, the returned object's `[[Prototype]]` will reference the constructor's `prototype` property. That lets us set properties on the constructor's prototype object so that all objects created by the constructor will share them. We call this the **pseudo-classical** pattern of object creation.

We don't just want *a* car, however. We want a mechanism that creates any car that has those properties and methods. To do that, we can use a factory function to create individual cars:

This factory function creates new cars of any make, model, or year, and ensures that the engines are initially off.

Another way to accomplish the same thing is to use a constructor function and the `new` keyword:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corolla = new Car('Toyota', 'Corolla', 2016);
let leaf = new Car('Nissan', 'LEAF', 2018);
let nova = new Car('Chevrolet', 'Nova', 1974);
```

Defining a constructor is nearly identical to defining an ordinary function, but there are differences. For starters, notice that *we gave the constructor a name that begins with a capital letter*: `Car`. Capitalizing the name isn't a language requirement, but it is a convention employed by most JavaScript developers.

The function parameters, in general, match the properties associated with each `Car` object. In this case, we supply parameters for all of the properties except `started`, which receives an initial value instead. *The initial value for such properties can come from anywhere.* For instance, we can compute the value from other properties or retrieve a value from a database.

## Extracted NOTES

- pseudo-classical inheritance

The pseudo-classical object creation pattern generates objects using a constructor function that defines state and a prototype object that defines shared behaviors.

As useful as factory functions are, *there are other ways to extract code into one place so that multiple objects can use it*. In JavaScript, we rely heavily on **prototypes** to accomplish this.

One object factory can *reuse another object* factory by mixing the object returned by another factory function into itself by using `Object.assign()`.



Unlike other mainstream languages, JavaScript doesn't implement behavior sharing using class-based inheritance even though ES6 introduced the class keyword to the language. Instead, it *uses the object prototype to share properties*.

JavaScript defines undeclared variables as properties of the global object. Such properties act like global variables though -- you can access them from anywhere in your program.

Object property names are not variables.

`Object.prototype.isPrototypeOf()`

The `isPrototypeOf(object)` method checks if an object exists in another object's prototype chain.

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object

console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false
console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```