// console.log('Hello'.constructor.name);
// console.log([1, 2, 3].constructor.name);
// console.log({ name: 'Srdjan' }.constructor.name);

/* The `constructor` property returns a reference to the `Object` constructor function that created the instance object. This constructor function has access to the `name` property which returns the function's name as specified when it was created. */

// class Cat {};

/* The simplest way to create classes in JavaScript is with the class declaration which begins with the `class` keyword followed by the name of the class and open and closed curly braces. */

// class Cat {}

// let kitty = new Cat();

/* To instantiate a new `Cat` object, we use the `new` keyword in front of the function call. This keyword turns the function call into a constructor call.

To make use of this new `Cat` object, we need to assign it a variable. In the solution, we assign the object to a variable named `kitty`. This variable can be used to interact with the object in various ways. */

// class Cat {
//   constructor() {
//     console.log(`I'm a cat!`);
//   }
// }

// let kitty = new Cat();

/* When defining a class, you usually need to define the `constructor` method. Adding this method lets us execute certain statements when a new `Cat` object is initialized. In this case, we want to log `I'm a cat!`. We accomplish this by using `console.log()`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');

/* The `Cat` constructor expects one parameter: `name`. When it is called with the `new` keyword, it assigns the received parameter to the `name` property of the current instance. The property `name` can be accessed anywhere within the class using the `this` keyword. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// kitty.greet();

/* Instance methods are only available when there's an instance of the class. For example, `kitty` is an instance of the `Cat` class. This means, if we add the `greet` method, we're able to invoke it, like this:

The property `name` can be accessed anywhere within the class using the `this` keyword. This lets us print `Hello! My name is Sophie!` from `greet` simply by moving the statement from `constructor` to `greet`. */

// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

/* In the constructor function, we have assigned the value of parameter `name` to a property `name`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// } 

// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(kitty.name); // Chloe

// class Cat {
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

// let kitty = new Cat();
// Cat.genericGreeting();

/* `genericGreeting` is being invoked on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method. We define static methods on classes by using the `static` keyword. To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a `TypeError`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// Cat.genericGreeting();
// kitty.personalGreeting();

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {}

// class Car extends Vehicle {}

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015

/* To reduce complexity, classes with similar behaviors can inherit from a superclass. The superclass implements the common behaviors while the inheriting classes invoke them. The `extends` keyword is used to denote inheritance between classes. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

/* When we invoke `super` within the constructor, it appears alone and must be used before the `this` keyword` is used. However, the `super` keyword can be used to call function's on the object's parent. */

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

/* Here we are using the `super` keyword to call the function on the object's parent. This way we are able to use some functionality from the parent class `Vehicle` in the `Truck` class. */

const walkMixin = {
  walk() {
    return `Let's go for a walk!`;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, walkMixin);

let kitty = new Cat('Sophie');
console.log(kitty.greet());
console.log(kitty.walk());

/* Discussion

Mixins are typically used to contain methods that may be useful for multiple classes, but not all classes. When you mix a module into a class, you're allowing the class to invoke the contained methods.

In our solution, we create a mixin named walkMixin that contains a method named walk. We give Cat access to this method by including walkMixin in the class's prototype, like this: */