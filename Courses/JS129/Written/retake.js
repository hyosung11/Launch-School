// Q2

// Clearly, the area method calculates and returns the area of a square, while describe logs a description of what a Square is. However, in this question, we don't care what these methods do. Instead, we want to talk about these two methods in terms of how they are defined and used.

// Explain the difference between these two methods. Why is one defined on the function prototype object, but not the other? Why do we have these two different ways to define methods? Write some code to demonstrate each method being invoked.

// function Square(length) {
//   this.length = length;
// }

// Square.prototype.area = function () {
//   return this.length * this.length;
// };

// Square.describe = function () {
//   console.log(
//     'Squares consist of four equal sides at 90 degree angles to each other.'
//   );
// };

// let square = new Square(5);
// console.log(square.area()); // 25

// Square.describe(); // Squares consist of four equal sides at 90 degree angles to each other.

// 3
// let cat = {
//   name: 'Fluffy',
// };

// function purr() {
//   console.log(`${this.name} is purring...`);
// }

// purr();

// 4
// let cat = {
//   name: 'Fluffy',
// };

// let dog = {
//   name: 'Fido',
// };

// function purr() {
//   console.log(`${this.name} is purring...`);
// }

// cat.purr = purr.bind(dog);
// cat.purr();

// 5

// Solution 1
// let incrementor = {
//   by: 10,
//   increment(nums) {
//     let self = this;
//     return nums.map(function (num) {
//       return num + self.by;
//     });
//   },
// };

// console.log(incrementor.increment([1, 6, 19, 7, 12]));

// Solution 2
// let incrementor = {
//   by: 10,
//   increment(nums) {
//     return nums.map(num => {
//       return num + this.by;
//     });
//   },
// };

// console.log(incrementor.increment([1, 6, 19, 7, 12])); // => [ 11, 16, 29, 17, 22 ]

// Q8

/* Whales, penguins, and ducks are all aquatic animals: they can swim and spend much of their lives swimming. Bats and ducks are volant: they can both fly. We want to provide the whales, penguins, and ducks the appropriate behaviors needed for their aquatic lifestyle and provide bats and ducks with the behaviors they need to fly.

Modify the above code so that all of the flying animals respond to a fly method. In the same way, all the aquatic animals should have a swim method. The flying animals should all use the same fly method, while the aquatic animals should all use the same swim method. Do not copy and paste the methods.

Explain your design decisions -- why did you choose to define each behavior the way you did? Note that you do not have to provide any code in the bodies of the swim and fly methods. */

// const swim = {
//   swim() {
//     console.log(`Swimming`);
//   }
// }

// const fly = {
//   fly() {
//     console.log(`Flying`);
//   }
// }

// class Animal {}
// class Mammal extends Animal {}
// class Bird extends Animal {}

// class Bat extends Mammal {}
// Object.assign(Bat.prototype, fly);

// class Whale extends Mammal {}
// Object.assign(Whale.prototype, swim);

// class Penguin extends Bird {}
// Object.assign(Penguin.prototype, swim);

// class Duck extends Bird {}
// Object.assign(Duck.prototype, swim, fly);

// let bat = new Bat();
// bat.fly(); // Flying

// let whale = new Whale();
// whale.swim(); // Swimming

// let penguin = new Penguin();
// penguin.swim(); // Swimming

// let duck = new Duck();
// duck.swim() // Swimming
// duck.fly() // Flying

// Q13 - back to this one
// Without changing any of the existing code, add some code to this program so that it logs the "Off we go..." message when plane.fly() executes.

let plane = {
  passengers: 220,
};

let flyingMachine = {
  fly() {
    console.log(`Off we go with ${this.passengers} passengers!`);
  },
};

flyingMachine.fly.call(plane);
plane.fly();

// Q14
/* Examine the contacts object in the following snippet. Write a constructor function and any other methods required so that the methods (add, males, females, and filterByName) on the contacts object work properly. Do not modify the contacts object. */

// function Contact(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   Contact.list.push(this);
// }

// Contact.list = [];

// Contact.prototype.add = function() {
//   return this.add();
// }

// Contact.prototype.males = function() {
//   return this.males()
// }

// Contact.prototype.females = function() {
//   return this.females();
// }

// Contact.prototype.filterByName = function() {
//   return this.filterByName();
// }

// let contacts = {
//   list: [],
//   add(name, gender) {
//     let contact = new Contact(name, gender);
//     this.list.push(contact);
//   },
//   males() {
//     return this.list.filter(function (contact) {
//       return contact.gender === 'male';
//     });
//   },
//   females() {
//     return this.list.filter(function (contact) {
//       return contact.gender === 'female';
//     });
//   },
//   filterByName(name) {
//     return this.list.filter(function (contact) {
//       return contact.hasName(name);
//     });
//   },
// };

// console.log(contacts.add('Omi', 'female'));

// Q15
/* This exercise asks you to come up with a skeletal OO design for a fake Employee Management Application,

An employee management application has information about the employees in the company; all have a name, a serial number, and should either be full-time or part-time employees.

All executives and managers are Full-time employees. Executives are a type of manager that can hire and fire employees. Regular employees are Full-time employees that are neither an executive nor a manager.

Executives receive 20 days of vacation, while managers receive 14 days, regular employees get 10 days, and part-time employees get none.

Full-time employees should have a takeVacation method that gets called when an employee takes some vacation. Part-time employees don't have this method.

Executives work at a desk in a corner office, managers work in a regular private office, and regular employees have a desk in the cubicle farm. Part-time employees work in an open workspace with no reserved desk.

// Managers can delegate work, while ordinary full-time and part-time employees can not. Any manager should be able to call a delegate method, but ordinary employees cannot.

// Use classes to create your design based on the application description. Your classes should show any inheritance relationships, mix-ins, and methods necessary to meet the requirements.

// This question is about designing object type relationships and how you organize your constructors, behaviors, and state. Your methods only need to provide enough detail to fulfill the requirements. In some cases, you may be able to omit the method body entirely. Don't include any functionality that we don't describe above. */

// name, serial Number, ft / pt
// vacation

// const vacation = {
//   takeVacation() {
//     console.log(`On vacation!`);
//   }
// }

// class Employee {
//   constructor(name, serialNumber, status, desk, vacation) {
//     this.name = name;
//     this.number = serialNumber;
//     this.status = status;
//     this.desk = desk;
//     this.vacation = vacation;
//   }
// }

// class PartTimeEmployee extends Employee {
//   constructor(name, serialNumber, status) {
//     super(name, serialNumber, status, 'open workspace', 0);
//     this.status = 'part-time';
//   }
// }

// class RegularEmployee extends Employee {
//   constructor(name, serialNumber, status) {
//     super(name, serialNumber, status, 'cubicle farm', 10);
//     this.status = 'full-time';
//   }
// }
// Object.assign(RegularEmployee.prototype, vacation);

// class Manager extends RegularEmployee {
//   constructor(name, serialNumber, status) {
//     super(name, serialNumber, status, 'private office', 14);
//   }

//   delegate() {
//     console.log(`Delegating.`);
//   }
// }

// class Executive extends Manager {
//   constructor(name, serialNumber, status) {
//     super(name, serialNumber, status, 'corner office', 20);
//   }

//   hire() {
//     console.log(`Hiring`);
//   }

//   fire() {
//     console.log(`Firing`);
//   }
// }

// let executive = new Executive('SungOh', 12345);
// executive.fire() // Firing
// executive.takeVacation() // On vacation!