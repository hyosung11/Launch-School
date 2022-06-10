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

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log(`Hello! I"m a cat!`);
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}`);
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
//     return `${super.startEngine()} Drive ${speed}, please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

/* Here we are using the `super` keyword to call the function on the object's parent. This way we are able to use some functionality from the parent class `Vehicle` in the `Truck` class. */

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`;
//   },
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// let kitty = new Cat('Sophie');
// console.log(kitty.greet());
// console.log(kitty.walk());

/* 20220608 */
// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   },
// };

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(Fish.prototype, swimMixin);

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}
// Object.assign(Maltese.prototype, swimMixin);

// let dog1 = new Maltese('Buddy');
// let fish1 = new Fish('Nemo');

// console.log(dog1.swim());
// console.log(fish1.swim());

/* Use `Object.assign` to assign the mixin to the prototype object. */

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`
//   }
// }

// class Truck {}
// Object.assign(Truck.prototype, towMixin);

// class Car {}

// let truck = new Truck();
// console.log(truck.tow());

/* Mixins are useful for organizing similar methods that may be relevant for multiple classes. For instance, the mixin `towMixin` contains the method `tow`. Typically, you use a `Truck` for towing, not a `Car`, which means `tow` is only relevant to `Truck` objects.

With mixins, we have the ability to include them in specific classes. In the solution, we used `Object.assign` to include the method from `towMixin` in the `Truck.prototype` object. */

// const towMixin = {
//   tow() {
//     return 'I can tow a trailer!';
//   },
// };

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle {}

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);

/* Mixins are useful for containing similar methods. However, sometimes class inheritance is also needed. This exercise illustrates that it's possible to inherit from a class and, at the same time, include a mixin.

In the solution, we've rewritten the `Vehicle` class used in the earlier exercise. Then, to allow `Truck` and `Car` to access `year`, we have both classes inherit from `Vehicle`. */

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

/* In the constructor function we are creating the two properties `width` and `length` and assigning to them the values of the parameters with the same name. To access the value of each property within methods, we use the `this` keyword in front of each property name. */

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

/* We must call `super` in the `constructor` method of the `Square` class, and that `Square` inherits the `getArea` method from `Rectangle`.  */

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

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

/* Since the `constructor` method in the `Cat` class requires arguments that differ from the `constructor` method in the `Pet` class, we must define a `constructor` method for `Cat`, and that method must be sure to call `super`. Finally, we just need to define the `info` method on the `Cat` class that returns the required message. */

// function createPet(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// function createCat(name, age, colors) {
//   let cat = createPet(name, age);
//   cat.colors = colors;
//   cat.info = function info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`
//   };

//   return cat;
// }

// let pudding = createCat('Pudding', 7, 'black and white');
// console.log(pudding.info());

// function Pet(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Cat(name, age, colors) {
//   Pet.call(this, name, age);
//   this.colors = colors;
// }

// Cat.prototype.info = function info() {
//   return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`
// }

// let pudding = new Cat('Pudding', 7, 'black and white');

// console.log(pudding.info());

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

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

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
//     return super.introduce() + ' ' +  'Meow meow!';
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// let rusty = new Dog('Rusty', 3, 'chill', 'Oliver');
// console.log(rusty.greetMaster());

/* In the `Cat` constructor method we are using the `super` keyword to invoke the constructor method of the parent class `Animal`. We need to pass 5 arguments to it (name, age, legs, species, and status), as this is how many arguments the `Animal` constructor method takes.

Since the `introduce()` method in the `Cat` class is just a slight modification of the method with the same name from the parent class, we can again use the `super` keyword to invoke the method on the object's parent, like this `super.introduce()`. Finally, we just need to concatenate to the return value of this method string "Meow, meow!", which we did using template strings.

In the `Dog` class constructor method, we are, like in the `Cat` class using the `super` keyword to invoke the constructor method from the `Animal` class. Also, within this method, we are instantiating a new property called `master`. Then, within the `greetMaster()` method, we are accessing the value of this property using the `this` keyword. */

