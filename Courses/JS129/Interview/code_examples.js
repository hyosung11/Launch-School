/* Areas of Focus

- [ ] General knowledge of OOP concepts as they pertain to JavaScript.
- [ ] Conventional techniques for constructing objects, including the use of prototypal inheritance.
- [ ] The ability to come up with code examples to illustrate concepts. Be prepared! Know what examples you want to use.
- [ ] The ability to integrate what you've learned and put it to work to understand unusual situations.
- [ ] An ability to speak clearly and with precision. */

/* ===================
 Encapsulation Example
 */

// let overtime = 10;
// let baseSalary = 6000;
// let rate = 50;

// function computeWage(baseSalary, overtime, rate) {
//   return baseSalary + (overtime * rate);
// }

// let employeePay = {
//   baseSalary: 6000,
//   overtime: 10,
//   rate: 50,

//   computeWage() {
//     return this.baseSalary + (this.overtime * this.rate);
//   }
// }

// console.log(employeePay.computeWage()); // 6500

/* =================
 Factory Function */

// function createCar(make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     started: false,

//     start() {
//       this.started = true;
//     },

//     stop() {
//       this.started = false;
//     },
//   };
// }

// let car1 = createCar('Tesla', 'X', 2022);
// console.log(car1.make); // Tesla
// car1.start();
// console.log(car1.started); // true

/* The `createCar` factory function takes three arguments and returns a car object with four properties and two methods. With this `createCar` factory function, we can create as many car objects as our program needs. In this case, `createCar` handles the similarities, while each invocation specifies the differences with arguments.

Factory functions give us the ability to create objects of the same type by merely calling a function. Entities that are common to multiple objects, such as the `start` and `stop` methods, get declared in one place. On the other hand, arguments are passed to the factory function to distinguish one object from another, such as the `make`, `model`, and `year`. */

// Factory Function - `createRectangle`
// function createRectangle(length, width) {
//   return {
//     length,
//     width,

//     getArea() {
//       return this.length * this.width;
//     },
//   };
// }

// let rectangle = createRectangle(10, 5);
// rectangle.getArea(); // 50

/* =================
Collaborator Objects */

// let cat = {
//   name: 'Fluffy',

//   makeNoise() {
//     console.log('Meow! Meow!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let pete = {
//   name: 'Pete',
//   pet: cat, // <-- `cat` collaborator object stored in the `pet` property of the `pete` object

//   printName() {
//     console.log(`My name is ${this.name}!`);
//     console.log(`My pet's name is ${this.pet.name}`); // line 19
//   },
// };

// pete.printName();
// => My name is Pete!
// => My pet's name is Fluffy

/* The `pete` object has the collaborator object `cat` stored in its `pet` property. The `pete` object and the object referenced by its `pet` property work together. When we need to access the `pet` object or have it perform a behavior, we can use `pete.pet` to access and use the object's properties. For instance, on line 19, the `pete` object collaborates with the `cat` object (via `this.pet`) to access the `cat`'s name. */

// Collaborator Objects - Using an Array

// Examine the code below:

// let sohee = {
//   name: 'Sohee',
//   children: [],
// };

// let omi = {
//   name: 'Omi',
//   eat() {
//     console.log(`Cowboy spaghetti`);
//   },
// };

// let sungoh = {
//   name: 'SungOh',
//   eat() {
//     console.log(`Crunchy penne`);
//   },
// };

// sohee.children.push(omi)
// sohee.children.push(sungoh);

/* - Describe the relationship between the `sohee` object and the `omi` and `sungoh` objects.
  - The `omi` and `sungoh` objects are collaborators with the `sohee` object.

- Implement a method `childrenEat`, in the `sohee` object. The method should invoke the `eat` method of all the children for that object. */

// let sohee = {
//   name: 'Sohee',
//   children: [],

//   childrenEat() {
//     return this.children.forEach(child => child.eat());
//   }
// }

// sohee.children.push(omi)
// sohee.children.push(sungoh);

// sohee.childrenEat();
// Cowboy spaghetti
// Crunchy penne

