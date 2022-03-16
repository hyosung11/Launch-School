/* Lesson 4 Quiz 1 */

// let Animal = {};
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal);

/* instanceof only works with constructors */

/* Question 3 1 / 1 Points
Correct

Select all of the following statements about prototypal inheritance that are true:
Your Answer
A

Prototypal inheritance lets an object inherit methods, but not non-method properties.
B

The object that you inherit from is called the prototype.
C

You can use Object.create to create a new object that inherits the properties of another.
D

The object that you inherit from is the prototype of another object.
Discussion

Incorrect:

A: You can inherit both methods and ordinary properties.

D: While it is possible to inherit from the prototype of another object, that's not typical procedure. Instead, the inherited object becomes the prototype of the new object.

*/

/* Question 8 */
function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

// missing code

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person === false);                    // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);                    // true
console.log(person instanceof Person);                             // true
console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined);                          // true
console.log(person.speak() === "Hello, my name is Pete.");         // true

/* Questions 8 and 9 */