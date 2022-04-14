class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle(4, 5);

console.log(rectangle.getWidth());
console.log(rectangle.getLength());
console.log(rectangle.getArea());

class Square extends Rectangle {
  constructor(lengthOfSide) {
    super(lengthOfSide, lengthOfSide);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);

/* We must call `super` in the `constructor` method of the `Square` class, and that `Square` inherits the `getArea` method from `Rectangle`. */

/* Without calling the Cat constructor, create an object that looks and acts like a Cat instance that doesn't have a defined name. */

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// let fakeCat = Object.create(Cat.prototype)
let fakeCat = {};
Object.setPrototypeOf(fakeCat, Cat.prototype);

console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor (name, age, colors) {
    super(name, age);
    this.colors = colors;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

/* Update this code so that when you run it, you see the following output: */

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

/* Given a class Animal create two classes Cat and Dog that inherit from it.

The Cat constructor should take 3 arguments, name, age and status. Cats should always have a leg count of 4 and a species of cat. Also, the introduce method should be identical to the original except, after the phrase there should be a single space and the words Meow meow!. For example: */

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

/* The Dog constructor should take 4 arguments, name, age and status and master. Dogs should always have a leg count of 4 and a species of dog. Dogs have the same introduce method as any other animal, but they have their own method called greetMaster(), which accepts no arguments and returns Hello (master's name)! Woof, woof!. (Make sure you replace (master's name) with the name of the dog's master.) */

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor (name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}
let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

/* The Dog constructor should take 4 arguments, name, age and status and master. Dogs should always have a leg count of 4 and a species of dog. Dogs have the same introduce method as any other animal, but they have their own method called greetMaster(), which accepts no arguments and returns Hello (master's name)! Woof, woof!. (Make sure you replace (master's name) with the name of the dog's master.) */

class Dog extends Animal {
  constructor (name, age, status, master) {
    super (name, age, 4, "dog", status);
    this.master = master;
  }
  greetmaster() {
    return `Hello ${this.master}! Woof, woof!`
  }
}

let dog = new Dog("Fido", 7, "mad", "H");
console.log(dog.greetmaster());

