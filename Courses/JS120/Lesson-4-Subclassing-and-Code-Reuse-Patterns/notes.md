# Lesson 4: Subclassing and Code Reuse Patterns

## Assignment 1. Introduction

So far in this course, we've discussed a number of different concepts which underpin the Object Oriented Programming paradigm. We've also explored various different ways in which these concepts are implemented in the context of a JavaScript program.

By this point you should be comfortable with the concept of using objects to *encapsulate* data and behavior in order to add structure to your code, and the importance of **function execution context** when working with objects in this way. You should have an understanding of using prototypes to delegate property and method access. You should also be familiar with using object creation patterns in order to create multiple objects of the same **type**.

The advantages of using an object-oriented approach really start to become apparent when you combine some of these concepts together. In this lesson, we'll explore how you can leverage prototypal delegation to create object **subtypes**. This is one way of enabling code re-use within your programs. Another way of enabling code re-use is by using **mix-ins**, we'll look at how to do that too. Finally, we'll tie these ideas together by discussing another of the fundamental pillars of OOP: **polymorphism**.

As well as this, we'll demonstrate the flexibility of object-orientation in JavaScript by exploring another object creation pattern, the OLOO pattern.

## Assignment 2. Object Creation with Prototypes (OLOO)

### 2.1 Review of Factory Function

In a prior lesson, we showed an example of an object creation pattern called the **factory function**. We'll revisit that example and use it to illustrate another object creation pattern that uses prototypes. Here's the code that we saw earlier:

```js
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    }

    stop() {
      this.started = false;
    },
  };
}
```

The `createCar` function takes three arguments and returns a car object with four properties and two methods. We can use it like this:

```js
let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);
```

### 2.2 The OLOO Pattern

As discussed earlier factory functions aren't the only way to create objects in bulk. Another pattern that we can use is the **OLOO** pattern: **Objects Linking to Other Objects**. It uses prototypes and involves extracting properties common to all objects of the same type (e.g., car objects) to a prototype object. All objects of the same type the inherit from the prototype.

Let's do that with car objects. What properties are common to all car objects? Here, those properties are the `start` and `stop` methods. All cars have `make`, `model`, `year`, and `started` properties as well, but each object has different values for those properties. Thus, we don't count them as being common to all cars.

We can extract the `start` and `stop` methods to a prototype object.

```js
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },
};
```

Now that we have a car prototype object, all car objects can inherit from it:

```js
let car1 = Object.create(carPrototype);
car1.make = 'Toyota';
car1.model = 'Corolla';
car1.year = 2016;
```

We can now call `start` and `stop` on the `car1` object since both are accessible through it prototype, `carPrototype`.

```js
car1.start();
car1.started; // => true

car1.stop();
car1.started; // => false
```

Calling `start` and `stop` on the `car1` object changes the state of `car1` even though those methods don't belong to `car1`. That shouldn't come as a surprise since we're using `car1` as the execution context for the calls. When we call these methods, `this` is set to `car1`, so the methods change the `started` property in `car1`.

That's all well and good. We've set up a car prototype that all our car objects can inherit. However, we still have a small problem: *we must set the `make`, `model`, and `year` properties manually every time we create a car object*. Can we automate that? Fortunately, yes; there's more than one way. The most common technique uses an `init` method on the prototype object:

```js
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },
};
```

We can then use it like so:

```js
let car1 = Object.create(carPrototype);
car1.init('Toyota', 'Corolla', 2016);
```

This code is certainly better, but we still need two lines of code to create a new car object. A small improvement to our `init` method can change that as well:

```js
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this; // <-- small improvement to the `init` method
  },
};
```

Since `init` now returns a reference to the car object it was called on, we can chain `create` and `init` and assign the result to the `car1` variable.

```js
let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
```

### 2.3 Advantage of OLOO over Factory Function

