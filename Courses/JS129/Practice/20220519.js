// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.canRun = function() {
//   console.log(`yes ${this.name} can run!`);
// }

// // Constructor Invocation Pattern
// let dog = new Animal('foo', 5)
// console.log(dog); // Animal { name: 'foo', age: 5 }
// dog.canRun(); // yes foo can run!
// let cat = new Animal('koo', 3);
// console.log(cat); // Animal { name: 'foo', age: 5 }

// function Human(name, age, money) {
//   Animal.call(this, name, age);
//   this.money = money;
// }

// Human.prototype = Object.create(Animal.prototype);

// Human.prototype.canEarn = function() {
//   console.log(`Yes ${this.name} can earn.`);
// }

// let human = new Human('Omi', 10, '10,000 USD');
// console.log(human); // Human { name: 'Omi', age: 10, money: '10,000 USD' }

// human.canRun();
// human.canEarn();

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.canRun = function() {
//   console.log(`Yes, ${this.name} can run!`);
// }

// let dog = new Animal('Rover', 4);
// console.log(dog);
// console.log(dog instanceof Animal);

// let pig = new Animal('Babe', 10);
// console.log(pig);
// console.log(Object.getPrototypeOf(pig) === Animal.prototype);

// pig.canRun();

// function Human(name, age, money) {
//   Animal.call(this, name, age)
//   this.money = money;
// }

// Human.prototype = Object.create(Animal.prototype);

// Human.prototype.canEarn = function() {
//   console.log(`Yes, ${this.name} can earn!`);
// }

// let omi = new Human('Omi', 10, 'Big Bucks!')
// omi.canRun();

/* To create inheritance between function constructors, always perform the two following actions:

1. Call the parent constructor using `call` or `apply`.
2. Link the prototype of the child constructor4 to the parent constructor prototype with `Object.create`.
*/

// https://github.com/lydiahallie/javascript-questions

// 11. What's the output?

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// console.log(member.getFullName()); // TypeError: member.getFullName is not a function

/* In JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`.

If you want a method to be available to all object instances, you have to add it to the prototype property: */

// Person.prototype.getFullName() = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// 12. What's the output?
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia); // Person { firstName: 'Lydia', lastName: 'Hallie' }
// console.log(sarah); // undefined

/* For `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object that we create. However, if we don't add `new`, `this` refers to the global object.

We said that `this.firstName` equals `'Sarah'` and `this.lastName` equals `'Smith'`. What we actually did is define `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined` since we don't return a value from the `Person` function. */

// 33. What's the output?
// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21)); // Lydia is 21
// console.log(sayHi.bind(person, 21)); // [Function: bound sayHi]

/* With both, we can pass the object to which we want the `this` keyword to refer. However, `call` is executed immediately. `bind` return a copy of the function, but with a bound context. It is not executed immediately. */

/* Factory Functions #1 - Creating profile for people

https://www.codewars.com/kata/56fd46bcc5957c83ea001023/solutions/javascript/following/best_practices */

// function person(firstName, lastName, age, gender, employed, occupation, married) {
//   return {
//     firstName,
//     lastName,
//     age,
//     gender,
//     employed,
//     occupation,
//     married,

//     sayName() {
//       return `${this.firstName} ${this.lastName}`;
//     },

//     introduce() {
//       return `Hello, my name is ${this.firstName} ${this.lastName}.  I am ${this.age} years old.  I am a ${this.gender}.`
//     },
//   };
// }

/* Factory Functions #2 - Inheritance and Object Composition */

// function person(firstName, lastName, age, gender, employed, occupation, married) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     gender: gender,
//     employed: employed,
//     occupation: occupation,
//     married: married,
//     sayName: function () {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     introduce: function () {
//       return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
//     }
//   };
// }

// function constructionWorker(firstName, lastName, age, gender, married, boss) {
//   let worker = person(firstName, lastName, age, gender, true, 'construction worker', married);
//   return Object.assign(worker, {
//     boss,
//     sayBossName() {
//       return `My boss is called ${boss} and is a very nice person!`;
//     }
//   });
// }

// function constructionWorker(firstName, lastName, age, gender, married, boss) {
//   return Object.assign(
//     person(
//       firstName,
//       lastName,
//       age,
//       gender,
//       true,
//       'construction worker',
//       married
//     ),
//     {
//       boss: boss,
//       sayBossName() {
//         return `My boss is called ${this.boss} and is a very nice person!`;
//       },
//     }
//   );
// }

// function constructionWorker(firstName, lastName, age, gender, married, boss) {
//   let worker = person(firstName, lastName, age, gender, true,
//     'construction worker', married, boss);

//   worker.boss = boss;
//   worker.sayBossName = function() {
//     return `My boss is called ${boss} and is a very nice person!`;
//   }

//   return worker;
// }

// Fun with ES6 Classes #1 - People, people, people
// class Person {
//   constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   sayFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   static greetExtraTerrestrials(raceName) {
//     return `Welcome to Planet Earth ${raceName}`;
//   }
// }

// let person = new Person('Omi', 'Lee', 10, 'Female');
// let martian = new Person()
// console.log(person.sayFullName());
// console.log(Person.greetExtraTerrestrials('Martians'));
// console.log(martian.sayFullName());

// Is this working?
// function Counter() {
//   var self = this;
//   self.count = 0;

//   self.updateCount = function () {
//     self.count++;
//   };
// }

// function Counter() {
//   this.count = 0;
//   this.updateCount = () => this.count++;
// }

// "this" is a problem
// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = this.firstName + ' ' + this.lastName;
// }

// var n = new NameMe('John', 'Doe');
// console.log(n.firstName);//Expected: John
// console.log(n.lastName); //Expected: Doe
// console.log(n.name); //Expected: John Doe

// JavaScript class-like objects
// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   toString() {
//     return `${this.name} is a ${this.type}`;
//   }
// }

// var dog = new Animal('Max', 'dog');
// console.log(dog.toString()); // should return 'Max is a dog'
// console.log(dog.type); // should == 'dog'
// console.log(dog.name); // should == 'Max'
// console.log(dog.name = 'Lassie'); // should set name to 'Lassie'

// Extending JavaScript Objects: Get First & Last Array Element
Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};