// function createAnimal(name, age, legs, species, status) {
//   return {
//     name,
//     age,
//     legs,
//     species,
//     status,

//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`
//     },
//   };
// }

// function createCat(name, age, status) {
//   let cat = createAnimal(name, age, 4, 'cat', status);
//   cat.introduce = function introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
//   }
//   return cat;
// }

// function createDog(name, age, status, master) {
//   let dog = createAnimal(name, age, 4, 'dog', status);
//   dog.master = master;
//   dog.greetMaster = function greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
//   return dog;
// }

// let felix = createCat('Felix', 4, 'sleepy');
// console.log(felix);

// let clifford = createDog('Clifford', 1, 'curious', 'James');
// console.log(clifford.introduce());
// console.log(clifford.greetMaster());

// // OLOO (Prototypal)
// let animalPrototype = {
//   init(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//     return this;
//   },

//   intro() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   },
// };

// let catPrototype = {
//   init(name, age, status) {
//     animalPrototype.init.call(this, name, age, 4, 'cat', status);
//     return this;
//   },

//   introduce() {
//     return animalPrototype.intro.call(this) + " Meow meow!";
//   }
// }

// let catOLOO = Object.assign(Object.create(animalPrototype), catPrototype);

// let kitty = Object.create(catOLOO).init('Kitty', 3, 'lazy');
// console.log(kitty.intro()); // Hello, my name is Kitty and I am 3 years old and lazy.
// console.log(kitty.introduce());

// let dogPrototype = {
//   init(name, age, status, master) {
//     animalPrototype.init.call(this, name, age, 4, 'dog', status);
//     this.master = master;
//     return this;
//   },

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// let dogOLOO = Object.assign(Object.create(animalPrototype), dogPrototype);

// let buster = Object.create(dogOLOO).init('Buster', 2, 'happy', 'Omi');
// console.log(buster.intro());
// console.log(buster.greetMaster());

// Constructors/Prototypes (Pseudo-classical)
// function Animal(name, age, legs, species, status) {
//   this.name = name;
//   this.age = age;
//   this.legs = legs;
//   this.species = species;
//   this.status = status;
// }

// Animal.prototype.introduce = function introduce() {
//   return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`
// };

// function Cat(name, age, status) {
//   Animal.call(this, name, age, 4, 'cat', status);
// }

// Cat.prototype = Object.create(Animal.prototype);
// // restoring the constructor
// Cat.prototype.constructor = Cat;

// Cat.prototype.introduce = function introduce() {
//   return `${Animal.prototype.introduce.call(this)} Meow meow!`;
// }

// function Dog(name, age, status, master) {
//   Animal.call(this, name, age, 4, 'dog', status);
//   this.master = master;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.greetMaster = function greetMaster() {
//   return `Hello ${this.master}! Woof, woof!`;
// }

// let kitty = new Cat('kitty', 3, 'curious');
// console.log(kitty.introduce());

// let blackie = new Dog('Blackie', 1, 'excited', 'Sohee');
// console.log(blackie.greetMaster());
// console.log(blackie.introduce());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this. age} years old and ${this.status}.`
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

// let cat = new Cat('kitty', 3, 'creative');
// console.log(cat.introduce());

// let dog = new Dog('Dougie', 5, 'tired', 'Sam');
// console.log(dog.introduce());
// console.log(dog.greetMaster());

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
//     super(make, model);
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// let truck = new Truck('Honda', 'Passport', 'medium');
// console.log(truck.info());

/* `Vehicle` is a good name for the superclass. All of our constructor methods take `make` and `model` parameters, and store them in `make` and `model` properties. We can refactor all of this commonality into `Vehicle` by moving the `constructor` from one of the classes into `Vehicle`, and deleting it from both `Car` and `Motorcycle`. However, our `Truck` class takes a third parameter `payload`, so we can't just delete the `constructor` method in the `Truck` class.

Our `info` method is identical in all 3 of the original classes, so we just move that into the `Vehicle` superclass and remove it from the original classes.

The `getWheels` method is different in each of the original classes, so we don't move this into `Vehicle`. */

