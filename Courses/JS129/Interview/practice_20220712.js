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

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`;
//   }
// }

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

/* Discussion

Mixins are typically used to contain methods that may be useful for multiple classes, but not all classes. When you mix a module into a class, you're allowing the class to invoke the contained methods.

In our solution, we create a mixin named walkMixin that contains a method named walk. We give Cat access to this method by including walkMixin in the class's prototype, like this: */

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

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`;
//   }
// }

// class Truck {}
// Object.assign(Truck.prototype, towMixin);

// class Car {}

// let truck = new Truck();
// console.log(truck.tow());

/* Discussion

Mixins are useful for organizing similar methods that may be relevant to multiple classes. For instance, the mixin towMixin contains the method tow. Typically, you use a Truck for towing, not a Car, which means tow is only relevant to Truck objects.

With mixins, we have the ability to include them in specific classes. In the solution,we used Object.assign to include methods from towMixin in the Truck.prototype object. */

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
//     super(year);
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle {}

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);

/* Discussion

Mixins are useful for containing similar methods, however, sometimes class inheritance is needed. This exercise illustrates that it's possible to inherit from a class and, at the same time, include a mixin.

In the solution, we've rewritten the `Vehicle` class used in earlier exercises. Then to allow `Truck` and `Car` access to `year`, we have both classes inherit from `Vehicle`. */

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

/* In the constructor function we create two properties `width` and `length` and assign to them values of parameters with the same name. To access the values of each property within methods, we use the `this` keyword in front of each property name. */

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

/* We must call `super` in the `constructor` method of the `Square` class, and that `Square` inherits the `getArea` method from `Rectangle`. */

// class - Pseudo-Classical Inheritance
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

// let newSquare = new Square(5); // line 27
// console.log(`area of square = ${newSquare.getArea()}`); // area of square = 25

/*
Execution of Line 27 causes the Square Class Function's Prototype to inherit from the Rectangle Class Function's Prototype (in other words, the internal [[Prototype]] property of Square.prototype refers to Rectangle.prototype)

Therefore, when we create a new instance of the Square Class called newSquare,
newSquare inherits from the Square Class Function's Prototype (in other words, the internal [[Prototype]] property of newSquare refers to Square.prototype)

When we call the `getArea` method on the newSquare object (which is an instance of the Square class), although the newSquare object does not define its
own method called getArea, the JS engine searches the prototypal chain of
newSquare and it finds the getArea method defined on the Rectangle
Class Function's Prototype (on Rectangle.prototype).
*/

// Constructors & Prototypes - pseudo-classical inheritance
// function RectangleFunc(length, width) {
//   this.length = length;
//   this.width = width;
// }

// RectangleFunc.prototype.getWidth = function() {
//   return this.width;
// }

// RectangleFunc.prototype.getLength = function() {
//   return this.length;
// }

// RectangleFunc.prototype.getArea = function() {
//   return this.width * this.length;
// }

// function Square(side) {
//   RectangleFunc.call(this, side, side);
// }

// Square.prototype = Object.create(RectangleFunc.prototype);
// Understanding How to Implement Pseudo-Classical Inheritance
    // Re-assign Square.prototype to a reference to a new Object that INHERITS from Rectangle.prototype
    // This means that Square.prototype's Internal [[Prototype]] Property references Rectangle.prototype
    // This is proven in this line of code:
        // Object.getPrototypeOf(Square.prototype) === RectangleFunc.prototype; // returns true

// Resetting the constructor property
    // All Functions have a Function Prototype which can be accessed at funcName.prototype
    // On the Function Prototype, there exists a property called 'constructor'
    // The 'constructor' property on the Function Prototype contains a reference BACK TO THE FUNCTION ITSELF

        // RectangleFunc.prototype.constructor                   // returns [Function: RectangleFunc]
        // RectangleFunc.prototype.constructor === RectangleFunc // returns true

    // What do the four lines of code below show? First - what is in Square.prototype? Located in Square.prototype is RectangleFunc {}
    // This means that Square.prototype contains a reference to RectangleFunc.prototype (proven above)
    // So what is defined on Square.prototype.constructor? You can see that Square.prototype does NOT define an 'OWN' constructor
    // property - which makes sense, because Square.prototype contains a reference to RectangleFunc.prototype
    // However, BECAUSE Square.prototype INHERITS from RectangleFunc.prototype, then Square.prototype can access the constructor
    // property defined on RectangleFunc.prototype. This is why Square.prototype.constructor initially returns [Function: RectangleFunc] -
    // this means that before the re-assignment, Square.prototype.constructor contains a reference to the Function RectangleFunc
    // Therefore, we need to RE-ASSIGN Square.prototype.constructor so it is made to refer back to the Square Function, and NOT RectangleFunc

        // Square.prototype                                       // returns RectangleFunc {}
        // Square.prototype.hasOwnProperty('constructor');        // returns false
        // 'constructor' in Square.prototype;                     // returns true
        // RectangleFunc.prototype.hasOwnProperty('constructor'); // returns true
        // Square.prototype.constructor;                          // returns [Function: RectangleFunc]

