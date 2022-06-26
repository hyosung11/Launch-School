# Assessment JS129: Object Oriented Programming > Part 2: Study Guide for Interview (Version 20220623 11:31)

## Format

We'll conduct the interview like a real job interview, except that we'll limit the discussion to the topics covered in course JS120. Make sure that you are clear on the core concepts from this course. You must be able to explain the concepts with precision and clarity while you write out code examples.

We'll conduct the interview using Slack Calls or Google Meet, together with a collaborative online editor like CoderPad. You should practice using the CoderPad environment before the interview via our demo pad. This pad is for demonstration purposes only; we won't use it during the interview. When you've finished exploring the demo pad, please clear any changes you made so that it's ready for the next person to use.

### Note for CoderPad

CoderPad runs JavaScript code in *strict mode*, which we discuss in depth in the next course. While you don't need to be familiar with all facets of strict mode, there is one aspect that may arise during this assessment: the implicit execution context is `undefined`, not the global object. That means that the value of `this` may be `undefined` at times. For instance:

```js
function foo() {
  console.log(this);
}

foo(); // undefined
```

Be prepared for this change before the interview. If you wish to practice on your own system instead of on CoderPad, add `"use strict"`; to the top of your JavaScript code:

```js
"use strict"; // the quotes are required

function foo() {
  console.log(this);
}

foo(); // undefined
```

## Interview Presentation

The interviewer will ask you to present or teach OOP topics. You should have a strong conceptual understanding of the core concepts in JS120. You should be able to talk about why they exist and how to use them in code and write example code to illustrate the concepts. You'll also need to use that conceptual understanding to reason with and solve various code examples and problems that the interviewer will present.

We'll ask you to speak and drive the conversation, so practice speaking and teaching others on technical topics. Make sure you study the following resources, perhaps going through them more than once.