/* ===================
Higher Order Functions

A higher-order function is a function that takes a function as an argument and/or returns a function. */

/* =================
Execution Context */

// let foo = {
//   bar: function () {
//     console.log(this);
//   },
// };

// foo.bar();
// `foo` is the implicit execution context for `bar`
// => returns { bar: [Function: bar] }

// let baz = foo.bar;
// baz();
// => Object [global] {...}
// `baz` called as a standalone function

/* In this code, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object. Since we're calling `baz` as a standalone function, its execution context is the global object, not the `foo` object. */

// `call`
// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42,
// }

// logNum.call(obj); // 42

// Use `call` to explicitly set execution context on the method `logNum`.
// let obj1 = {
//   logNum() {
//     console.log(this.num);
//   }
// }

// let obj2 = {
//   num: 42,
// }

// obj1.logNum.call(obj2) // 42

// Using `bind`
// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42
// };

// let sumNum2 = sumNum.bind(obj);
// sumNum2(5); // => 47

/* In this example, we don't call the function immediately as we do when using `call` and `apply`, Instead, *bind returns a new function*. The new function is **permanently** bound to the object passed as bind's first argument. You can then pass that method around and call it without worrying about losing its context since it's *permanently bound* to the provided object. */

// Object Prototype
// let a = {
//   foo: 1,
//   bar: 2,
// };

// let b = Object.create(a);
// b.foo; // => 1

// Method delegation to prototypes

// Constructor and Prototype Example
// function Book(author, title) {
//   this.author = author;
//   this.title = title;
// }

// Book.prototype.info = function() {
//   console.log(`${this.title} was written by ${this.author}.`);
// }

// let book = new Book('Pavel', 'Deadlift Dynamite');
// book.info(); // Deadlift Dynamite was written by Pavel.

// Static property used to keep track of all objects created by a constructor
// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   Dog.allDogs.push(this);
// }

// Dog.allDogs = [];

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);

// console.log(Dog.allDogs);
// [
//   Dog { name: 'Maxi', breed: 'German Shepherd', weight: 32 },
//   Dog { name: 'Dexter', breed: 'Rottweiler', weight: 50 }
// ]

// Static methods are methods that apply to the constructor or class itself, not a specific object created by the constructor or class

// function Dog (name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// static property
// Dog.species = 'Canis lupus';

// static method
// Dog.showSpecies = function() {
//   console.log(`Dogs belong to the species ${Dog.species}`);
// };

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// Dog.showSpecies(); // Dogs belong to the species Canis lupus

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// maxi.bark(); // 'Woof!'

// let biggie = new Dog('Biggie', 'Whippet', 9);
// biggie.bark(); // 'Yip!'

// Constructor/Prototype Example with static `allMakes` method
// function Car(make, model) {
//   this.make = make;
//   this.model = model;
//   Car.makes.push(this.make);
// }

// Car.makes = [];

// Car.allMakes = function() {
//   return Car.makes;
// }

// Car.prototype.drive = function () {
//   console.log(`Driving a ${this.model}`);
// };

// let car1 = new Car('Honda', 'Accord');
// let car2 = new Car('Toytoa', 'Prius');
// console.log(Car.allMakes()); // [ 'Honda', 'Toyota' ]

// Class Syntax
// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     Car.makes.push(this.make);
//   }

//   static makes = [];

//   static allMakes() {
//     return Car.makes;
//   }

//   drive() {
//     console.log(`Driving a ${this.model}.`);
//   }
// }

// let car1 = new Car('Honda', 'Accord');
// let car2 = new Car('Toytoa', 'Prius');
// console.log(Car.allMakes()); // [ 'Honda', 'Toyota' ]

// console.log(Array.from({ 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 2 }));

// Class Declaration syntax
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rectangle = new Rectangle(10, 5);
// console.log(typeof Rectangle); // function
// console.log(rectangle instanceof Rectangle); // true
// console.log(rectangle.constructor); //[class Rectangle]
// console.log(rectangle.getArea());  // 50

