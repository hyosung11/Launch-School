// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   communicate() {
//     return `Communicating.`;
//   }

//   eat() {
//     return `Eating.`
//   }

//   sleep() {
//     return `Sleeping.`
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }

//   diagnose() {
//     return `Diagnosing`;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     return `Studying!`
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     return `Researching!`
//   }
// }

// let polly = new GraduateStudent('Polly', 'Cracker');
// console.log(polly.research());
// console.log(polly.eat());
// console.log(polly.study());
// console.log(polly.fullName());

// console.log('Hello'.constructor.name);
// console.log([1, 3, 5].constructor.name);
// console.log({name: 'Ollie'}.constructor.name);

/* The `constructor` property returns a reference to the `Object` constructor function that created the instance object. This constructor function has access to the `name` property which returns the function's name as specified when it was created. */

// class Cat {}

// let kitty = new Cat();

/* To instantiate a new `Cat`, we use the `new` keyword in front of the function call. This keyword turns the function call into a constructor call.

To make use of this new `Cat` object, we need to assign it to a variable. In the solution, we assign the object to a variable named `kitty`. This variable can be used to interact with the object in various ways. */

// class Cat {
//   constructor() {
//     console.log(`I'm a cat!`);
//   }
// }

// let kitty = new Cat();

/* When defining a class you usually need to define the `constructor` method.

Adding this method lets us execute certain statements when a new `Cat` object is initialized. In this case, we want to log `I'm a cat!`. We accomplish this by using `console.log()`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// Hello! My name is Sophie!

/* The `Cat` constructor expects one parameter: `name`. When it is called with the `new` keyword, it assigns the received parameter to the `name` property of the current instance. The property `name` can be accessed anywhere within the class using the `this` keyword.

*/

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

/* Instance methods are only available when there's an instance of the class. For example, `kitty` is an instance of the `Cat` class. This means, if we add the `greet` method, we're able to invoke as shown above.

As mentioned in the previous exercise, the property `name` can be accessed anywhere within the class using the `this` keyword. This lets us print `Hello! My name is Sophie!` from `greet` simply by moving the statement from the `constructor` to `greet`. */

// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

/* In the solution, we have used the `ES6` feature default parameters to set the default value of the parameter to a string 'John Doe'. Then, in the constructor function, we have just assigned the value of the parameter `name` to a property `name`. */

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

/* In the solution, `rename` accepts one argument, which represents a new name. To rename `kitty`, we just need to reassign the property `name` to the value provided by the argument. */

// class Cat {
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

// Cat.genericGreeting();

/* The invocation of `genericGreeting` is on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method. We define static methods on classes by using the `static` keyword. To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a `TypeError`.  */

class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`Hello! I"m a cat!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty = new Cat('Sophie');
Cat.genericGreeting();
kitty.personalGreeting();