- [JS120](https://launchschool.com/courses/f8a4a136)
- the written part of the assessment

## Communication Style

We will also assess your ability to communicate with clarity. You should speak in a clear tone and explain concepts with precision and correct vocabulary. **If you've never done this before, you should practice before the interview**. There's a reason the previous sentence is in bold.

Mistakes are normal. If you make one in the interview, we want to see how you recover, or whether you can recover at all.

## Areas of Focus

- [ ] General knowledge of OOP concepts as they pertain to JavaScript.
- [ ] Conventional techniques for constructing objects, including the use of prototypal inheritance.
- [ ] The ability to come up with code examples to illustrate concepts. Be prepared! Know what examples you want to use.
- [ ] The ability to integrate what you've learned and put it to work to understand unusual situations.
- [ ] An ability to speak clearly and with precision.

## Study Groups

Peer-led study groups for this assessment are listed in the Community Forum. We strongly encourage you to attend one of these study groups if you can. Speaking and articulating concepts in front of people is a unique experience, so you should practice before the interview. Most people don't find talking like this natural, but all can improve with practice. We're sure you wouldn't welcome surprises during a real job interview; you also don't want them during the assessment interview. No matter how well you think that you know the material, talking about it in an interview is different.

You can also check on the chat room channels to find one-on-one study partners or to find out if there's any interest in forming a study group.

## Final Tips

It's probably a good idea to over-prepare so that you come to the interview ready to impress. It's unlikely that you'll perform at your peak during the interview, so make sure to practice and get to a place where you are confident in your ability. Expect to be nervous and expect to be operating at a sub-optimal level. Aim to impress, nevertheless.

Speak with precision and confidence and clarity. To get the most out of this experience, treat this as a job interview.

We don't allow the use of JavaScript documentation on the interview assessment, so don't rely on it.

For some additional insights and tips, check out some of the articles students wrote.

- Joe's [article](https://medium.com/launch-school/dealing-with-nerves-and-assessments-at-launch-school-7b919c3ee08b) talks about how to approach problem solving as well as how to deal with nerves during the interview.

- This [blog post](https://medium.com/launch-school/my-study-tips-for-the-js129-assessment-646b7f652c9f) from William offers some tips and tricks on how to master the concepts in JS120.

## Interview Tips

- You are expected to drive the conversation in a favorable direction.
- You can write down in CoderPad what you think you were asked and ask the interviewer to confirm that you understand their question correctly.
- Stay engaged with the interviewer
  - While going through your explanation, you can pause and ask something like "Is this making sense so far?"
- When you finish a demonstration (code example), you can look back at the question you were asked (since you *wrote it down*) to quickly see if there's anything you forgot to mention.
- Test your code often! Use the Node console to test things before you put them in your code!

================================================

TBD where to place the following topics:

### 2.3 Object Instance Methods

#### 2.3.1 `Object.setPrototypeOf(obj, prototype)`

- sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`
- parameters
  - `obj` - The object which is to have its prototype set.
  - `prototype` - The object's new prototype (an object or `null`).

#### 2.3.2 `Object.prototype.hasOwnProperty(prop)`

- returns a boolean indicating whether the instance object has the specified property as its own property (as opposed to inheriting it). Returns `true` if the object has the specified property as own property; `false` otherwise.
- parameters
  - `prop`: the String name or Symbol of the **property** to test

```js
let example = {};
example.hasOwnProperty('prop') // false

example.prop = 'exists';
example.hasOwnProperty('prop'); // true - 'prop' has been defined

example.prop = null;
example.hasOwnProperty('prop'); // true - own property exists with value of null

example.prop = undefined;
example.hasOwnProperty('prop'); // true - own property exists with value of undefined
```

### 2.6 Object Static Methods

#### 2.6.1 `Object.create(proto, [propertiesObject])` - Inheritance

- returns a **new object**, using an *existing object* as the **prototype** of the newly created object.
- parameters
  - `proto` - the object which is the **prototype** of the newly-created object (i.e. the newly created object will inherit from this)
  - `[propertiesObject]` - If specified and not `undefined`, an object whose enumerable **own** properties (that is, those properties defined upon itself and *not* enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of `Object.defineProperties()`
- exceptions
  - `proto` - must be either an Object (excluding primitive wrapper objects), or `null` - otherwise a `TypeError` is thrown

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // `name` is a property set on `me`, but not on `person`
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction(); // => 'My name is Matthew. Am I human? true'
```

#### 2.6.2 `Object.assign(target, ...sources)` - Mixins

- method **copies** all enumerable own properties from one or more `source` objects to a `target` object. It returns the modified target object. Properties in the target object are *overwritten* by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
- The `Object.assign()` method only copies ***enumerable* and *own*** properties from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke getters/setters, and therefore it ***assigns*** properties.
- **Parameters**
  - `target` the target object — what to apply the sources’ properties to, which is returned after it is modified.
  - `sources` the source object(s) — objects containing the properties you want to apply.

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5}

console.log(returnedTarget); // Object { a: 1, b: 4, c: 5}
```

#### 2.6.3 `Object.getPrototypeOf(obj)`

- returns the object prototype (i.e., the value of the internal `[[Prototype]]` property) of the specified object.
- If there are no inherited properties, `null` is returned.

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1) // true
```

#### 2.6.4 `Object.getOwnPropertyNames(obj)`

- method returns an **array** of all properties (**including non-enumerable properties**) found **directly in a given object.**

```js
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1)) // [ 'a', 'b', 'c' ]
```

- Code Example - Useful if you want to show all the methods available to a certain Data Type

```js
// Display All of the Properties (including non-enumerable properties) in an Object
console.log(Object.getOwnPropertyNames(Array.prototype));
/* returns
[
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at'
]
*/
```

### 2.7.`instanceof` Operator

- tests to see if the `prototype` property of a **constructor** appears anywhere in the prototype chain of an object. The return value is a boolean value. The left-hand side should be an `object`, and the right-hand side should be `constructor function`
- **Syntax -** `object instanceof constructor`
- **Parameters**
  - **`object` -** The object to test.
  - **`constructor` -** Function to test against

The `instanceof` operator requires the object to the right to have a `prototype` property, such as a function object. In most cases, that means the object on the right is a constructor function or class.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car('Honda', 'Accord', 2012);

console.log(auto instanceof Car) // true
console.log(auto instanceof Object); // true
```

## 5. Polymorphism

Polymorphism refers to the ability of objects with different types to respond in different ways to the same message (or method invocation); that is, data of different types can respond to a common interface.

When two or more object types have a method with the same name, we can invoke that method with any of those objects. *When we don't care what type of object is calling the method, we're using polymorphism.* Often, polymorphism involves inheritance from a common superclass. However, inheritance isn't necessary.

For example, assume we have a method that expects an argument that has a `move` method. *We can pass it any type of argument, provided it has a compatible `move` method.* The object might represent a human, a cat, a jellyfish, or, conceivably, even a car or train. That is, it lets *objects of different types respond to the same method invocation.*

Polymorphism can be implemented through inheritance by *method overriding*. It can also be implemented through **duck typing**; by ensuring that objects of different **types** *use the same method name to perform different but related functions*, those objects can be interacted with in a uniform way.

**Inheritance** and **duck-typing** are the two main ways to achieve polymorphism. When a method has the same name, but a different implementation in different classes it is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass *overrides* the version in the superclass. Subclasses that override methods inherited from a superclass is one way in which we can implement polymorphism in our applications.

### 5.1 Polymorphism through Inheritance

Examine the following code:

```js
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
```

Every object in the array is a different animal, but the client code -- the code that uses those objects -- doesn't care what each object is. The only thing it cares about here is that *each object in the array has a `move` method that requires no arguments*. That is, every generic animal object implements some form of locomotion, though some animals don't move. The interface for this class hierarchy lets us *work with all of those types in the same way even though the implementations may be dramatically different*. That is polymorphism.

If we run the above code, we call the `move` method for each of 4 different kinds of animal. Let's look at them in pairs.

The `Sponge` and `Coral` classes don't have a `move` method -- at least not one of their own. Instead, they both inherit it from the `Animal` class via the prototype chain. Thus, when we call `move` on a `Sponge` or `Coral` object, the `move` method in the `Animal` class gets called. That method does nothing here, so the `Sponge` or `Coral` doesn't move. *This is polymorphism through inheritance -- instead of providing our own behavior for the `move` method, we're using inheritance to acquire the behavior of a supertype.* In this case, that behavior does nothing, but *it could do something else*.

For `Fish` objects, we call the `move` method from the `Fish` class, which enables a fish to swim. Likewise, a `Cat` object walks when we tell it to `move`. This is a simple example of polymorphism in which two different object types can respond to the same method call simply by **overriding** a method inherited from a superclass. In a sense, overriding methods like this is similar to duck-typing, a concept that we'll meet shortly. However, *overriding is generally treated as an aspect of inheritance*, so this is polymorphism through inheritance.

### 5.1.1 Inheritance-based Polymorphism: `toString()`

An example of inheritance-based polymorphism in action is the JavaScript `toString` method. The `Object` type provides a default implementation of `toString()` that other types inherit. Other types can also override the method to return a customized string representation of the object. Without customization, `toString` returns the string `'[object Object]'` when called on an object. With customization, it can return something more meaningful and useful. For instance, arrays and dates are objects that have customized `toString` methods:

```js
> [1, 2, 3].toString()
'1,2,3'

> (new Date()).toString()
'Sun Mar 13 2022 10:51:46 GMT-0400 (Eastern Daylight Time)'
```

### 5.1.2 Inheritance-based Polymorphism - Objects are related through inheritance

```js
class Animal {
  speak() {}
}

class Dog extends Animal {
  speak() { console.log("Woof!"); }
}

class Cat extends Animal {
  speak() { console.log("Meow!"); }
}

class Fish extends Animal {
}

let dog = new Dog();
let cat = new Cat();
let fish = new Fish();

dog.speak(); // Woof!
cat.speak(); // Meow!
fish.speak(); // (nothing happens)
```

### 5.2 Polymorphism through Duck Typing

**Duck typing** occurs when **objects** of different *unrelated* types both respond to the same method name. With duck typing, we aren't concerned with the class or type of an object, but we do care whether an object has a particular **behavior**. *If an object quacks like a duck, then we can treat it as a duck*. Specifically, *duck typing is a form of polymorphism*. As long as the objects involved use the same method name and take the same number of arguments, we can treat the object as belonging to a specific category of objects.

For example, an application may have a variety of elements that can respond to a mouse click by calling a method named something like `handleClick`. Those elements may be completely different -- for instance, a checkbox vs. a text input field -- but they're all *clickable* objects. Duck typing is an informal way to classify or ascribe a type to objects. Classes and constructors provide a more formal way to do that.

[Distinction between Polymorphism and Duck Typing](https://launchschool.com/posts/c6a86a52#comment-89887)

Duck typing is just a particular form of polymorphism -- it's the ability for objects of completely unrelated types to respond to the same method invocation. A simple example of this in JavaScript are Strings and Arrays. These types are unrelated(*), yet they can both respond to, say, the `indexOf` method:

```js
let str = "abcde";
let arr = ["a", "b", "c", "d", "e"];

console.log(str.indexOf("c")); // 2
console.log(arr.indexOf("c")); // 2
```

*In JS, almost all objects inherit from `Object` at some point in their prototype chain, so `String` and `Array` aren't completely unrelated. However, we usually ignore global supertypes (like `Object`) when talking about whether objects are related. It's still possible to create objects in JS that don't inherit from `Object`, and those objects can still use duck typing.

The main reason why there is a distinction is that some languages -- like C++ -- only support inheritance-based polymorphism. Two objects have to be related through inheritance for polymorphism to be present. When languages were introduced that allowed unrelated objects to act polymorphically, the term duck-typing was introduced to talk about that kind of polymorphism separately.

Languages that don't support duck typing don't let you call a method on unrelated objects like this:

```js
let str = "abcde";
let arr = ["a", "b", "c", "d", "e"];

[str, arr].forEach(obj => console.log(obj.indexOf("c")));
// 2
// 2
```

Notice how we're calling both `str.indexOf` and `arr.indexOf` by using `obj.indexOf` where `obj` is alternately a reference to `str` or `arr`.

You can do that with a duck-typed language, but if you try it in a language like C that doesn't support duck typing, it will produce a type error. You can't call methods for two or more objects with the same line of code unless the objects have a common superclass. It's much more stringent than JS and Ruby. However, you can still call things that have the same method, just not through a common interface.

By the way -- calling `indexOf` like this with a variable that can take on different types is where polymorphism really comes into play. *The point behind polymorphism is that you can write code that doesn't care about types -- just that the different things respond to the same message.*

### 5.3 Polymorphic Behavior without Duck Typing

 In the next example, we define a `Wedding` class and several preparer classes. The example attempts to implement polymorphic behavior without using duck typing; it shows you ***how you shouldn't do it***!

```js
class Chef {
  prepareFood(guests) {
    // implementation
  }
}

class Decorator {
  decoratePlace(flowers) {
    // implementation
  }
}

class Musician {
  preparePerformance(songs) {
    // implementation
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      if (preparer instanceof Chef) {
        preparer.prepareFood(this.guests);
      } else if (preparer instanceof Decorator) {
        preparer.decoratePlace(this.flowers);
      } else if (preparer instanceof Musician) {
        preparer.preparePerformance(this.songs);
      }
    });
  }
}
```

The problem with this code is that *the `prepare` method has too many dependencies*; it relies on specific classes and their names. It also needs to know which method it should call on each type of object, as well as the arguments that each method requires. If you change the way any of those methods are used or add a new type of preparer, you must also change `Wedding.prototype.prepare`. For instance, if we need to add a dressmaker, we must add another else clause. With only 4 preparers, `prepare` is already becoming long and messy.

### 5.4 Polymorphic Behavior with Duck Typing

The right way to implement this program is to *use duck typing to implement polymorphism*:

```js
class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    // implementation
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    // implementation
  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    // implementation
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}
```

Though there is no inheritance in this example, each of the preparer-type classes provides a `prepare` method. We still have polymorphism since all of the objects respond to the `prepare` method call. If we later need to add another preparer type, we can create another class and implement the `prepare` method to perform the appropriate actions.

### 5.4 Synora Eusebio (JS129)

I wrote out a full implementation of the Polymorphism via Duck Typing example. I had to rework the `prepare` method in the Wedding constructor in order to get that specific method to work.

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
console.log(chef.prepareFood(chef.guests)); // Prepare food for 200 guests!

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
console.log(musician.prepare(musician.songs)); // Prepare the following songs: Electric Slide,Cha-Cha Slide
console.log(musician.preparePerformance(musician.songs)); // Prepare the following songs: Electric Slide,Cha-Cha Slide

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

### 5.5 Polymorphism Requires Intention

Note that merely having two different objects that have a method with the same name and compatible arguments *doesn't mean that you have polymorphism*. In theory, those methods might be used polymorphically, but that doesn't always make sense. Consider the following two classes:

```js
class Circle {
  draw() {}
}

