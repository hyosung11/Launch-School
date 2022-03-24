# JS129 Assessment: Object Oriented Programming > Specific Topics of Interest > Study Guide

- [ ] Write down everything you know on every topic in this study guide.
- [ ] Write out examples for every topic.
- [ ] Make code snippets.
- [ ] Write explanations for the code snippets.

Object Oriented Programming is a programming paradigm in which we think about problems in terms of using objects to organize our program.

## 1. Objects, Object Factories (Factory Functions), Constructors and Prototypes, OLOO, and ES6 Classes

### 1.1 Objects

JavaScript defines undeclared variables as properties of the global object. Such properties act like global variables though -- you can access them from anywhere in your program.

object property names are not variables.

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

### 1.3 Constructors and Prototypes

- pseudo-classical inheritance

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

[Common Object Methods](https://elainevuongyt.notion.site/Common-Object-Methods-7d3ed006cfe641508635a40c7ec6f5e4)

### 2.1 Instance Methods

### 2.2 Static Methods

## 3. Prototypal and Pseudo-classical Inheritance

As Karl said today, it's all prototypal inheritance happening in the background, but you can leverage the constructor/prototype pattern to kind of mimic how traditional OOP languages deal with inheritance. So pseudo classical means literally that, mimicking classical inheritance.

### 3.1 Prototypal Inheritance

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

Encapsulation describes the idea of bundling or combining data and the operations that work on that data into a single entity, e.g., an object.

Encapsulation is about bundling state (data) and behavior (operations) to form an object.

In JavaScript, encapsulation is the idea of bundling data and operations associated with that data in a single entity; that is, it's the grouping of related properties and methods in a single object.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects expose a public interface for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. Unfortunately, JavaScript doesn't support access restrictions. There are ways to achieve a degree of access restriction, but they're not perfect.

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
Notice how we're calling both str.indexOf and arr.indexOf by using obj.indexOf where obj is alternately a reference to str or arr.

You can do that with a duck-typed language, but if you try it in a language like C that doesn't support duck typing, it will produce a type error. You can't call methods for 2 or more objects with the same line of code unless the objects have a common superclass. It's much more stringent than JS and Ruby. However, you can still call things that have the same method, just not through a common interface.
```



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

Objects that *help provide state within another object* are called **collaborator objects**, or more simply **collaborators**. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with another object.

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
    console.log(`My pet's name is ${this.pet.name}`);
  },
};
```

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

### 9.1 Method Invocation

### 9.2 Function Invocation

## 10. Higher-order functions

## 11. The Global Object

`global`
`window`

## 12. Method and Property Lookup Sequence

## 13. Function Execution Context and `this`

The `this` keyword lets us refer to the properties and methods of the object.

So, the `this` keyword is basically a dynamic pointer right? whose value depends on where it's being referenced and how. I guess in classical inheritance their equivalent to the this keyword always references the object and it doesn't change. 

### 13.2 What is `this`?

The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where it is used:

- Alone, `this` refers to the **global object**.
- In a function, `this` refers to the **global object**.
- In a function, in strict mode, `this` is `undefined`.
- In a method, `this` refers to the calling object.
- Method calls like `call()`, and `apply()` can refer `this` to any object.
- In an event, `this` refers to the **element** that received the event.


## 14. Implicit and Explicit Execution Context

## 15. Dealing with Context Loss

## 16. `call`, `apply`, and `bind`

## 17. `Object.assign` and `Object.create`

## 18. Built-in Constructors like `Array`, `Object`, `String` and `Number`

## 19. Reading OO code
