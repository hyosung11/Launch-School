# JS129 Assessment: Object Oriented Programming > Specific Topics of Interest > Study Guide

- [ ] Write down everything you know on every topic in this study guide.
- [ ] Write out examples for every topic.
- [ ] Make code snippets.
- [ ] Write explanations for the code snippets.

## OOP Introduction

Object Oriented Programming is a programming paradigm in which we think about problems in terms of using objects to organize our program. In OOP the idea is to model a program based on how objects in the real world interact. A real-world object like a car, for example, has **state** -- *properties* -- like color, number of doors and fuel-level amongst others. It also has **behavior**; it can be started, driven, steered, or parked. That's precisely how we think about problems in OOP: as a set of objects with state and behavior. OOP is about *combining data and behavior* into an object.

Object-oriented programming solves this problem. Objects provide a means to group related data and functions into one unit. In the context of the object, the data and functions are commonly called state and methods respectively.

Unlike other mainstream languages, JavaScript doesn't implement behavior sharing using class-based inheritance even though ES6 introduced the class keyword to the language. Instead, it *uses the object prototype to share properties*. 

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

Encapsulating the data and functionality of a race car into an object.

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
```

This code bundles the data and operations related to a car into an object. The structure of the object is essentially the same as the objects we've encountered so far. The chief difference is that *some of the property values are functions*. That shouldn't be surprising; we've seen before that JavaScript functions are first-class values, which means that we can treat them as we would any JavaScript value. That includes using them as object property values. When object properties have function values, we call them **methods**. The methods here are responsible for changing the state of the `raceCar` object.

One advantage of this approach is clear to see: if we want to operate on a car, we don't have to search for both the function and the data that we need. We can see at a glance what you can do with a car merely by looking at the object.

We can use dot-notation to call a method. For instance:

```js
raceCar.refuel(30);
```

Note that JavaScript won't stop you from changing the `fuelLevel` property directly instead of calling the `refuel` method. That's a limitation of JavaScript. The OO style strongly discourages changing property values directly. Instead, it encourages using methods to interface with the object. We can see why that is by looking at the implementation for `refuel`. The `fuelLevel` property should be a number that's a fraction of 1. The `refuel` method ensures that it never exceeds that value. If you only use `refuel` to increase the `fuelLevel` of the car, it'll never exceed 1. If you directly access and change `fuelLevel`, though, you may end up violating that restriction.

**Compact Method Syntax** - omits the `:` and the `function` and uses parenthesis to denote a method.

#### Property Access

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

#### Property Existence

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

Another indirect way of checking for property existence is to enumerate the properties of an object via `Object.keys` or `Object.getOwnPropertyNames`. Both return an array of the object’s properties. The difference is that `Object.keys` returns an array of enumerable properties while `Object.getOwnPropertyNames` returns all properties regardless if they’re enumerable or not. For more on enumerable properties, check [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) out.

```js
Object.keys(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
Object.getOwnPropertyNames(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
```

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

### 1.2 Object Factories / Factory Functions

One way to *automate the creation of objects* is to use the **factory function pattern**. A factory function returns an object with a particular set of methods and properties. The methods remain the same across the objects, while the property values can be customized by providing them as arguments.

An object factory serves two purposes:

1. It returns objects that represent data of a specific type.
2. It reuses code.

Automated object creation is an important process. While it's easy to create a single object, copying and pasting the code to create a related object that is independent of the first is both tedious and error-prone. If you need to create hundreds or thousands of similar objects, you'll soon realize why automating object creation is a vital aspect of programming.

In Object Oriented Programming, we often need to create multiple objects of the same type. Object factory functions provide a straightforward abstraction for object creation. One way to automate object creation is to use **object factories**: functions that create and return objects of a particular type.

One object factory can *reuse another object* factory by mixing the object returned by another factory function into itself by using `Object.assign()`.

Consider the following interface:

```js
function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

let jaguar = createCar('Jaguar', 0.4, false);
```

You can see that we've moved the creation of each object into a new function, `createCar`, and that we pass the `make`, `fuelLevel`, and `engineOn` values to that function. In this case, `createCar` handles the similarities, while each invocation specifies the differences with arguments.

Let's examine another factory function:

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
```

With this `createCar` **object factory**, you can create as many car objects as your program needs:

```js
let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);

// my addition
let car3 = createCar('Tesla', 'Model X', 2022);
```

Factory functions give us the ability to create objects of the same type by merely calling a function. Entities that are common to multiple objects, such as the `start` and `stop` methods, get declared in one place. On the other hand, *arguments are passed to the factory function* to distinguish one object from another, such as the make, model, and year. Some entities, like `started`, don't fall easily into either category, but that's not important here.

As useful as factory functions are, *there are other ways to extract code into one place so that multiple objects can use it*. In JavaScript, we rely heavily on **prototypes** to accomplish this.

```js
// Factory Function / Object Factory
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

### Factory Functions

Object factories, or factory functions (also called the Factory Object Creation Pattern), provide a simple way to create related objects based on a predefined template:

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

We can simplify that somewhat by returning an object literal:

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

The factory function lets us create multiple objects of the same "type" with a pre-defined "template." However, it has some disadvantages:

- Every object created with a factory function has a full copy of all the methods. That's **redundant**, and it can place a heavy load on system memory.

- There is no way to inspect an object and learn whether we created it with a factory function. That effectively *makes it impossible to identify the specific "type" of the object*; at best, you can only determine that an object has some specific characteristics.

### 1.3 Constructors and Prototypes

- pseudo-classical inheritance

**Object constructors**, or **constructors** for short, are another way to create objects in JavaScript. You can think of a constructor as a little factory that can create an endless number of objects of the same type. If that sounds a bit like a factory function, that's okay -- there are some differences, but the basic idea is the same.

Superficially, a constructor looks and acts a lot like a factory function: you define a constructor once then invoke it each time you want to create an object of that type. As we'll see soon, though, there's a little extra that goes into a constructor.

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

#### 1.3.1 Calling a Constructor Function

The most striking features that distinguish constructors from ordinary functions are that:

- we call it with the `new` keyword,
- we use `this` to set the object's properties and methods, and
- we *don't supply an explicit return value* (we can, but usually don't).

By now, we know that `this` always refers to an object. Which object does it refer to in this function? Of course, we already know the answer to that question: its value depends on how we call the function. Calling constructors is where you see the most significant difference between them and other functions.

Let's create a `Car` object:

```js
let corolla = new Car('Toyota', 'Corolla', 2016);

corolla.make;    // => 'Toyota'
corolla.model;   // => 'Corolla'
corolla.year;    // => 2016
corolla.started; // => false

corolla.start();
corolla.started; // => true
```

Notice that the `new` keyword precedes the function invocation. This combination of using `new` with a function call treats the function as a constructor.

How does that code work, then? What's so different about using the `new` keyword to invoke the function? JavaScript takes the following steps when you invoke a function with `new`:

1. It creates an entirely new object.
2. It sets the prototype of the new object to the object that is referenced by the constructor's `prototype` property. We'll discuss this in a later assignment. We mention it now for completeness.
3. It sets the value of `this` for use inside the function to point to the new object.
4. It invokes the function. Since `this` refers to the new object, we use it within the function to set the object's properties and methods.
5. Finally, once the function finishes running, `new` returns the new object even though we don't explicitly return anything.

We can now use the new object in any manner appropriate for a Car object.

**JavaScript won't complain about a missing `new` keyword.**

```js
Car(); // => undefined
```

If you don't use the `new` keyword, the constructor function won't work as intended. Instead, it acts like an ordinary function. In particular, no new objects are created, so `this` won't point to a new object.

Furthermore, since functions that don't return an explicit value return `undefined`, calling a constructor without `new` also returns `undefined`. When you use `new`, however, the function doesn't have to return anything explicitly: it returns the newly created object automatically.

#### 1.3.2 Who Can be a Constructor

You can use `new` to call almost any JavaScript function that you create. However, *you cannot call arrow functions with `new`* since they use their surrounding context as the value of `this`:

```js
let Car = (make, model, year) => {
  this.make = make;
  this.model = model;
  this.year = year;
}

new Car(); // TypeError: Car is not a constructor
```

You can also use `new` on methods that you define in objects. Consider:

```js
let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let car1 = new foo.Car('Toyota', 'Camry', 2019);
car1.make; //=> 'Toyota'
```

However, calling a method defined with concise syntax (also called a concise method) *won't work*:

```js
let foo = {
  Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

new foo.Car(); //=> Uncaught TypeError: foo.Car is not a constructor
```

In addition, many -- but not all -- built-in objects and methods are *incompatible* with `new`:

```js

new console.log(); //=> Uncaught TypeError: console.log is not a constructor
new Math();        //=> Uncaught TypeError: Math is not a constructor
new parseInt("3"); //=> Uncaught TypeError: parseInt is not a constructor

new Date();        //=> 2019-06-26T02:50:20.191Z
```

`new` is also incompatible with special functions known as **generators** (a topic that we don't currently cover at Launch School).

#### 1.3.3 Constructors with Explicit Return Values

What happens when you use `new` to call a function that returns an explicit value?

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'a cat';
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // 15
```

That's curious. Even though we explicitly returned the string `'a cat'`, our constructor returned the cat object with `name`, `breed` and `weight` as its properties.

Note that `'a cat'` is a **primitive value**. Suppose we returned an object instead. What would happen, then?

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return { foo: 1 };
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // undefined
fluffy.foo; // 1
```

This time the constructor returned the object { foo: 1 }, not a cat object.

The rule here is that a constructor that explicitly tries to return an object returns that object instead of a new object of the desired type. In all other situations, it returns the newly created object, provided no errors occur. In particular, the constructor ignores primitive return values and returns the new object instead.

### 1.3.5 Supplying Constructor Arguments with Plain Objects

Constructor functions sometimes have to grow with the needs of a program. That often means adding more arguments to the constructor. For instance, our `Car` constructor may one day end up looking like this:

```js
function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}
```

That's quite a few parameters, with plenty of opportunities for mistakes. For instance, we may *pass the arguments in the wrong order*, and JavaScript won't complain. That might seem like a minor inconvenience, but it causes more bugs than you might think. Not only that, those bugs are often quite nasty and hard to diagnose. The more parameters a function needs, the harder it is to read the code and the more likely that problems will arise.

One common technique that we can use to manage our parameters better involves *passing them to our constructor with an object argument*:

```js
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
}

let civic = new Car(civicArgs);
```

Of course, that means that we now have to rework our `Car` constructor to accept an object as an argument:

```js
function Car(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

With `Object.assign`, we can simplify this constructor considerably:

```js
function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

However, one drawback of the `Object.assign` approach is that the `args` object may contain properties that the `Car` object doesn't need. Those additional properties will, nevertheless, get added to the `Car` object. Those properties may just be excess baggage for the objects to carry around, but they *may also cause trouble*.

#### 1.3.6 Determining an Object's Type

Many object-oriented languages, like Java or C++, have a strong notion of object types. In most such languages, it's easy to determine the object's type, such as a dog or car. JavaScript, however, treats objects and their types in a looser, more dynamic way. You can't determine the specific type of arbitrary JavaScript objects; they are dynamic structures with a type of `object`, no matter what properties and methods they have. However, *we can get some useful information about an object if we know which constructor created it*.

Remember that the `new` operator creates a new object. Suppose that you call the Car constructor with `new`. Informally, we can say that the resulting object is a car. More formally, we can say that the object is an **instance** of a `Car`.

The `instanceof` operator lets us determine whether a given constructor created an object:

```js
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

if (civic instanceof Car) {
  console.log("It's a car!");
} else {
  console.log("It's not a car.");
}
```

One effect that we didn't mention when talking about the `new` operator is that *the object it returns contains some information that ties it back to the constructor that created the object*. The `instanceof` operator uses that information to determine what constructor created the object. We'll talk more about how this mechanism works in the next assignment.

### Constructors with Prototypes

### 6.1 Introduction

In the previous assignment, we learned how to use constructor functions as factories that create objects. One question we didn't answer, however, was why we need to have constructor functions along with their somewhat strange use of `this` and `new`. We can accomplish practically the same thing with object factories. We'll answer that question in this assignment.

Let's take a closer look at what happens when we create some objects with a constructor:

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

Each of these dog objects, when created, receive the `name`, `breed`, and `weight` properties as well as the `bark` method. The properties have values that differ between objects, but the `bark` method remains the same in all. However, every time we create a new dog object, we must create a new `bark` method so we can add it to the object. We can verify that each object has its own `bark` method with `hasOwnProperty`:

```js
maxi.hasOwnProperty('bark');   // true
dexter.hasOwnProperty('bark'); // true
biggie.hasOwnProperty('bark'); // true
maxi.bark === dexter.bark;     // false
maxi.bark === biggie.bark;     // false
dexter.bark === biggie.bark;   // false
```

If that seems inefficient and wasteful to you, you're right! We're not repeating any code, but the runtime must create a new copy of the method every time we create an object. For small programs with few objects like this one, that may not be a problem. However, when you start getting into hundreds or thousands or even millions of objects, the multiple function objects can be hard on resources, especially on devices with little memory. Wouldn't it be nice if we could create the `bark` method just once rather than using a different copy of that method in every dog object?

### 6.2 Method Delegation to Prototypes

Earlier, we learned that we could use prototypes to share code between objects of the same type. Prototypes are especially useful for sharing methods as all objects of a particular type share the same prototype object. Furthermore, delegation means that we can share methods by putting them in the prototype object; if an object doesn't contain a requested method, JavaScript searches the prototype chain to find the method.

Thus, we can define a method once in the prototype object, and let the inheriting objects delegate the method calls to the prototype. We can use prototypes in conjunction with constructors to achieve the same result:

```js
let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}
```

In this code, we've changed our `Dog` constructor and created a `DogPrototype` object. The first thing we do inside the constructor is set `DogPrototype` as the prototype of the newly created dog object. We then assign the arguments to the properties.

Note that we can continue to use our constructor without change:

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

This time, however, the `bark` method isn't defined on the individual objects, but is, instead, defined on the `[[Prototype]]` property:

```js
maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true
```

The `DogPrototype` object has the only copy of the method; all dog objects delegate `bark` to the `DogPrototype` object. If you have dozens of dog objects in your program, it's easy to see that adding prototypes into the mix can make better use of memory.

Okay, we now have a constructor and a related prototype object. Together, they construct objects of some type. In our code here, we can guess that the constructor and prototype are related by looking at their names. However, it would be better if we could establish that relationship more concretely. Let's assign the prototype object to a property of the `Dog` function.

```js
// Delete DogPrototype

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};
```

Since JavaScript functions are objects, we can add properties to them. Here, we assign the prototype object to a `myPrototype` property on the `Dog` function object. Thus, we clearly show our intent that all dogs inherit from the `Dog.myPrototype` object. Once we've done that, we can change our constructor function to use `Dog.myPrototype` as the prototype object.

Take some time to understand why this code works. It can be confusing when you first encounter it. It's a little like working with **recursive functions** as we did in the [Introduction to Programming With JavaScript book](https://launchschool.com/books/javascript/read/loops_iterating#recursion), which is to say, it's a bit hard to wrap your head around this code. To help, here's the complete code as it now stands:

```js
function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false

Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true
```

### 6.3 The Constructor `prototype` Property

So far, so good. We have a constructor function and a prototype object that work together. Between them, they create dog objects for us that don't waste memory with multiple copies of methods. However, we still haven't explained why we should bother with constructors. We can pair a prototype with a factory function and get the same effect.

What makes constructors special is a characteristic of all function objects in JavaScript: they all have a prototype property that we call the **function prototype** to distinguish them from the prototypes used when creating ordinary objects. The code we showed in the previous section emulates something that JavaScript bundles with constructors. Let's take a look at that property:

```sh
Dog.prototype; // => Dog {}
```

When you call a function `Foo` with the `new` keyword, JavaScript sets the new object's prototype to the current value of `Foo`'s `prototype` property. That is, the constructor creates an object that inherits from the constructor function's prototype (`Foo.prototype`). Since inheritance in JavaScript uses prototypes, we can also say that the constructor creates an object whose prototype references `Foo.prototype`.

The terminology of constructor prototypes and object prototypes is extremely confusing. Note in particular that we use the term "prototype" to refer to 2 distinct but related concepts:

1. If `bar` is an object, then the object from which `bar` inherits is the **object prototype**. By default, constructor functions set the object prototype for the objects they create to the constructor's prototype object.

2. The **constructor's prototype object**, also called the **function prototype**, is an object that the constructor uses as the object prototype for the objects it creates. In other words, each object that the constructor creates inherits from the constructor's prototype object. The constructor stores its prototype object in its `prototype` property; that is, if the constructor's name is `Foo`, then `Foo.prototype` references the constructor's prototype object.

It's easy to get confused about the differences between these two kinds of prototypes. Be sure you understand the differences before moving on. In most cases, when we talk about a **prototype** without being more explicit, we mean an **object prototype**. We'll talk about the constructor's prototype, the function prototype, or the `prototype` property when talking about a constructor's prototype object.

Note that *constructors don't inherit from the constructor's prototype object*. Instead, *the objects that the constructor creates inherit from it*.

At this point, you may want to rewatch the first 12 minutes of the [JavaScript OOP video](https://www.youtube.com/watch?v=-N9tBvlO9Bo) that you watched earlier. The discussion of the differences between the object prototype (what the speaker calls *dunder proto* or `__proto__`) and the constructor's prototype object should help clarify these differences.

As we've said before, every JavaScript function has a `prototype` property. However, JavaScript only uses it when you call that function as a constructor, that is, by using the `new` keyword. With this information, we can abandon our home-grown constructor-prototype pairing and use the one that JavaScript provides instead:

```js
function Dog (name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'
```

Here's a diagram illustrating the `prototype` and `constructor` links we've discussed.

![constructor-prototype-map](constructor-prototype-map.png)

Note that our constructor doesn't have to explicitly set the prototype of `this` to `Dog.prototype`. JavaScript does that for us when we call the function with `new`. We left this detail out earlier, so let's restate those steps with updated information. We'll assume that the constructor function is named `Foo`:

1. It creates an entirely new object.
2. It sets `Foo.prototype` as the prototype for the new object. That is, the new object inherits from the object referenced by `Foo.prototype`.
3. It sets the execution context (`this`) for the function to point to the new object.
4. It invokes the function.
5. It returns the new object *unless the function returns another object*.

Since the `bark` method refers to `this` and `bark` belongs to the prototype object, you may think that `this` in `this.weight` refers to the prototype object rather than the object itself (e.g., `maxi` or `biggie`). However, that's not how `this` binding works. You already know those rules, so take a moment to think about what it means inside the `bark` method.

When you call a method on an object, JavaScript binds `this` to the object whose method you used to call it. If it doesn't find the method in that object, but it does find it in the prototype, that doesn't change the value of `this`. `this` always refers to the original object -- that is, the object used to call the method --even if the method is in the prototype. If we find the `bark` method in the prototype, `this` references the original dog object, not the prototype.

A property of interest on a prototype object is the constructor property. For instance:

```sh
Dog.prototype.constructor; // [Function: Dog]
```

As with the `instanceof` operator, the `constructor` property lets us determine the type of an object:

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}
```

Be careful, however. It's possible to reassign the `constructor` property to something else. We'll learn about reassigning the `constructor` property in the next assignment. In that case, the test shown above would fail, even though the object is still a dog.

```js
Dog.prototype.constructor = function() {};

maxi.constructor === Dog; // false
maxi instanceof Dog;      // true
```

Note that `instanceOf` still works.

### 6.4 Overriding the Prototype

Inheriting methods from a prototype doesn't mean that the inheriting object is stuck with those methods. *JavaScript objects are incredibly dynamic and flexible*. Two objects created with the same constructor may end up looking completely different from each other because of changes and additions made after constructing the object. For instance, suppose we have a `dexter` dog that has an unusually loud and deep bark. We want to change the `bark` method to log `WOOF!` instead of `Woof!`. We can do that easily by defining a custom `bark` method on `dexter`.

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF!');
}