class Blinds {
  draw() {}
}
```

These classes each have a method named `draw`, and the methods take no arguments. In the `Circle` class, `draw` presumably draws a circle on the screen. In the `Blinds` class, `draw` may cause the window blinds in an office building to be drawn (as in close or open). In theory, you could write some code that uses these methods polymorphically:

```js
[new Circle(), new Blinds()].forEach(obj => obj.draw());
```

However, it's unlikely that this would ever make sense in real code. Unless you're actually calling the method in a polymorphic manner, you don't have polymorphism. In practice, polymorphic methods are *intentionally designed to be polymorphic*; if there's no intention, you probably shouldn't use them polymorphically.

## 7. Single vs Multiple Inheritance

In JavaScript objects can only inherit from one object, and classes can extend only one other class. In other words, an object can have only one prototype object. This is **single inheritance**.

Some programming languages allow classes to inherit from multiple classes, a functionality known as multiple inheritance. JavaScript doesn't support **multiple inheritance**, so a class can only inherit from one class.

To be clear, when we say that an object can only have one prototype or that a class can only inherit from one class, we don't mean that the object or class can't inherit from an entire chain of prototypes or classes. It's perfectly acceptable for a `Whale` class to inherit from a `Mammal` class, which in turn inherits from an `Animal` class, which again inherits from the built-in `Object` type. Some students see this as multiple inheritance, but it is not: each object or class inherits directly from a single thing, so it is **single inheritance**. The chain of prototypes or superclasses merely comes along for the ride.

## 8. Mixins; mixins vs. inheritance

### 8.1 Introduction to JavaScript's Single Inheritance Problem

One problem with inheritance in JavaScript is that *objects can inherit from only one object, and classes can extend only one other class*. In other words, an object can have only one prototype object. We call this **single inheritance**.

This limitation makes it difficult to model certain domains using class or constructor-based inheritance. For instance, suppose we have a `Pet` class from which several other specific classes inherit. The inheritance relationship might look like this:

![inheritance-relationship](object_hierarchy_with_mixins.png)

Note that the `swim` method is in two classes: `Dog` and `Fish`. Assuming that they have the same implementation, we would like to provide that method in one place, perhaps in a class. However, where can we move it? Some programming languages allow classes to inherit from multiple classes, a functionality known as multiple inheritance. JavaScript doesn't support **multiple inheritance**, so a class can only inherit from one class.

### 8.2 Mixins

Enter JavaScript mixins – a pattern that adds methods and properties from one object to another. It's not delegation with prototypes; *the mixin pattern merely copies the properties of one object to another with `Object.assign` or some similar technique.*

JavaScript doesn't support multiple inheritance, but the mixin pattern helps developers overcome this limitation and get some of the benefits of multiple inheritance in an environment that only supports single inheritance.

### 8.2.1 Inheritance Problem - Birds Example

We're concerned with objects that can, in principle, belong to multiple and distinct types. For instance, in the bird world, there are birds that can swim and birds that can fly, but there are also birds that can't swim and birds that can't fly. Some birds can even do both.

**Bird** | **Swim?** | **Fly?**
---------|-----------|---------
Stork    | no        | yes
Parrot   | no        | yes
Penguin  | yes       | no
Ostrich  | yes       | no
Duck     | yes       | yes
Goose    | yes       | yes

How would we model this in JavaScript with inheritance? We start like this:

```js
class Bird {}