You can use both factory functions and the OLOO pattern to bulk create objects of the same type. Though the result is an object creation mechanism in both cases, the OLOO pattern has one significant advantage over factory functions: **memory efficiency**. Since all objects created with the OLOO pattern *inherit methods from a single prototype object*, the objects that inherit from that prototype object share the same methods. Factory functions, on the other hand, create copies of all the methods for each new object. That can have a significant performance impact, especially on smaller devices with limited memory.

However, that doesn't mean that OLOO is decidedly better than the factory pattern. An advantage of the factory pattern is that it lets us *create objects with private state*. If that doesn't make sense to you yet, don't worry. We'll return to this topic in a later course when we discuss **closures**.

## Assignment 3. Practice Problems: Object Creation with Prototypes

### 3.1 Use a factory function to create pet objects. The factory should let us create and use pets like this:

```js
function createPet(animal, name) {
  return {
    animal: animal, // animal,
    name: name, // name,

    sleep: function() { // sleep()
      console.log("I am sleeping");
    },

    wake: function() { // wake()
      console.log("I am awake");
    },
  };
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}`);
neptune.sleep(); // I am sleeping
neptune.wake(); // I am awake
```

### 3.2 Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:

```js
const PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep: function() {
    console.log("I am sleeping");
  },

  wake: function() {
    console.log("I am awake");
  },
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
```

### 3.3 Consider the objects created by the programs in problems 1 and 2. How do objects for the same animal differ from each other?

Objects created with the OLOO have a prototype object that contains the methods associated with the created objects. Since all pets created from the prototype share a single prototype object, they all share the same methods. With the factory function, each object has a copy of all the methods. Thus, objects created by OLOO are more efficient in terms of memory use.

Objects created with the factory function can have private state. Any state stored in the body of the factory function instead of in the returned object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. With OLOO, there is no way to define private state. All object state can be accessed and modified by outside code.

## Assignment 4. Subtyping with Constructors and Prototypes

### 4.1 Introduction

In an earlier lesson, we learned how to use constructors together with prototypes to create objects of the same type. The combination of constructors and prototypes gives us something that resembles a **class**, a construct used in classical OOP languages like Java, Python, and Ruby. A *class is a blueprint for creating objects*. Traditional OOP languages use classes to create distinct objects of a particular type and give those objects the behaviors and state that they need.

Constructors and prototypes let us mimic classes in JavaScript. Until recently, the language had nothing that you could reasonably call a class. That made it hard for developers familiar with class-based languages to switch to JavaScript. One can even argue that constructors and prototypes are part of the language solely to make it easier for developers to switch to JavaScript.

An essential part of the OO paradigm is the concept of inheritance. In most OOP languages, inheritance means something a bit different from the way we use it in conjunction with JavaScript. That can make JavaScript inheritance confusing if you've seen inheritance in other languages. For now, it may be wise to forget what you think you know about inheritance based on those other languages.

Let's look at an example that shows why we might need inheritance in an application. Assume that we have a drawing application that lets the user work with shapes. In this app, the constructor/prototype combination for rectangles might look like this:

```js
function Rectangle(length, width) {
  this.length;
  this.width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
}
```

We can create and manipulate `Rectangle` objects like so:

```js
let rect = new Rectangle(10, 5);
rect.getArea(); // => 50
rect.toString(); // '[Rectangle 10 x 5]'
```

Our `Rectangle` constructor creates rectangle objects that have `width` and `length` as properties and the methods `getArea` and `toString`.

Suppose our application also needs squares. We can set up another constructor/prototype combination for those squares, and then follow the same pattern we used for rectangles:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype.getArea = function() {
  return this.length * this.width;
};

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
sqr.getArea();     // => 25
sqr.toString();    // => "[Square 5 x 5]"
```

There's some code duplication between this code and the `Rectangle` code. In particular, `Square.prototype.getArea` and `Rectangle.prototype.getArea` are identical. That gives us a chance to reuse some code.