maxi.bar(); // Woof!
dexter.bark(); // WOOF!
```

The `dexter` object now has its own `bark` method that **overrides** the `bark` method from `Dog.prototype`. Each time we call `bark` on `dexter`, JavaScript looks for it first in the `dexter` object itself. Since it finds it there, it doesn't need to check the prototype.

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

let rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.getWidth()); // 4
console.log(rectangle1.getLength()); // 5
console.log(rectangle1.getArea()); // 20
```

Just checking this. The reason we get the following output is because the new operator sets the context to the new object that's created. Because of this, technically a, b, c etc. don't exist as properties on the constructor, they exist as properties in the instantiated object.

```js
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
```

### 1.4 OLOO (Objects Linking with Other Objects)

- Prototypal inheritance
- uses `init` and an explicit return in the constructor

```js
// OLOO (uses `init` and an explicit return in the constructor)
let rectanglePrototype = {
  init(length, width) {
    this.width = width;
    this.length = length;
    return this;
  },

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

let olooRectangle = Object.create(rectanglePrototype).init(5, 4);

console.log(olooRectangle.getWidth()); // 4
console.log(olooRectangle.getLength()); // 5
console.log(olooRectangle.getArea()); // 20
```

### 1.5 ES6 Classes

```js
// ES6 Class (Pseudo-classical)
// class declaration
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
```