class Stork extends Bird {
  fly() {}
}

class Parrot extends Bird {
  fly() {}
}

class Penguin extends Bird {
  swim() {}
}

class Ostrich extends Bird {
  swim() {}
}

class Duck extends Bird {
  fly() {}
  swim() {}
}

class Goose extends Bird {
  fly() {}
  swim() {}
}
```

There's a lot of duplication going on here: 4 of the various bird classes each have their own copy of the `swim` method, while 4 have their own copy of the `fly` method. In all likelihood, those 4 `fly` methods are identical, as are the 4 `swim` methods.

One way we can try to reduce the duplication is by using inheritance and a new class. Let's start with the `fly` method. We can define a `FlyingBird` type to handle this:

```js
class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {
  swim() {}
}

class Ostrich extends Bird {
  swim() {}
}

class Duck extends FlyingBird {
  swim() {}
}

class Goose extends FlyingBird {
  swim() {}
}
```

Great! Let's see what happens when we try to refactor the `swim` method:

```js
class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class SwimmingBird extends Bird {
  swim() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends SwimmingBird {}

class Ostrich extends SwimmingBird {}

// Hmmm.... we have a problem.
// What to do with ducks and geese???

class Duck extends FlyingBird {
  swim() {}
}

class Goose extends FlyingBird {
  swim() {}
}
```

We've hit a roadblock. The `Duck` and `Goose` classes represent both flying birds and swimming birds, but JavaScript only allows single inheritance. The lack of support for multiple inheritance means we can't just add a new class in and inherit from it.

### 8.2.2 Mixin Example

Instead of using inheritance, we can use a **mixin**. A mixin is an object that defines one or more methods that can be "mixed-in" to a class. This grants that class access to all of the methods in the object. It's the only real workaround for the lack of multiple inheritance short of duplication. Let's see what mixins look like:

```js
const Swimmable = {
  swim() {};
}

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);
```

In this code, we've created a `Swimmable` object that has a `swim` method. To mix it into our various swimming birds, we've used `Object.assign` to add the methods from `Swimmable` to the prototype objects of those classes. It's a bit tedious, but not too difficult, and it works well.

For consistency, we could even *eliminate the inheritance aspect entirely*:

```js
const Swimmable = {
  swim() {}
}

