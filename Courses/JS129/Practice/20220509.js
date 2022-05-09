// console.log('Hello');
// console.log([1, 2, 3]);
// console.log({ name: 'Srdjan' });

// console.log('Hello'.constructor.name); // String
// console.log([1, 2, 3].constructor.name); // Array
// console.log({ name: 'Srdjan' }.constructor.name); // Object

/* The `constructor` property returns a reference to the `Object` constructor function that created the instance object. This constructor function has access to `name` property which returns the function's name as specified when it was created. */

// class Cat {}

// let Cat = class {}

/* The simplest way to create classes in JavaScript is with the class declaration which begins with the `class` keyword followed by the name of the class and open and closed curly braces. */

// class Cat {}

// let kitty = new Cat();

/* To instantiate a new `Cat` object, we use the keyword `new` in front of the function call. This keyword turns the function call into a constructor call. To make use of the new `Cat` object, we need to assign it to a variable. In the solution, we assign the object to a variable named `kitty`. This variable can be used to interact with the object in various ways. */

// class Cat {
//   constructor() {
//     console.log(`I'm a cat!`);
//   }
// }

// let kitty = new Cat();

/* When defining a class, you usually need to define a `constructor` method. Adding this method lets us execute certain statements when a new `Cat` object is initialized. Here, we want to log `I'm a cat!`. We accomplish this by using `console.log()`. */

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');

// Hello! My name is Sophie!

/* The `Cat` constructor expect one parameter `name`. When it is called with the `new` keyword, it assigns the received parameter to the `name` property of the current instance. The property `name` can be accessed anywhere within the class using the `this` keyword.

To appease the exercise requirements, we only need to reference property `name` immediately following its initialization. We use `console.log()` to log `Hello! My name is Sophie!` to the console. In this object, `'Sophie'` is dynamic, which means we used property `name` to print the value. `'Sophie'` could just as easily be `'Oliver'` if that string was passed instead of `'Sophie'`. */

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

/* Instance methods are only available when there's an instance of the class. For example, `kitty` is an instance of the `Cat` class. This means, if we add the `greet` method, we're able to invoke it.

As mentioned in the previous exercise, the property `name` can be accessed anywhere within the class using the `this` keyword. This lets us print `Hello! My name is Sophie!` from `greet` simply by moving the statement from `constructor` to `greet`.

Bob Rodes

While it isn't particularly useful not to do so, it isn't strictly necessary to store an object reference in a variable (kitty, in the case of the given solution) to call the greet method. This is entirely possible: */

// new Cat('Bob').greet(); // Hello! My name is Bob!

// `new` creates an object whether you assign it to a variable or not.

// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

// let person1 = new Person();
// let person2 = new Person('Pepe');

// console.log(person1.name);
// console.log(person2.name);

/* In the solution, we have used the `ES6` feature, default parameter, to set the default value of the parameter to a string 'John Doe'. Then, in the constructor function, we have just assigned the value of the parameter `name` to a property `name`. */

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

// Hello! I'm a cat!

/* When looking at the initial example, the first thing you should notice is the invocation of `genericGreeting`. It's being invoked on the `Cat` class, not an instance of `Cat`. This indicates that `genericGreeting` is a static method.

We define static methods on classes using the `static` keyword.

To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a `TypeError`.*/

// class Cat {
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

// let kitty = new Cat();
// kitty.genericGreeting(); // TypeError: kitty.genericGreeting is not a function

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

// Hello! I'm a cat!
// Hello! My name is Sophie!

/* The most notable difference between static and instance methods is that static methods are called on a class (constructor function), not any instance of the class. Think of static methods as generic actions a class may perform, like this: */

// class Cat {
//   static speak() {
//     console.log(`Meow!`);
//   }
// }

// Cat.speak(); // Meow

// We know that cats meow, therefore, it makes sense to add `speak` as a generic action for `Cat`.

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//   }
// }

// class Car extends Vehicle {
//   // In this case, we do not need to call `super`.
//   // constructor(year) {
//   //   super(year);
//   // }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Vehicle(2015);
// console.log(car.year); // 2015

/* When designing an Object Oriented program, it's common to have multiple classes that perform similar actions. For example, both `Truck` and `Car` use the property `year`. To reduce complexity, classes with similar behaviors can inherit from a superclass. The superclass implements the common behaviors while the inheriting classes invoke them. The `extends` keyword is used to denote inheritance between the classes. */

// My solution that works!
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }

//   startEngine() {
//     console.log(`Ready to go!`);
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     return super.startEngine();
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// Ready to go!
// 2003