// Square.prototype.constructor = Square;

// let newSquare = new Square(5);
// console.log(`area of square = ${newSquare.getArea()}`); // area of square = 25

// Without calling the Cat constructor, create an object that looks and acts like a Cat instance that doesn't have a defined name.

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.speaks = function() {
//    return `${this.name} says meowwww.`;
// }

// console.log(Object.getOwnPropertyNames(Cat.prototype));
// ['constructor', 'speaks'];

// let fakeCat = new Cat(undefined);

// let fakeCat =  Object.create(Cat.prototype) // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// Proof that our Cat.prototype defines a 'constructor' and 'speak' property
// Object.getOwnPropertyNames(Cat.prototype); // returns [ 'constructor', 'speaks' ]


// If we could invoke the `Cat` Class Function
// let fakeCat = new Cat(undefined);

// // Object.create()
// // Our fakeCat becomes a new Object that inherits from `Cat.prototype`
// // No need to explicitly define a 'name' property on fakeCat 
// // because if a property does not exist in our object, JS returns `undefined
// let fakeCat = Object.create(Cat.prototype);

// // Object.setPrototypeOf()
// let fakeCat = {};
// Object.setPrototypeOf(fakeCat, Cat.prototype);

/* The key thing to observe is that our fakeCat object needs to be able to access the methods and properties that all instances of the Cat class type would have access to. The fakeCat.name property is not as pressing - even if our object does NOT explicitly define a name property, JavaScript will evaluate a non-existent property to undefined.

Based on this, our object needs to:

    be able to access the 'constructor' property
    be able to access the 'speak' method

Where are the 'constructor' and 'speak' properties defined on the Cat Class Function? They are defined on its Constructor Function Prototype, which is Cat.prototype. Therefore, the easiest way to do is to create a new object, with its Object Prototype (i.e. the internal [[Prototype]] property or dunder __proto__) set to inherit from Cat.prototype. */

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

/* Since the `constructor` method in the `Cat` class requires arguments that differ from the `constructor` method in the `Pet` class, we must define a `constructor` method for `Cat`, and that method must call `super` (to inherit the properties from the `Pet` class). Then we just need to define the `info` method on the `Cat` class that returns the required message. */

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
//     return `Hello ${this.master} Woof, woof!`;
//   }
// }
// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// let dog = new Dog('Fido', 1, 'excited', 'Batman');
// console.log(dog.status);
// console.log(dog.greetMaster());

/* Discussion

In the `Cat` class constructor method we use the `super` keyword to invoke the constructor method of the `Animal` parent class. We need to pass 5 arguments to it (name, age, legs, species, and status), as this is how many arguments the `Animal` constructor method takes.

As the `introduce` method in the `Cat` class is just a modification of the method with the same name, from the parent class, we can again use the `super` keyword to invoke that method on the object's parent, like this `super.introduce()`. Finally, we just need to concatenate to the return value of this method string "Meow, meow!" which we did using template strings.

In the `Dog` class constructor method, we again use the `super` keyword to invoke the constructor method from the `Animal` class. Also, within this method, we are instantiating a new property called `master`. Then within the `greetMaster()` method, we are accessing the value of this property using the `this` keyword. */

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
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
    super(make, model, 6)
    this.payload = payload;
  }
}

/* Further exploration

It doesn't really make sense in the first place for the getWheels method to be redundantly implemented in each subclass simply to return different literal values for each subclass. It's more efficient to have a single getWheels method in the superclass and expose a wheels property that gets set in its constructor. Then we can pass the appropriate literal value to the Vehicle object's wheels property when we call super from each subclass's constructor:

This implements the same requirements as the original with less redundancy. The wheel count is fixed, so it's fixed here as well. There's no need to pass a wheels argument to any subclass constructor; because each subclass passes a hard-coded value for wheels when calling super. In other words, the decision about how many wheels a car, truck or motorcycle has is made at the architectural level (in the class structure itself) rather than at the consumer level (whatever instantiates the class).

To answer in terms of the question asked, it makes sense to define a wheels property. It probably makes sense to do a getWheels method, although usually we would want to do this to make a read-only property and this doesn't do that. It does not make sense for all of the other methods to be overriding it, though. Better to assign the literal values to a wheels property in the superclass, and have a single getWheels method there as well.
*/