const Flyable = {
  fly() {}
}

class Stork {}
Object.assign(Stork.prototype, Flyable);

class Parrot {}
Object.assign(Parrot.prototype, Flyable);

class Penguin {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck {}
Object.assign(Duck.prototype, Swimmable, Flyable);

class Goose {}
Object.assign(Goose.prototype, Swimmable, Flyable);
```

### 8.3 Mixins vs Inheritance

Some JavaScript developers argue that you should use factory functions with mixins exclusively. They suggest that inheritance fails at modeling some scenarios, but a combination of factory functions and mixins can model any object relationship. Why bother with class/constructor inheritance at all? Why not just use factory functions that mix in other objects instead? If we did that, we could *rewrite our example like this*:

```js
const Swimmable = {
  swim() {}
}

const Flyable = {
  fly() {}
}

function createFlyingBird() {
  return Object.assign({}, Flyable);
}

function createSwimmingBird() {
  return Object.assign({}, Swimmable);
}

function createTalentedBird() {
  return Object.assign({}, Swimmable, Flyable);
}

function createStork() {
  return createFlyingBird();
}

function createParrot() {
  return createFlyingBird();
}

function createPenguin() {
  return createSwimmingBird();
}

function createOstrich() {
  return createSwimmingBird();
}

function createDuck() {
  return createTalentedBird();
}

function createGoose() {
  return createTalentedBird();
}
```

This approach is valid, but it suffers the *downsides of all factory functions*:

1. Every new object receives a new copy of all of its methods, including new copies of both mixin methods and the methods that belong more directly to the object. That can be taxing on memory resources, even more so than the memory requirements of mixins.

2. You can't determine the type of an object created with a factory function: the `instanceof` operator only recognizes these objects as instances of the `Object` type. As far as JavaScript is concerned, a penguin and a fish and an automobile are indistinguishable. That's not as troubling as it might sound in terms of being able to solve programming problems, but it has a more significant impact on debugging.

We *suggest a balance of mix-in and classical inheritance* pattern instead:

1. *Inheritance works well when one object type is positively a subtype of another object.* In our example, it's natural for a penguin to also be a swimming bird. These types have an **is a** relationship: a penguin *is a* swimming bird. *Whenever two object types have an "is a" relationship, constructor or class inheritance makes sense.*

2. On the other hand, the ability to swim doesn't have that kind of relationship with storks. Swimming is a capability that penguins have. Similarly, flying is a capability that storks have. *When you want to endow your objects with some capability, a mixin may be the correct choice.*

Mixins are more appropriate in a *has-a* relationship. While it is sometimes tricky to choose one or the other, *a great guideline is to decide if you want some additional functionality, or if you want to extend the abilities of the class.*

**Inheritance** works best when there is an "is a" relationship between two classes. The inheriting class is a type of the superclass.

The **mixin** pattern works best when an object has a capability that another object needs.

Relationship | Use         | Because
-------------|-------------|--------------------------------------------
"is-a"       | inheritance | you want to extend the abilities of a class
"has-a"      | mixin       | you want additional functionality

### 8.4 Mixin Example with Classes

If we have a `Car` class and a `Truck` class, how can you use the `Speed` object as a mix-in to make them `goFast`? How can you check whether your `Car` or `Truck` can now go fast?

```js
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`)
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`)
  }
}
```

To add the `goFast` method to the `Car` and `Truck` classes, we need to mix `Speed` into the prototypes of both constructors.

```js
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`)
  }
}

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`)
  }
}

