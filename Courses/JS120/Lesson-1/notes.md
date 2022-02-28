# Introduction

Object-Oriented Programming (OOP) represents a significant departure from procedural programming, and requires not only an entirely new way of thinking but also requires learning a whole new set of vocabulary and concepts. If this is your first time delving into Object Oriented Programming, this is going to be a challenging course for you. The concepts themselves are relatively easy to pick up, but putting them together to construct an object-oriented program isn't easy.

As you move forward in your programming journey, a big chunk, perhaps even the majority of the code you'll encounter, is probably written using an OO style. The procedural programming style we met in the previous course is usually used when writing smaller programs. Most larger programs, including most popular libraries and frameworks, use OOP. Building an OOP program from scratch forces that knowledge upon you. You won't be an expert OO programmer after this course, but you'll have hands-on experience with OOP and how to code OO programs in JavaScript. OOP in JavaScript is a little different than in other "classical" OOP languages, but basic concepts like inheritance and polymorphism cut across languages. Learning these concepts will come in handy when you go on to learn other Object Oriented languages.

This lesson begins by guiding you through some basic OO concepts and vocabulary. You'll need this knowledge to build OO programs. Take your time here and work through the exercises.

## What is OOP?

The phrase **Object-Oriented Programming (OOP*)** suggests a style of programming that involves JavaScript objects. However, since we've already used objects in JS101, you may wonder why the distinction. Object-Oriented Programming is more than merely using objects in your programs; it's a style of programming that*uses objects to organize a program.*

In JS101, we learned the basics of JavaScript programming. Throughout the course, we thought of a program in terms of variable declarations, conditionals, loops, and function calls. This approach is called **procedural programming**. Our programs also used some functional programming techniques, such as passing functions to array methods like `map` and `filter`. For the most part, though, our programs were a series of steps or procedures that we performed one after the other.

Object-Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. The way we think about a problem changes from a series of steps to a collection of objects that interact with each other. The idea is to model a program based on how objects in the real world interact. A real-world object like a car, for example, has **state** -- *properties* -- like color, number of doors and fuel-level amongst others. It also has **behavior**; it can be started, driven, steered, or parked. That's precisely how we think about problems in OOP: as a set of objects with state and behavior.

Why do we need this radically different approach of organizing code? One of the most challenging aspects of software engineering is organizing code so that it's easy for programmers to reason about and easy to maintain. Object-Oriented Programming helps with that.

Complex coding problems can be hard to break down and solve in a clear and systematic way. Using OOP to model objects and using real-world nouns to represent objects lets programmers think at a higher level of abstraction. That, in turn, helps them break down and solve problems.

Large, complex programs can be a challenge to maintain due to dependencies throughout the program. OOP lets programmers write programs in a manner that reduces those dependencies and makes maintenance easier. When done right, OOP makes our code flexible, easy to understand, and easy to change.

However, OOP doesn't necessarily let programmers write smaller programs than the equivalent non-OO program. Instead, OO programs are often much larger than the equivalent non-OO programs. However, the organization of a well-designed OOP program can make the program easier to reason about and maintain. In particular, it lets you focus your attention on specific parts of the code without worrying about dependencies in the rest of the program.

OOP also doesn't always lead to more efficient code. It can, in some cases, but it can also lead to less efficient code; OOP programs can require more memory, more disk space, and more computing power. However, the advantages of OOP usually outweigh these concerns.

Don't worry if this discussion doesn't make much sense right now; the merits of OOP will become apparent as you progress through the course and see some examples along the way.

In the next assignment, we'll discuss **encapsulation**, a fundamental concept in object-oriented programing.

## Encapsulation

Encapsulation is one of the fundamental concepts of object-oriented programming. At its core, encapsulation describes the idea of bundling or combining the data and the operations that work on that data into a single entity, e.g., an object.

Let's examine a simple banking application. The code for the app, at a minimum, must contain data about the bank accounts (account number, balance, account type) and the users (name, address, phone number). The code must also contain behaviors or operations that use and manipulate that data. For instance, we should have operations that open an account, make withdrawals, and deposit new funds.