A class is a kind of template for creating concrete objects of that type. Each concrete object is called an instance of the class. The process of creating an instance is performed by a special function called a constructor. We pass the constructor values for any internal state that we want to initialize in the new instance.

Discussion

The solution to the problem is straightforward. In the constructor function we are creating two properties `width` and `length` and assigning to them values of parameters with the same name.

To access the value of each property within methods, we use the `this` keyword in front of each property name.

## 2. Methods and Properties; Instance and Static Methods and Properties

In OOP, we often refer to individual objects of a specific data type as **instances** of that type. For example, in the `Dog` example from the [Constructors with Prototypes assignment](https://launchschool.com/lessons/e3c64e3f/assignments/bdc27fe0), `maxi` and `dexter` are instances of the `Dog` type. An instance is just another term for the objects created using any means of defining multiple objects of the same kind (e.g., dogs). The term **object** is more general, while **instance** is more specific.

So far, we've been using constructors to create instances of the `Dog` type. We can also think of objects created by factory functions as instances. Later, we'll see even more ways to create new objects, all of which can be called instances.

Hold on there. Factory functions can create instances? How can that be? There's no way to tell that the objects created by, say, a `createDog` factory are indeed dogs, so how can we have instances?

That's a good point. However, in the end, we know that the `createDog` factory is going to create a bunch of objects that we know to represent dogs. We may not be able to tell whether an arbitrary object is a dog object, but all of the objects created by `createDog` should be dogs. They have a type -- dog -- even if there is no way to test that in your code. Thus, they are instances of a dog type.

[Common Object Methods](https://elainevuongyt.notion.site/Common-Object-Methods-7d3ed006cfe641508635a40c7ec6f5e4)

### 2.1 Instance Properties

It's convenient to describe the properties of an instance as **instance properties**. These properties belong to a specific instance of some type. Thus, in our `Dog` example from the earlier assignment, we say that the `name`, `breed`, and `weight` properties are all instance properties of the various instances of the `Dog` type. If we want to access the weight for `Maxi` from the above example, we must use the `maxi` object:

```js
maxi.weight; // 32
```

If we try to use the constructor, instead, it won't work:

```js
Dog.weight; // undefined
```

This code returns `undefined` since `weight` isn't a property of the constructor; it's a property of the instances created by that constructor. It also doesn't make sense to define it on the constructor function: weight is a property of an individual dog, not one that is related to dogs as a type.

### 2.2 Instance Methods

Since methods are also properties on an object, we can refer to methods stored directly in an object as instance properties too. More commonly, we call them **instance methods** just to distinguish them from ordinary data properties.

However, methods usually aren't stored directly in instances. Instead, they are usually defined in the object's prototype object. While methods defined in the prototype object aren't stored in the instance object, they still operate on individual instances. Therefore, we usually refer to them as instance methods. In our `Dog` example, `bark` is an instance method since it's defined on the `Dog.prototype` object.

As with `weight`, we must use an object created by the `Dog` constructor to invoke `bark`:

```js
maxi.bark(); // Woof!
```

Again, we can't use the constructor to call this method:

```js
Dog.bark(); // TypeError: Dog.bark is not a function
```

In this specific example, we can call `Dog.prototype.bark()`, but that doesn't always work well. For instance, calling `Dog.prototype.bark()` won't recognize the fact that `dexter` has a different version of `bark`.

Any method defined in any prototype in the prototype chain of an object is considered to be an instance method of the object.

### 2.3 Static Properties

**Static properties** are defined and accessed directly on the constructor, not on an instance or a prototype. Typically, static properties belong to the type (e.g., `Dog`) rather than to the individual instances or the prototype object.

For instance, dogs belong to the species "Canis lupus". That property of dogs doesn't have anything to do with individual dogs; it's information that is pertinent about all dogs. Therefore, it makes sense to add this property directly to the `Dog` constructor as a static property:

```js
Dog.species = "Canis lupus";
```

Now, when our application needs to know the species that dogs belong to, we can access it from the constructor directly:

```js
console.log(`Dogs belong to the species ${Dog.species}`);
```

One common use of static properties is to keep track of all of the objects created by a constructor. For instance:

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];
```

In this case, the static property `allDogs` contains an array with a reference to every dog object created while the program is running. While `allDogs` maintains a list of all the dogs, it isn't information that is pertinent to a specific dog -- it's information about dogs in general. Therefore, it should be a static property.

### 2.4 Static Methods

Static properties don't have to be ordinary data properties. You can also define static methods:

```js
Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();
```

You've already seen examples of static methods on built-in JavaScript constructors.`Object.assign`, `Array.isArray`, and `Date.now` are all examples of static methods.

End Instance and Static Properties and Methods 20220308 20:54

## 3. Prototypal and Pseudo-classical Inheritance

### Object Prototypes Summary

JavaScript objects can *inherit properties from other objects*. The object that another object inherits properties from is its **prototype**. In most cases, we use `Object.create` to create objects whose prototype we need to *set explicitly*. We can also use `Object.setPrototypeOf` to *set the prototype of an object that already exists*.

By default, all object literals inherit from `Object.prototype`.

When you access a property on an object, JavaScript looks for the property first in the object, then its prototype chain, all the way up to `Object.prototype`.

1. Every object has an internal `[[Prototype]]` property that points to a special object, the object's prototype. It is used to look up properties that don't exist on the object itself.

  1.1 `Object.create` returns a new object with the passed-in argument as its prototype.
  1.2 You can use `Object.getPrototypeOf` and `obj.isPrototypeOf` to check for prototype relationships between objects.

2. Looking up a property in the prototype chain is the basis for prototypal inheritance, or property sharing through the prototype chain. Objects lower down in the chain inherit properties and behaviors from objects in the chain above. That is, downstream objects can delegate properties or behaviors to upstream objects.

  2.1 A downstream object overrides an inherited property if it has a property with the same name. (Overriding is similar to shadowing, but it doesn't completely hide the overridden properties.)
  2.2 `Object.getOwnPropertyNames` and `obj.hasOwnProperty` can be used to test whether an object owns a given property.

### 1. Prototypes

In JavaScript, objects can *inherit properties and behavior from other objects*. If another object, for instance, has a `language` property and a `speak` behavior, a new object can access and use `language` and `speak` without explicitly defining them in the new object.

More specifically, JavaScript objects use something called **prototypal inheritance**. The object that you inherit properties and methods from is called the **prototype**. The function `Object.create` creates a new object that inherits properties from an existing object. It takes an object that is called the prototype object as an argument, and returns a new object that inherits properties from the prototype object. The newly created object has access to all the properties and methods that the prototype object provides.

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
b.foo; // => 1
```

An unusual aspect of this relationship is that the **inheriting object** (`b` above) doesn't receive any properties or methods of its own. Instead, it **delegates** property and method access to its prototype. You can see this in the node console:

```sh
> let a = { foo: 1, bar: 2 }
undefined

> let b = Object.create(a)
undefined

> b.foo
1

> b
{}
```

Evaluating `b` in the node console gives us an empty object, which demonstrates that `b` doesn't have any properties of its own. We can also use the `hasOwnProperty` method to demonstrate this:

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);

console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false
```

The `hasOwnProperty` method is available on all JavaScript objects. It takes the name of a property as a string and returns `true` if the object has a property by that name, `false` if it does not.

JavaScript objects use an internal `[[Prototype]]` property to keep track of their prototype. When you create an object with `Object.create()`, the new object's `[[Prototype]]` property gets assigned to the prototype object.

Note that `[[Prototype]]` is an **internal** property: you cannot access it directly in your code. However, you can access and replace its value with `Object` functions. For instance, `Object.getPrototypeOf()` takes an object as an argument and returns its prototype object:

```js
> Object.getPrototypeOf(b)
{ foo: 1, bar: 2}
```

You can use `Object.setPrototypeOf()` to set the prototype object of an object:

```js
let a = {
  foo: 1,
  bar: 2,
},

let b = {}; // line 6
Object.setPrototypeOf(b, a);

console.log(b.foo); // => 1
console.log(b); // => {}
console.log(Object.getPrototypeOf(b)); // { foo: 1, bar: 2}
```

The code on lines 6 and 7 is effectively identical to the code that we used on line 6 of the `Object.create` example. However, in this example, we declare and initialize `b` to an empty object rather than using `Object.create`; we then use `Object.setPrototypeOf` to set the prototype object.

An important consideration when dealing with prototypes is that objects hold a reference to their prototype objects through their internal `[[Prototype]]` property. If the object's prototype changes in some way, the changes are *observable in the inheriting object as well*.

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = {};
Object.setPrototypeOf(b, a);
console.log(b.foo) // => 1

a.foo = 42;
console.log(b.foo); // => 42

// adds key 'baz' with value 12
a.baz = 12;
console.log(b.baz); // => 12
```

### 2. The Default Prototype

As mentioned above, all JavaScript objects have access to the `hasOwnProperty()` method. Where does JavaScript get that method? When we create a new object, we don't have to add our own `hasOwnProperty()` method. Instead, JavaScript obtains the method from the object's prototype. All JavaScript objects inherit from a prototype. For instance:

```sh
> let a = {}
undefined

> Object.getPrototypeOf(a)
{}
```

Passing an empty object to `Object.getPrototypeOf()` returns a default prototype object. That object is the **prototype** for all objects created by using the object literal syntax (e.g., `{ a: 2 }`). The default prototype is the prototype object of the `Object` constructor, `Object.prototype`. We'll see what that means a little later. For now, all you need to know is that Object.prototype provides the default prototype.

### Iterating Over Objects with Prototypes

Now is an excellent time to revisit the [Iteration](https://launchschool.com/books/javascript/read/objects#iteration) section from the Objects chapter of our Introduction to Programming With JavaScript book. It discusses the impact of object prototypes on iteration. In particular:

- A `for/in` loop iterates over an object's properties. The iteration includes properties from the objects in its prototype chain. Use `hasOwnProperty()` to skip the prototype properties.

- `Object.keys()` returns an object's "own" property keys -- you do not need to use `hasOwnProperty()`.

Note that both `for/in` and `Object.keys()` deal with **enumerable properties**, which is merely a way of talking about properties you can iterate over. Not all properties are enumerable. In particular, most properties and methods of the built-in types are not. Usually, any properties or methods you define for an object are enumerable. You can check whether a property is enumerable with the `Object.prototype.propertyIsEnumerable()` method.

```js
let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable('length'));                     // false
console.log(arr.propertyIsEnumerable('2'));                          // true
console.log(arr.propertyIsEnumerable('forEach'));                    // false
console.log(Array.prototype.propertyIsEnumerable('forEach'));        // false

function Foo() {
  this.bar = "qux"
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar'));                        // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); // true
```

You do not have to remember how to use `propertyIsEnumerable`.

### The Prototype Chain

Earlier, we said that all JavaScript objects could inherit from another object using the prototype model. Since the prototype of an object is itself an object, the prototype can also have a prototype from which it inherits. For example:

```js
let a = {
  foo: 1,
};

let b = {
  bar: 2,
};

let c = {
  baz: 3,
};

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar); // => 2
console.log(c.foo); // => 1
```

In this code, object `c` inherits from object `b` which, in turn, inherits from `a`. Stated differently, `b` is the prototype of `c` and `a` is the prototype of `b`. All properties that you can access on `a` or `b` are now available on `c`. We say that objects `b` and `a` are part of the **prototype chain** of object `c`. The complete prototype chain also includes the default prototype, which is the prototype of object `a` in this case. Since the prototype of `Object.prototype` is `null`, the complete prototype chain looks like this:

```sh
c --> b --> a --> Object.prototype --> null
```

### The `__proto__` Property

Many older JavaScript programs use a property named `__proto__`, which is pronounced **dunder proto**, instead of `Object.setPrototypeOf` and `Object.getPrototypeOf`. "dunder" is a shortened version of "double underscore", which alludes to the double underscores at the beginning and end of the name. The `__proto__` property is a *deprecated*, non-hidden version of the `[[Prototype]]` property. As a rule, you should only use `__proto__` if you need to support very old browsers or old versions of Node, or as a convenient shortcut with temporary code or debugging operations. You may run into code that uses it, so you need to at least be aware of it.


### 3.1 Prototypal Inheritance

As Karl said today, it's all prototypal inheritance happening in the background, but you can leverage the constructor/prototype pattern to kind of mimic how traditional OOP languages deal with inheritance. So pseudo classical means literally that, mimicking classical inheritance.

objects inheriting properties from other objects

The prototype chain, or prototypal inheritance, is how JavaScript inherits properties from other objects.

```js
let animal = {
  type: 'mammal',
  breathe: function() { 
    console.log("I'm breathing");
  },
}

let dog = Object.create(animal);

console.log(dog); // {}
console.log(dog.type); // "mammal"
console.log(dog.__proto__); // { type: 'mammal', breathe: ƒ }
console.log(dog.__proto__ === animal); // true
```

### 3.2 Pseudo-classical Inheritance

## 4. Encapsulation

**Encapsulation** is the idea of bundling data and operations related to that data in a cohesive unit called an object. In OOP, encapsulation also refers to the idea of restricting access to state and some behavior, but JavaScript objects don't support that type of encapsulation.

In JavaScript, encapsulation is the idea of bundling state (data) and behavior (operations) associated with that data in a single entity; that is, it's the grouping of related properties and methods in a single object.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects *expose a public interface* for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. However, JavaScript does not directly provide the means to limit exposure of properties and methods. There are ways to achieve a degree of access restriction, but they're not perfect.

This grouping together of related data and functions is what’s called **encapsulation** and is one of the fundamental principles of object-oriented programming.

To illustrate, let’s take the following code:

```js
let overtime = 10;
let baseSalary = 6000;
let rate = 50;

function computeWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}
```

Up top are the data related to the employee’s wage and a function that operates on the data. The object-oriented way of solving this problem by using encapsulation is done by simply combining data and related functions into one unit like so:

```js
let employee = {
  baseSalary: 6000,
  overtime: 10,
  rate: 50,
  computeWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
  }
}
```

As you can see, everything that's related to the `employee` object is bundled. This is the beauty of object-oriented programming. It organizes code into logical units.

We've just reviewed the concept of encapsulation and how it's relevant to object-oriented programming. In the example given, we *instantiated an object using the object literal syntax*. There are other more sophisticated patterns of object creation that we'll cover over the remaining assignments. However keep in mind that, at the very core, we are essentially doing the same thing: *grouping data and related functions together*.

## 5. Polymorphism

When a method has the same name, but a different implementation in different classes it is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.

This is one of those gems I found in the forums from Pete that really helped me to understand the idea behind Polymorphism better

[str, arr].forEach(obj => console.log(obj.indexOf("c")));

Notice how we're calling both str.indexOf and arr.indexOf by using obj.indexOf where obj is alternately a reference to str or arr.

You can do that with a duck-typed language, but if you try it in a language like C that doesn't support duck typing, it will produce a type error. You can't call methods for 2 or more objects with the same line of code unless the objects have a common superclass. It's much more stringent than JS and Ruby. However, you can still call things that have the same method, just not through a common interface.

By the way -- calling indexOf like this with a variable that can take on different types is where polymorphism really comes into play. I'm not sure if we emphasize that enough. The point behind polymorphism is that you can write code that doesn't care about types -- just that the different things respond to the same message. 


### 5.1 Duck Typing

The 'Polymorphism Through Duck Typing' section provides a definition for duck typing:
"Duck typing occurs when objects of different unrelated types both respond to the same method name. "

[Distinction between Polymorphism and Duck Typing](https://launchschool.com/posts/c6a86a52#comment-89887)

Hmm, check out this comment by pete
https://launchschool.com/posts/c6a86a52#comment-89887
@Jack
Duck typing is just a particular form of polymorphism -- it's the ability for objects of completely unrelated types to respond to the same method invocation. A simple example of this in JS are Strings and Arrays. These types are unrelated(*), yet they can both respond to, say, the indexOf method:

The main reason why there is a distinction is that some languages -- like C++ -- only support inheritance-based polymorphism. Two objects have to be related through inheritance for polymorphism to be present. When languages were introduced that allowed unrelated objects to act polymorphically, the term duck-typing was introduced to talk about that kind of polymorphism separately.

* In JS, almost all objects inherit from Object at some point in their prototype chain, so String and Array aren't completely unrelated. However, we usually ignore global supertypes (like Object) when talking about whether objects are related. It's still possible to create objects in JS that don't inherit from Object, and those objects can still use duck typing.

By other languages not supporting duck typing, does that mean that if you declare a method in an object, you can't use that same name to declare a method in another object?

You can use the same name, but languages that don't support duck typing don't let you call a method on unrelated objects like this:

```js
[str, arr].forEach(obj => console.log(obj.indexOf("c")));
```

Notice how we're calling both str.indexOf and arr.indexOf by using obj.indexOf where obj is alternately a reference to str or arr.

You can do that with a duck-typed language, but if you try it in a language like C that doesn't support duck typing, it will produce a type error. You can't call methods for 2 or more objects with the same line of code unless the objects have a common superclass. It's much more stringent than JS and Ruby. However, you can still call things that have the same method, just not through a common interface.


### Synora Eusebio (JS129)
For anyone that’s interested, I wrote out a full implementation of the Polymorphism via Duck Typing example. I had to rework the `prepare` method in the Wedding constructor in order to get that specific method to work.

```js
class Chef {
  constructor(guests, flowers, songs) {
    this.guests = guests; 
    this.flowers = flowers; 
    this.songs = songs;
  }
  prepare(wedding) { 
    return this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    return `Prepare food for ${this.guests} guests!`;
  }
}

let chef = new Chef(200, 'tulips', ["Electric Slide", "Cha-Cha Slide"]);
console.log(chef);
/*
Chef {
  guests: 200,
  flowers: 'tulips',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/
console.log(chef.prepare(chef.guests)); // Prepare food for 200 guests!
console.log(chef.prepareFood(chef.guests)); //Prepare food for 200 guests!

class Decorator {
  constructor(guests, flowers, songs){
    this.guests = guests;
    this.flowers = flowers; 
    this.song = songs;
  }
  prepare(wedding) {
    return this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    return `Where are my ${this.flowers}??`;
  }
}

let decorator = new Decorator(300, 'roses', ["Electric Slide", "Cha-Cha Slide"]);
console.log(decorator);

/*
Decorator {
  guests: 300,
  flowers: 'roses',
  song: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/
console.log(decorator.prepare(decorator.flowers)); //Where are my roses??
console.log(decorator.decoratePlace(decorator.flowers)); //Where are my roses??


class Musician {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers; 
    this.songs = songs;
  }
  prepare(wedding) {
    return this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    return `Prepare the following songs: ${this.songs}`;
  };
}

let musician = new Musician (400, 'carnations', ["Electric Slide", "Cha-Cha Slide"]);
console.log(musician);
/*
Musician {
  guests: 400,
  flowers: 'carnations',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/

console.log(musician.prepare(musician.songs));//Prepare the following songs: Electric Slide,Cha-Cha Slide
console.log(musician.preparePerformance(musician.songs)); //Prepare the following songs: Electric Slide,Cha-Cha Slide

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => console.log(preparer));
  }
}

let wedding = new Wedding (400, 'daisy', ["Electric Slide", "Cha-Cha Slide"]);

console.log(wedding);
/*
Wedding {
  guests: 400,
  flowers: 'daisy',
  songs: [ 'Electric Slide', 'Cha-Cha Slide' ]
}
*/

wedding.prepare([chef.prepare(chef.guests), decorator.prepare(decorator.flowers), (musician.prepare(musician.songs))]);
/*
Prepare food for 200 guests!
Where are my roses??
Prepare the following songs: Electric Slide,Cha-Cha Slide
*/
```

## 6. Collaborator Objects

Objects *collaborate* with other objects by using them as part of their **state**. We say that two objects have a **collaborator relationship** *if one of them is part of the state of the other*.

Objects that *help provide state within another object* are called **collaborator objects**, or more simply **collaborators**. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with another object. Collaborator objects let you chop up and modularize the problem domain into cohesive pieces. They play an important role in modeling complicated problem domains in OO programming.

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat, // <-- collaborator object

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`); // line 19
  },
};
```

The `pete` object has a collaborator object stored in its `pet` property. The `pete` object and the object referenced by its `pet` property work together. When we need to access the `pet` object or have it perform a behavior, we can use `pete.pet` to access and use the object's properties. For instance, on line 19, the `pete` object collaborates with the `cat` object (via `this.pet`) to access the `cat`'s name.

Collaborator objects play an important role in object-oriented design; they *represent the connections between the different classes* in your program. When working on an object-oriented program, be sure to consider what collaborators your objects need and whether those associations make sense, both from a technical standpoint and in terms of modeling the problem your program aims to solve.

Let's now develop our program further and change the implementation to let Pete have many pets. How should we implement this? How about an array of `pet` objects?

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pets: [],
};

pete.pets.push(cat);
pete.pets.push(dog);
```

We often talk of collaborators in the context of custom objects like `pet`, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well.

## 7. Single vs Multiple Inheritance

### 7.1 Single Inheritance

Objects can only inherit from one object, and classes can extend only one other class. In other words, an object can have only one prototype object. This is single inheritance.



### 7.2 Multiple Inheritance

## 8. Mix-ins; mix-ins vs. inheritance

### 8.1 Mixins

Mixins are more appropriate in a *has-a* relationship. While it is sometimes tricky to choose one or the other, a great guideline is to decide if you want some additional functionality, or if you want to extend the abilities of the class.

JS120 - Object Oriented JavaScript > Easy > 9. Moving

### 8.2 Mixins vs Inheritance

## 9. Methods and Functions; Method Invocation vs. Function Invocation

### Methods on Object.prototype

The `Object.prototype` object is at the top of all JavaScript prototype chains. Thus, its methods are available from any JavaScript object provided you don't explicitly use something like `null` as the prototype object. Here are 3 useful methods:

- `Object.prototype.toString()` returns a string representation of the object.
- `Object.prototype.isPrototypeOf(obj)` determines whether the object is part of another object's prototype chain.
- Object.prototype.hasOwnProperty(prop) determines whether the object contains the property.

### Objects Without Prototypes

Several times we've said that JavaScript objects all have a prototype object and that the prototype chain ends with `Object.prototype`. In reality, there is a way to create objects that don't have a prototype and, hence, do not have a prototype chain that ends with `Object.prototype`. However, as you're well aware by now, JavaScript is full of surprises waiting to bite the unwary developer.

It turns out that you *can* create an object that doesn't have a prototype by setting the prototype to `null`. This technique is a bit unusual and not seen very often. However, it lets you create a "clean" or "bare" object for use as a general key/value data structure. The bare object doesn't carry around a bunch of excess baggage in the form of unneeded properties and prototypes:

```sh
> let a = Object.create(null)
undefined

> Object.getPrototypeOf(a)
null
```

Note that objects created in this way do not have access to Object methods like `Object.prototype.hasOwnProperty()` or `Object.prototype.toString()`. They also don't have a prototype chain that ends with `Object.prototype` -- it ends with `null`.

For the most part, you can *assume that all JavaScript objects have* `Object.prototype` at the top of their inheritance chain. You can also assume that all objects can use the usual selection of Object properties. However, be wary of situations where bare objects may be in use. If you have bare objects in your program, you must remember that the usual `Object` properties and methods don't exist on those objects. That's why you sometimes see code like this:

```js
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
  // obj has a non-null prototype AND
  // obj is in the prototype chain of car
}
```

If you don't first check whether `obj` has a non-`null` prototype, this code will raise an exception if `obj` has a `null` prototype. Even this code won't work properly if `obj` inherits from an object whose prototype is `null`.

Library developers often write code to check for the **bare object edge cases**. Since their code will see use in many different environments, they need to be ready for such unusual objects.

### 9.1 Method Invocation

Function invocations (e.g., `parseInt(numberString)`) rely upon implicit execution context that resolves to the global object. Method invocations (e.g., `array.forEach(processElement)`) rely upon implicit context that resolves to the object that holds the method.

### 9.2 Function Invocation

## 10. Higher-order functions

JavaScript has first-class functions that have the following characteristics:

- You can add them to objects and execute them in the respective object's context.
- You can remove them from their objects, pass them around, and execute them in entirely different contexts.
- They're initially unbound but dynamically bound to a context object at execution time.

## 5. Function Expressions

Before you start this assignment, take a little time to review the section on the [three ways to define](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction) a function from our introductory JavaScript book.

### 1. Function Declarations vs Function Expressions

Take a look at the following function definition.

```js
function prompt(message) {
  console.log(`=> ${message}`);
}
```

Functions defined with this syntax *can be invoked before the declaration in the program*:

```js
prompt('How are you today?');

