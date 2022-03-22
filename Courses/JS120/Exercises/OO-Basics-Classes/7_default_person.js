/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 7. Default Person

Default Person

Create a class Person.

Person should accept one argument for "name" when instantiated.

If no arguments are given, person object should instantiate with a "name" of "John Doe". */

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

// Solution
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

/* Discussion

In the solution we have used `ES6` feature, default parameters, to set the default value of parameter to a string "John Doe". Then, in the constructor function, we have just assigned value of parameter `name` to a property `name`.

*/