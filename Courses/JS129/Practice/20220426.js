/* Without running the code, which of the following snippets will log true? Choose all that apply. */

// let Animal = {};
// let Cat = Object.create(Animal);
// let fluffy = Object.create(Cat);
// console.log(fluffy instanceof Animal);

/* The `Animal` object in this snippet does not have a `prototype` property, such as a function object. The code raises a `TypeError: Right-hand side of `instanceof` is not callable. */

// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal); // true

/* In this code, we manually add `Animal` to the prototype chain by changing `Cat.prototype` to reference `Animal`. Since `fluffy` is a `Cat` and since `Animal` is in `Cat`'s prototype chain, `fluffy` is an instance of `Animal`. */

// function Animal() {}
// function Cat() {}
// Cat.prototype = new Animal();
// function makeCat() {
//   return {};
// }

// let fluffy = makeCat();
// console.log(fluffy instanceof Animal); // false

/* In this code, `Animal` does have a `prototype` property, but neither `Cat` nor `Animal` is used to construct the object referenced by `fluffy`, so `fluffy` is not an instance of `Animal`. The code logs `false`. */

// class Animal {}
// class Cat extends Animal {}
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal); // true

/* In this code, we use ES6 class syntax to establish the prototype chain. Since `fluffy` is a `Cat`, and since `Cat` extends `Animal`, `fluffy` is an instance of `Animal`. */

// OLOO
// let Cat = {
//   init(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     return this;
//   },

//   log() {
//     console.log(`Meow! My name is ${this.name}. I'm a ${this.gender} cat.`);
//   },
// }

// let cat1 = Object.create(Cat).init("Pudding", "girl");
// cat1.log(); // Meow! My name is Pudding. I'm a girl cat.

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// missing code
// function Child(name, school) {
//   Person.call(this, name);
//   this.school = school;
// }

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// your code from the previous question.
// function Child(name, school) {
//   Person.call(this, name);
//   this.school = school;
// }

// // more missing code
// Child.prototype = Object.create(Person.prototype);
// // reset the constructor for the `Child` prototype (So `Object.getPrototypeOf(child).constructor` returns `Child` and not `Person`.)
// // Child.prototype.constructor = Child;
// Child.prototype['constructor'] = Child;

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person);                              // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log(child.speak() === "Hello, my name is Suzy.");          // true
// console.log(); // logs a blank line

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true
// console.log(person.learn === undefined);                           // true

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`)
//   }
// }

// let kitty = new Cat('Sophie');

/* The `Cat` constructor expects one parameter: `name`. When it is called with the `new` keyword, it assigns the received parameter to the `name` property of the current instance. The property `name` can be accessed anywhere within the class using the `this` keyword. 

To appease the exercise requirements, we only need to reference the property `name` immediately following its initialization. We use `console.log()` to log `Hello! My name is Sophie` to the console. In this object `'Sophie'` is dynamic which means we used property `name` to print the value. */

/* Using the code from the previous exercise, move the greeting from the constructor method to an instance method named greet that logs a greeting to the console when invoked. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`)
//   }
// }

// let kitty = new Cat('Sophie');
// kitty.greet(); // Hello! My name is Sophie!

/* Instance methods are only available when there's an instance of the class. For example, `kitty` is an instance of the `Cat` class. This means, if we add the `greet` method, we're able to invoke it like this: */

// let kitty = new Cat('Sophie');
// kitty.greet(); // => Hello! My name is Sophie!

/* As mentioned in the previous exercise, the property `name` can be accessed anywhere within the class using the `this` keyword. This lets us print `'Hello! My name is Sophie'` from `greet` simply by moving the statement from `constructor` to `greet`. */

// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

/* In the solution we have used the ES6 feature, default parameters, to set the default value of the parameter to a string 'John Doe'. Then in the constructor function, we have just assigned the value of the parameter `name` to a property `name`.
*/

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

// /* In the solution, `rename` accepts one argument which represents a new name. To rename `kitty`, we just need to reassign the property `name` to the value provided by the argument. */

// class Cat {
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

// Cat.genericGreeting();

/* When looking at the initial example, the first thing you should notice is the invocation of `genericGreeting`. It's being invoked on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method. We define static methods on classes by using the `static` keyword. To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a `TypeError`.  */

/* Without calling the Cat constructor, create an object that looks and acts like a Cat instance that doesn't have a defined name. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

/* In the solution, we are using `Object.create()` to create a new object that can't be distinguished from a `Cat` instance. `Object.create()` uses an existing object as the prototype of the newly created object. */

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, colors) {
//     super(name, age);
//     this.colors = colors;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

/* Since the `constructor` method in the `Cat` class requires arguments that differ from the `constructor` method in the `Pet` class, we must define a `constructor` method for `Cat`, and that method must call `super`.

Then we just need to define the `info` method on the `Cat` class that returns the required message. */

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// let dog = new Dog('Rusty', 3, 'excited', 'Zeus');
// console.log(dog.greetMaster());

/* In the `Cat` class constructor method we are using the `super` keyword to invoke the constructor method of the parent class `Animal`. We need to pass 5 arguments to it (name, age, legs, species, and status), as this is how many arguments the `Animal` constructor method takes.

As the `introduce()` method in `Cat` is just a slight modification of the method with the same name from the parent class, we can use again the `super` keyword to invoke the method on the object's parent like this `super.introduce()`. Finally, we just need to concatenate to the return value of this method the string "Meow, meow!" which we did using template strings.

In the `Dog` class constructor method, we are, like in the `Cat` class, using the `super` keyword to invoke the constructor method from the `Animal` class. Also, within this method, we are instantiating a new property called `master`. Then, within the `greetMaster()` method, we are accessing the value of this property using the `this` keyword. */

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model)
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// let car = new Car('Tesla', 'X');
// console.log(car.getWheels());


/* All of our constructor methods take `make` and `model` parameters, and store them in `make` and `model` properties. We can refactor all of this commonality to `Vehicle` by moving `constructor` from one of the classes into `Vehicle`, and deleting it from both `Car` and `Motorcycle`. However, out `Truck` class takes a third parameter `payload`, so we can't just delete the `constructor` method in the `Truck` class.

Our `info` method is identical in all three of the original classes, so we just move that into `Vehicle` and remove it from the original classes.

The `getWheels` method is different in each of the original classes, so we don't move this into `Vehicle`. */

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

let car = new Car('Toyota', 'Prius', 4);
console.log(car.getWheels());