function prompt(message) {
  console.log(`=> ${message}`);
}
```

This code works since *the JavaScript engine runs our code in two passes*. During the first pass, it does some preparatory work, while the second executes the code. One action that occurs during the first pass is called **hoisting**; the engine effectively moves function declarations to the top of the program file in which they're defined, or the top of the function in which they are nested. The result is that the above code acts as though you wrote it like this:

```js
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('How are you today?');
```

Note that you'll never see this hoisted code when working with JavaScript. *Hoisting is an internal step performed by the engine*; it doesn't move any code around. However, it's useful to think of hoisting in this way, so long as you understand that your code is not changed.

Hoisting isn't limited to function declarations. We'll discuss it in more detail later in the curriculum.

Function definitions that are the first thing on a line are known as **function declarations**. On the other hand, **function expressions** are function definitions that are part of an expression. For instance, the code in the above example shows `prompt` as a function declaration; the next example shows `foo` as a function expression: it is *not* a declaration.

```js
(function foo() {

})
```

You can test whether a function definition is a function declaration by trying to call it before the declaration. You can't call a function expression until after the expression is evaluated:

```js
// NOTE: Run this code from a file; don't use the REPL

bar();
function bar() {
  console.log("this is bar");
}

foo();
const foo = function() {
  console.log("this is foo");
};
```

```sh
$ node functions.js
this is bar
/Users/foobar/projects/functions.js:6
foo();
^

ReferenceError: Cannot access 'foo' before initialization
```

Typically, we assign a function expression to a variable or object property, pass it to another function, or return it to a calling function. For instance:

```js
let prompt = function() { // Assign to a variable

};

[1, 2, 3].forEach(function(elem) { // pass to another function
  console.log(elem);
});


function makeIncrementer(increment) {
  return function(value) { // return to caller
    return value + increment;
  }
}
```

Notice that we can define function expressions without giving them a name. You may argue that `prompt` is the name of the function we defined on line 1, but that's not the case: instead, we've *assigned an unnamed function to the prompt variable*. Such unnamed functions are called **anonymous functions**. Anonymous functions are commonplace in JavaScript code, so be prepared to understand them. You've already seen examples with the callback functions for array methods like `forEach` and `map`: the callback functions for these methods are often anonymous functions.

```js
let squaredNums = [1, 2, 3].map(function(num) {
  return num * num;
}); // => [1, 4, 9]
```

Function expressions don't have to be anonymous. You can name a function expression:

```js
let squaredNums = [1, 2, 3].map(function squareNum(num) {
  return num * num;
}); // => [1, 4, 9]
```

The main advantage of naming a function expression occurs when the function throws an error (raises an exception). If the function has a name, the stack trace uses that name to help you determine where the error occurred. Without the name, JavaScript merely reports the location as "anonymous."

The function name given to a function expression is **not visible** in the scope that includes the function expression.

```js
let foo = function bar() {};
foo();         // This works
bar();         // This does not work (line 3)
```

`foo` is a local variable that contains a reference to the function, so we can invoke the function using `foo()`. However, the function name, `bar`, is not in scope on line 3, so `bar()` does not work.

The function name on a function expression is visible inside the function, which is useful when working with recursive functions. We won't trouble you with an example at this time.

End 20220302 21:35

### 2. Arrow Functions

There's no declaration syntax for arrow functions; arrow functions are always function expressions. That means that we often pass them around or assign them to variables or properties. Also, arrow functions are **always anonymous**: there's no way to define a named arrow function. Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments and return values. We'll discuss immediately invoked functions in a later course.

### 3. First-Class Functions

You'll often see the phrase **first-class functions** or **first-class objects** when discussing JavaScript functions. It merely refers to the fact that functions in JavaScript are values that we can assign to variables and properties, pass them to other functions, or return them from another function.

Functions of all kinds, including declared functions, can be treated as values:

```js
function say(words) {
  console.log(words);
}

let speak = say;

speak('Howdy!');   // logs 'Howdy'
```

In this example, we declare a function `say()` and then assign it to the variable `speak`. We then invoke the function using `speak` as a handle. Note that we can still call the function using `say` as well -- both `say` and `speak` refer to the same function.

Here's another example:

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum);
// Number: 1
// Number: 2
// Number: 3
```

In this case, we're passing the function `logNum()` as an argument to the `forEach` method, which calls it three times. With each invocation of `logNum`, `forEach` passes it one of the array elements as an argument.