// LS solution using `super`
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
//     console.log(`Ready to go!`);
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year);

/* When working with class inheritance, it's possible for methods to overlap. It's easy to override an inherited method. For example,  */

// class Vehicle {
//   startEngine() {
//     console.log(`Ready to go!`);
//   }
// }

// class Truck extends Vehicle {
//   startEngine() {
//     console.log(`I'm a truck! Let's go!`);
//   }
// }

// let truck = new Truck();
// truck.startEngine();

/* We can see that the `startEngine()` method from the `Truck` class executes instead of the method with the same name from the `Vehicle` class. The reason for this is that JavaScript doesn't really have "methods" in the form that class-based languages define them. Here, any function can be added to an object in the form of a property. Thus, once we have defined property `startEngine` in the `Truck` class, we have overridden the property from the `Vehicle` class.

What if we want to override a property, but still have access to functionality from a parent class? JavaScript provides a reserved word for this: `super`.

When you invoke `super` within the constructor, like we did in this solution, it appears alone and must be used before the `this` keyword is used. However, the `super` keyword can also be used to call functions on the object's parent and we will see that in the next problem. */

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

// let truck = new Truck(2003, 'Short');
// console.log(truck.year);
// console.log(truck.bedType);

/* Knowing that all vehicles don't have beds, it makes sense for only `Truck` to accept a `bedType` argument. However, we still want to keep the `year` property in `Vehicle`. To accomplish this, we need to use `super`. Unlike the previous exercise, though, we only want to pass one argument `year` - instead of all of them.

To pass specific arguments with `super` we need to list the argument within parentheses, like this: */

// aMethod(one, two, three) {
//   super(one, two)
// }

/* In the solution we added the `constructor` method to `Truck` instead of modifying the `constructor` in `Vehicle` because we didn't want `Car` to accept the `bedType` parameter. */

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

/* Here we are using the `super` keyword to call the method on the object's parent. This way we are able to use some functionality from the parent class `Vehicle` in the `Truck` class. */

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`
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
// console.log(kitty.greet()); // Hello! My name is Sophie!
// console.log(kitty.walk()); // Let's go for a walk!

/* Mixins are typically used to contain methods that may be useful for multiple classes, but not all classes. When you mix a module into a class, you're allowing the class to invoke the contained methods.

In our solution, we create a mixin named `walkMixin` that contains a method named `walk`. We give `Cat` access to this method by including the `walkMixin` in the class's prototype.

This lets us invoke `walk` on any instance of `Cat`. In this case, if we invoke `kitty.walk()`, then `Let's go for a walk!` will be returned. */

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}

// Object.assign(Fish.prototype, swimMixin);
// Object.assign(Maltese.prototype, swimMixin);

// let dog1 = new Maltese('Buddy');
// let fish1 = new Fish('Nemo');

// console.log(dog1.swim()); // Buddy is swimming.
// console.log(fish1.swim()); // Nemo is swimming.

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

// I can tow a trailer!

/* Mixins are useful for organizing similar methods that my be relevant to multiple classes. For instance, the mixin `towMixin` contains the method `tow`. Typically, you use a `Truck` for towing, not a `Car`, which means `tow` is only relevant to `Truck` objects.

With mixins, we have the ability to include them in specific classes. In the solution, we used `Object.assign` to include methods from `towMixin` in the `Truck.prototype` object. */

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`;
//   }
// }

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
// console.log(truck.year); // 2002
// console.log(truck.tow()); // I can tow a trailer!

// let car = new Car(2015);
// console.log(car.year); // 2015

/* Mixins are useful for containing similar methods; however, sometimes class inheritance is also needed. This exercise illustrates that it's possible to inherit from a class, and at the same time, include a mixin. In the solution, we've rewritten the `Vehicle` class used in the earlier exercises. Then, to allow `Truck` and `Car` to access `year`, we have both classes inherit from `Vehicle`. */

// Object.prototype.ancestors = function() {
//   let ancestors = [];
//   let currentObject = this;

//   while (Object.getPrototypeOf(currentObject) !== Object.prototype) {
//     let proto = Object.getPrototypeOf(currentObject);
//     ancestors.push(proto.name);
//     currentObject = proto;
//   }

//   ancestors.push('Object.prototype');
//   return ancestors;
// }

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);
  if (ancestor === Object.prototype) {
    return ['Object.prototype'];
  } else {
    return [ancestor.name, ...ancestor.ancestors()];
  }
}

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']