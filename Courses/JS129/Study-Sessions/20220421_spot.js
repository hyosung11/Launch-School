/* Introductions
- Allison, JS130
- Marcus, Netherlands, JS229, practicing for the written
- Nykaela, Southern California, take the written tomorrow
- Alex, NJ,
- HyoSung
- Jason, JS229
- Wendy, JS120, Oregon

IIFEs - Immediately Invoked Function Expressions
- helps to create private data
*/

// A duck can both swim and fly. 
// class FlyingBird {}
// class SwimmingBird {}

// class Duck extends FlyingBird {}
// Object.assign(Duck.prototype, SwimmingBird.p);

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}.`);
};

const mark = new Person('Mark');

function Employee(name, id) {
  Person.call(this, name);
  this.id = id;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.reportId = function () {
  console.log(`I am ${this.name} and my ID is ${this.id}.`);
};

const mary = new Employee('Mary', 3);