Notice that *we don't use invocation syntax*, `()`, when passing `logNum` as an argument to `forEach`. If we did, it would throw a `TypeError` exception since `forEach` expects a function; instead of passing a function, though, we would be passing `undefined`, the return value of `logNum()`.

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum());
// Uncaught TypeError: undefined is not a function
```

The takeaway is that you *should not invoke functions when you want to use them as* **values**. Use invocation only when you need to run the code in the function.

Let's return to the following example:

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum);
// Number: 1
// Number: 2
// Number: 3
```

This code is functionally identical to the following code:

```js
[1, 2, 3].forEach(function logNum(num) {
  console.log('Number: ' + num);
});
```

The only difference is that we're *using a function expression* instead of a variable.

We can also *use an arrow function* to do the same thing:

```js
[1, 2, 3].forEach(num => {
  console.log('Number: ' + num);
});
```

In this case, though, the function is anonymous. The results, however, are identical.

The point we want you to remember is that you can *treat any function as you would any other JavaScript value: remove the invocation syntax, and you've got an expression whose value is a function*. You can do whatever you want with that value (at least within the limits of what JavaScript can do).

### 4. Type of a Function Value

Since functions are first-class values in JavaScript, and all values in JavaScript have a type, functions must also have a type. Right? That's correct! Let's use the handy `typeof` operator to determine the type of a function value:

```js
let myFunc = function() {};
console.log(typeof myFunc); // 'function'
```

### 5. Function Expressions Summary

Functions in JavaScript are first-class values, just like any other value in JavaScript. You can use them any place that you can use an expression. To use a function as an expression, write its name without the parentheses of invocation. All functions have a type of `function`, which is a kind of object with properties and methods.

## 6. Higher Order Functions

The fact that JavaScript treats functions as values means that we can have a special kind of function in our programs: a **higher-order function**. A higher-order function is a function that has at least one of the following properties:

1. It takes a function as an argument.
2. It returns a function.

### 1. Functions that Accept Functions as Arguments

We've seen many examples of functions that have the first property. Specifically, array methods like `forEach`, `map`, `filter`, and `reduce` each take a function argument. As these methods show, functions that take other functions give the developer a lot of power and flexibility.

Let's pretend that we don't have a `map` method on JavaScript arrays. If we want to implement some code that squares all the elements of an array, we'd probably come up with something like this:

```js
function mapNumsToSquares(nums) {
  let squaredArray = [];

  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    squaredArray.push(current * current); // line 6
  }

  return squaredArray;
}
```

This approach is valid, and you'll see functions like this in languages that don't have first-class functions (nor the closely related concept of lambdas). However, squaring the numbers in an array almost certainly won't be the only type of mapping you'll need in your application. Suppose that we need another function that uppercases all the elements in an array of strings. The solution may look like this:

```js
function uppercaseStrings(strings) {
  let capStrings = [];

  for (let index = 0; index < strings.length; index++) {
    let current = strings[index];
    capStrings.push(current.toUpperCase()); // line 6
  }

  return capStrings;
}
```

The only significant difference between these two functions is line 6 of each function where we either square a number or uppercase a string; everything else follows the same general structure:

- Declare and initialize the result array.
- Iterate over the input array.
  - Add mapped values to the result.
- Return the result.

Can we abstract away the similar structure of the two functions and leave the specific mapping operation up to the function's caller to decide? That's what `map` does for us: it abstracts away the mechanics of mapping an array and leaves the details for the developer to provide at runtime. She does that by providing a function as an argument. The result is much more powerful and versatile:

```js
arrayOfNums.map(num => num * num);
arrayOfStrings.map(string => string.toUpperCase());
```

The `map` method, along with several other array methods, is a higher-order function since it takes another function as an argument.

### 2. Functions that Return a Function

In the previous section, we saw an example of how a higher-order function that takes another function lets us write elegant and flexible code. Let's look at another useful application of higher-order functions by having one return another function.

You can think of a function that returns another function as a function factory: it creates and returns a new function. Typically, the function factory uses the arguments you pass to it to determine the specific job performed by the function it returns.

To truly appreciate how useful this is, you need to understand closure; we're not ready for that, though -- we'll discuss the topic later. For now, we can use a contrived example to demonstrate the mechanics of functions returning other functions. Let's use a simple `greeter` function as an example, one that can log greetings in multiple languages:

```js
function greet(language) {
  switch (language) {
    case 'en':
      console.log('Hello!');
      break;
    case 'es':
      console.log('Hola!');
      break;
    case 'fr':
      console.log('Bonjour!');
  }
}

greet('fr'); // logs 'Bonjour!'
```

This implementation works, but if we're using a particular language over and over, we need to provide the language string every time. That's not a big deal, but it would be useful if we only had to provide the language once. Instead of a `greet` function, let's implement a greeter factory that lets us create a greeter function for a given language.

```js
function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterEs = createGreeter('es');
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'
```

This code doesn't provide a significant improvement or convenience for the developer, but it does illustrate how we might use a function that returns another function in our code.

### 3. Higher Order Functions Summary

Higher-order functions are functions that return another function or take another function as an argument. Higher-order functions let the programmer use powerful and flexible abstractions.

## 11. The Global Object

## 7. The Global Object

JavaScript creates a global object when it starts running. It serves as the **implicit execution context** for function invocations, a term that we'll study later in this lesson. For now, we'll use the term casually, but we'll learn much more later.

In Node.js, the global object is the object named `global`; in the browser, it's the `window` object. You can investigate this in the node REPL or a browser's console:

```sh
> global
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: [Getter/Setter],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
```

The global object is available everywhere in your program and houses important global properties. In the previous course, we talked about **global values** such as `Infinity` and `NaN`, and **global functions**, such as `isNaN` and `parseInt`. All these entities are properties of the global object! In your console, you can look at the global object to examine those properties.

```sh
> global.isNaN      // [Function: isNaN]
> global.Infinity   // Infinity
```

Note: don't use `isNaN` in your code. Use `Number.isNaN` instead. The bare `isNaN` function has some odd behavior:

```sh
Number.isNaN('I am not a number');   // false - this is a correct value
isNaN('I am not a number');          // true - string gets coerced to NaN
```

As with other JavaScript objects, you can add properties to the global object at any time:

```sh
// in Node
> global.foo = 1
> global.foo       // 1
```

```sh
// in a browser
> window.foo = 1
> window.foo       // 1
```

### 1. The Global Object and Undeclared Variables

The global object has an interesting property: whenever you assign a value to a variable without using the `let`, `const`, or `var` keywords (we'll discuss `var` later), the variable gets added to the global object as a property. Let's see an example:

```js
foo = 'bar';
global.foo; // => 'bar' (in Node)
window.foo; // => 'bar' (in a browser)
```

Without a keyword, *the variable gets added to the global object as a property*. You can even access such variables without using the global object as the caller:

```js
foo = 'bar';
foo; // => 'bar'
```

Whenever you try to access a variable for which there are no local or global variables with the variable's name, JavaScript looks at the global object and looks for a property with that name. In this example, since there are no local or global variables named `foo`, JavaScript looks in the global object and finds the `foo` property. As a result, line `2` is identical to `global.foo`; it returns the value of the property `foo` from the global object.

We discuss the global object here since you need to know where JavaScript gets all those global entities like `NaN`, `Infinity`, and `setTimeout`. It's not very often that you'll need to modify the global object, but you'll sometimes use it to set properties in Node that you need in multiple modules. We'll discuss Node modules in the next course.
When JavaScript runs a program, it creates an object that is accessible throughout your entire program called the **global object**. In 

`global`
`window`

## 12. Method and Property Lookup Sequence

### Property Look-Up in the Prototype Chain

When you access a property on an object, JavaScript first looks for an "own" property with that name on the object. If the object does not define the specified property, JavaScript looks for it in the object's prototype. If it can't find the property there, it next looks in the prototype's prototype. This process continues until it finds the property or it reaches `Object.prototype`. If `Object.prototype` also doesn't define the property, the property access evaluates to `undefined`.

The implication here is that when two objects in the same prototype chain have a property with the same name, the object that's closer to the calling object takes precedence. Let's see an example:

```js
let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2;
```

How about *setting a property*? What do you think happens when we set the `foo` property on object `c` to a different value?

```js
c.foo = 42;
```

Is `b.foo` assigned to `42` by this code? How can you test that in node?

```js
let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2
c.foo = 42;
console.log(c.foo); // => 42
console.log(b.foo); // => 2
```

Interesting! Object `b` wasn't mutated! When assigning a property on a JavaScript object, it always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, `foo` becomes an "own" property of `c`:

```js
console.log(c.hasOwnProperty('foo')); // => true
```

The discussion of inheriting *properties* from other objects *applies to methods as well*. Methods in JavaScript are merely *properties that refer to functions*. Thus, when we talk about object properties, we also mean methods.

## 13. Function Execution Context and `this`

You can *access the properties and methods of an object from within a method* using the `this` keyword.

The `this` keyword lets us refer to the properties and methods of the object. Inside the methods, the `this` keyword lets us refer to the properties and other methods of the object.

So, the `this` keyword is basically a dynamic pointer right? whose value depends on where it's being referenced and how. I guess in classical inheritance their equivalent to the `this` keyword always references the object and it doesn't change.

Thus far in our example, we refer to the object from inside the methods by directly using the variable name, `raceCar`. Suppose we change the variable name or pass the object to a function that refers to its arguments by a different name. In that case, calling a method with the original variable name will *throw a reference error*. We need some way to refer to the object that contains a method from other methods in that object. The keyword `this` provides the desired functionality:

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};
```

The workings of `this` is one of the most difficult JavaScript concepts to grasp; it's the source of a great deal of confusion. We'll talk about it extensively in the next lesson. For now, you can assume that when you use `this` inside a method, it *refers to the object that contains the method.*

### What is `this`?

5. The value of `this` is the current execution context of a function or method.

6. The value of `this` changes based on how you invoke a function, not how you define it.

The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where it is used:

- Alone, `this` refers to the **global object**.
- In a function, `this` refers to the **global object**.
- In a function, in strict mode, `this` is `undefined`.
- In a method, `this` refers to the calling object.
- Method calls like `call()`, and `apply()` can refer `this` to any object.
- In an event, `this` refers to the **element** that received the event.


## 8 Implicit and Explicit Execution Context

It's crucial to understand how the execution context, i.e., the value of `this`, is determined and what it refers to in various scenarios. All JavaScript code executes within a context. The top-level context is the `window` object in browsers and the `global` object in Node. All global methods and objects, such as `parseInt` and `Math`, are properties of `window` or `global`.


### `new` and Implicit Execution Context

In an earlier lesson, we discussed how a function could receive an implicit execution context. In particular, function and method calls provide an implicit context. For a function call, the implicit context is the global object; for a method call, it's the object used to call the method.

Now that we know about constructors, we can add a constructor call with `new` as a third way to provide an implicit execution context. When you call a function with `new`, its implicit context is the new object.

### 8.1 Execution Context

Earlier, we met the keyword `this` when talking about object methods. At the time, we said that `this` refers to the object that contains the method. That's true, but there's a bit more nuance to how JavaScript determines the value of `this`. In this assignment, we'll discuss `this` and how JavaScript determines its value in a function or method call.

If we're discussing `this`, why, then, does this section's title refer to **execution context**? The execution context -- or **context** -- is a concept that refers to the **environment** in which a function executes. In JavaScript, it most commonly refers to the current value of the `this` keyword. When we talk about the execution context of a function or method call, we're talking about the value of `this` when that code executes. The context depends on *how the function or method was invoked*, not on where the function was defined.

Put another way, how you invoke a function or method determines its execution context for that invocation. It doesn't matter how you define the function or method, nor does it matter where or when you call it. The only factor that determines the context is how you call the function or method. In other words, two invocations of the same function or method can have very different contexts depending on how you make those calls. Remember this point: it's crucial to understanding JavaScript.

There are two basic ways to set the context when calling a function or method:

1. **Explicit**: The execution context that you set explicitly.
2. **Implicit**: The execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

Setting the execution context is also called **binding** this or **setting the binding**. A binding is something that ties two things together. In this case, it refers to the fact that a call binds `this` to a specific object when the function or method is called.

### 8.2 Function Execution Context (Implicit)

Every JavaScript function call has an execution context. In other words, the `this` keyword is available to every function in your JavaScript program. Every time you call that function, JavaScript binds some object to `this`.

Let's define a function and use `this` within it to see what happens:

```js
function foo() {
  console.log("this refers to: " + this);
}