We can *use prototypal inheritance to our advantage here*. One way to think about the relationship between `Square` and `Rectangle` is that a square is a special kind of rectangle where both the length and width are the same. We say that `Square` is a **sub-type** of `Rectangle`, or that `Rectangle` is a **super-type** of `Square`. Consider the following code:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.toString() = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
sqr.getArea(); // => 25
sqr.toString(); // "[Square 5 x 5]"
```

Since a function's `prototype` property is writable -- we can change what object it references -- we can reassign `Square.prototype` to an object that inherits from `Rectangle.prototype`. The result is a prototype chain that looks like this:

```js
sqr ---> Square.prototype ---> Rectangle.prototype ---> Object.prototype
```

All objects created by the `Square` constructor inherit from `Square.prototype`, which we have set up to inherit from `Rectangle.prototype`. Thus, all square objects have access to methods on `Rectangle.prototype`. Since `toString` must be different for squares, we override it in `Square.prototype`. That is, we customize `Square.prototype.toString`. Since `getArea` *requires no customization*, we can let square objects use the inherited `Rectangle.prototype.getArea`.

### 4.2 Restoring the `constructor` property

One side-effect of this approach is that the `constructor` property on square objects points to `Rectangle` when it should point to `Square` instead:

```js
// omitted code

sqr.constructor === Rectangle; // => true
```

Why does that happen? It happens since we reassign `Square.prototype` to a new object that inherits from `Rectangle.prototype`, and the `constructor` property for `Rectangle.prototype` points back to `Rectangle`. Thus, `Square.prototype.constructor` points to `Rectangle`. To fix this situation, we merely need to reassign `Square.prototype.constructor` to `Square`:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square; // <-- reassign

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

let sqr = new Square(5);
sqr.getArea(); // => 25
sqr.toString(); // => '[Square 5 x 5]'
sqr.constructor = Square; // => true
```

Why do we need to reassign the constructor property? In most cases, failure to reassign it won't hurt anything, and it certainly doesn't in this code. However, there are [situations where the value of the `constructor` property is important](https://2ality.com/2011/06/constructor-property.html).

### 4.3 Constructor Reuse

If you examine the bodies of the `Rectangle` and `Square` functions, you'll see that they're similar. That suggests that we may be able to use the `Rectangle` constructor in `Square`. To do that, we must *invoke `Rectangle` with its execution context explicitly set to the execution context of `Square`*:

```js
function Square(size) {
  Rectangle.call(this, size, size);
}
```

Our code now looks like this:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.area;
}

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
}

// rect test code omitted

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

// sqr test code omittted
```

### 4.4 Prototypal Inheritance vs Pseudo-classical Inheritance

As used in JavaScript, the term **inheritance** is an *overloaded word*. It describes two related but distinct forms of inheritance: **prototypal** and **pseudo-classical**.

The *simpler form of inheritance* is **prototypal inheritance** or **prototypal delegation**. We sometimes call this form of inheritance **object inheritance** since it works with one object at a time. An object's internal `[[Prototype]]` property points to another object, and the object can delegate method calls to that other object. We've seen plenty of examples of prototypal inheritance in earlier assignments. For instance:

```js
let humanPrototype = {
  myName() { return this.name; },
  myAge() { return this.age; },
};