One thing is evident here: the data and operations that you perform on your data are related. That is, you don't want to apply an operation intended for a bank account on a user's data. For example, it doesn't make much sense to withdraw funds from a user. Instead, you want to withdraw funds from the account, so you want to operate on an account.

If our program keeps track of data about entities and performs operations on that data, it makes sense to combine the data and the functionality into a single entity. That's what object-oriented programming is all about. We call this principle of combining data and the operations relevant to that data **encapsulation**. Encapsulation is about bundling state (data) and behavior (operations) to form an object.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects expose a **public interface** for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. Unfortunately, JavaScript doesn't support access restrictions. There are ways to achieve a degree of access restriction, but they're not perfect. We'll return to this topic later.

In upcoming assignments, we'll see examples of objects with *state* and *behavior*.

## Practice Problems: OOP and Encapsulation

### Q1. In your own words, what is Object Oriented Programming?

A1. Using objects to organize a program.

Solution: Object Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. In particular, it uses objects to organize our program.

### Q2. Describe some advantages and disadvantages of OOP.

A2. Advantages include easier readability and comprehension. Disadvantages include longer programs that take up more memory and can be slower.

Solution:

- Advantages
  - It lets programmers think about a problem at a higher-level of abstraction, which helps them break down and solve the problem.
  - OOP helps programmers write programs that reduce the *dependencies* in a program, which makes maintenance easier.
  - Done right, OOP makes code flexible, easy to understand, and easy to change.

- Disadvantages
  - OOP programs are often much larger than the equivalent procedural program.
  - OOP may lead to less efficient code; OO programs may require more memory, disk space, and computing power.

### Q3. In your own words, what does encapsulation refer to in JavaScript?

A3. Encapsulation refers to combining the data and operations that work on that data into one entity, an object.

Solution: In JavaScript, encapsulation is the idea of bundling data and operations associated with that data in a single entity; that is, it's the grouping of related properties and methods in a single object.

### Q4. In JavaScript, how does encapsulation differ from encapsulation in most other OO languages?

A4. Encapsulation in JavaScript cannot completely cut off the public interface.

Solution: In other languages, encapsulation concerns hiding the details of an object from code that uses the object. An object should only expose the methods and properties that other objects need to use the encapsulated object. However, JavaScript does not directly provide the means to limit exposure of properties and methods. There are ways to achieve a degree of access restriction, but they're not perfect.

## Creating Objects

At this point in the curriculum, you already know how to create an object:

```js
let person = {
  name: 'John',
  age: 33,
};
```

Simple, isn't it? However, the code does little more than create a data-structure. The object merely stores some data about a person. OOP is about *combining data and behavior* into an object.

Imagine that you're building a car racing game. Such a game, of course, must have cars. That is, it must have some data about cars and some operations associated that use and manipulate that data. We might list the data and operations something like this:

```sh
Car Attributes
  Make: BMW
  Fuel level: 50%
  Engine status: Turned Off

Car Functionality/Behavior
  Start engine
  Stop engine
  Refuel
  Drive
```

What do we have here? -- Some data about a car and the functionality that applies to that data. The "start engine" feature, for example, should change the engine status from "off" to "on" and nothing more. It makes sense for this data and functionality to live together. Let's *encapsulate* it as an object:

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

  stopEngine: function() {
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

This code bundles the data and operations related to a car into an object. The structure of the object is essentially the same as the objects we've encountered so far. The chief difference is that some of the property values are functions. That shouldn't be surprising; we've seen before that JavaScript functions are first-class values, which means that we can treat them as we would any JavaScript value. That includes using them as object property values. When object properties have function values, we call them **methods**. The methods here are responsible for changing the state of the `raceCar` object.

One advantage of this approach is clear to see: if we want to operate on a car, we don't have to search for both the function and the data that we need. We can see at a glance what you can do with a car merely by looking at the object.

RR

### Compact Method Syntax

### The `this` Keyword


### Summary

In this assignment, we've seen an example of encapsulation in practice. In JavaScript, we achieve encapsulation by making use of an object. The properties of the object hold the state (data), and methods represent behavior. Inside the methods, the `this` keyword lets us refer to the properties and other methods of the object.