foo();
// this refers to: [object global]
```

Within a regular function call (e.g., `foo()`), JavaScript sets the binding for `this` to the global object. (Remember: in Node, the global object is called `global`; in a browser, it is `window`.) That means that when you use `this` inside the function, it refers to the global object. If you use `this` to access or modify properties, you will access or modify properties on the global object:

```js
function foo() {
  this.bar = 'bar';
}

foo();
global.bar; // 'bar'
```

That makes sense at some level. Since all function calls have an execution context, and since a regular function call does not provide an explicit context, JavaScript supplies an implicit context: the global object. We say that this execution context is **implicit** since the function invocation doesn't supply an explicit alternative.

#### 8.2.1 Strict Mode and Implicit Context

We're not yet ready to learn about JavaScript's "strict mode", but there is one aspect of strict mode that you should be aware of: when strict mode is enabled, the implicit `this` is assigned to `undefined` instead of the global object:

```js
"use strict"; // the quotes are required

function foo() {
  console.log("this refers to: " + this);
}

foo(); // this refers to: undefined
```

We'll learn more in the next course. For now, just be aware of this behavioral change. You may run into strict mode without realizing it. For instance, it shows up in JavaScript classes and in Coderpad, the environment we use for assessment interviews.

### 8.3 Method Execution Context (Implicit)

We learned earlier that when you call a method that belongs to an object, the execution context inside that method call is the object used to call the method. We call that **method execution context**. Is this an implicit or explicit execution context, however? At first glance, it's easy to look at that calling object as explicitly providing the context. You're not really wrong if that's how you see it. However, method execution syntax is usually said to provide an implicit context; we're using an explicit object to call the method, but JavaScript is interpreting that object as the implicit context. For this reason, we usually say that method calls provide an implicit execution context.

```js
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }
```

It's easy to see that the execution context inside a method call is the object used to call the method.

Be careful, however. The first-class nature of JavaScript functions has ramifications for the execution context. Remember that the context is determined solely by how you call the function or method. Here, `foo.bar()` is considered a method call since we *call it as a method*; that is, we use the method call syntax `object.method()`. Since JavaScript functions are first-class objects, `bar` can be called in other ways that change the context:

```js
let baz = foo.bar;
baz(); // Object [global] {...}
```

In this code, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object. What should `baz()` log then? Since `baz` references a method of the `foo` object, you may think that its execution context must be `foo`. That's wrong though: as we've repeated several times, the execution context is determined entirely by how a function or method is called. Since we're calling `baz` as a standalone function, its execution context is the global object, not the `foo` object.

### 8.4 Explicit Function and Method Execution Context

Using parenthesis after a function or method name is not the only way to invoke it. As we've seen, when you invoke a function with parentheses, JavaScript uses the global object as the implicit context; when you invoke a method, it uses the object that you used to call the method as the implicit context.

There are, however, several ways to subvert this behavior. You can provide an explicit context to any function or method, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even `null` -- as the execution context for any function or method. There are two main ways to do that in JavaScript: `call` and `apply`.

#### 8.4.1 Explicit Execution Context with `call`

In previous assignments, we said that JavaScript functions are objects: they have properties and methods just like any other object. One method that all JavaScript functions have is the call method. The call method calls a function with an explicit execution context. Let's see how that works:

```js
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42
```

That's interesting! We can call the `logNum` function and tell it to use `obj` as its execution context. When we use call in this manner, `this` refers to the `obj` object inside the `logNum` function. The first argument to `call` provides the explicit context for the function invocation.

Again, we see that a function's definition has no bearing on its execution context. The context doesn't get determined until we invoke the function; in this case, we're using `call` to invoke it and set the context.

The code is functionally similar to the following:

```js
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

obj.logNum = logNum;
obj.logNum(); // logs 42
```

Those last two code examples aren't identical, however. In the second example, we add a new property to the `obj` object; we don't mutate the object when we use `call`.

You can also use `call` to explicitly set execution context on methods, not just functions:

```js
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs 42
```

The behavior here is similar to:

```js
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj2.logNum = obj1.logNum;
obj2.logNum(); // logs 42
```

Again, there is a difference: in this case, we *mutate* `obj2` when we give it a `logNum` property that it didn't have before.

You may have already spotted a problem with this pattern. Suppose our function takes arguments. How do we provide them? Let's see an example to illustrate this point:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};
```

We want to call `sumNum` in such a way that it updates `obj.num`. Fortunately, the `call` method lets us pass arguments as a comma-separated list to our function:

```js
obj.num = sumNum.call(obj, 5);
console.log(obj.num); // => 47
```

Again, we can understand this better if we try to write the code more directly:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

obj.sumNum = sumNum;
obj.num = obj.sumNum(5);
console.log(obj.num); // => 47
```

You can, of course, add as many arguments to the `call` method invocation as the function needs. Let's see another, more complex example:

```js
let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'Kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price / 100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');        // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');      // => 2: Kindle, 300 dollars.
```

The general syntax for `call` is as follows:

```js
someObject.someMethod.call(context, arg1, arg2, arg3, ...)
```

#### 8.4.1 Explicit Execution Context with `apply`

The apply method works in much the same way as call. The only difference is that apply uses an array to pass any arguments to the function. Here's the general syntax:

```js
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])
```

`apply` is handy when you have the list of arguments in an array. With modern JavaScript (ES6 and higher), `apply` isn't needed since *you can use call in conjunction with the spread operator to accomplish the same thing*:

```js
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
```

### Implicit and Explicit Execution Context Summary

All JavaScript functions and methods execute within an execution context, sometimes called its `this` binding. How `this` gets bound depends entirely on how the function is invoked. You can't tell a function's execution context by merely looking at how and where it's defined; y*ou must examine the invocation itself*.

Regular function calls use the global object as their execution context, while method calls use the calling object as their context. You can override this behavior by setting the execution context explicitly with either `call` or `apply`.

The mechanics of context binding is an essential but difficult concept. Most difficulties arise from forgetting that *JavaScript does not use lexical scoping rules to determine the binding*. For instance, if you use `this` inside a method of `obj`, you expect that `this` refers to `obj`. However, that's not always the case. It's important to remember that the rules for `this` are entirely different from the rules for variable scope. While a variable's scope is determined by where you write the code, `this` *depends on how you invoke it*.

The execution context is determined by *how you invoke a function or method*. We can't emphasize this enough.

## 10. Hard Binding Functions with Contexts

In the previous two assignments, we learned about two methods on function objects that we *can use to set the execution context of function and method calls explicitly*: `call` and `apply`. JavaScript has a third way to specify the context: the `bind` method on function objects. `bind` works a little differently, however. Let's see an example:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
sumNum2(5); // => 47
```

In this example, we don't call the function immediately as we do when using `call` and `apply`, Instead, bind returns a new function. The new function is **permanently** bound to the object passed as bind's first argument. You can then pass that method around and call it without worrying about losing its context since it's *permanently bound* to the provided object.

Let's see another example:

```js
let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
bar();  // "undefined undefined"

let baz = object.foo.bind(object);
baz(); // "hello world"
```

An interesting and important property of permanently bound functions is that *you cannot change their execution context*, even if you use `call` or `apply` or call `bind` a second time. Continuing with the code from the previous example:

```js
let object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2);  // "hello world" - `this` still refers to `object`
```

JavaScript implements the `bind` method something like this:

```js
Function.prototype.bind = function (...args) {
  let fn = this;
  let context = args.shift();

  return function () {
    return fn.apply(context, args);
  };
};
```

While you've learned enough to understand most of that code, it's not really important to wrap your head around it. What's important to recognize is that `bind`'s context is the original function, and it returns a new function that calls the original function with the context supplied to bind as its first argument. This code also shows why *the binding makes permanent changes* -- no matter what you do to the returned function, you can't change the value of `context`.

A trap that students often fall into is the thinking that `bind` permanently alters the original function. It's important to remember that `bind` *returns a new function*, and that new function is permanently context-bound to the object provided as the first argument to `bind`. The original function isn't changed and doesn't have its context changed.

