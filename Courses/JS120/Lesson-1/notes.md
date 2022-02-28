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