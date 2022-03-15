/*  JS129 Study Group | Tuesday March 15th | 12:30 PM Eastern

Agenda
- Intros
- JS129 Assessment
  - Assessment Format
  - Preparing for the Assessment
- Example Questions

Introductions
- Karl Lingah, TA at LS, UK
- Chiara Fiorentini, Spain, written, going through the material again
- Michael Cremonini, Rome, Lesson 5
- Synora Eusebio, live interview, did written 3-4 weeks ago
- Alex Stein, NJ, Lesson 3, material is much denser
- Mary McDonald, Montreal, preparing for written, not ready yet
- HyoSung, JS120 Lesson 5

*/

// let num = 1;

// function foo() {
//   num += 1; // reassignment
// }

// foo();
// console.log(num); // 2

// const person = {
//   introduce: function() {
//     console.log(`Hi, my name is ${this.name}.`);
//   },
// };

// const karl = Object.create(person);
// karl.name = 'Karl';
// karl.introduce();

/* abstraction - a lot more happening in the background

Have strong mental models for what is happening in the code.

JS129 written and interview are related to test your understanding through your mental models

Can prepare for them both in a similar way.

Strong mental models
- understand each topic really well with code examples
- reading OO code - apply conceptual understanding

Synora
- having a mental model
- examples of how you do something, like how to create a class
- constructor prototype property
- prototypal inheritance
- review the practice questions in the Lessons
- do the exercises
- talk with someone about the concepts and get feedback for the holes in your knowledge

- topics => collaborator objects
  - examples

Questions
- ask clarifying questions if necessary

Object Factories / Factory Function
- generate objects of a particular type
- err on the side of simplicity for your examples
- advantages and disadvantages
*/

// function createPeople(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//     food: 'vegetables',

//     eat() {
//       console.log("I'm eating!")
//     }
//   }
// }

// let mary = createPeople('Mary', 100, 190);
// mary.eat(); // => I'm eating!

// console.log(mary);
/*
{
  name: 'Mary',
  age: 100,
  height: 190,
  food: 'vegetables',
  eat: [Function: eat]
}
*/

/* pseudo-classical pattern */
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

console.log(Person.prototype); // {}

Person.prototype.eat = function() {
  console.log("I'm eating!");
}

console.log(Person.prototype); // { eat: [Function (anonymous)] }

let mary = new Person('Mary', 100, 190);
mary.eat() // "I'm eating!"

console.log(mary); // logs the object

console.log(mary instanceof Person);

/* constructor function with prototypal inheritance for pseudo-classical approach

class syntax

different ways you can create objects

Polymorphism and Duck Typing
- look at wedding example

The utility of the code

duck typing - no hierarchal relationship
*/

class Circle {
  draw() {}
}

class Blinds {
  draw() {}
}

[new Circle(), new Blinds()].forEach(obj => obj.draw());


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
    preparers.forEach((preparer) => {
      preparer.prepare(this);
    });
  }
}

/* =====================

Question 3 1 / 1 Points
Correct

Select all of the following statements about prototypal inheritance that are true:

Your Answer

A. Prototypal inheritance lets an object inherit methods, but not non-method properties.

B. The object that you inherit from is called the prototype.

C. You can use Object.create to create a new object that inherits the properties of another.

D. The object that you inherit from is the prototype of another object.
Discussion

Incorrect:

A: You can inherit both methods and ordinary properties.

D: While it is possible to inherit from the prototype of another object, that's not typical procedure. Instead, the inherited object becomes the prototype of the new object.

*/