It's also important to understand that bind does not contradict our repeated statement that context is determined entirely based on how you call a function or method, not where you call it or how you define it. Technically, `bind` defines a new function. However, when we call that function, its implementation -- as shown above -- calls the original function using `apply`. Thus, it's still the "how" of the call that determines the context, not the definition or location.

Let's close this assignment with a final example:

```js
let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, '
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');
```

In this example, we bind the `greeting` function to the `spanishWords` object and assign the result to `spanishGreeter`. When we call `spanishGreeter`, JavaScript uses `spanishWords` as the context. Thus, `spanishGreeter('Jose')` will log something like `'Buenas tardes, Jose'` instead of `'Good afternoon, Jose'`.

### 10.1 Hard Binding Functions with Contexts Summary

In this assignment, we saw a third way to specify the execution context. Unlike `call` and `apply`, though, `bind` *returns a new function that is permanently bound to the context that's provided to bind as the first argument*. You cannot alter the execution context of the resulting function, even if you use `call`, `apply`, or try calling `bind` a second time.

## 15. Dealing with Context Loss

## 12. Dealing with Context Loss I

In the next three assignments, we'll discuss how functions and methods can "lose context." We've used quotes since functions don't lose their execution context in reality -- they always have one, but it may not be the context that you expect. If you understand how execution context is determined, you shouldn't be surprised by the value of `this` in any given scenario. That said, how a specific context is arrived at isn't always intuitive. Even when you understand the rules, the context for any given invocation may surprise you.

In these assignments, we'll talk about the different scenarios and how to deal with them. In this first assignment, we'll study what happens when a method is copied out of an object and used elsewhere.

### 12.1 Method Copied from Object

In an earlier assignment, you saw what happens when you take a method out of an object and execute it as a function or as a method on another object. In either case, the function's context is no longer the original object. For instance:

```js
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john
let foo = john.greetings; // Strips context
foo(); // context is now the global object
```

You could use `foo.call(john)` to restore the original context, but suppose you don't execute the function right away or you need to pass it to another function for execution? By the time `foo` gets called, `john` may be out of scope.

```js
function repeatThreeTimes(func) {
  func(); // can't use func.call(john); john is out of scope
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); // Strips context
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

One way to solve this problem is to change `repeatThreeTimes` to accept the context object as a second parameter, then pass the context to `repeatThreeTimes` when calling it.

```js
function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// hello, John Doe
// hello, John Doe
// hello, John Doe
```

Some of JavaScript's built-in methods, such as the Array abstraction methods like `forEach`, `map`, and `filter`, use this technique. Such methods take a callback function as an argument and an optional `thisArg` context object that gets used as the callback's execution context.

However, it's not always possible to pass a context argument to a function or method; you may not even be able to change the function if, say, it belongs to a third-party library. Besides, it's generally not a good idea to pass a lot of arguments to your functions; the more arguments a function can accept, the harder the function is to use.

Another approach you can use is to hard-bind the method's context using `bind`:

```js
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe
```

`bind` has one significant advantage: once you bind a context to a function, that *binding is permanent* and does not need to be repeated if it gets called more than once. The disadvantage of `bind` is that it is no longer possible to determine the context by looking at the invocation of the final function.

In the next assignment, we'll study how functions can lose their surrounding context. Loss of surrounding context is a common issue when dealing with functions nested within object methods.

## 13. Dealing with Context Loss II

In this assignment, we'll see how **nested functions** *suffer from context loss*.

### 13.1 Inner Function Not Using the Surrounding Context

Examine the following code:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar(); // line 9
  },
};

obj.foo();  // => undefined undefined
```

By now, you should be able to understand why this code logs `undefined` `undefined` instead of `hello world`. However, the behavior is not intuitive, so don't worry if you can't see the problem just yet.

As we've said repeatedly, a function or method's execution context depends solely on how you invoke it, not on how and where it's defined. Here, `bar` is invoked as a standalone function on line 9. Thus, its execution context is the global object, not the `obj` object that you may have expected.

Let's examine some solutions to this problem.

#### 13.1.1 Solution 1: Preserve Context with a Variable in Outer Scope

One common way to preserve the context in this scenario is to use something like let s`elf = this` or `let that = this` in the outer function. If you define the `self` or `that` variable -- these names are idiomatic, and not a required name --- in the outer scope, you can use that variable and whatever value it contains inside your nested inner function(s).

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this; // line 5

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo(); // => hello world
```

In this example, line 5 assigns `this` to the local variable `self`. Since JavaScript uses lexical scoping rules for variables, `bar` can access `self` within its body; that lets us use it instead of `this` to access the correct context object.

#### 13.1.2 Solution 2: Call Inner Functions with Explicit Context

You can also use `call` or `apply` to explicitly provide a context when calling the inner function. For instance:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  },
};

obj.foo(); // => hello world
```

We won't show an example of `apply` since you can always use `call` in its place if you use the spread operator to expand `apply`'s array argument.

#### 13.1.3 Solution 3: Use `bind`

A third approach is to call `bind` on the inner function and get a new function with its execution context permanently set to the object.

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

Note that we're calling bind on the function expression here, then assigning the returned function to the bar variable. You can also use a function declaration instead of a function expression, but you'll need an extra variable:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    let qux = bar.bind(this);

    // some code
    qux();

    // some more code
    qux();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

One advantage of `bind` is that you can do it once and then *call it as often as needed without an explicit context*.

#### 13.1.4 Solution 4: Using an Arrow Function



Arrow functions have a property that comes in very handy when dealing with context loss; they inherit their execution context from the surrounding context. That means that an arrow function defined inside another function always has the same context as the outer function's context:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

Using arrow functions like this is similar to using bind in that you don't have to worry about arrow functions losing their surrounding context. An arrow function, once created, always has the same context as the function that surrounded it when it was created.

Of all the techniques we saw in this assignment, using arrow functions is the most common these days.

#### 13.1.5 Don't Use Arrow Functions as Methods on an Object

Despite how useful arrow functions are for avoiding context loss, *you should not try to use them as methods on an object*. They don't work as expected.

```js
let obj = {
  a: 5,

  foo: () => {
    console.log(this.a);
  },
};

obj.foo(); // => undefined
```

The reason that this code doesn't work is that arrow functions always get the value of `this` from the surrounding context. In the code shown above, it certainly looks like the surrounding context is `obj`, so shouldn't `this` refer to `obj`? Despite appearances and what your logic tells you, that isn't the case.

The surrounding context is, in fact, the `global object`. The reason for that is simple: the `let` statement in this example *is in the program's top-level code*, so its context is the global object. That means that `this` inside the object literal is also the global object, so `this` on line 5 refers to the global object, not `obj`.

When using `node` to execute a file, e.g., `node somefile.js`, the surrounding context is the `module`, not the global object. This can cause a certain amount of confusion when working with node in both REPL and file modes. We'll discuss modules in a later course.

You may have noticed that `this` in `obj.foo` is not determined by how the method is called. We call the method on line 9, and we seem to be telling JavaScript to use obj as the context. Instead, the context ends up being the global object. That seems to contradict our repeated statements that the context is determined entirely by how a function or method is invoked. That's clearly not the case here; it certainly violates the rule. However, *you won't usually see code like this in practice.*

In general, you should not use arrow functions to write methods. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), "Arrow function expressions are ill suited as methods, and they cannot be used as constructors." The example shown here demonstrates one reason why that is so: it doesn't follow the rules. As long as you don't try to use arrow functions as methods, you can ignore this exception.

In the next assignment, we'll study how functions can lose their context by being passed as arguments.

## 14. Dealing with Context Loss III

In this assignment, we'll see how *passing functions as arguments can strip them of their intended context objects*, and see what we can do to deal with that loss.

### 14.1 Function as Argument Losing Surrounding Context

This scenario is a variation of one that we dealt with in the previous assignment. Examine this code:

```js
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

In this example, we use the `john` object to call the `greetings` method, with `john` as its context. `greetings`, in turn, calls the `repeatThreeTimes` function with a function argument whose body refers to `this`. `repeatThreeTimes` *calls its argument three times with an implicit context*. As we've learned, the context is determined by how a function is invoked, so the context for all three invocations will be the global object. Thus, `this` inside the function passed to `repeatThreeTimes` is the **global object**, not `john`.

You might look at this and think that this problem probably doesn't happen often. However, consider the following code:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined
```

That code looks simple enough; it loops over an array and logs some information to the console. The problem, though, is that `forEach` executes the function expression passed to it, so it *gets executed with the global object as context*. Once again, this has the wrong value, and the function doesn't do what we want.

This problem is easy to fix. You can use the same solutions we used to solve a similar problem in the previous assignment.

#### 14.1.1 Solution 1: Preserve the Context with a Variable in Outer Scope

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.2 Solution 2: Use `bind`

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.3 Solution 3: Use an Arrow Function

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.4 Solution 4: Use the optional `thisArg` argument

Some methods that take function arguments allow an optional argument that specifies the context to use when invoking the function. `Array.prototype.forEach`, for instance, has an optional `thisArg` argument for the context. This argument makes it easy to work around this context-loss problem.

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

The array methods `map`, `every` and `some` and others also take an optional `thisArg` argument.

### 14.2 Dealing with Context Loss III Summary

Passing a function as an argument to another function strips it of its execution context, which means *the function argument gets invoked with the context set to the global object*. This problem is identical to the problem with copying a method from an object and using it as a bare function. For instance, the following two code snippets do the same thing:

```js
// Snippet 1
array.forEach(obj.logData);

// Snippet 2
let logData = obj.logData;
array.forEach(logData);
```

In both snippets, the `obj.logData` method gets invoked by `forEach` with the global object as the context, not `obj`.

## 16. `call`, `apply`, and `bind`

8. The `call` and `apply` methods invoke a function with an explicit execution context.

9. The `bind` method returns a new function that permanently binds a function to a context.

10. Arrow functions are permanently bound to the execution context of the enclosing function invocation. When defined at the top level, the context of an arrow function is the global object.

## 17. `Object.assign` and `Object.create`

One object factory can *reuse another object* factory by mixing the object returned by another factory function into itself by using `Object.assign()`.

## 18. Built-in Constructors like `Array`, `Object`, `String` and `Number`

## 19. Reading OO code