Object.assign(Truck.prototype, Speed);
```

Testing that we can make our cars and trucks go fast is simple; all we must do is call `goFast` on a car or truck object:

```js
let blueTruck = new Truck();
blueTruck.goFast(); // => 'I'm a Truck and going super fast!'

let smallCar = new Car();
smallCar.goFast(); // => 'I'm a Car and going super fast!'
```

To check whether an object responds to a specific method, you can use the `in` operator.

```js
'goFast' in smallCar; // true
'goFast' in blueTruck; // true
```

### 8.5 Mixin Example with Factory Functions

```js
function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {}
  }
}

const walk = {
  walk() {
    console.log(`Walking`);
  },
}

const talk = {
  talk() {
    console.log(`Talking`);
  },
}

function createHumanoid(intelligence, model) {
  let newHumanoid = createRobot(intelligence, model);
  Object.assign(newHumanoid, walk, talk);
  return newHumanoid;
}

function createHuman(name, age) {
  let newHuman = {
    name,
    age,
  };
  Object.assign(newHuman, walk, talk);
  return newHuman;
}

let human = createHuman('SungOh', 6);
console.log(human.age) // 6
human.talk(); // Talking
```

## 9. Methods and Functions; Method Invocation vs. Function Invocation

### 9.1 Methods on `Object.prototype`

The `Object.prototype` object is at the top of all JavaScript prototype chains. Thus, its methods are available from any JavaScript object provided you don't explicitly use something like `null` as the prototype object. Here are 3 useful methods:

- `Object.prototype.toString()` returns a string representation of the object.

- `Object.prototype.isPrototypeOf(obj)` determines whether the object is part of another object's prototype chain.

- Object.prototype.hasOwnProperty(prop) determines whether the object contains the property.

### 9.2 Objects Without Prototypes (bare objects)

There is a way to create objects that don't have a prototype and, hence, do not have a prototype chain that ends with `Object.prototype`. You *can* create an object that doesn't have a prototype by setting the prototype to `null`. This technique is a bit unusual and not seen very often. However, it lets you create a "clean" or "bare" object for use as a general key/value data structure. The bare object doesn't carry around a bunch of excess baggage in the form of unneeded properties and prototypes:

```sh
> let a = Object.create(null)
undefined