let personPrototype = Object.create(humanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

Here, the `will` object inherits from the `personPrototype` object which, in turn, inherits from `humanPrototype`. `will`'s `[[Prototype]]` property refers to `personPrototype`, and the `[[Prototype]]` property of `personPrototype` refers to `humanPrototype`. When we invoke `toString`, it finds the methods `myName` and `myAge` on the `humanPrototype` object.

In this assignment, we've been using an object creation pattern called **pseudo-classical** object construction, also known as the **constructor/prototype pattern**. In this pattern, we use a constructor function and a prototype object to create objects and provide common methods for those objects. For instance:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return `My name is ${this.name} and I'm ${this.age} years old.`;
}
```

The term "pseudo-classical" refers to the fact that *the pattern mimics classes from other OO languages but doesn't actually use classes*.

This pattern forms the basis of **pseudo-classical inheritance**, also called **constructor inheritance**. When people talk about inheritance in the context of JavaScript, they often mean this kind of inheritance. In pseudo-classical inheritance, a constructor's prototype object (the object referenced by its `prototype` property) inherits from another constructor's prototype. That is, *a sub-type inherits from a super-type*.

For instance, we can *rewrite* the **prototypal inheritance** example to use **pseudo-classical inheritance**:

```js
function Human() {}
Human.prototype.myName = function() { return this.name; };
Human.prototype.myAge = function() { return this.age; };

function Person() {}
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;
Person.prototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // My name is William and I'm 28 years old.
```

Note that using `class` and the `extends` keyword is an alternative form of pseudo-classical inheritance. We'll meet the `extends` keyword a little later. So you'll recognize it later, here's what **pseudo-classical inheritance** looks like with `class` and `extends`:

```js
class Human {
  myName() { return this.name; }
  myAge() { return this.age; }
}

class Person extends Human {
  toString() {
    return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
  }
}

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

Both pseudo-classical and prototypal inheritance *use prototypal delegation under the hood*. If the requested property isn't found, the object delegates the request to the object's prototype object. If the requested property isn't there either, the prototype object delegates the request to its own prototype object. This process follows the prototype chain until the property or method is found or the end of the prototype chain is found.

### 4.5 Practice Problem

Consider the following code:

```js
function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet('Goodbye');
};
```

What happens in each of the following cases? Try to answer without running the code.

**Case 1**

```js
let hello = new Hello();
hello.hi(); // Hello!
```

**Case 2**

```js
let hello = new Hello();
hello.bye(); // TypeError: hello.bye is not a function
```

**Case 3**

```js
let hello = new Hello();
hello.greet(); // undefined
```

**Case 4**

```js
let hello = new Hello();
hello.greet('Goodbye'); // Goodbye
```

**Case 5**

```js
Hello.hi(); // TypeError: Hello.hi is not a function
```

**Solution**

**Case 1** This code logs `Hello!` to the console.

**Case 2** This code raises a `TypeError`. Neither `Hello.prototype` nor its prototype, `Greeting.prototype`, have a `bye` method defined.

**Case 3** This code logs `undefined` to the console. Since `Hello` inherits from `Greeting`, the `hello` object has access to `greet`. However, `greet` takes an argument, which isn't supplied by this code.

**Case 4** This code logs `Goodbye` to the console.

**Case 5** This code also raises a `TypeError`. The `hi` method is defined on `Hello.prototype`, not on the `Hello` constructor itself. Thus, only instances of `Hello` have access to `hi`.

### 4.6 Further Reading

The following article summarizes the topics we've studied so far in this lesson and brings up some interesting aspects of constructors and prototypes that we haven't mentioned. (When is a cat a person?) Be sure to give it a read before you move forward:

[JavaScript Constructors and Prototypes](https://tobyho.com/2010/11/22/javascript-constructors-and/)

Note that the referenced article takes advantage of JavaScript's automatic semicolon insertion mechanism. See the [On Semicolons section](https://launchschool.com/books/javascript/read/preparations#stylishjavascript) of our Introduction to Programming With JavaScript book for more information on why the author can do that.

A Launch School student also wrote a [great article](https://medium.com/launch-school/javascript-design-patterns-building-a-mental-model-68c2d4356538) that may help solidify these concepts in your mind.

End 202203011 7:47

## Assignment 5. Subtyping with Classes
## Assignment 6. Practice Problems: Subtyping with Classes
## Assignment 7. Rewriting OO RPS with Constructors and Classes
## Assignment 8. Code Reuse with Mixins
## Assignment 9. Polymorphism
## Assignment 10. Summary
## Assignment 11. Lesson 4 Quiz 1