// Class Expression Syntax
// let Rectangle = class {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// Static Method Example
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.getDescription = function() {
//   return 'A rectangle is a shape with 4 sides';
// }

// console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   static getDescription() {
//     return 'A rectangle is a shape with 4 sides';
//   }
// }

// console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides

// ES6 Class Syntax
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rectangle = new Rectangle(5, 4);

// console.log(rectangle.getLength()); // 5
// console.log(rectangle.getWidth()); // 4
// console.log(rectangle.getArea()); // 20

/* In the constructor function, we create two properties `length` and `width` and assign to them values of parameters with the same name. To access the value of each property within methods, we use the `this` keyword in front of each property name. */

// class Greeting {
//   greet(message) {
//     console.log(message);
//   }
// }

// class Hello extends Greeting {
//   hi() {
//     this.greet('Hello');
//   }
// }

// class Goodbye extends Greeting {
//   bye() {
//     this.greet('Goodbye')
//   }
// }

// let hola = new Hello();
// hola.hi() // Hello

// let adios = new Goodbye();
// adios.bye(); // Goodbye

// OLOO `rectanglePrototype`
// let rectanglePrototype = {
//   init(length, width) {
//     this.length = length;
//     this.width = width;
//     return this;
//   },

//   getArea() {
//     return this.length * this.width;
//   },
// }

// let rectangle = Object.create(rectanglePrototype).init(5, 4);
// console.log(rectangle.getArea()); // 20

// Subtyping with Constructors and Prototypes
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// }

// let rectangle = new Rectangle(5, 4);
// console.log(rectangle.getArea()); // 20
// console.log(rectangle.toString()); // [Rectangle 5 x 4]

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// // Restore the `constructor` property
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// }

// let square = new Square(5);
// console.log(square.getArea()); // 25
// console.log(square.toString()); // [Square 5 x 5]

/* The combination of constructors and prototypes provides a way of mimicking classical inheritance with JavaScript. This lets us create subtypes objects which can inherit methods from a supertype object. This is one way of facilitating code reuse. */

// Prototypal Inheritance Example

// let humanPrototype = {
//   myName() { return this.name; },
//   myAge() { return this.age; },
// };

// let personPrototype = Object.create(humanPrototype);
// personPrototype.toString = function() {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
// };

// let will = Object.create(personPrototype);
// will.name = 'William';
// will.age = 28;
// will.toString(); // => My name is William and I'm 28 years old.

/* Here, the `will` object inherits from the `personPrototype` object which, in turn, inherits from `humanPrototype`. `will`'s `[[Prototype]]` property refers to `personPrototype`, and the `[[Prototype]]` property of `personPrototype` refers to `humanPrototype`. When we invoke `toString`, it finds the methods `myName` and `myAge` on the `humanPrototype` object. */

// let animal = {
//   type: 'mammal',
//   breathe: function() {
//     console.log("I'm breathing");
//   },
// }

// let dog = Object.create(animal);

// console.log(dog); // {}
// console.log(dog.type); // mammal
// console.log(dog.__proto__); // { type: 'mammal', breathe: [Function: breathe] }
// console.log(dog.__proto__ === animal); // true

// Pseudo-classical Inheritance Example
// function Human() {}

// Human.prototype.myName = function() { return this.name; }
// Human.prototype.myAge = function() { return this.age; }

// function Person() {}
// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;
// Person.prototype.toString = function() {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
// }

// let will = new Person();
// will.name = 'William';
// will.age = 28
// console.log(will.toString()); // My name is Will and I'm 28 years old.

// Class Syntax
// class Human {
//   myName() { return this.name; }
//   myAge() { return this.age; }
// }

// class Person extends Human {
//   toString() {
//     return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
//   }
// }

// let will = new Person();
// will.name = 'William';
// will.age = 28;
// console.log(will.toString()); // My name is William and I'm 28 years old.

// Inheritance with Class Declarations
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   toString() {
//     return `[Rectangle ${this.length} * ${this.width}]`;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   toString() {
//     return `[Square ${this.length} x ${this.width}]`;
//   }
// }

// let square = new Square(5);
// console.log(square.getArea()); // 25
// console.log(square.toString()); // [Square 5 x 5]

// Inheritance with class expression syntax
// let Person = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName() {
//     console.log(`My name is ${this.name}.`);
//   }
// };

// let Student = class extends Person {
//   constructor(name, age, semester) {
//     super(name, age);
//     this.semester = semester;
//   }

//   enrollInCourse(courseNumber) {
//     console.log(`${this.name} has enrolled in course ${courseNumber}.`);
//   }
// }

// let student = new Student('Kim', 21, 'Fall');
// student.sayName(); // My name is Kim.
// student.enrollInCourse('JS130'); // Kim has enrolled in course JS130.

// Mixin
// const Swimmable = {
//   swim() { console.log(`Swimming`);},
// };

// const Flyable = {
//   fly() { console.log(`Flying`);},
// };

// function createFlyingBird() {
//   return Object.assign({}, Flyable);
// }

// function createSwimmingBird() {
//   return Object.assign({}, Swimmable);
// }

// function createTalentedBird() {
//   return Object.assign({}, Swimmable, Flyable);
// }

// function createStork() {
//   return createFlyingBird();
// }

// function createParrot() {
//   return createFlyingBird();
// }

// function createPenguin() {
//   return createSwimmingBird();
// }

// function createOstrich() {
//   return createSwimmingBird();
// }

// function createDuck() {
//   return createTalentedBird();
// }

// function createGoose() {
//   return createTalentedBird();
// }

// let duck = createDuck();
// duck.swim(); // Swimming
// duck.fly(); // Flying

// console.log(duck.hasOwnProperty('swim')); // true
// console.log(duck instanceof createDuck); // false

// Mixin with Class
// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// }

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }

// Object.assign(Car.prototype, Speed);

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// Object.assign(Truck.prototype, Speed);

// let car = new Car();
// car.goFast();

// let truck = new Truck();
// truck.goFast();

// Use `in` operator to check whether an object responds to a specific method.

// console.log(`goFast` in car); // true
// console.log('goSlow' in truck); // false

// Mixin with Factory Function
// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {
//       console.log(`Solving`);
//     }
//   }
// }

// const walk = {
//   walk() {
//     console.log(`Walking`);
//   }
// }

// const talk = {
//   talk() {
//     console.log(`Talking`);
//   }
// }

// function createHumanoid(intelligence, model) {
//   let humanoid = createRobot(intelligence, model);
//   Object.assign(humanoid, walk, talk);
//   return humanoid;
// }

// function createHuman(name, age) {
//   let human = {
//     name,
//     age,
//   }
//   Object.assign(human, walk, talk);
//   return human;
// }

// let mandy = createHumanoid('High', 'C3P0');
// mandy.solve(); // Solving

// let human = createHuman('SungOh', 6);
// human.walk(); // Walking

// Polymorphism through Inheritance
// class Animal {
//   move() {}
// }

// class Fish extends Animal {
//   move() {
//     console.log(`Swimming`);
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log(`Walking`);
//   }
// }

// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];

// animals.forEach(animal => animal.move());
// Swimming
// Walking

// Inheritance-based Polymorphism - Objects are related through inheritance
// class Animal {
//   speak() {}
// }

// class Dog extends Animal {
//   speak() { console.log("Woof!"); }
// }

// class Cat extends Animal {
//   speak() { console.log("Meow!"); }
// }

// class Fish extends Animal {}

// let dog = new Dog();
// let cat = new Cat();
// let fish = new Fish();

// dog.speak(); // Woof!
// cat.speak(); // Meow!
// fish.speak(); // (nothing happens)

// Polymorphism through Duck Typing
let str = 'abcde';
let arr = ['a', 'b', 'c', 'd', 'e'];

[str, arr].forEach(obj => console.log(obj.indexOf('d')));
// 3
// 3

/* Notice how we're calling both `str.indexOf()` and `arr.indexOf()` where `obj` is alternately a reference to `str` or `arr`.

Calling `indexOf` like this with a variable that can take different types is where polymorphism really comes into play. The point behind polymorphism is that you can write code that doesn't care about types -- just that different things respond to the same message. */