> Object.getPrototypeOf(a)
null
```

Note that objects created in this way do not have access to Object methods like `Object.prototype.hasOwnProperty()` or `Object.prototype.toString()`. They also don't have a prototype chain that ends with `Object.prototype` -- *it ends with `null`*.

For the most part, you can *assume that all JavaScript objects have* `Object.prototype` at the top of their inheritance chain. You can also assume that all objects can use the usual selection of Object properties. However, be wary of situations where bare objects may be in use. If you have bare objects in your program, you must remember that the usual `Object` properties and methods don't exist on those objects. That's why you sometimes see code like this:

```js
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
  // obj has a non-null prototype AND
  // obj is in the prototype chain of car
}
```

If you don't first check whether `obj` has a non-`null` prototype, this code will raise an exception if `obj` has a `null` prototype. Even this code won't work properly if `obj` inherits from an object whose prototype is `null`.

Library developers often write code to check for the **bare object edge cases**. Since their code will see use in many different environments, they need to be ready for such unusual objects.

## 12. Method and Property Lookup Sequence in the Prototype Chain

When you access a property on an object, JavaScript first looks for an "own" property with that name on the object. If the object does not define the specified property, JavaScript looks for it in the object's prototype. If it can't find the property there, it next looks in the prototype's prototype. This process continues until it finds the property or it reaches `Object.prototype`. If `Object.prototype` also doesn't define the property, the property access evaluates to `undefined`.

The implication here is that when two objects in the same prototype chain have a property with the same name, *the object that's closer to the calling object takes precedence.*

Let's see an example:

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

Object `b` *wasn't mutated!* When assigning a property on a JavaScript object, *it always treats the property as an "own" property*. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, `foo` becomes an "own" property of `c`:

```js
console.log(c.hasOwnProperty('foo')); // => true
```

The discussion of inheriting *properties* from other objects *applies to methods as well*. Methods in JavaScript are merely *properties that refer to functions*. Thus, when we talk about object properties, we also mean methods.

## 17. `Object.assign` and `Object.create`

### 17.1 `Object.assign(target, ...sources)` - Mixin

Static object method which copies the properties and methods of one object to another. It does not work with classes or functions, only with an object instance.

- **copies** all enumerable own properties from one or more `source` objects to a `target` object. It returns the modified target object.
- Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
- The `Object.assign()` method only copies ***enumerable* and *own*** properties from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke getters/setters, and therefore it ***assigns*** properties.
- **Parameters**
  - `target` the target object — what to apply the sources’ properties to, which is returned after it is modified.
  - `sources` the source object(s) — objects containing the properties you want to apply.

```js
// Object.assign() takes a target and applies a variable number of sources to it.
// EX: Object.assign(target, ...sources) => returns modified target
let source = {
  src: 'Source Property',
}

let target = {};
Object.assign(target, source);
target.trg = "Target Property";