// class Vehicle {
//   constructor(make, model, wheels = 0) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {}

// class Motorcycle extends Vehicle {}

// class Truck extends Vehicle {
//   constructor(make, model, wheels, payload) {
//     super(make, model, wheels);
//     this.payload = payload;
//   }
// }

// let car = new Car('Tesla', 'S', 4);
// console.log(car.getWheels());

// let truck = new Truck('Ford', '150', 6, 'heavy');
// console.log(truck.getWheels());

// Factory Function
// function createVehicle(make, model, wheels) {
//   return {
//     make,
//     model,
//     wheels,

//     getWheels() {
//       return this.wheels;
//     },

//     info() {
//       return `${this.make} ${this.model}`;
//     },
//   };
// }

// function createCar(make, model) {
//   return createVehicle(make, model, 4);
// }

// function createMotorcycle(make, model) {
//   return createVehicle(make, model, 2);
// }

// function createTruck(make, model, payload) {
//   let truck = createVehicle(make, model, 6);
//   truck.payload = payload;
//   return truck;
// }

// let car = createCar('Tesla', 'X', 4);
// console.log(car.getWheels());

// let truck = createTruck('Ford', 'Bronco', 'low');
// console.log(truck.info());
// console.log(truck.getWheels());

// let vehiclePrototype = {
//   init(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//     return this;
//   },

//   getWheels() {
//     return this.wheels;
//   },

//   info() {
//     return `${this.make} ${this.model}`;
//   },
// };

// let carPrototype = {
//   init(make, model) {
//     vehiclePrototype.init.call(this, make, model, 4);
//     return this;
//   }
// };

// let carOLOO = Object.assign(Object.create(vehiclePrototype), carPrototype);

// let moana = Object.create(carOLOO).init('Toyota', 'Prius');
// console.log(moana.getWheels());
// console.log(moana.info());

function Vehicle(make, model, wheels) {
  this.make = make;
  this.model = model;
  this.wheels = wheels;
}

// Vehicle.prototype.getWheels = function getWheels() {
//   return this.wheels;
// }

// Vehicle.prototype.info = function info() {
//   return `${this.make}  ${this.model}`;
// }

// Vehicle.prototype = {
//   getWheels() {
//     return this.wheels;
//   },

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// function Car(make, model) {
//   Vehicle.call(this, make, model, 4);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// let moana = new Car('Toyota', 'Prius');
// console.log(moana.getWheels());
// console.log(moana.info());

// class Vehicle {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 4);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 2);
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model, 6);
//     this.payload = payload;
//   }
// }

class Something {
  constructor() {
    this.data = 'Hello';
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return 'ByeBye';
  }
}

let thing = new Something();
console.log(Something.dupData()); // line 16
console.log(thing.dupData()); // line 17

/* The code will log `'ByeBye'` and `'HelloHello'`. On line 16, the `dupData` method is called as a static method on the `Something` class, so it returns `ByeBye`. On line 17, the `dupData` method is called on the `thing` object which is an instance of the `Something` class, so it invokes the instance method `dupData` and returns `HelloHello`.

Here we see two methods named `dupData` in the `Something` class. However, one is defined as `dupData`, and is thus an instance method. The other has the `static` keyword in front of its name and so it is a static method. The two methods are different, and are completely independent of each other.

Our code first creates a `Something` object, and then logs the result of `Something.dupData`, and then `thing.dupData`. The former invocation calls the static method `dupData` and so logs `ByeBye`. The latter invocation calls the instance method, and so prints `HelloHello`.

This code snippet demonstrates static methods and instance methods. Static methods are methods defined in a class definition that begin with the `static` keyword. Instance methods are methods defined in a class without the `static` keyword. */