console.log(target);  // => { src: 'Source Property', trg: 'Target Property' }
console.log(source);  // => { src: 'Source Property' }

// Changing the source property after assignment does not matter for primitive types
source.src = "Something Different";

console.log(target);  // => { src: 'Source Property', trg: 'Target Property' }
console.log(source);  // => { src: 'Something Different' }

// Object.assign overwrites similar property names with the source's value
source.src = ['Value']
Object.assign(target, source);

console.log(target);  // => { src: [ 'Value' ], trg: 'Target Property' }
console.log(source);  // => { src: [ 'Value' ] }

// Assign uses shallow copies, so references in the target still point to the source
// Updating a non-primitive in the source will affect the target
source.src[0] = "Something Different";

console.log(target);  // => { src: [ 'Something Different' ], trg: 'Target Property' }
console.log(source);  // => { src: [ 'Something Different' ] }

// Assign only copies the values/references to the object. Source is not a prototype.
console.log(target.__proto__ === source); // => false
```

Considerations with Object.assign():

- `target` is both mutated and returned.
- For any key on `target`, the latest source will overwrite the value.
- Only copies *own properties* for both `target` and `source`.
- If value is a reference, only a copy of reference is provided (Use Stringify to get deep copy).
- Does not leverage prototyping for memory efficiency and typing.

#### 17.1.1 Uses of `Object.assign()`

One object factory can *reuse another object* factory by mixing the object returned by another factory function into itself by using `Object.assign()`.

```js
function createVehicle(make, model) {
  return {
    make,
    model,

    drive() {
      console.log(`Driving`);
    },
  }
};

function createCar(make, model) {
  let tesla = {
    autoDrive() {
      console.log(`no hands`);
    },
    fly() {
      console.log(`Flying`);
    },
  };

  Object.assign(tesla, createVehicle(make, model));

  return tesla;
}

let flash = createCar('Tesla', 'S');

flash.drive() // Driving
flash.fly() // Flying
```

The mixin pattern involves creating a mixin object containing certain methods, and using `Object.assign()` to mix that object into another object.

```js
function createVehicle(make, model) {
  return {
    make,
    model,

    drive() {
      console.log(`Driving`);
    },
  }
};

function createCar(make, model) {
  let car = {};

  Object.assign(car, createVehicle(make, model), premiumFeatures);

  return car;
}

const premiumFeatures = {
  autoDrive() {
    console.log(`No hands.`);
  },

  fly() {
    console.log(`We have liftoff!`);
  }
}

function createTesla(name, year) {
  let tesla = {
    name,
    year,
  }

  Object.assign(tesla, premiumFeatures);
  return tesla;
}

let flash = createTesla('Flash', '2022');

flash.fly() // We have liftoff!
console.log(flash.name) // Tesla
```

### 17.2 `Object.create(proto, [propertiesObject])` - Inheritance

- Returns a **new object**, using an *existing object* as the **prototype** of the newly created object.
- **Parameters**
  - `proto` - the object which is the prototype of the newly-created object (i.e. the newly created object will inherit from this)
  - `[propertiesObject]` - If specified and not `undefined`, an object whose enumerable **own** properties (that is, those properties defined upon itself and *not* enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of `Object.defineProperties()`
- **Exceptions**
  - `proto` - must be either an Object (excluding primitive wrapper objects), or `null` - otherwise a `TypeError` is thrown.


## 20. Scope-safe Constructors

As we have seen, a constructor is simply a function, so it can be called without the new keyword. But, for inexperienced programmers, this can be a source of bugs. A scope-safe constructor is designed to return the same result regardless of whether it’s called with or without new, so it doesn’t suffer from those issues.

Most built-in constructors, such as `Object`, `Regex` and `Array`, are scope-safe. They use a special pattern to determine how the constructor is called. If `new` isn’t used, they return a proper instance of the object by calling the constructor again with `new`. Consider the following code:

```js
function Fn(argument) {
  // If `this` is not an instance of the constructor, it means it was called without `new`.
  if (!(this instanceof Fn)) {
    // call the constructor again with `new`
    return new Fn(argument)
  }
}
```

So, a scope-safe version of our constructor looks like this:

```js
function Book(name, year) {
  if (!(this instanceof Book)) {
    return new Book(name, year);
  }
  this.name = name;
  this.year = year;
}

let book1 = new Book('js book', 2014);
let book2 = Book('js book', 2014);

console.log(book1 instanceof Book); // true
console.log(book2 instanceof Book); // true
```
